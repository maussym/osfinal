import course from './content.js';
import { loadProgress, storeProgress, syncInfo, exportBackup, importBackup, retrySync, localOnly } from './sync.js';

const icons = {
  home: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  book: '<path d="M12 7v14m-9-3h5a4 4 0 0 1 4 3 4 4 0 0 1 4-3h5V4h-5a4 4 0 0 0-4 3 4 4 0 0 0-4-3H3Z"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5zm-9 9 9 5 9-5M3 16l9 5 9-5"/>',
  code: '<path d="m8 6-6 6 6 6m8-12 6 6-6 6M14 4l-4 16"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Zm0 0v6h6M8 12h8m-8 4h8"/>',
  timer: '<circle cx="12" cy="13" r="8"/><path d="M10 2h4m-2 7v4l3 2m3-9 2-2"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
  chart: '<path d="M3 3v18h18M7 16v-3m5 3V8m5 8V5"/>',
  arrow: '<path d="M4 12h15m-6-6 6 6-6 6"/>',
  back: '<path d="M20 12H5m6-6-6 6 6 6"/>',
  diagonal: '<path d="M6 18 18 6M8 6h10v10"/>',
  next: '<path d="m9 18 6-6-6-6"/>',
  check: '<path d="m4 12 5 5 11-11"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  panel: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M9 5v14"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>',
  moon: '<path d="M20.7 15.4A9 9 0 0 1 8.6 3.3 9 9 0 1 0 20.7 15.4Z"/>',
  shuffle: '<path d="M3 6h3c5 0 7 12 12 12h3m-3-3 3 3-3 3M3 18h3c1.6 0 2.9-1.3 4.1-3.2M14 9.2C15.2 7.3 16.4 6 18 6h3m-3-3 3 3-3 3"/>',
  user: '<circle cx="12" cy="8" r="3"/><path d="M6 20v-2a6 6 0 0 1 12 0v2"/>',
};
const ico = name => ['arrow','back','diagonal','next'].includes(name) ? '' : '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + icons[name] + '</svg>';
const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const two = n => String(n).padStart(2,'0');
const letters = ['A','B','C','D','E'];
const isCorrect = (q, value) => (q.correctAnswers || [q.answer]).includes(value);
const choiceOrder = q => q.choices.map((_,i)=>i);
const main = document.querySelector('#main');
const sidebar = document.querySelector('#sidebar');
const topbar = document.querySelector('#topbar');
const veil = document.querySelector('#veil');
const notice = document.querySelector('#notice');
const layout = document.querySelector('.layout');
const themeMeta = document.querySelector('meta[name="theme-color"]');
const mobileLayout = matchMedia('(max-width: 760px)');
const storageKey = 'os-final-prep-v1';
const assignmentQuestions = course.assignmentQuestions || [];
const questionBank = [...course.samples, ...assignmentQuestions];
const allQuestions = [...questionBank, ...course.practice];
const questionById = new Map(allQuestions.map(q => [q.id,q]));
const nav = [
  ['Study', [['home','Overview','home'],['lessons','Lessons','book'],['cards','Flashcards','layers'],['code','Bash lab','code']]],
  ['Practice', [['sample','Previous questions','file'],['exam','Mock final','timer'],['errors','Mistake review','target'],['progress','Progress','chart'],['sources','Materials','file']]],
];
const titles = new Map(nav.flatMap(([, items]) => items.map(([page,name]) => [page,name])));
let state = {completed:{}, cards:{}, code:{}, attempts:{}, history:[], active:null, lastLesson:1, ui:{}};
let storageFailed = false;
try { state = {...state,...await loadProgress()}; } catch { storageFailed=true; }
const countDone = () => Object.values(state.completed).filter(Boolean).length;
const errors = () => allQuestions.filter(q => state.attempts[q.id]?.needsReview);
const mastered = () => Object.values(state.cards).filter(c => c === 'known').length;
const percent = (a,b) => b ? Math.round(a/b*100) : 0;
const dateLabel = time => new Date(time).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'});
const path = () => {
  const [page,id] = location.hash.slice(1).split('/');
  return titles.has(page) || page === 'lesson' ? [page,Number(id)] : ['home',0];
};
const storedUI = state.ui || {};
let theme = storedUI.theme === 'light' ? 'light' : 'dark';
let sidebarCollapsed = storedUI.sidebarCollapsed === true;
let filterWeek = storedUI.filterWeek ?? 0;
let filterText = storedUI.filterText ?? '';
const sampleSelections = storedUI.sampleSelections ?? {};
let filterSet = storedUI.filterSet ?? 'all';
const sampleFeedback = storedUI.sampleFeedback ?? {};
let cardWeek = storedUI.cardWeek ?? 0;
let cardMode = storedUI.cardMode ?? 'all';
let deck = storedUI.deck ?? course.cards.map(c => c.id);
let cardPos = Math.max(0, Math.min(storedUI.cardPos ?? 0, deck.length - 1));
let flipped = storedUI.flipped ?? false;
const config = {pool:'mixed', count:20, minutes:40, ...storedUI.config};
const openCode = storedUI.openCode ?? {};
let examResult = storedUI.showResult ? state.lastReview ?? null : null;
let reviewFilter = storedUI.reviewFilter ?? 'missed';
let noticeTimer;
let heroObserver;
function save() {
  state.ui = {
    theme, sidebarCollapsed,
    filterWeek, filterText, filterSet, sampleSelections, sampleFeedback,
    cardWeek, cardMode, deck, cardPos, flipped, config, openCode,
    showResult: examResult !== null, reviewFilter,
  };
  try {
    storeProgress(state);
    storageFailed = false;
  } catch {
    if (!storageFailed) toast('Progress could not be saved.');
    storageFailed = true;
  }
}
function toast(message) {
  notice.textContent = message;
  notice.classList.add('show');
  clearTimeout(noticeTimer);
  noticeTimer = setTimeout(() => notice.classList.remove('show'),2400);
}
function shuffle(sequence) {
  const result = [...sequence];
  for (let i=result.length-1;i>0;i--) {
    const j = Math.floor(Math.random()*(i+1));
    [result[i],result[j]] = [result[j],result[i]];
  }
  return result;
}
function meter(value) {
  return '<div class="meter" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="'+value+'" aria-label="Completion"><span style="width:'+value+'%"></span></div>';
}
function link(route, label, icon = '', style = 'secondary') {
  return '<a class="btn '+style+'" href="#'+route+'">'+escape(label)+(icon ? ico(icon) : '')+'</a>';
}
function action(name, label, style = 'secondary', {icon,id,disabled=false} = {}) {
  return '<button type="button" class="btn '+style+'" data-do="'+name+'"'+(id === undefined ? '' : ' data-id="'+escape(id)+'"')+(disabled ? ' disabled' : '')+'>'+escape(label)+(icon ? ico(icon) : '')+'</button>';
}
function head(title,description='',actions='',eyebrow='') {
  return '<div class="page-head"><div>'+(eyebrow ? '<div class="eyebrow">'+escape(eyebrow)+'</div>' : '')+
    '<h1>'+escape(title)+'</h1>'+(description ? '<p>'+escape(description)+'</p>' : '')+'</div>'+
    (actions ? '<div class="actions">'+actions+'</div>' : '')+'</div>';
}
function stat(icon,value,label) {
  return '<div class="stat"><span class="stat-icon">'+ico(icon)+'</span><span class="stat-data"><strong>'+escape(value)+'</strong><small>'+escape(label)+'</small></span></div>';
}
function tile(route,icon,theme,title,description) {
  return '<a class="tile" href="#'+route+'"><div class="tile-top"><span class="tile-icon '+theme+'">'+ico(icon)+'</span>'+ico('diagonal')+'</div><h3>'+escape(title)+'</h3><p>'+escape(description)+'</p></a>';
}
function btnNav(page) {
  const active = page === 'lesson' ? 'lessons' : page;
  sidebar.innerHTML = '<a class="brand" href="#home" aria-label="OS Final Prep" title="OS Final Prep"><img src="./mark.svg" alt=""><span class="brand-text"><b>OS Final Prep</b><small>AITU · Operating Systems</small></span></a>'+
    '<button type="button" class="icon-button drawer-close" data-do="drawer-close" aria-label="Close sidebar">'+ico('close')+'</button>'+
    '<nav aria-label="Study navigation">'+nav.map(([group,items]) =>
    '<div class="nav-group"><span class="nav-label">'+group+'</span>'+items.map(([route,name,icon]) => {
      const count = route === 'errors' ? errors().length : 0;
      return '<a class="nav-link '+(active === route ? 'active' : '')+'" href="#'+route+'" title="'+escape(name)+'" aria-label="'+escape(name+(count?' '+count:''))+'"'+
        (active === route ? ' aria-current="page"' : '')+'>'+ico(icon)+'<span class="nav-text">'+escape(name)+'</span>'+
        (count ? '<span class="nav-count">'+count+'</span>' : '')+'</a>';
    }).join('')+'</div>').join('')+'</nav>'+
    '<div class="side-bottom"><a class="side-progress" href="#progress" title="Course progress" aria-label="Course progress '+countDone()+' of 10"><small>Course progress <strong>'+countDone()+'/10</strong></small>'+meter(percent(countDone(),course.lessons.length))+'</a></div>';
  const shown = page === 'lesson' ? 'Lesson notes' : titles.get(page);
  topbar.innerHTML = '<div class="breadcrumb"><button type="button" class="icon-button menu-toggle" data-do="menu" aria-controls="sidebar"></button><a href="#home">OS</a>'+ico('next')+'<strong>'+escape(shown)+'</strong></div><div class="top-end"><span class="sync-badge" id="sync-status" role="status">'+escape(syncInfo().label)+'</span><span class="course-label">Operating Systems</span><button type="button" class="icon-button" data-do="theme"></button><a class="avatar" href="#progress" aria-label="View your progress">'+ico('user')+'</a></div>';
  syncAppearance();
}
function syncAppearance() {
  document.documentElement.dataset.theme=theme;
  layout.dataset.sidebar=sidebarCollapsed?'collapsed':'expanded';
  if(themeMeta) themeMeta.content=theme==='light'?'#f3f6ef':'#111410';
  const menu=topbar.querySelector('[data-do="menu"]');
  const isMobile=mobileLayout.matches;
  const expanded=isMobile?sidebar.classList.contains('open'):!sidebarCollapsed;
  const menuLabel=expanded?(isMobile?'Close navigation':'Collapse sidebar'):(isMobile?'Open navigation':'Expand sidebar');
  menu.setAttribute('aria-expanded',String(expanded));
  menu.setAttribute('aria-label',menuLabel);
  menu.title=menuLabel;
  menu.innerHTML=ico(isMobile?(expanded?'close':'menu'):'panel');
  const toggle=topbar.querySelector('[data-do="theme"]');
  const themeLabel=theme==='light'?'Switch to dark theme':'Switch to light theme';
  toggle.setAttribute('aria-label',themeLabel);
  toggle.title=themeLabel;
  toggle.innerHTML=ico(theme==='light'?'moon':'sun');
}
function lessonCard(lesson) {
  return '<a class="lesson-card" href="#lesson/'+lesson.id+'"><span class="lesson-index">'+two(lesson.id)+'</span><div><div class="lesson-meta">'+escape(lesson.group)+'</div><h3>'+escape(lesson.name)+'</h3><p>'+escape(lesson.description)+'</p></div>'+ico(state.completed[lesson.id] ? 'check' : 'next')+'</a>';
}
function dashboard() {
  const first=course.lessons.find(l=>!state.completed[l.id]);
  const current=course.lessons.find(l=>l.id===state.lastLesson&&!state.completed[l.id])||first||course.lessons[0];
  const best=Math.max(0,...state.history.filter(a=>a.mode==='mock').map(a=>percent(a.correct,a.count)));
  return '<section class="hero" aria-labelledby="hero-title"><canvas class="hero-canvas" aria-hidden="true"></canvas><div class="hero-content"><div class="eyebrow">YOUR FINAL, ONE TOPIC AT A TIME</div><h1 id="hero-title">Operating<span>Systems</span></h1><p>Understand the system.<br>Be ready for the question.</p><div class="actions">'+link('lesson/'+current.id,first?'Continue learning':'Review lessons','','primary')+link('exam',state.active?'Resume practice':'Practice for final','timer')+'</div></div><div class="hero-terminal" aria-hidden="true"><div class="terminal-bar"><span></span><span></span><span></span><small>os-study / bash</small></div><div class="terminal-body"><p><b>$</b> whoami</p><strong>ready-to-learn</strong><p><b>$</b> ./prepare.sh</p><div class="terminal-line">kernel <span>understood</span></div><div class="terminal-line">permissions <span>decoded</span></div><div class="terminal-line">final <span class="cursor">loading_</span></div></div></div></section>'+
  '<div class="stats">'+stat('book',countDone()+'/'+course.lessons.length,'Study topics completed')+stat('layers',mastered()+'/'+course.cards.length,'Flashcards known')+stat('target',state.history.some(a=>a.mode==='mock')?best+'%':'—','Best practice score')+'</div>'+
  '<section class="section"><div class="section-head"><h2>Choose your next step</h2></div><div class="tile-grid">'+tile('sample','file','amber','Previous questions','58 previous + 80 assignment questions')+tile('cards','layers','purple','Flashcards','40 concepts · English + Russian')+tile('code','code','blue','Bash lab','8 scripts, explained step by step')+'</div></section>'+
  '<section class="section"><div class="section-head"><div><h2>Your course</h2><p class="section-description">Nine published lectures, plus syllabus revision.</p></div>'+link('sources','PDF & materials','','ghost')+'</div><div class="grid-2">'+course.lessons.map(lessonCard).join('')+'</div></section>';
}
function table(block) {
  return '<div class="table-scroll"><table><thead><tr>'+block.rows[0].map(c => '<th scope="col">'+escape(c)+'</th>').join('')+'</tr></thead><tbody>'+block.rows.slice(1).map(row => '<tr>'+row.map(c => '<td>'+format(c)+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>';
}
function format(text) {
  const code=[];
  let t=escape(text).replace(/`([^`]+)`/g,(_,s)=>{code.push(s);return 'CODEPLACE'+(code.length-1)+'END';});
  t=t.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>');
  return t.replace(/CODEPLACE(\d+)END/g,(_,i)=>'<code>'+code[i]+'</code>');
}
function contentBlocks(blocks) {
  let html = '';
  let listing = false;
  for (const block of blocks) {
    if (block.kind !== 'bullet' && listing) { html+='</ul>'; listing=false; }
    if (block.kind === 'heading') html += '<h2>'+format(block.text)+'</h2>';
    if (block.kind === 'paragraph') html += '<p class="'+(block.text.startsWith('EN:')?'english-note':'')+'">'+format(block.text)+'</p>';
    if (block.kind === 'table') html += table(block);
    if (block.kind === 'code') html += '<pre><code>'+escape(block.text)+'</code></pre>';
    if (block.kind === 'bullet') {
      if (!listing) { html+='<ul>'; listing=true; }
      html+='<li>'+format(block.text)+'</li>';
    }
  }
  return html+(listing ? '</ul>' : '');
}
function lessonsPage() {
  return head('Lessons')+
    '<div class="grid-2">'+course.lessons.map(lessonCard).join('')+'</div>'+
    '<section class="section"><div class="section-head"><h2>Assignment review</h2></div><div class="grid-2">'+course.assignments.map(a =>
    '<article class="panel"><h3>'+escape(a.name)+'</h3><p style="margin:7px 0">'+escape(a.description)+'</p><a class="text-link" href="'+escape(a.link)+'" target="_blank" rel="noopener noreferrer">Assignment brief '+ico('diagonal')+'</a></article>').join('')+'</div></section>';
}
function lessonPage(id) {
  const l = course.lessons.find(item => item.id === id);
  if (!l) return empty('Lesson unavailable','Open the course to choose a lesson.',link('lessons','All lessons'));
  return head(l.title,'',link('lessons','All lessons','back','ghost'),(l.id===10?'Syllabus & revision':'Lecture '+two(l.id))+' / '+l.group)+
    '<div class="content-split"><article class="panel notes">'+contentBlocks(l.blocks)+'<a class="text-link" href="'+escape(l.source)+'" target="_blank" rel="noopener noreferrer">Open LMS source '+ico('diagonal')+'</a></article>'+
    '<aside class="panel lesson-tools">'+
    action('complete',state.completed[id] ? 'Completed' : 'Mark complete',state.completed[id] ? 'ghost' : 'primary',{id,icon:'check'})+
    action('week-cards','Open flashcards','secondary',{id,icon:'layers'})+
    action('week-practice','Take lesson quiz','secondary',{id,icon:'target'})+
    (id < course.lessons.length ? link('lesson/'+(id+1),'Next lesson') : link('exam','Mock final','timer'))+'</aside></div>';
}
function options(selected=0) {
  return '<option value="0">All topics</option>'+course.lessons.map(l => '<option value="'+l.id+'"'+(l.id===selected?' selected':'')+'>Topic '+l.id+' · '+escape(l.name)+'</option>').join('');
}
function codePage() {
  return head('Bash lab','8 scripts to read, explain and try in your Linux VM.')+
    '<div class="list">'+course.implementations.map(c => '<details class="panel code-card" data-code="'+c.id+'"'+(openCode[c.id]?' open':'')+'><summary>'+escape(c.name)+(state.code[c.id] ? ' <span class="chip good">Practiced</span>' : '')+'</summary>'+
    '<div class="notes">'+contentBlocks(c.blocks)+'<div class="actions">'+action('copy-code','Copy Bash','ghost',{id:c.id})+
    action('code-done',state.code[c.id] ? 'Practiced' : 'Mark practiced',state.code[c.id] ? 'ghost' : 'primary',{id:c.id,icon:'check'})+'</div></div></details>').join('')+'</div>';
}
function empty(title,description,actions='') {
  return '<div class="panel empty"><h2>'+escape(title)+'</h2>'+(description ? '<p>'+escape(description)+'</p>' : '')+(actions ? '<div class="actions">'+actions+'</div>' : '')+'</div>';
}
function answerGrid(q, order, selected, locked, context) {
  return '<div class="answers" aria-label="Answer choices">'+order.map((i,pos) => {
    const classes = locked ? (isCorrect(q,i) ? 'correct' : i === selected ? 'wrong' : '') : i === selected ? 'selected' : '';
    return '<button type="button" class="answer '+classes+'" data-do="'+context+'-choice" data-id="'+q.id+':'+i+'" aria-pressed="'+(i===selected)+'"'+(locked?' disabled':'')+'><span class="answer-letter">'+letters[pos]+'</span>'+escape(q.choices[i])+'</button>';
  }).join('')+'</div>';
}
function explanation(q, letter='') {
  const answers=(q.correctAnswers||[q.answer]).map(i=>q.choices[i]);
  return '<div class="explanation"><strong>Answer · '+answers.map(escape).join(' / ')+'</strong><div class="language-label">ПО-РУССКИ</div><p>'+escape(q.whyRu)+'</p><div class="language-label">IN ENGLISH</div><p>'+escape(q.whyEn)+'</p>'+(q.note?'<div class="source-note">'+escape(q.note)+'</div>':'')+(q.originalText?'<details class="source-original"><summary>Original wording from your file</summary><p>'+escape(q.originalText)+'</p></details>':'')+(q.originalChoices?'<details class="source-original"><summary>Original choices from your file</summary><p>'+q.originalChoices.map(escape).join(' · ')+'</p></details>':'')+'</div>';
}
function sampleCard(q) {
  const selected=sampleSelections[q.id], feedback=sampleFeedback[q.id], locked=Boolean(feedback);
  return '<article class="panel question-card" id="sample-'+q.id+'"><div class="question-source"><span class="chip">'+escape(q.setLabel)+' · Q'+q.sourceNum+'</span><span class="meta">Topic '+q.week+(q.optionsAuthored?' · practice choices added':'')+'</span></div><div class="question-title"><h2>'+escape(q.text)+'</h2></div>'+answerGrid(q,choiceOrder(q),selected,locked,'sample')+
  (locked?'<div class="feedback-label '+(feedback==='checked'?(isCorrect(q,selected)?'good':'danger'):'')+'">'+(feedback==='checked'?(isCorrect(q,selected)?'Correct · верно':'Not quite · разберём ошибку'):'Answer revealed · not scored')+'</div>'+explanation(q):'')+
  '<div class="actions" style="margin-top:14px">'+(locked?action('sample-reset','Try again','ghost',{id:q.id}):action('sample-check','Check answer','primary',{id:q.id,disabled:selected===undefined})+action('sample-reveal','Show explanation','ghost',{id:q.id}))+'</div></article>';
}
function filteredBank() {
  const match = filterText.trim().toLowerCase();
  return questionBank.filter(q => (!filterWeek || q.week === filterWeek) && (filterSet==='all'||q.set===filterSet||(/^a[1-8]$/.test(filterSet)&&q.assignment===Number(filterSet.slice(1)))) && (!match || [q.text,...q.choices].join(' ').toLowerCase().includes(match)));
}
function sampleList() {
  const list = filteredBank();
  return list.length ? list.map(sampleCard).join('') : empty('No matches','Try another keyword or topic.');
}
function refreshBank() {
  main.querySelector('#sample-list').innerHTML = sampleList();
  const button = main.querySelector('[data-do="random-bank"]');
  if(button){ const count=Math.min(40,filteredBank().length); button.disabled=!count; button.textContent='Practice '+count+' random'; }
}
function samplePage() {
  return head('Previous questions + assignments','58 midterm/endterm questions + 80 questions from Assignments 1–8. English questions, RU / EN explanations.',action('random-bank','Practice '+Math.min(40,filteredBank().length)+' random','primary',{disabled:!filteredBank().length}))+
  '<div class="source-disclaimer">The 58 previous questions are from your notes. The 80 assignment questions are new revision questions, ten per assignment. Practice randomizes questions and answer choices; mistakes and unfinished sessions are saved.</div>'+
  '<div class="filters"><label>Search<input type="search" id="sample-search" value="'+escape(filterText)+'" placeholder="e.g. chmod, SSH, kernel"></label><label>Question set<select id="sample-set">'+[['all','All sets (138)'],['midterm-a','Midterm · set A (20)'],['midterm-b','Midterm · set B (18)'],['endterm','Endterm (20)'],['assignments','Assignments 1–8 (80)'],...Array.from({length:8},(_,i)=>['a'+(i+1),'Assignment '+(i+1)+' (10)'])].map(([v,t])=>'<option value="'+v+'"'+(filterSet===v?' selected':'')+'>'+t+'</option>').join('')+'</select></label><label>Topic<select id="sample-week">'+options(filterWeek)+'</select></label></div><div class="list" id="sample-list">'+sampleList()+'</div>';
}
function availableCards() {
  return course.cards.filter(c => (!cardWeek || c.week === cardWeek) &&
    (cardMode === 'all' || (cardMode === 'learning' ? state.cards[c.id] !== 'known' : state.cards[c.id] === 'known')));
}
function resetDeck(random=false) {
  const ids = availableCards().map(c => c.id);
  deck = random ? shuffle(ids) : ids;
  cardPos = 0;
  flipped = false;
}
function flashPage() {
  const c = course.cards.find(item => item.id === deck[cardPos]);
  return head('Flashcards')+
    '<div class="flash-wrap"><div class="filters"><label>Lesson<select id="card-week">'+options(cardWeek)+'</select></label><label>Show<select id="card-mode">'+[['all','All cards'],['learning','Still learning'],['known','Known']].map(([v,t])=>'<option value="'+v+'"'+(cardMode===v?' selected':'')+'>'+t+'</option>').join('')+'</select></label>'+
    action('shuffle-cards','Shuffle','ghost',{icon:'shuffle',disabled:!deck.length})+'</div>'+
    (c ? '<div class="flash-top"><span class="meta">Card '+(cardPos+1)+' of '+deck.length+'</span><span class="chip">Week '+c.week+'</span></div>'+
    '<button class="flash-stage '+(flipped?'flipped':'')+'" type="button" data-do="flip" aria-label="'+escape((flipped?'Answer: ':'Question: ')+(flipped?c.back:c.front))+'"><span class="eyebrow">'+(flipped?'Answer':'Question')+'</span><span class="card-face">'+escape(flipped ? c.back : c.front)+'</span><small>'+ (flipped?'Show question':'Flip card')+'</small></button>'+
    '<div class="flash-controls"><div class="actions">'+ action('card-prev','Previous','ghost',{icon:'back',disabled:deck.length<2})+action('card-next','Next','ghost',{icon:'arrow',disabled:deck.length<2})+'</div><div class="actions">'+
    action('card-again','Needs practice','secondary',{id:c.id,disabled:!flipped})+action('card-know','I know this','primary',{id:c.id,icon:'check',disabled:!flipped})+'</div></div>' : empty('No cards in this view','Choose another lesson or show all cards.'))+'</div>';
}
function errorsPage() {
  const wrong = errors();
  return head('Mistake review','',wrong.length ? action('retry-errors','Retry '+wrong.length+(wrong.length===1?' question':' questions'),'primary',{icon:'arrow'}) : '')+
    (wrong.length ? '<div class="list">'+wrong.map(q => '<article class="panel question-card"><div class="question-title"><span class="meta">W'+two(q.week)+'</span><h2>'+escape(q.text)+'</h2></div><span class="chip">'+(q.source==='practice'?'Course practice':q.setLabel+' · Q'+q.sourceNum)+'</span>'+
      '<p>Last attempt · '+escape(state.attempts[q.id].last === null ? 'Unanswered' : q.choices[state.attempts[q.id].last])+'</p>'+explanation(q)+
      '<a class="text-link" style="margin-top:9px" href="#lesson/'+q.week+'">Revisit lesson '+ico('arrow')+'</a></article>').join('')+'</div>' :
    empty('No mistakes to review','Missed questions appear here.',link('sample','Open sample bank')));
}
function progressPage() {
  const scored = Object.values(state.attempts);
  const correctAnswers = scored.reduce((sum,q)=>sum+q.correct,0);
  const total = scored.reduce((sum,q)=>sum+q.total,0);
  return head('Your progress','Lessons, cards, answers and unfinished sessions.',action('export-backup','Export backup','secondary')+action('import-backup','Import backup','ghost'))+syncPanel()+
    '<div class="stats" style="margin-top:0">'+stat('book',countDone()+'/'+course.lessons.length,'Lessons completed')+stat('layers',mastered()+'/'+course.cards.length,'Flashcards known')+stat('target',total ? percent(correctAnswers,total)+'%' : '—','Answer accuracy')+'</div>'+
    '<div class="grid-2 section"><section class="panel"><div class="section-head"><h2>By lesson</h2></div>'+
    course.lessons.map(l => {
      const known=course.cards.filter(c=>c.week===l.id&&state.cards[c.id]==='known').length;
      const attempts=allQuestions.filter(q=>q.week===l.id).map(q=>state.attempts[q.id]).filter(Boolean);
      const n=attempts.reduce((sum,a)=>sum+a.total,0), correct=attempts.reduce((sum,a)=>sum+a.correct,0);
      return '<a class="progress-row" href="#lesson/'+l.id+'"><span class="lesson-index">'+two(l.id)+'</span><span><strong>'+escape(l.name)+'</strong><br><small class="muted">'+known+'/4 cards · '+(n ? correct+'/'+n+' correct' : 'No quiz answers')+'</small></span>'+(state.completed[l.id]?'<span class="chip good">Complete</span>':ico('next'))+'</a>';
    }).join('')+'</section><section class="panel"><div class="section-head"><h2>Practice history</h2></div>'+
    (state.history.length ? state.history.map(h => '<div class="history-row"><div><strong>'+escape(h.title)+'</strong><p>'+dateLabel(h.at)+'</p></div><strong>'+h.correct+'/'+h.count+'</strong></div>').join('') : '<p>No completed attempts yet.</p>')+'</section></div>';
}

const makeMode=(label,questions)=>({label,questions,counts:[...new Set([5,10,20,30,40,50,Math.min(100,questions.length)].filter(n=>n<=questions.length))].sort((a,b)=>a-b)});
const modes = {
 mixed:makeMode('All questions · 168',allQuestions),
 bank:makeMode('Previous + assignments · 138',questionBank),
 assignments:makeMode('Assignment practice · 80',assignmentQuestions),
 sample:makeMode('All previous questions · 58',course.samples),
 midtermA:makeMode('Midterm set A · 20',course.samples.filter(q=>q.set==='midterm-a')),
 midtermB:makeMode('Midterm set B · 18',course.samples.filter(q=>q.set==='midterm-b')),
 endterm:makeMode('Endterm · 20',course.samples.filter(q=>q.set==='endterm')),
 practice:makeMode('New course practice · 30',course.practice),
};
function newAttempt(questions, {mode,title,minutes=0}) {
  if (state.active) {
    toast('Finish or discard your current session first.');
    navigate('exam');
    return;
  }
  const started = Date.now();
  state.active = {
    mode,title,started,deadline:minutes ? started+minutes*60_000 : null,index:0,answers:{},
    questions:shuffle(questions).map(q => ({id:q.id,order:shuffle(choiceOrder(q))})),
  };
  examResult=null;
  save();
  navigate('exam');
}
function track(q,value) {
  const prior=state.attempts[q.id] || {total:0,correct:0};
  const correct=isCorrect(q,value);
  state.attempts[q.id]={total:prior.total+1,correct:prior.correct+Number(correct),needsReview:!correct,last:value};
}
function finishAttempt(timedOut=false) {
  const e=state.active;
  if (!e) return;
  const rows=e.questions.map(item => {
    const q=questionById.get(item.id);
    const selected=e.answers[q.id] ?? null;
    track(q,selected);
    return {...item,selected};
  });
  const correct=rows.filter(r => isCorrect(questionById.get(r.id),r.selected)).length;
  const summary={title:e.title,mode:e.mode,at:Date.now(),correct,count:rows.length};
  state.history.unshift(summary);
  state.history=state.history.slice(0,100);
  state.active=null;
  examResult={...summary,rows,timedOut};
  state.lastReview=examResult;
  reviewFilter='missed';
  save();
  if (path()[0]==='exam') { render(); window.scrollTo(0,0); main.focus({preventScroll:true}); }
  else if (timedOut) toast('Your timed session ended. View results in Mock final.');
}
function attemptSetup() {
  const pool=modes[config.pool] || modes.mixed;
  if (!pool.counts.includes(config.count)) config.count=pool.counts[0];
  const previous=state.lastReview ? action('last-result','See last result','ghost',{icon:'chart'}) : '';
  return head('Mock final','A randomized practice session. Your timer is a study setting, not the official exam duration.')+
    '<div class="exam-wrap"><section class="panel"><h2>Test settings</h2>'+
    '<div class="settings"><label>Question bank<select id="exam-pool">'+Object.entries(modes).map(([key,m])=>'<option value="'+key+'"'+(key===config.pool?' selected':'')+'>'+m.label+'</option>').join('')+'</select></label>'+
    '<label>Questions<select id="exam-count">'+pool.counts.map(n=>'<option value="'+n+'"'+(n===config.count?' selected':'')+'>'+n+(n===pool.questions.length?' · full bank':'')+'</option>').join('')+'</select></label>'+
    '<label>Time limit<select id="exam-minutes">'+[[40,'40 minutes'],[20,'20 minutes'],[10,'10 minutes'],[0,'Untimed']].map(([n,s])=>'<option value="'+n+'"'+(n===config.minutes?' selected':'')+'>'+s+'</option>').join('')+'</select></label></div>'+
    '<div class="actions">'+action('start-exam','Start mock final','primary',{icon:'arrow'})+previous+'</div></section></div>';
}
function timeLeft(deadline) {
  const seconds=Math.max(0,Math.ceil((deadline-Date.now())/1000));
  return two(Math.floor(seconds/60))+':'+two(seconds%60);
}
function attemptPage(e) {
  const entry=e.questions[e.index], q=questionById.get(entry.id);
  const done=Object.keys(e.answers).length;
  return head(e.title)+
    '<div class="exam-wrap"><div class="exam-top"><span class="meta" id="exam-status">Question '+(e.index+1)+' of '+e.questions.length+' · '+done+' answered</span>'+
    (e.deadline ? '<span class="chip" aria-label="Time remaining">'+ico('timer')+' <span id="timer">'+timeLeft(e.deadline)+'</span></span>' : '<span class="chip">Untimed</span>')+'</div>'+
    meter(percent(done,e.questions.length))+
    '<article class="panel exam-q"><div class="question-title"><span class="meta">'+two(e.index+1)+'</span><h2>'+escape(q.text)+'</h2></div>'+
    answerGrid(q,entry.order,e.answers[q.id],false,'exam')+
    '<div class="exam-nav">'+action('exam-prev','Previous','ghost',{icon:'back',disabled:e.index===0})+
    (e.index<e.questions.length-1?action('exam-next','Next question','primary',{icon:'arrow'}):action('submit-exam','Submit answers','primary',{icon:'check'}))+'</div></article>'+
    '<div class="exam-picker" aria-label="Jump to question">'+e.questions.map((item,index)=>'<button type="button" data-do="exam-jump" data-id="'+index+'" class="'+(index===e.index?'current':e.answers[item.id]!==undefined?'done':'')+'" aria-label="Question '+(index+1)+(e.answers[item.id]!==undefined?', answered':'')+'"'+(index===e.index?' aria-current="step"':'')+'>'+(index+1)+'</button>').join('')+'</div>'+
    '<div class="actions" style="margin-top:15px">'+action('submit-exam','Finish session','secondary')+
    action('discard-exam','Discard session','ghost danger')+'</div></div>';
}
function resultPage(result) {
  const missed=result.rows.filter(row => !isCorrect(questionById.get(row.id),row.selected));
  const rows=reviewFilter==='missed' ? missed : result.rows;
  return head(result.title+' results',result.timedOut?'Time is up.':'')+
    '<div class="exam-wrap"><div class="panel result-hero"><span class="score">'+percent(result.correct,result.count)+'%</span><div><h2>'+result.correct+' / '+result.count+' correct</h2><p>'+missed.length+' to review</p></div></div>'+
    '<div class="actions" style="margin-bottom:15px">'+action('new-exam','New session','primary',{icon:'arrow'})+link('errors','Mistake review','target','ghost')+'</div>'+
    '<div class="filters"><label>Review<select id="result-filter"><option value="missed"'+(reviewFilter==='missed'?' selected':'')+'>Missed and unanswered</option><option value="all"'+(reviewFilter==='all'?' selected':'')+'>All questions</option></select></label></div>'+
    (rows.length ? '<div class="list">'+rows.map(row=>{
      const q=questionById.get(row.id);
      const selected=row.selected===null?'Unanswered':q.choices[row.selected];
      return '<article class="panel"><div class="question-title"><span class="meta">W'+two(q.week)+'</span><h2>'+escape(q.text)+'</h2></div><p>Your answer · '+escape(selected)+'</p>'+
      answerGrid(q,row.order,row.selected,true,'exam')+explanation(q)+
      '<a class="text-link" style="margin-top:9px" href="#lesson/'+q.week+'">Open lesson '+ico('arrow')+'</a></article>';
    }).join('')+'</div>' : empty('All answers correct',''))+'</div>';
}
function examPage() {
  return state.active ? attemptPage(state.active) : examResult ? resultPage(examResult) : attemptSetup();
}
function closeMenu() {
  sidebar.classList.remove('open');
  veil.hidden=true;
  syncAppearance();
}
function navigate(route) {
  closeMenu();
  if (location.hash!=='#'+route) location.hash=route;
  else { render(); window.scrollTo(0,0); }
}
function render() {
  heroObserver?.disconnect();
  const [page,id]=path();
  if (page==='lesson' && course.lessons.some(l=>l.id===id) && state.lastLesson!==id) { state.lastLesson=id; save(); }
  btnNav(page);
  const screens={home:dashboard,lessons:lessonsPage,lesson:()=>lessonPage(id),cards:flashPage,code:codePage,sample:samplePage,exam:examPage,errors:errorsPage,progress:progressPage,sources:sourcesPage};
  main.innerHTML=screens[page]();
  document.title=(page==='home'?'':(page==='lesson'?'Lesson notes':titles.get(page))+' · ')+'OS Final Prep';
  if (page==='home') {
    const canvas=main.querySelector('canvas');
    heroObserver=new ResizeObserver(()=>drawGraph(canvas));
    heroObserver.observe(canvas);
  }
}
function drawGraph(canvas) {
 const w=canvas.clientWidth,h=canvas.clientHeight;if(!w||!h)return;
 const dpr=Math.min(devicePixelRatio||1,2);canvas.width=w*dpr;canvas.height=h*dpr;
 const c=canvas.getContext('2d');c.scale(dpr,dpr);c.clearRect(0,0,w,h);
 const light=theme==='light';c.strokeStyle=light?'#577a2930':'#cbf57422';c.lineWidth=1;
 for(let x=w*.45;x<w+50;x+=38){c.beginPath();c.moveTo(x,0);c.lineTo(x,h);c.stroke();}
 for(let y=0;y<h;y+=38){c.beginPath();c.moveTo(w*.45,y);c.lineTo(w,y);c.stroke();}
}
function refreshSample(q) {
  const current=document.getElementById('sample-'+q.id);
  if (current) current.outerHTML=sampleCard(q);
}
function revealCardRating(id,rating) {
  const oldIndex=cardPos;
  state.cards[id]=rating;
  const visibleIds = new Set(availableCards().map(card=>card.id));
  deck=deck.filter(key=>visibleIds.has(key));
  if(cardMode==='known' && !deck.length) cardPos=0;
  else if(deck.includes(id)) cardPos=(oldIndex+1)%deck.length;
  else cardPos=deck.length?oldIndex%deck.length:0;
  flipped=false;
  save();
  render();
  toast(rating==='known'?'Marked as known':'Marked for review');
}
function examJump(position) {
  state.active.index=Math.min(state.active.questions.length-1,Math.max(0,position));
  save();
  render();
}
function activeOrToast() {
  if (!state.active) return false;
  toast('Finish or discard your current session first.');
  navigate('exam');
  return true;
}
document.addEventListener('click', event => {
  const summary=event.target.closest('.code-card > summary');
  if (summary) {
    const details=summary.parentElement;
    openCode[details.dataset.code]=!details.open;
    save();
    return;
  }
  const button=event.target.closest('[data-do]');
  if (!button || button.disabled) return;
  const name=button.dataset.do;
  const id=button.dataset.id;
  const which=Number(id);
  if(name==='export-backup') exportBackup(state);
  if(name==='import-backup') document.querySelector('#backup-file').click();
  if(name==='retry-sync') retrySync();
  if(name==='random-bank') {
    if(activeOrToast()) return;
    const pool=filteredBank();
    if(!pool.length) return;
    newAttempt(shuffle(pool).slice(0,40),{mode:'bank',title:/^a[1-8]$/.test(filterSet)?'Assignment '+filterSet.slice(1)+' · random practice':filterSet==='assignments'?'Assignments · random practice':'Question bank · random practice'});
  }
  if (name==='menu') {
    if (!mobileLayout.matches) {
      sidebarCollapsed=!sidebarCollapsed;
      save();
      syncAppearance();
    } else if (sidebar.classList.contains('open')) closeMenu();
    else {
      sidebar.classList.add('open');
      veil.hidden=false;
      syncAppearance();
      sidebar.querySelector('a').focus();
    }
  }
  if (name==='theme') {
    theme=theme==='light'?'dark':'light';
    save();
    syncAppearance();
    const graph=main.querySelector('.hero-canvas');
    if(graph) drawGraph(graph);
  }
  if (name==='drawer-close') {
    closeMenu();
    topbar.querySelector('.menu-toggle').focus();
  }
  if(name==='complete') { state.completed[id]=!state.completed[id];save();render();toast(state.completed[id]?'Lesson marked complete':'Lesson marked incomplete'); }
  if(name==='week-cards') { cardWeek=which;cardMode='all';resetDeck();save();navigate('cards'); }
  if(name==='week-practice') {
    if(activeOrToast()) return;
    newAttempt(allQuestions.filter(q=>q.week===which),{mode:'lesson',title:'Topic '+which+' practice'});
  }
  if(name==='copy-code') {
    const text=course.implementations.find(c=>c.id===which)?.blocks.find(b=>b.kind==='code')?.text;
    if (text) navigator.clipboard?.writeText(text).then(()=>toast('Bash copied'),()=>toast('Select the Bash text to copy it.'));
    if(!navigator.clipboard) toast('Select the Bash text to copy it.');
  }
  if(name==='code-done') {
    state.code[id]=!state.code[id]; save();
    const details=button.closest('details');
    details.querySelector('summary').innerHTML=escape(course.implementations.find(c=>c.id===which).name)+(state.code[id]?' <span class="chip good">Practiced</span>':'');
    button.outerHTML=action('code-done',state.code[id]?'Practiced':'Mark practiced',state.code[id]?'ghost':'primary',{id:which,icon:'check'});
    toast(state.code[id]?'Marked as practiced':'Marked for practice');
  }
  if(name.startsWith('sample-')) {
    const [qid,selected]=id.split(':');
    const q=questionById.get(qid);
    if(name==='sample-choice') sampleSelections[qid]=Number(selected);
    if(name==='sample-check' && sampleSelections[qid]!==undefined) {
      track(q,sampleSelections[qid]);sampleFeedback[qid]='checked';btnNav('sample');
    }
    if(name==='sample-reveal') sampleFeedback[qid]='revealed';
    if(name==='sample-reset') { delete sampleSelections[qid];delete sampleFeedback[qid]; }
    save();
    refreshSample(q);
    const selectors={ 'sample-choice':'[data-do="sample-choice"][data-id="'+id+'"]', 'sample-check':'[data-do="sample-reset"]','sample-reveal':'[data-do="sample-reset"]','sample-reset':'[data-do="sample-choice"]' };
    document.getElementById('sample-'+qid)?.querySelector(selectors[name])?.focus({preventScroll:true});
  }
  if(name==='flip') { flipped=!flipped;save();render();main.querySelector('.flash-stage').focus({preventScroll:true}); }
  if(name==='shuffle-cards') { resetDeck(true);save();render(); }
  if(name==='card-prev' || name==='card-next') { cardPos=(cardPos+deck.length+(name==='card-next'?1:-1))%deck.length;flipped=false;save();render(); }
  if(name==='card-again') revealCardRating(which,'again');
  if(name==='card-know') revealCardRating(which,'known');
  if(name==='start-exam' && !state.active) {
    const questions=shuffle(modes[config.pool].questions).slice(0,config.count);
    newAttempt(questions,{mode:'mock',title:'Mock final',minutes:config.minutes});
  }
  if(name==='retry-errors' && !activeOrToast()) newAttempt(errors(),{mode:'review',title:'Mistake retry'});
  if(name==='exam-choice' && state.active) {
    const [qid,value]=id.split(':');
    if (state.active.deadline && state.active.deadline<=Date.now()) { finishAttempt(true);return; }
    state.active.answers[qid]=Number(value);save();render();
    main.querySelector('[data-do="exam-choice"][data-id="'+id+'"]')?.focus({preventScroll:true});
  }
  if(name==='exam-jump' && state.active) examJump(which);
  if(name==='exam-prev' && state.active) examJump(state.active.index-1);
  if(name==='exam-next' && state.active) examJump(state.active.index+1);
  if(name==='submit-exam' && state.active) {
    const missing=state.active.questions.length-Object.keys(state.active.answers).length;
    if(!missing || window.confirm('Submit with '+missing+' unanswered question'+(missing===1?'':'s')+'?')) finishAttempt(state.active.deadline!==null && state.active.deadline<=Date.now());
  }
  if(name==='discard-exam' && state.active && window.confirm('Discard this session and its answers?')) {
    state.active=null;examResult=null;save();render();
  }
  if(name==='new-exam') { examResult=null;save();render();window.scrollTo(0,0); }
  if(name==='last-result' && state.lastReview) { examResult=state.lastReview;reviewFilter='missed';save();render(); }
});
main.addEventListener('input',event=>{
  if(event.target.id==='sample-search') { filterText=event.target.value;save();refreshBank(); }
});
main.addEventListener('change',event=>{
  const {id,value}=event.target;
  if(id==='sample-set') { filterSet=value;save();refreshBank(); }
  if(id==='sample-week') { filterWeek=Number(value);save();refreshBank(); }
  if(id==='card-week') { cardWeek=Number(value);resetDeck();save();render(); }
  if(id==='card-mode') { cardMode=value;resetDeck();save();render(); }
  if(id==='exam-pool' && modes[value]) {
    config.pool=value;if(!modes[value].counts.includes(config.count))config.count=modes[value].counts[0];save();render();
  }
  if(id==='exam-count') { config.count=Number(value);save(); }
  if(id==='exam-minutes') { config.minutes=Number(value);save(); }
  if(id==='result-filter') { reviewFilter=value;save();render();main.querySelector('#result-filter')?.focus(); }
});
veil.addEventListener('click',()=>{closeMenu();topbar.querySelector('.menu-toggle')?.focus();});
mobileLayout.addEventListener('change',closeMenu);
document.addEventListener('keydown',event=>{
  if(event.key==='Escape' && sidebar.classList.contains('open')) { closeMenu();topbar.querySelector('.menu-toggle')?.focus(); }
});
document.querySelector('.skip').addEventListener('click',event=>{event.preventDefault();main.focus();});
window.addEventListener('hashchange',()=>{closeMenu();render();window.scrollTo(0,0);main.focus({preventScroll:true});});
function tick() {
  const deadline=state.active?.deadline;
  if(!deadline) return;
  if(deadline<=Date.now()) { finishAttempt(true);return; }
  const timer=document.querySelector('#timer');
  if(timer) {
    timer.textContent=timeLeft(deadline);
    timer.closest('.chip')?.classList.toggle('timer-low',deadline-Date.now()<60_000);
  }
}

function syncPanel() {
 const info=syncInfo();
 return '<section class="panel sync-panel"><div><h2>'+escape(info.label)+'</h2><p>'+escape(info.description)+'</p></div>'+(localOnly?'':action('retry-sync','Sync now','ghost'))+'</section>';
}
function sourcesPage() {
 return head('Your materials','The course, your previous questions and the complete study guide.')+
 '<div class="grid-2"><article class="panel material-card"><span class="eyebrow">STUDY GUIDE · RU / EN</span><h2>All your OS notes</h2><p>41 pages with commands, examples, explanations and revision tables.</p><a class="btn primary" href="/OS_Study_Guide_RU_EN.pdf" target="_blank" rel="noopener">Open PDF</a></article><article class="panel material-card"><span class="eyebrow">COURSE SOURCE</span><h2>AITU LMS</h2><p>Operating Systems | Turysbek Nazym. Nine published lectures. The final test was empty when checked.</p><a class="btn secondary" href="https://lms.astanait.edu.kz/course/view.php?id=2297" target="_blank" rel="noopener">Open course</a></article></div>'+
 '<section class="panel section notes"><h2>What is in this site</h2><ul><li>58 previous questions from your uploaded midterm/endterm notes. Midterm set B omits Q14 and Q15 in the supplied file; they were not invented.</li><li>80 assignment questions, ten per assignment, with randomized practice and saved mistake review.</li><li>30 additional course practice questions.</li><li>40 flashcards, 8 Bash examples, 9 lecture topics plus syllabus/revision content. Topic 10 is revision, not an uploaded Lecture-10.</li><li>Practice 9 and 10 point to NDG final activities. Internal NetAcad lessons were not opened.</li></ul><h2>Source notes and corrections</h2><p>Equivalent answers in midterm B Q16 and endterm Q1 are both accepted. The wording about /etc, boot logs, host keys and the lowercase k key in top is clarified. Original wording is available in the relevant explanation.</p><p>Technical references: <a href="https://man7.org/linux/man-pages/man1/top.1.html" target="_blank" rel="noopener">top manual</a>, <a href="https://man7.org/linux/man-pages/man1/cp.1.html" target="_blank" rel="noopener">GNU cp manual</a>, <a href="https://man7.org/linux/man-pages/man1/dmesg.1.html" target="_blank" rel="noopener">dmesg manual</a>.</p><h2>Progress that stays with you</h2><p>'+(localOnly?'Progress is saved automatically in this browser and survives reloads. Export and import a JSON backup to move it to another browser or device.':'Progress syncs to your signed-in account, with a local backup for network interruptions. Export a JSON backup to keep a separate copy.')+' The PDF is for personal study.</p></section>';
}
document.querySelector('#backup-file').addEventListener('change',async event=>{
 const file=event.target.files?.[0];if(!file)return;
 try {
  const imported=await importBackup(file,allQuestions,course);
  if(!confirm('Replace this OS study progress with the selected backup?'))return;
  storeProgress(imported);location.reload();
 } catch(error) { toast(error.message||'That backup is not valid.'); }
});
window.addEventListener('os-sync-status',()=>{
 const badge=document.querySelector('#sync-status');if(badge)badge.textContent=syncInfo().label;
 const heading=document.querySelector('.sync-panel h2'),description=document.querySelector('.sync-panel p');
 if(heading)heading.textContent=syncInfo().label;if(description)description.textContent=syncInfo().description;
});

tick();
render();
setInterval(tick,500);

