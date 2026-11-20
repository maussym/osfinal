import assert from 'node:assert/strict';
import { DatabaseSync } from 'node:sqlite';
import { readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import course from '../public/content.js';
import { handleProgress } from '../lib/progress-model.mjs';

const questions=[...course.samples,...course.assignmentQuestions,...course.practice];
assert.equal(course.assignmentQuestions.length,80);
for(let a=1;a<=8;a++)assert.equal(course.assignmentQuestions.filter(q=>q.assignment===a).length,10);
assert.ok(course.assignmentQuestions.every(q=>q.source==='assignment'&&q.set==='assignments'));
const bank=[...course.samples,...course.assignmentQuestions];
const lmsEndterm=course.samples.filter(q=>q.set==='endterm-lms');
assert.deepEqual(lmsEndterm.map(q=>q.sourceNum),Array.from({length:20},(_,i)=>i+1));
const alternateVersions=lmsEndterm.filter(q=>q.variantOf);
assert.equal(alternateVersions.length,14);
assert.equal(new Set(alternateVersions.map(q=>q.variantOf)).size,alternateVersions.length);
assert.ok(alternateVersions.every(q=>course.samples.some(original=>original.set==='endterm'&&original.id===q.variantOf&&original.text===q.text)));
assert.equal(bank.filter(q=>!q.variantOf).length,144);
assert.equal(course.samples.length,78);assert.equal(course.practice.length,30);
assert.equal(course.cards.length,40);assert.equal(course.lessons.length,10);
assert.equal(new Set(questions.map(q=>q.id)).size,188);
for(const q of questions){
  assert.ok(q.choices.length>=4 && q.choices.length<=5,q.id);
  assert.ok(q.correctAnswers.length>0 && q.correctAnswers.every(n=>Number.isInteger(n)&&n>=0&&n<q.choices.length),q.id);
  assert.ok(q.whyRu?.length>20 && q.whyEn?.length>20,q.id);
  assert.ok(course.lessons.some(l=>l.id===q.week),q.id);
}
assert.deepEqual(course.samples.find(q=>q.id==='mb-16').correctAnswers,[0,2]);
assert.deepEqual(course.samples.find(q=>q.id==='e-1').correctAnswers,[1,2]);
assert.equal(course.samples.find(q=>q.id==='e-17').choices[1],'k');
assert.equal(course.samples.filter(q=>q.set==='midterm-b').length,18);
assert.equal(lmsEndterm[10].choices[lmsEndterm[10].answer],'w');
assert.equal(lmsEndterm[11].choices[lmsEndterm[11].answer],'k');
assert.deepEqual(lmsEndterm[12].correctAnswers,[4,2]);
assert.deepEqual(lmsEndterm[15].correctAnswers,[3,0]);
for(const c of course.implementations){
  const code=c.blocks.find(b=>b.kind==='code').text;
  const r=spawnSync('bash',['-n'],{input:code,encoding:'utf8'});assert.equal(r.status,0,r.stderr);
}
const sqlite=new DatabaseSync(':memory:');sqlite.exec(readFileSync(new URL('../drizzle/0000_remarkable_hellion.sql',import.meta.url),'utf8'));
const db={prepare(sql){return {bind(...args){return {async first(){return sqlite.prepare(sql).get(...args)||null;},async run(){return {meta:{changes:Number(sqlite.prepare(sql).run(...args).changes)}};}};}};}};
const empty={completed:{},cards:{},code:{},attempts:{},history:[],active:null,lastLesson:1,ui:{}};
const get=()=>new Request('https://study.example/api/progress');
const put=(revision,state,origin='https://study.example')=>new Request('https://study.example/api/progress',{method:'PUT',headers:{'Content-Type':'application/json',origin},body:JSON.stringify({revision,state})});
assert.equal((await handleProgress(get(),db,null)).status,401);
assert.deepEqual(await (await handleProgress(get(),db,'alice')).json(),{revision:0,state:null,updatedAt:null});
assert.equal((await handleProgress(put(0,{...empty,completed:{1:true}}),db,'alice')).status,200);
assert.equal((await (await handleProgress(get(),db,'alice')).json()).state.completed[1],true);
assert.equal((await (await handleProgress(get(),db,'bob')).json()).state,null);
assert.equal((await handleProgress(put(0,empty),db,'alice')).status,409,'stale writes must be rejected');
assert.equal((await handleProgress(put(1,empty,'https://other.example'),db,'alice')).status,403);
assert.equal((await handleProgress(put(1,{}),db,'alice')).status,400);
assert.equal((await handleProgress(put(1,{...empty,active:{questions:[{id:'ma-1',order:[0,1,2,3,4]}],answers:{'ma-1':0},index:0,deadline:null}}),db,'alice')).status,200);
const persisted=await (await handleProgress(get(),db,'alice')).json();
assert.equal(persisted.revision,2);assert.equal(persisted.state.active.answers['ma-1'],0);
sqlite.close();
console.log('PASS: 188 question records, including the 20-question LMS endterm, bilingual explanations, alternate valid answers and 8 Bash scripts. Verified authenticated progress and session restore.');
