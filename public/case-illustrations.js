/* Case-specific SVG scenes extend the site's native illustration system.
   Each of 400 cases has an explicit primary prop; no generic fallback for case packs. */
(function(){
const rows=[
['shop','eggs lecture gift clinic transfer promise label fee'],
['care','bed member room clock card bill qr contract'],
['finance','chart badge link lock network screen secret bed'],
['phone','parcel screens code password member loan fee order'],
['family','chat wave order video avatar phone card parcel'],
['phone','transfer document camera remote secret fee code card'],
['digital','video screen wave photo wave bottle video camera'],
['phone','link card identity code contacts transfer qr remote'],
['repair','door appliance broom badge qr tools tools bill'],
['care','person clock appliance company clock contract bottle transfer'],
['shop','appliance label complaint parcel gift fee parcel bill'],
['studio','clock necklace promise bottle transfer gift company fee'],
['delivery','parcel qr fee code card badge bill identity'],
['travel','bus bag member hotel transfer contract bill identity'],
['home','key promise camera bill bill contract broom document'],
['neighbour','leak boxes parking drill tools contract camera plan'],
['family','contract identity fingerprint home document bill contract bill'],
['family','calendar bill bill person bill wave document bill'],
['work','helmet bill bill signature bill clock person contacts'],
['family','promise signature bill transfer bill signature loan bill'],
['village','home plan fee signature plan document identity documents'],
['farm','bag leaf truck label transfer boxes order document'],
['finance','password qr remote card transfer phone bill card'],
['studio','calendar gift gift bill transfer link lecture bill'],
['digital','photo identity camera identity photo video document video'],
['office','fee shirt company card tools member network loan'],
['phone','order lock bill tools code link loan chart'],
['office','lecture loan contract promise bill bill company identity'],
['campus','fee link clock screens transfer qr identity secret'],
['theatre','ticket ticket fee promise password ticket bill secret'],
['shop','transfer phone order lock qr tools fee fee'],
['gaming','fee password qr lock lock transfer remote order'],
['home','key transfer signature bill bill room document bill'],
['dorm','laptop parcel appliance photo camera gift boxes boxes'],
['food','food bill food complaint bill fee card food'],
['delivery','link parcel screens qr parcel code parcel transfer'],
['office','card signature fee clock signature bed bill plan'],
['office','bill contract identity document calendar plan document company'],
['work','clock bill signature chart calendar bill contacts boxes'],
['campus','chat stall bill loan transfer bill boxes signature'],
['finance','card transfer password transfer chat avatar contacts bill'],
['digital','document contacts identity camera contacts camera home photo'],
['digital','video wave video chat chat screen avatar camera'],
['campus','chat identity video avatar screens chat chat document'],
['creative','photo label music signature photo laptop video document'],
['creative','signature documents photo document bill ticket laptop identity'],
['campus','avatar transfer fee password clock qr gift bill'],
['travel','hotel bus ticket room bill bill map bag'],
['cafe','transfer key gift loan laptop photo bill contacts'],
['classroom','badge bill transfer calendar gift badge bill company']
];
const esc=s=>String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function text(s,x,y,size=17,color='#453d3a'){return `<text x="${x}" y="${y}" fill="${color}" font-family="system-ui, sans-serif" font-size="${size}" font-weight="600">${esc(s)}</text>`}
function human(x,y,{elder=false,woman=false,color='#7d3b4f',pose=0,scale=1}={}){return `<g transform="translate(${x} ${y}) scale(${scale})"><ellipse cx="0" cy="151" rx="40" ry="8" fill="#46352b16"/><path d="M-22 91h19l-3 53h-20zM4 91h20l7 53H8z" fill="#454851"/><path d="M-28 140h25v11h-32q-1-6 7-11M7 140h25l9 9q0 4-34 2" fill="#38383e"/><path d="M-29 41Q0 26 28 41l7 57q-35 13-69 0z" fill="${color}"/><path d="M-26 46q-22 22-15 45l12-1 8-35M25 46q16 9 30 ${pose%2?'-5':'17'}l-6 13-31-16" fill="${color}"/><g class="case-hand"><path d="M48 ${pose%2?'40':'63'}q10-9 16-3l-6 12-12 3" fill="#eac2a8"/></g><path d="M-7 24v14q7 8 14 0V24" fill="#dbaa8d"/>${woman?'<path d="M-26 0q-6-32 24-32 35 0 31 42l-5 24h-50z" fill="'+(elder?'#aab0ac':'#3f3737')+'"/>':''}<ellipse cy="5" rx="24" ry="29" fill="#edc6ad"/><path d="M-24 3q-7-40 23-38 34-1 26 36l-10-18q-17 9-30-1z" fill="${elder?'#b9beba':'#3f3737'}"/><g class="scene-eyes"><path d="M-12 5h5m14 0h5" stroke="#4c3c37" stroke-width="2.8" stroke-linecap="round"/></g>${elder?'<path d="M-20 0h16v13h-16zM4 0h16v13H4zM-4 5h8" stroke="#766a60" stroke-width="1.6" fill="none"/>':''}<path d="M-5 19q5 3 10-1" stroke="#a26c5f" fill="none" stroke-width="2" stroke-linecap="round"/>${woman?'<circle cx="-24" cy="17" r="2.5" fill="#d6b279"/><circle cx="24" cy="17" r="2.5" fill="#d6b279"/>':''}</g>`}
const sheet=(label='约定')=>`<rect x="-49" y="-62" width="98" height="128" rx="7" fill="#fffdf5" stroke="#b6aa98" stroke-width="2"/>${text(label,-35,-30,15)}<path d="M-33-11h65M-33 5h65M-33 21h44M-33 37h57" stroke="#c8c7b5" stroke-width="5" stroke-linecap="round"/>`;
const handset=(label='消息',screen='')=>`<rect x="-43" y="-76" width="86" height="151" rx="17" fill="#414856"/><rect x="-36" y="-67" width="72" height="131" rx="10" fill="#fff8e8"/><rect x="-13" y="-63" width="26" height="4" rx="2" fill="#414856"/>${text(label,-29,-35,13)}${screen||'<rect x="-26" y="-17" width="52" height="35" rx="8" fill="#e4b475"/><path d="M-24 33h48M-24 45h33" stroke="#c7c9b8" stroke-width="5" stroke-linecap="round"/>'}`;
function prop(kind){const labels={contract:'待签协议',promise:'口头承诺',document:'事项说明',documents:'原始材料',bill:'费用明细',order:'订单',label:'产品标签',signature:'签名前看清',identity:'证件信息',plan:'情况核对',company:'主体信息',complaint:'售后沟通'};
if(labels[kind])return sheet(labels[kind])+(kind==='signature'?'<path d="m34 25 8-11 12 8-35 51-16 8 2-18z" fill="#7e9b90"/>':kind==='label'?'<circle cx="34" cy="41" r="23" fill="#e6bc7b"/><path d="M34 26v19m0 7v2" stroke="#674b37" stroke-width="4"/>':'');
if(['phone','chat','link','code','password','qr','remote','contacts','avatar','video','wave','screens','camera'].includes(kind)){
const msg={phone:'陌生来电',chat:'聊天消息',link:'陌生链接',code:'验证码',password:'支付密码',qr:'扫码之前',remote:'远程操作',contacts:'通讯信息',avatar:'核实本人',video:'视频来电',wave:'语音消息',screens:'共享屏幕',camera:'照片用途'}[kind];
const inside=kind==='qr'?'<path d="M-25-19h19v19h-19zM6-19h19v19H6zM-25 10h19v19h-19zM7 12h7v7h10v10H6z" fill="#534a44"/>':kind==='password'||kind==='code'?'<path d="M-23-2h46M-23 22h46" stroke="#d9cdb5" stroke-width="1"/>'+[-18,-7,5,18].map(x=>`<circle cx="${x}" cy="8" r="3" fill="#805646"/>`).join(''):kind==='wave'?'<path d="M-25 2v16m9-24v32m10-42v49m10-39v29m10-22v16m10-12v8" stroke="#779389" stroke-width="4" stroke-linecap="round"/>':kind==='video'||kind==='camera'||kind==='avatar'?'<rect x="-27" y="-21" width="54" height="63" rx="8" fill="#c7d9cc"/><circle cy="-3" r="12" fill="#eac0a0"/><path d="M-20 39q0-38 40 0" fill="#8d5360"/>':kind==='screens'?'<rect x="-27" y="-21" width="54" height="36" rx="4" fill="#bcd1c5"/><rect x="-10" y="-5" width="34" height="50" rx="4" fill="#fff9ec" stroke="#7e8e88" stroke-width="2"/>':'';
return handset(msg,inside)}
if(kind==='transfer'||kind==='fee'||kind==='loan'||kind==='member'||kind==='card')return handset({transfer:'转给谁？',fee:'新增费用',loan:'借款页面',member:'会员费用',card:'账户信息'}[kind],`<rect x="-27" y="-19" width="54" height="37" rx="6" fill="#b8cebd"/>${text('¥',-10,9,25,'#516b60')}<path d="M-23 34h46m-38 12h30" stroke="#d9cbb6" stroke-width="5" stroke-linecap="round"/>`);
if(kind==='bottle'||kind==='clinic')return `<rect x="-36" y="-47" width="72" height="108" rx="12" fill="#fff9e9" stroke="#c7b58f" stroke-width="2"/><rect x="-39" y="-63" width="78" height="26" rx="6" fill="#8d4b56"/><rect x="-27" y="-19" width="54" height="49" rx="5" fill="#d5c394"/>${text(kind==='clinic'?'体检':'食品',-20,10,17)}`;
if(kind==='gift'||kind==='eggs')return kind==='eggs'?'<path d="M-61 5h122l-10 49H-51z" fill="#b79061"/><path d="M-59 20h118m-111 15H52" stroke="#dfbd87" stroke-width="4"/>'+[-35,0,35].map(x=>`<ellipse cx="${x}" cy="1" rx="17" ry="23" fill="#fff1d1" stroke="#dfcba5"/>`).join(''):'<rect x="-53" y="-26" width="106" height="85" rx="6" fill="#d5b577"/><rect x="-59" y="-38" width="118" height="26" rx="5" fill="#e8cd99"/><path d="M-10-38h20v97H-10z" fill="#8d4d5b"/><path d="M0-37q-45-8-30-28 17-12 30 28 15-39 32-25 11 17-32 25" fill="none" stroke="#8d4d5b" stroke-width="8"/>';
if(kind==='parcel'||kind==='boxes'||kind==='bag')return `<path d="m-56-33 55-24 57 24v77L0 68l-56-24z" fill="#bd9466"/><path d="m-56-33 56 25 56-25-56-24z" fill="#dec297"/><path d="M0-8v76m-27-113 57 24v29" fill="none" stroke="#f0dbb0" stroke-width="12"/><rect x="-41" y="-8" width="28" height="34" rx="2" fill="#fff3d7"/>`;
if(kind==='lecture'||kind==='screen'||kind==='laptop'||kind==='music'||kind==='photo')return `<rect x="-65" y="-61" width="130" height="88" rx="8" fill="#444b57"/><rect x="-57" y="-53" width="114" height="70" rx="4" fill="#d5dfce"/>${kind==='music'?'<path d="M-7-32v44m0-43 34-6v39" stroke="#8b4b5c" stroke-width="5"/><ellipse cx="-17" cy="10" rx="12" ry="8" fill="#8b4b5c"/><ellipse cx="17" cy="0" rx="12" ry="8" fill="#8b4b5c"/>':kind==='photo'?'<circle cx="27" cy="-35" r="9" fill="#e7c47b"/><path d="m-50 10 26-33 21 22 17-13 35 24" fill="#809b83"/>':'<circle cx="-22" cy="-25" r="14" fill="#e8bd9d"/><path d="M-45 12q0-35 46 0" fill="#8c5062"/><path d="M13-32h33M13-15h33M13 1h22" stroke="#92a799" stroke-width="4"/>'}<path d="M-10 28h20v19H-10M-35 48h70v8h-70" fill="#737e80"/>`;
if(kind==='bed'||kind==='room'||kind==='hotel')return `<rect x="-68" y="-45" width="14" height="107" rx="4" fill="#a77957"/><rect x="-55" y="-18" width="112" height="53" rx="12" fill="#fef8e9"/><rect x="-54" y="-16" width="35" height="25" rx="8" fill="#ddc9aa"/><path d="M-15-15h73v51h-73z" fill="#9db3a0"/><path d="M-61 36H66v12H-61M53 43h12v19H53" fill="#a77957"/>`;
if(kind==='key'||kind==='door'||kind==='home')return `<path d="m-60-14 60-48 60 48v74H-60z" fill="#d3b68d"/><path d="m-71-12 71-57 71 57" stroke="#87505a" stroke-width="13" stroke-linejoin="round" fill="none"/><rect x="-12" y="0" width="34" height="60" rx="3" fill="#6f8b7d"/><rect x="-45" y="1" width="22" height="26" rx="3" fill="#fff9df"/>${kind==='key'?'<circle cx="45" cy="30" r="14" stroke="#dfb55f" stroke-width="7" fill="none"/><path d="M45 44v35m0-8h12" stroke="#dfb55f" stroke-width="7"/>':''}`;
if(kind==='clock'||kind==='calendar')return kind==='clock'?'<circle r="60" fill="#fffae9" stroke="#a5b6a1" stroke-width="10"/><path d="M0-36v38l29 18" stroke="#80515b" stroke-width="7" stroke-linecap="round" fill="none"/><circle r="5" fill="#80515b"/>':'<rect x="-59" y="-56" width="118" height="115" rx="10" fill="#fff8e9"/><path d="M-59-24H59v-22q0-10-10-10h-98q-10 0-10 10z" fill="#8e5060"/><path d="M-32-68v25M32-68v25" stroke="#637b70" stroke-width="7" stroke-linecap="round"/>'+[-27,0,27].map(x=>[-3,22,46].map(y=>`<rect x="${x-6}" y="${y-6}" width="12" height="12" rx="3" fill="#c6d5bf"/>`).join('')).join('');
if(kind==='chart'||kind==='network')return '<rect x="-65" y="-59" width="130" height="112" rx="8" fill="#fff9e9"/><path d="M-43 30h18V0h-18m33 30H8v-47h-18M23 30h18v-69H23" fill="#9bb39c"/><path d="m-45-14 34-19 25 1 30-22" stroke="#a65860" stroke-width="4" fill="none"/>';
if(kind==='food')return '<ellipse cy="36" rx="72" ry="27" fill="#dfcfaf"/><ellipse cy="29" rx="62" ry="22" fill="#fff7de"/><path d="M-52 23q3-45 53-45 48 2 50 45" fill="#a6b67e"/><path d="M-29 8q22-19 45-10M-36 22q34-20 68-3" stroke="#dfb66d" stroke-width="10" stroke-linecap="round"/>';
if(kind==='ticket')return '<path d="M-69-45H69v24q-17 0-17 17t17 17v32H-69V13q17 0 17-17t-17-17z" fill="#dfbb7f"/><path d="M27-43v86" stroke="#fff5d8" stroke-width="3" stroke-dasharray="5 5"/><path d="m-25-25 8 16 18 2-13 13 3 18-16-9-16 9 3-18-13-13 18-2z" fill="#8d4b5c"/>';
if(kind==='bus'||kind==='truck')return '<rect x="-72" y="-47" width="144" height="92" rx="15" fill="#97ad96"/><path d="M-60-34H59V5H-60z" fill="#eaf0db"/><path d="M-21-32V4m40-36V4" stroke="#97ad96" stroke-width="6"/><circle cx="-43" cy="43" r="15" fill="#4a4c50"/><circle cx="43" cy="43" r="15" fill="#4a4c50"/><rect x="-59" y="20" width="18" height="7" rx="2" fill="#f7d89c"/>';
if(kind==='appliance')return '<rect x="-50" y="-67" width="100" height="133" rx="12" fill="#e8e4d8" stroke="#a3aba4" stroke-width="3"/><rect x="-39" y="-57" width="78" height="22" rx="3" fill="#b6c8ba"/><circle cy="15" r="37" fill="#687f7c"/><circle cy="15" r="27" fill="#c0d9d0"/>';
if(kind==='tools'||kind==='drill'||kind==='broom')return kind==='broom'?'<path d="m22-69-39 93" stroke="#886950" stroke-width="10"/><path d="m-33 12 44 20-14 43-55-25z" fill="#cdb079"/><path d="m-28 28-16 25m29-19-16 25m29-20-16 25" stroke="#a78b5a" stroke-width="3"/>':'<path d="M12-67q-41 1-38 38l13 19-40 67q-5 19 13 20L7 5q40 1 46-36L25-14 8-27z" fill="#8fa598" stroke="#617c70" stroke-width="3"/><circle cx="-39" cy="59" r="6" fill="#f6e9cd"/>';
if(kind==='necklace')return '<path d="M-45-58q-20 100 45 113 65-13 45-113" stroke="#d6ae5f" stroke-width="9" fill="none"/><path d="m0 32 22 22L0 78l-22-24z" fill="#d8b975"/>';
if(kind==='shirt')return '<path d="m-30-59-44 30 25 32 18-11v76h62V-8L49 3l25-32-44-30q-30 31-60 0" fill="#8da69c"/><path d="M0-35v98" stroke="#cee0cf" stroke-width="3"/>';
if(kind==='leaf')return '<path d="M0 65V-48" stroke="#638971" stroke-width="8"/><path d="M0 15q-65 0-57-59Q0-40 0 15M0-13q55-4 58-57Q1-67 0-13" fill="#98ad7e"/>';
if(kind==='leak')return '<path d="M-65-48H65v15H-65" fill="#b8b1a2"/><path d="M-4-26q-23 33 0 37 23-4 0-37M31 13q-21 31 0 35 21-4 0-35" fill="#81acb2"/><ellipse cy="63" rx="70" ry="11" fill="#b8d1cd"/>';
if(kind==='parking')return '<rect x="-60" y="-56" width="120" height="106" rx="12" fill="#819f93"/>'+text('P',-21,20,71,'#fff8e5');
if(kind==='badge')return '<path d="m-51-60 51 17 51-17v63q-4 42-51 68-47-26-51-68z" fill="#8fa69a"/><circle cy="-3" r="25" fill="#e4c58b"/>'+text('?',-9,7,32,'#795948');
if(kind==='lock'||kind==='secret')return '<path d="M-33-19v-29q0-53 66 0v29" stroke="#859b90" stroke-width="12" fill="none"/><rect x="-51" y="-20" width="102" height="81" rx="10" fill="#d1b27c"/><circle cy="12" r="10" fill="#785755"/><path d="M0 19v19" stroke="#785755" stroke-width="8"/>';
if(kind==='fingerprint')return sheet('先读再按印')+'<g stroke="#aa6970" stroke-width="3" fill="none"><ellipse cx="26" cy="28" rx="17" ry="24"/><ellipse cx="26" cy="28" rx="11" ry="18"/><path d="M26 14v30"/></g>';
if(kind==='person')return human(0,-65,{woman:true,color:'#90a398',scale:.8});
if(kind==='helmet')return '<path d="M-58 15q0-99 116 0v18H-58z" fill="#d6b177"/><path d="M-73 29H73v15H-73M0-54v70" stroke="#f0d59d" stroke-width="12" stroke-linecap="round"/>';
if(kind==='stall')return '<path d="M-73-46H73l13 35H-86z" fill="#aa6672"/><path d="M-65-7V64m130-71v71" stroke="#b58d64" stroke-width="7"/><path d="M-75 31H75v30H-75z" fill="#c9b184"/><path d="M-45-43v30m45-30v30m45-30v30" stroke="#efdbba" stroke-width="21"/>';
if(kind==='map')return '<path d="m-68-55 45 13 46-13 45 13v101L23 46l-46 13-45-13z" fill="#c5d2b6"/><path d="M-23-40v97M23-53v97" stroke="#f7f0db" stroke-width="4"/><path d="m-49 12 40-31 39 37 21-16" fill="none" stroke="#b78c70" stroke-width="5"/>';
throw Error('Missing illustrated prop: '+kind)
}
function backdrop(place){const room=['care','home','family','dorm','hotel','neighbour'].includes(place),school=['campus','classroom','creative'].includes(place),rural=['village','farm'].includes(place),digital=['digital','phone','studio','gaming','finance'].includes(place);return `<rect width="600" height="400" rx="22" fill="${rural?'#e4ebda':digital?'#e5e8df':'#efe6d8'}"/><path d="M0 281H600v119H0z" fill="${rural?'#c7d4ad':'#dcd1bd'}"/><path d="M0 281H600" stroke="#fff9e8" stroke-width="3"/>${rural?'<path d="m0 254 102-73 99 73 140-110 259 110v27H0" fill="#b3c6a0"/><path d="m33 192 74-56 75 56v80H33z" fill="#cfb791"/><path d="m25 190 82-63 82 63" stroke="#9d6c59" stroke-width="12" fill="none"/><path d="M340 304q70-33 185 0m-222 41q108-30 238 0" stroke="#a7b88e" stroke-width="10" fill="none"/>':room?'<rect x="39" y="49" width="134" height="121" rx="8" fill="#fff6de" stroke="#cbb99c" stroke-width="7"/><path d="M106 53v113M43 111h126" stroke="#cbb99c" stroke-width="5"/><path d="M440 187h130v94H440z" fill="#b5beaa"/><path d="M428 181h154v18H428" fill="#99aa97"/>':school?'<rect x="36" y="46" width="198" height="116" rx="7" fill="#8da596" stroke="#b99975" stroke-width="8"/><path d="M61 75h116m-116 24h145m-145 24h75" stroke="#dbe5cf" stroke-width="6" stroke-linecap="round"/><path d="M442 163h111v114H442z" fill="#bdad91"/><path d="M451 177h13v65m8-65h15v65m8-65h15v65m7-65h22v65" stroke="#e3d4b5" stroke-width="7"/>':digital?'<rect x="35" y="43" width="185" height="119" rx="14" fill="#c9d3c4"/><path d="M59 77h70m-70 24h130m-130 24h102" stroke="#edf1e3" stroke-width="10" stroke-linecap="round"/><circle cx="512" cy="92" r="46" fill="#f4e7c9"/><path d="M490 95h44m-22-22v44" stroke="#d5c19f" stroke-width="5"/>':'<path d="M28 72h196v93H28z" fill="#c9d3be"/><path d="M28 72h196v26H28z" fill="#ae766f"/><path d="M50 111h37v34H50m19-34v34m31-34h37v34h-37m50-34h37v34h-37" fill="#f9efda"/><path d="M448 157h123v124H448z" fill="#c3b69c"/><path d="M450 194h119m-119 40h119" stroke="#e4d9c0" stroke-width="7"/>'}<path d="M549 281v-64m-1 11q-42-33-22-47 27-3 22 47m1-12q3-53 26-43 12 21-26 43" fill="#88a183" stroke="#88a183" stroke-width="4"/><path d="M529 263h39l-6 35h-27z" fill="#c29672"/>`}
function spec(p){const ti=Number(p.theme.slice(1))-1,ci=Number(p.id.split('-')[1])-1,row=rows[ti];if(!row)throw Error('Missing theme scene '+p.id);const kind=row[1].split(' ')[ci];if(!kind)throw Error('Missing case scene '+p.id);return {place:row[0],kind,ti,ci}}
function render(p){const {place,kind,ti,ci}=spec(p),old=p.track==='senior',female=(ti+ci)%2===0;const title=p.title,lines=[];for(let i=0;i<title.length;i+=16)lines.push(title.slice(i,i+16));return `<svg class="scene-illustration case-scene" data-case-art="${esc(p.id)}" data-scene-prop="${kind}" viewBox="0 0 600 400" role="img" aria-label="${esc(title+'；'+(old?'中老年生活':'学生生活')+'情境插图')}"><title>${esc(title)}</title>${backdrop(place)}<ellipse cx="300" cy="336" rx="240" ry="24" fill="#69533d12"/>${human(111,169,{elder:old,woman:female,color:old?'#8c5061':'#7b968e',pose:ci,scale:.98})}${human(490,169,{elder:old&&[1,4,17,19].includes(ti),woman:!female,color:'#aa9272',pose:ci+1,scale:1})}<path d="M178 270h246v18H178m18 0v55m211-55v55" fill="none" stroke="#b49875" stroke-width="10" stroke-linecap="round"/><ellipse cx="301" cy="270" rx="92" ry="12" fill="#72553b18"/><g class="case-object" transform="translate(300 202)">${prop(kind)}</g><g class="case-message"><rect x="${title.length>16?151:175}" y="29" width="${title.length>16?300:250}" height="${lines.length*24+27}" rx="13" fill="#fffaf0" stroke="#dbceb8"/><path d="m182 ${lines.length*24+54}-17 19 40-17" fill="#fffaf0"/>${lines.map((s,i)=>text(s,title.length>16?164:188,58+i*24,17)).join('')}</g></svg>`}
globalThis.FAYI_CASE_ART={render,spec,count:400};
})();
