from pathlib import Path
import shutil, zipfile, json, sys
root=Path(__file__).resolve().parents[1]
out=Path(sys.argv[1]).resolve() if len(sys.argv)>1 else root/'output'
out.mkdir(parents=True,exist_ok=True)
bundle=out/'fayi-upgrade'
if bundle.exists():shutil.rmtree(bundle)
bundle.mkdir()
for name in ('offline','static'):
    shutil.copytree(root/'public',bundle/name,ignore=shutil.ignore_patterns('*.zip'))
server=bundle/'server';server.mkdir()
for file in ('server.mjs','Dockerfile'):
    shutil.copy2(root/'portable'/file,server/file)
shutil.copy2(root/'dist/server/index.js',server/'site-worker.mjs')
shutil.copy2(root/'.env.example',server/'.env.example')
shutil.copy2(root/'portable/DEPLOYMENT.md',bundle/'使用与部署说明.md')
source=bundle/'source';source.mkdir()
for directory in ('public','worker','scripts','content'):
    shutil.copytree(root/directory,source/directory,ignore=shutil.ignore_patterns('*.zip','__pycache__'))
shutil.copy2(root/'README.md',source/'README.md')
shutil.copy2(root/'.env.example',source/'.env.example')
target=out/'法益共筑_新版离线与迁移包.zip'
with zipfile.ZipFile(target,'w',zipfile.ZIP_DEFLATED,compresslevel=8) as z:
    for p in sorted(bundle.rglob('*')):
        if p.is_file():z.write(p,'fayi-upgrade/'+p.relative_to(bundle).as_posix())
offline=out/'法益共筑_离线演示版.zip'
with zipfile.ZipFile(offline,'w',zipfile.ZIP_DEFLATED,compresslevel=8) as z:
    for p in sorted((bundle/'offline').rglob('*')):
        if p.is_file():z.write(p,'fayi-learning/'+p.relative_to(bundle/'offline').as_posix())
assert target.stat().st_size<50*1024*1024
print(json.dumps({'bundle':str(target),'offline':str(offline),'bundle_bytes':target.stat().st_size,'offline_bytes':offline.stat().st_size},ensure_ascii=False))
