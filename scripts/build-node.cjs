const fs=require('node:fs'),path=require('node:path'),cp=require('node:child_process');
const root=path.resolve(__dirname,'..');
const packed=path.join(root,'content/library-data.js.gz');
if(fs.existsSync(packed))fs.writeFileSync(path.join(root,'public/library-data.js'),require('node:zlib').gunzipSync(fs.readFileSync(packed)));
cp.execFileSync(process.execPath,[path.join(__dirname,'build.cjs')],{cwd:root,stdio:'inherit'});
fs.copyFileSync(path.join(root,'dist/server/index.js'),path.join(root,'portable/site-worker.mjs'));
console.log('Node host built. Start with npm start.');
