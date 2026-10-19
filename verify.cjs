const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path'),assert=require('node:assert/strict');
const root=__dirname,C=require('./public/catalog.js'),I=require('./public/i18n.js'),V=require('./public/voice.js'),E=require('./public/app.js');
let checks=0,paths=0;
function check(fn){fn();checks++}
check(()=>assert.equal(C.topics.length,12));
check(()=>assert.equal(C.topics.flatMap(x=>x.cases).length,36));
check(()=>{for(const track of ['senior','student'])assert.equal(C.topics.filter(x=>x.track===track).length,6);for(const unit of C.topics){assert.ok(C.sources[unit.source]);assert.equal(unit.cases.length,3);for(const c of unit.cases){for(const field of [c.story,c.good,c.why,c.transfer,...c.bad]){assert.ok(field.zh?.trim());assert.ok(field.en?.trim())}}}});
check(()=>assert.equal(E.score([1,2,0]),3));
check(()=>assert.deepEqual(E.parse('bad json'),[]));
check(()=>assert.deepEqual(E.parse('{}'),[]));
check(()=>assert.equal(E.csvCell('=1+1'),'"\'=1+1"'));
const legacy={id:'legacy',date:new Date().toISOString(),pre:2,post:3,seconds:3,tags:[]};
check(()=>assert.equal(E.parse(JSON.stringify([legacy])).length,1));
check(()=>assert.equal(E.valid({...legacy,kind:'listen',pre:0,post:0}),false));
check(()=>assert.equal(E.valid({...legacy,kind:'listen',pre:null,post:null}),true));
for(const key of Object.keys(I.dict)){check(()=>{assert.ok(I.dict[key][0]);assert.ok(I.dict[key][1])})}
check(()=>{I.set('zh');assert.equal(V.parseChoice('我选第二个'),1);assert.equal(V.parseChoice('我不选第二个'),null);I.set('en');assert.equal(V.parseChoice('option two'),1);assert.equal(V.parseChoice('not two'),null);I.set('zh')});
function harness(brokenStorage=false){
 const elements=new Map(),storage=new Map(),events={},downloads=[];let selectedTopic='health';
 const element=id=>{if(!elements.has(id))elements.set(id,{innerHTML:'',textContent:'',value:'',style:{},classList:{add(){},remove(){},toggle(){}},listeners:{},addEventListener(type,fn){this.listeners[type]=fn},focus(){},setAttribute(){},showModal(){},click(){downloads.push(this.download)},remove(){}});return elements.get(id)};
 const ctx={console,Date,Math,JSON,String,Number,Array,Set,Map,Blob,Uint8Array,crypto:require('node:crypto').webcrypto,setTimeout:()=>0,clearTimeout:()=>{},confirm:()=>true,AbortController,
 localStorage:{getItem(k){if(brokenStorage)throw Error('denied');return storage.get(k)||null},setItem(k,v){if(brokenStorage)throw Error('denied');storage.set(k,v)},removeItem:k=>storage.delete(k)},
 FormData:class {constructor(target){this.data=target.answers}get(k){return this.data[k]}},
 URL:{createObjectURL:()=> 'blob:test',revokeObjectURL(){}},window:{scrollTo(){}},fetch:async()=>({ok:true,json:async()=>({chatReady:false,ttsReady:false})}),
 document:{getElementById:element,querySelector:()=>null,querySelectorAll:()=>[],addEventListener(type,fn){events[type]=fn},documentElement:{lang:'zh'},body:{classList:{toggle:()=>true,add(){},remove(){}},appendChild(){}},createElement:()=>({click(){downloads.push(this.download)},remove(){}})}};
 vm.createContext(ctx);for(const name of ['catalog.js','library-data.js','case-illustrations.js','scene-art.js','i18n.js','voice.js','voice-lab.js'])vm.runInContext(fs.readFileSync(path.join(root,'public',name),'utf8'),ctx);
 const source=fs.readFileSync(path.join(root,'public/app.js'),'utf8').replace('home();V.refreshStatus()',"globalThis.__qa={getScreen:()=>screen,getSession:()=>session,getLast:()=>last,getTopic:()=>topic()};home();V.refreshStatus()");vm.runInContext(source,ctx);
 return {ctx,element,storage,downloads,state:ctx.__qa,change(setting,value){events.change({target:{dataset:{setting},value}})},click(action,extra={}){events.click({target:{closest:()=>({dataset:{action,...extra}})}})},submit(type,correct=true){element('quiz-form').listeners.submit({preventDefault(){},target:{answers:Object.fromEntries([0,1,2].map(i=>['q'+i,String(correct?(i+1)%3:i)]))}})}};
}
for(const unit of C.topics)for(let a=0;a<3;a++)for(let b=0;b<3;b++)for(let c=0;c<3;c++){
 const h=harness();h.click('topic',{id:unit.id});h.click('start',{mode:'practice'});assert.equal(h.state.getScreen(),'pre');h.submit('pre');for(const v of [a,b,c]){h.click('reply',{index:String(v)});assert.match(h.element('main').innerHTML,/feedback/);h.click('next')}
 assert.equal(h.state.getScreen(),'reflect');h.element('reflection').listeners.input({target:{value:'PRIVATE_REFLECTION_CHECK_不要保存'}});h.click('post');h.submit('post');assert.equal(h.state.getScreen(),'result');const rows=E.parse(h.storage.get('fayi-learning-records-v1'));assert.equal(rows.length,1);assert.equal(rows[0].topic,unit.id);assert.equal(rows[0].pre,3);assert.equal(rows[0].post,3);assert.ok(!JSON.stringify(rows).includes('PRIVATE_REFLECTION'));h.click('export-current');assert.equal(h.downloads.length,1);paths++;
}
for(const unit of C.topics){const h=harness();h.click('topic',{id:unit.id});h.click('start',{mode:'listen'});for(let i=0;i<3;i++){h.click('simpler');h.click('next')}const r=h.state.getLast().record;assert.equal(r.pre,null);assert.equal(r.post,null);assert.equal(r.kind,'listen');checks++;}
for(const locale of ['zh','sc','en']){const h=harness();h.click('locale',{locale});assert.equal(h.ctx.FAYI_I18N.locale,locale);h.click('topic',{id:'jobs'});h.click('start',{mode:'practice'});h.submit('pre');h.click('reply',{index:'1'});h.click('locale',{locale:locale==='en'?'zh':'en'});assert.equal(h.state.getScreen(),'scene');assert.equal(h.state.getSession().choices[0],1);h.click('next');h.click('mic');assert.match(h.element('voice-status').textContent,/语音不可用|unavailable/);checks++;}
{const h=harness(true);h.click('topic',{id:'health'});h.click('start',{mode:'listen'});for(let i=0;i<3;i++)h.click('next');assert.equal(h.state.getLast().stored,false);h.click('export-current');assert.equal(h.downloads.length,1);checks++;}
{const h=harness();h.click('settings');assert.match(h.element('main').innerHTML,/disabled/);h.click('locale',{locale:'en'});assert.match(h.element('main').innerHTML,/Speaking rate/);assert.ok(!h.element('main').innerHTML.includes('undefined'));checks++;}
{const h=harness();h.click('settings');h.change('speech','en');assert.equal(h.ctx.FAYI_I18N.locale,'en');assert.equal(h.ctx.FAYI_VOICE.spokenLocale(),'en');assert.match(h.ctx.FAYI_I18N.t('sample'),/^Hello/);assert.match(h.element('main').innerHTML,/voice-player/);h.change('speech','sc');assert.equal(h.ctx.FAYI_I18N.locale,'sc');assert.equal(h.ctx.FAYI_VOICE.spokenLocale(),'sc');checks++;}
(async()=>{
 const workerSource=fs.readFileSync(path.join(root,'dist/server/index.js'),'utf8');const {default:worker}=await import('data:text/javascript;base64,'+Buffer.from(workerSource).toString('base64'));
 const origin='https://fayi.example',ip='192.0.2.1';const req=(path,body,extra={},cookie='')=>new Request(origin+path,{method:body===undefined?'GET':'POST',headers:{Origin:origin,'Content-Type':'application/json','cf-connecting-ip':ip,...(cookie?{Cookie:cookie}:{}),...extra},...(body===undefined?{}:{body:typeof body==='string'?body:JSON.stringify(body)})});
 let r=await worker.fetch(req('/api/status'),{});assert.deepEqual(await r.json(),{chatReady:false,ttsReady:false,doubaoReady:false,version:'0.6.0'});checks++;
 r=await worker.fetch(req('/'),{});assert.equal(r.status,200);assert.match(await r.text(),/catalog.js/);checks++;
 r=await worker.fetch(req('/assets/fayi-logo-transparent-v5.png'),{});assert.equal(r.headers.get('Content-Type'),'image/png');assert.equal(r.status,200);checks++;
 r=await worker.fetch(req('/api/chat',{question:'test'}),{});assert.equal(r.status,503);checks++;
 r=await worker.fetch(req('/api/chat',{}, {Origin:'https://other.example'}),{});assert.equal(r.status,403);checks++;
 const env={ENABLE_PUBLIC_AI:'true',API_SESSION_SECRET:'unit-test-secret-32bytes-or-more-12345',DEEPSEEK_API_KEY:'not-a-real-key',DASHSCOPE_API_KEY:'not-a-real-key'};
 r=await worker.fetch(req('/api/status'),env);const cookie=r.headers.get('Set-Cookie').split(';')[0];assert.equal((await r.json()).chatReady,true);checks++;
 r=await worker.fetch(req('/api/chat',{topic:'health',scene:0,locale:'zh',question:'test'}),env);assert.equal(r.status,401);checks++;
 r=await worker.fetch(req('/api/chat',[],{},cookie),env);assert.equal(r.status,400);checks++;
 r=await worker.fetch(req('/api/chat','{bad json',{},cookie),env);assert.equal(r.status,400);checks++;
 r=await worker.fetch(req('/api/chat',{question:'x'.repeat(9000)}, {},cookie),env);assert.equal(r.status,413);checks++;
 r=await worker.fetch(req('/api/chat',{topic:'health',scene:0,locale:'zh',question:'test'},{},cookie+'.invalid'),env);assert.equal(r.status,401);checks++;
 const realFetch=global.fetch;let modelCalls=0,voiceCalls=0;global.fetch=async(url,init)=>{if(String(url).includes('api.deepseek.com')){modelCalls++;const b=JSON.parse(init.body);assert.equal(b.model,'deepseek-flash');assert.ok(b.messages[0].content.includes('fictional scenario'));return Response.json({choices:[{message:{content:'A teaching explanation only.'}}]})}if(String(url).includes('dashscope.aliyuncs.com')){voiceCalls++;const b=JSON.parse(init.body);assert.equal(b.input.voice,b.input.language_type==='English'?'Cherry':'Sunny');assert.ok(b.input.text.length<=600);return Response.json({output:{audio:{url:'https://test.oss-cn-beijing.aliyuncs.com/audio.wav'}}})}if(String(url).includes('oss-cn-beijing.aliyuncs.com')){const b=new Uint8Array(48),v=new DataView(b.buffer);for(const [at,t] of [[0,'RIFF'],[8,'WAVE'],[12,'fmt '],[36,'data']])for(let i=0;i<t.length;i++)b[at+i]=t.charCodeAt(i);v.setUint32(4,0xffffffff,true);v.setUint32(16,16,true);v.setUint16(20,1,true);v.setUint16(22,1,true);v.setUint32(24,24000,true);v.setUint32(28,48000,true);v.setUint16(32,2,true);v.setUint16(34,16,true);v.setUint32(40,0xffffffff,true);return new Response(b,{headers:{'Content-Type':'audio/wav'}})};throw Error('Unexpected upstream host')};
 try{r=await worker.fetch(req('/api/chat',{topic:'health',scene:0,locale:'en',question:'What should I check?'},{},cookie),env);assert.equal(r.status,200);assert.equal((await r.json()).generated,true);assert.equal(modelCalls,1);checks++;
 r=await worker.fetch(req('/api/tts',{text:'你好，我是小益。',locale:'sc'}, {},cookie),env);assert.equal(r.status,200);assert.equal(r.headers.get('Content-Type'),'audio/wav');assert.equal(voiceCalls,1);const wav=new DataView(await r.arrayBuffer());assert.equal(wav.getUint32(4,true),40);assert.equal(wav.getUint32(40,true),4);checks++;
 r=await worker.fetch(req('/api/tts',{text:'Hello, I am Xiaoyi.',locale:'en',voice:'Cherry'}, {'cf-connecting-ip':'192.0.2.2'},cookie),env);assert.equal(r.status,200);assert.equal(voiceCalls,2);checks++;
 r=await worker.fetch(req('/api/tts',{text:'x'.repeat(601),locale:'sc'}, {},cookie),env);assert.equal(r.status,400);assert.equal(voiceCalls,2);checks++;
 }finally{global.fetch=realFetch}
 console.log(JSON.stringify({status:'passed',checks,complete_practice_paths:paths,listen_modes:12,live_provider_calls:0,browser_visual_and_audio_qa:'not_performed',server_adapters:'mocked_upstreams_only'},null,2));
})().catch(error=>{console.error(error);process.exitCode=1});
