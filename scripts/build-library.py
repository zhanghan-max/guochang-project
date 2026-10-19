"""Compile explicitly authored fictional cases into three learning stages each.
Counts are distinct: 50 themes, 400 case packs, 1,200 learning cards.
No legal outcomes, expert reviews, learner data or efficacy results are generated.
"""
from pathlib import Path
import json

root = Path(__file__).resolve().parents[1]
sources = {
    'consumer': {'title':'消费者权益保护法实施条例（主题核对入口）','url':'https://www.samr.gov.cn/zw/zfxxgk/fdzdgknr/bgt/art/2024/art_0aea188276a44f0baf940ab95ee00e0a.html'},
    'civil': {'title':'民法典公开文本（主题核对入口）','url':'https://tjca.miit.gov.cn/zwgk/zcwj/flfg/art/2020/art_20cf1a2e1b854924b5caa744c8045d1f.html'},
    'privacy': {'title':'个人信息保护法（主题核对入口）','url':'https://www.cac.gov.cn/2021-08/20/c_1631050028355286.htm'},
    'work': {'title':'劳动合同法公开文本（先核对关系性质及适用范围）','url':'https://www.samr.gov.cn/zw/zfxxgk/fdzdgknr/bgt/art/2023/art_0abfdd261c03417b949df19d869add8d.html'},
    'scam': {'title':'教育部中国大学生在线防诈专题（主题核对入口）','url':'https://dxs.moe.gov.cn/zx/aqjy/ztjy/ffdxwlzp/'},
}
themes, packs, cards = [], [], []
for line in (root/'content/library-seeds.txt').read_text().splitlines():
    if not line or line.startswith('#'): continue
    track, title, category, art, verify, evidence, channel, vignettes = line.split('|')
    cases = vignettes.split('；')
    assert len(cases)==8, (title,len(cases))
    theme_id=f't{len(themes)+1:02}'
    source = {'消费':'consumer','反诈':'scam','隐私':'privacy','就业':'work'}.get(category,'civil')
    theme={'id':theme_id,'track':track,'title':title,'category':category,'art':art,'source':source,'verify':verify,'evidence':evidence,'channel':channel}
    themes.append(theme)
    for case_index, story in enumerate(cases):
        pack_id=f'{theme_id}-{case_index+1:02}'
        pack={'id':pack_id,'theme':theme_id,'story':story+'。','title':story,'track':track,'category':category,'art':art,'source':source,'review':'draft'}
        packs.append(pack)
        # One authored case has three distinct teaching objectives. We never
        # count these three stages as three independently sourced real cases.
        stages=[
            ('先核实', '面对这件事，你会先怎样做？', verify+'。',
             ['先照对方要求操作，等做完再问具体情况。','只凭熟悉的头像、称呼或口头保证就决定。'],
             '先把具体主体、事项和承诺核实清楚。暂缓不明操作，可以为自己留下确认信息的时间。'),
            ('留材料', '如果需要继续沟通，哪些材料更值得保留？', evidence+'，并按事情发生的先后整理。',
             ['删掉原始记录，只保留自己后来写的结论。','把所有材料和个人隐私直接发到公开群。'],
             '保留与这件事直接相关的原始材料、来源和时间。整理时保护自己及他人隐私，不擅自改写记录。'),
            ('找支持', '准备求助时，怎样说更清楚？', '向'+channel+'说明事实、时间、已做的核实和希望解决的问题。',
             ['先找网上承诺百分之百成功的人，付款后再核实。','只说自己肯定有理，不提供具体经过和材料。'],
             '把事实、诉求和现有材料说清楚。不同事项需由相应渠道核对，平台不预判责任、退款、赔偿或处理结果。'),
        ]
        for stage, (label, question, correct, incorrect, explanation) in enumerate(stages):
            position=(case_index+stage)%3
            options=incorrect.copy(); options.insert(position,correct)
            cards.append({'id':f'{pack_id}-{stage+1}','pack':pack_id,'theme':theme_id,'track':track,'category':category,'title':story,'story':story+'。','stage':stage,'label':label,'question':question,'options':options,'answer':position,'explanation':explanation,'source':source,'art':art,'review':'draft'})

assert len(themes)==50 and len(packs)==400 and len(cards)==1200
assert len({p['story'] for p in packs})==400
assert len({c['id'] for c in cards})==1200
assert sum(p['track']=='senior' for p in packs)==200
assert sum(p['track']=='student' for p in packs)==200
payload={'version':'2026-10-19-draft-1','language':'zh','review':'draft','counts':{'themes':50,'casePacks':400,'learningCards':1200},'sources':sources,'themes':themes,'packs':packs,'cards':cards}
out='/* AI辅助制作；400个虚构案例包×3个学习环节=1200张学习卡；全部为待复核教学草稿。 */\n(function(){const data='+json.dumps(payload,ensure_ascii=False,separators=(',',':'))+';globalThis.FAYI_LIBRARY=data;if(typeof module!=="undefined")module.exports=data;})();\n'
(root/'public/library-data.js').write_text(out)
import gzip
(root/'content/library-data.js.gz').write_bytes(gzip.compress(out.encode(),compresslevel=9,mtime=0))
print(json.dumps({'themes':len(themes),'case_packs':len(packs),'learning_cards':len(cards),'review':'draft'},ensure_ascii=False))
