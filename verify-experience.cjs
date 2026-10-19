const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');const storage=new Map(),elements=new Map(),events={};let html='';
const element=id=>{if(!elements.has(id))elements.set(id,{innerHTML:'',value:'',checked:false,dataset:{},addEventListener(){},scrollIntoView(){}});return elements.get(id)};
const ctx={console,Date,Math,JSON,Blob,URL:{createObjectURL:()=> 'blob:test',revokeObjectURL(){}},setTimeout:()=>0,FAYI_I18N:{locale:'zh'},FAYI_VOICE:{prefs:{engine:'doubao'},spokenLocale:()=>ctx.FAYI_I18N.locale,stop(){},speak(text){ctx.spoken=text}},FAYI_SHELL:{show(s){html=s}},localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},document:{getElementById:element,addEventListener:(t,fn)=>events[t]=fn,querySelectorAll:()=>[],createElement:()=>({click(){}})}};
vm.createContext(ctx);for(const name of ['library-data.js','library-speech.js','scene-specs.js','scene-3d.js','scene-art.js','library-ui.js'])vm.runInContext(fs.readFileSync('public/'+name,'utf8'),ctx);
const L=ctx.FAYI_LIBRARY,U=ctx.FAYI_LIBRARY_UI,S=ctx.FAYI_LIBRARY_SPEECH,click=(action,value)=>events.click({target:{closest:()=>({dataset:{lib:action,value},disabled:false})}}),modeCounts={};
U.open();assert.equal(U.filtered().length,400);assert.equal((element('library-results').innerHTML.match(/class="case-card/g)||[]).length,12);U.open({query:'领鸡蛋时被要求购买半年保健套餐'});assert.equal(U.filtered().length,1);assert.match(element('library-results').innerHTML,/data-diorama="t01-01"/);U.open({track:'student'});assert.equal(U.filtered().length,200);
for(const p of L.packs){click('open',p.id);for(let stage=0;stage<3;stage++){
 assert.equal(U.state.stage,stage);assert.ok(html.includes('data-diorama="'+p.id+'"'));assert.ok(!html.includes('activity-switch'));if(p.track==='senior'){assert.match(html,/听这一页/);assert.ok(!html.includes('<textarea'));assert.ok(!html.includes('draggable'));assert.ok(!html.includes('checkbox'));click('senior-done');if(stage===2)assert.equal(U.state.complete,true);continue;}
 assert.match(html,/你的任务/);const mode=U.state.mode;modeCounts[mode]=(modeCounts[mode]||0)+1;
 if(mode==='decision'){click('decision','rush');assert.equal(U.state.complete,false);click('decision','safe')}
 else if(mode==='route'){click('route','stranger');assert.equal(U.state.complete,false);click('route','official')}
 else if(mode==='evidence'){click('material','private');click('evidence-check');assert.equal(U.state.complete,false);click('material','private');for(const i of U.evidenceItems(L.themes.find(t=>t.id===p.theme)).filter(i=>i.keep))click('material',i.id);click('evidence-check')}
 else if(mode==='compare'){click('compare-done');assert.equal(U.state.complete,false);click('compare-open','0');click('compare-open','1');click('compare-done')}
 else if(mode==='order'){click('order-check');assert.equal(U.state.complete,false);click('up','2');click('up','1');click('order-check')}
 else if(mode==='dialogue'){element('scenario-reply').value='';click('dialogue-check');assert.equal(U.state.complete,false);element('scenario-reply').value='PRIVATE_REPLY_NOT_SAVED: 我遇到了这件事，有原始材料，想请您帮我核实。';click('dialogue-check')}
 assert.equal(U.state.complete,true, p.id+' '+mode);if(stage<2)click('continue');
 }
 const d=JSON.parse(storage.get('fayi-library-v1'));for(let i=1;i<=3;i++)assert.equal(d[p.id+'-'+i].completed,true);assert.ok(!JSON.stringify(d).includes('PRIVATE_REPLY_NOT_SAVED'));
}
assert.equal(Object.keys(JSON.parse(storage.get('fayi-library-v1'))).length,1200);assert.equal(Object.keys(modeCounts).length,6);
for(const locale of ['en','yue']){ctx.FAYI_I18N.locale=locale;for(const p of L.packs){U.open({card:p.id,track:p.track});for(let stage=0;stage<3;stage++){if(stage){if(p.track==='senior')click('senior-done');else{ctx.spoken='';click('continue')}}click('speak');assert.ok(ctx.spoken.includes(S.story(p,locale)),p.id+' narration');if(locale==='en')assert.ok(!/[\u3400-\u9fff]/.test(ctx.spoken));}}}
console.log(JSON.stringify({status:'passed',stories:400,completedStages:1200,seniorSimpleSteps:600,studentTaskForms:modeCounts,languageScenarioChecks:2400,rawDialogueStored:false,browserQA:'not performed'},null,2));
