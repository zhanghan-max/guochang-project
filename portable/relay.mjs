/* Optional same-owner API bridge. Browser traffic stays on the new host;
   credentials remain in the original host's secret store. No credentials are exported. */
export function makeRelay(origin){
 if(!origin)return null;
 const url=new URL(origin);
 if(url.protocol!=='https:'||!url.hostname.endsWith('.chatgpt.site')||url.username||url.password)throw Error('Unsupported API relay origin');
 const base=url.origin;let snapshot=null,pending=null;
 async function refresh(force=false){
  if(!force&&snapshot&&snapshot.expires>Date.now())return snapshot;
  if(pending)return pending;
  pending=(async()=>{try{const r=await fetch(base+'/api/status?host_check='+crypto.randomUUID(),{headers:{'Cache-Control':'no-cache'},signal:AbortSignal.timeout(18000),redirect:'error'});if(!r.ok)throw Error('relay_status_'+r.status);const caps=await r.json(),cookie=r.headers.getSetCookie().map(s=>s.split(';')[0]).join('; ');if(!cookie)throw Error('relay_session_missing');snapshot={caps,cookie,expires:Date.now()+60000};return snapshot}catch{snapshot={caps:{chatReady:false,ttsReady:false,doubaoReady:false},cookie:'',expires:Date.now()+15000};return snapshot}finally{pending=null}})();return pending
 }
 async function request(path,body,retry=true){
  if(!['/api/tts','/api/chat'].includes(path))return Response.json({error:'not_found'},{status:404});
  const s=await refresh();if(!s.cookie)return Response.json({error:'voice_backend_unavailable'},{status:503});
  const r=await fetch(base+path+'?relay_request='+crypto.randomUUID(),{method:'POST',headers:{'Content-Type':'application/json','Origin':base,'Sec-Fetch-Site':'same-origin','Cookie':s.cookie,'Cache-Control':'no-store'},body:JSON.stringify(body),signal:AbortSignal.timeout(35000),redirect:'error'});
  if(r.status===401&&retry){await refresh(true);return request(path,body,false)}
  const headers=new Headers({'Content-Type':r.headers.get('Content-Type')||'application/json','Cache-Control':'private, no-store'});const provider=r.headers.get('X-Fayi-Voice-Provider');if(provider)headers.set('X-Fayi-Voice-Provider',provider);
  return new Response(r.body,{status:r.status,headers})
 }
 return {refresh,request};
}
