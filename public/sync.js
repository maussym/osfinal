const KEY='os-final-prep-v1',META='os-final-prep-sync-v1';
let current=null, revision=0, dirty=false, version=0, saving=false, timer=null;
let status={label:'On this device',description:'Your recent work is backed up in this browser.'};
const object=v=>!!v&&typeof v==='object'&&!Array.isArray(v);
function announce(label,description){status={label,description};window.dispatchEvent(new Event('os-sync-status'));}
export const syncInfo=()=>status;
function persist(){
  localStorage.setItem(KEY,JSON.stringify(current));
  localStorage.setItem(META,JSON.stringify({revision,dirty}));
}
async function request(method,body){
  const r=await fetch('/api/progress',{method,headers:body?{'Content-Type':'application/json'}:undefined,body:body?JSON.stringify(body):undefined,credentials:'same-origin',cache:'no-store',signal:AbortSignal.timeout(8000)});
  if(!r.ok){const e=new Error(r.status===409?'conflict':'sync unavailable');e.code=r.status;throw e;}
  return r.json();
}
export async function loadProgress(){
  let meta={};try { current=JSON.parse(localStorage.getItem(KEY)||'null');meta=JSON.parse(localStorage.getItem(META)||'{}'); }catch{}
  if(!object(current))current=null;
  revision=Number.isInteger(meta?.revision)?meta.revision:0;dirty=meta?.dirty===true;
  try {
    const remote=await request('GET');
    if(current&&dirty&&remote.revision!==revision){announce('Two saved copies','Another device changed the cloud copy. Export this local copy before importing/reconciling a backup. Your work is kept here.');}
    else {
      if(remote.state&&!dirty)current=remote.state;
      revision=remote.revision;
      if(current){persist();if(dirty||!remote.state){dirty=true;persist();timer=setTimeout(flush,500);}}
      announce(dirty?'Saving…':'Cloud synced',dirty?'Changes are queued for cloud sync.':'Your progress is saved to your signed-in account and backed up on this device.');
    }
  } catch { announce('On this device','Your progress is kept here. Cloud sync resumes when you are signed in and connected; export a backup for an extra copy.'); }
  return current;
}
export function storeProgress(state){
  current=JSON.parse(JSON.stringify(state));dirty=true;version++;persist();
  if(status.label==='Two saved copies')return;
  announce('Saving…','Your latest changes are backed up here and queued for cloud sync.');
  clearTimeout(timer);timer=setTimeout(flush,600);
}
async function flush(){
  if(saving||!dirty||!current||status.label==='Two saved copies')return;
  saving=true;
  try {
    while(dirty){
      const sentVersion=version, snapshot=JSON.parse(JSON.stringify(current));
      const r=await request('PUT',{revision,state:snapshot});revision=r.revision;
      dirty=sentVersion!==version;persist();
    }
    announce('Cloud synced','Your progress is saved to your signed-in account and backed up on this device.');
  } catch(error){
    if(error.code===409) announce('Two saved copies','Another device updated the cloud copy. Your local work is safe: export a backup before reconciling.');
    else announce('On this device','Cloud sync is temporarily unavailable. Your latest work is backed up in this browser; reconnect and choose Sync now.');
  } finally {saving=false;}
}
export function retrySync(){
  if(status.label==='Two saved copies'){
    if(!confirm('Load the cloud copy on this device? Export your local backup first if you want to keep both.'))return;
    request('GET').then(remote=>{revision=remote.revision;if(remote.state)current=remote.state;dirty=false;persist();location.reload();}).catch(()=>announce('On this device','Could not reach cloud storage. Your local copy was kept.'));
  } else if(current){dirty=true;flush();}
}
export function exportBackup(state){
  const blob=new Blob([JSON.stringify({app:'os-final-prep',version:1,exportedAt:new Date().toISOString(),state},null,2)],{type:'application/json'});
  const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='os-study-progress-'+new Date().toISOString().slice(0,10)+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),5000);
}
export async function importBackup(file,questions,course){
  if(file.size>1_000_000)throw new Error('This backup is too large.');
  let doc;try{doc=JSON.parse(await file.text());}catch{throw new Error('Choose a valid JSON backup.');}
  const s=doc?.state;
  if(doc?.app!=='os-final-prep'||doc.version!==1||!object(s)||!['completed','cards','code','attempts'].every(k=>object(s[k]))||!Array.isArray(s.history)||s.history.length>100)throw new Error('This is not a valid OS study backup.');
  const qmap=new Map(questions.map(q=>[q.id,q]));
  if(Object.keys(s.attempts).some(id=>!qmap.has(id)))throw new Error('The backup contains unknown questions.');
  if(s.active){
    if(!object(s.active)||!Array.isArray(s.active.questions)||!s.active.questions.length||s.active.questions.length>questions.length||!object(s.active.answers)||!Number.isInteger(s.active.index)||s.active.index<0||s.active.index>=s.active.questions.length)throw new Error('Invalid saved session.');
    if(new Set(s.active.questions.map(q=>q.id)).size!==s.active.questions.length)throw new Error('Duplicate session questions.');
    for(const q of s.active.questions){const known=qmap.get(q.id);if(!known||!Array.isArray(q.order)||q.order.length!==known.choices.length||new Set(q.order).size!==known.choices.length||q.order.some(x=>!Number.isInteger(x)||x<0||x>=known.choices.length))throw new Error('Invalid answer order.');}
    for(const [id,value]of Object.entries(s.active.answers)){if(!qmap.has(id)||!Number.isInteger(value)||value<0||value>=qmap.get(id).choices.length)throw new Error('Invalid saved answer.');}
  }
  if(s.lastReview&&(!Array.isArray(s.lastReview.rows)||s.lastReview.rows.some(r=>!qmap.has(r.id))))throw new Error('Invalid review history.');
  return {completed:s.completed,cards:s.cards,code:s.code,attempts:s.attempts,history:s.history,active:s.active||null,lastLesson:course.lessons.some(l=>l.id===s.lastLesson)?s.lastLesson:1,ui:object(s.ui)?s.ui:{},...(s.lastReview?{lastReview:s.lastReview}:{})};
}
window.addEventListener('online',()=>{if(current&&dirty&&status.label!=='Two saved copies')flush();});
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden'&&current&&dirty)flush();});
