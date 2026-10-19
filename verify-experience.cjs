const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const storage=new Map(),elements=new Map(),events={};let html='',checks=[];
const element=id=>{if(!elements.has(id))elements.set(id,{innerHTML:'',value:'',checked:false,dataset:{},events:{},addEventListener(t,fn){this.events[t]=fn},scrollIntoView(){}});return elements.get(id)};
const ctx={console,Date,Math,JSON,Blob,URL:{createObjectURL:()=> 'blob:test',revokeObjectURL(){}},setTimeout:()=>0,FAYI_I18N:{locale:'zh'},FAYI_VOICE:{prefs:{engine:'doubao'},stop(){},speak(text){ctx.spoken=text}},FAYI_SHELL:{show(s){html=s;checks=[0,1,2].map(n=>({dataset:{dialogueCheck:String(n)},events:{},addEventListener(t,fn){this.events[t]=fn}}));}},localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},document:{getElementById:element,addEventListener:(t,fn)=>events[t]=fn,querySelectorAll:s=>s==='[data-dialogue-check]'?checks:[],createElement:()=>({click(){}})}};
vm.createContext(ctx);for(const name of ['library-data.js','case-illustrations.js','scene-art.js','library-ui.js'])vm.runInContext(fs.readFileSync('public/'+name,'utf8'),ctx);
const L=ctx.FAYI_LIBRARY,U=ctx.FAYI_LIBRARY_UI,click=(action,value)=>events.click({target:{closest:()=>({dataset:{lib:action,value},disabled:false})}});
U.open();assert.equal(U.filtered().length,400);assert.equal((element('library-results').innerHTML.match(/class="case-card"/g)||[]).length,12);
U.open({query:'领鸡蛋时被要求购买半年保健套餐'});assert.equal(U.filtered().length,1);assert.match(element('library-results').innerHTML,/scene-eggs-v5.webp/);assert.equal((element('library-results').innerHTML.match(/class="case-card"/g)||[]).length,1);
U.open({track:'student'});assert.equal(U.filtered().length,200);U.open();
for(const p of L.packs){
 click('open',p.id);if(p.track==='senior'){assert.match(html,/听这一页/);for(let stage=0;stage<3;stage++){assert.equal(U.state.stage,stage);assert.ok(!html.includes('<textarea'));assert.ok(!html.includes('draggable'));assert.ok(!html.includes('type="checkbox"'));click('speak');assert.ok(ctx.spoken.includes(p.story));click('senior-done');}assert.equal(U.state.complete,true);continue;}assert.match(html,/找线索/);assert.ok(!html.includes('class="micro-answer'));
 click('clues-done');assert.equal(U.state.complete,false);
 for(const n of [0,1,2])click('clue',String(n));click('clues-done');assert.equal(U.state.complete,true);
 click('mode','order');click('order-check');assert.equal(U.state.complete,false);click('up','2');click('up','1');click('order-check');assert.equal(U.state.complete,true);
 click('continue');assert.equal(U.state.mode,'evidence');click('material','private');click('evidence-check');assert.equal(U.state.complete,false);click('material','private');
 const t=L.themes.find(t=>t.id===p.theme);for(const item of U.evidenceItems(t).filter(i=>i.keep))click('material',item.id);click('evidence-check');assert.equal(U.state.complete,true);
 click('continue');assert.equal(U.state.mode,'dialogue');element('scenario-reply').value='我想先核实这件事，保留现有的材料，请帮我说明需要补充什么。';
 for(const el of checks)el.events.change({target:{checked:true}});click('dialogue-check');assert.equal(U.state.complete,true);
 const d=JSON.parse(storage.get('fayi-library-v1'));for(let i=1;i<=3;i++)assert.equal(d[p.id+'-'+i].completed,true);assert.ok(!JSON.stringify(d).includes('我想先核实这件事'));
 click('speak');assert.ok(ctx.spoken.includes(p.story));
}
for(const p of L.packs){const svg=ctx.FAYI_CASE_ART.render(p);assert.ok(svg.includes('data-case-art="'+p.id+'"'));assert.ok(svg.includes(p.title));assert.ok(!svg.includes('undefined'));}const d=JSON.parse(storage.get('fayi-library-v1'));assert.equal(Object.keys(d).length,1200);
U.open({onlyDone:true});assert.equal(U.filtered().length,400);
const a=ctx.FAYI_ART.render('gift',0,L.packs[0]);assert.match(a,/scene-eggs/);const b=ctx.FAYI_ART.render('gift',0,L.packs[1]);assert.ok(!b.includes('scene-eggs'));
console.log(JSON.stringify({status:'passed',distinctStoryCovers:400,learningStages:1200,forms:['clue exploration','action ordering','evidence collection','dialogue practice'],allStoryStagePaths:1200,wrongAnswerRecovery:'passed',duplicateEggCovers:1,privateDialogueNotStored:'passed',seniorSimplePages:600,caseIllustrationCoverage:400,browserVisualQA:'not performed'},null,2));
