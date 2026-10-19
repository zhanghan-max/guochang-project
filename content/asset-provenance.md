# 首页主视觉

文件：`public/assets/fayi-hero-v4.png`。由内置image_gen工具生成，透明背景请求为true，原PNG及透明度保留；未使用CLI或外部用户API密钥。图像为静态主视觉，浮动与SVG动画分别由网页代码实现。

原始输出：`/workspace/scratch/cd459487f387/generated_images/exec-4acaeab4-73c6-44d4-acb8-ef4ec1ba57be.png`

最终提示词：

Use case: stylized-concept. Asset type: transparent hero illustration for FAYI Chinese public legal education web application. Create a refined, premium 3D miniature editorial illustration, a complete friendly everyday conversation scene, on transparent background. Three Chinese adults: one silver-haired older woman wearing sage green, one college student carrying a cream canvas tote, and a young adult female community learning guide wearing a deep burgundy cardigan. They are gathered around a small round cream table with an open notebook and a small smartphone, warmly discussing a life situation. Sophisticated matte clay and fine paper textures, softly rounded but realistic adult proportions, expressive attentive faces, natural relaxed gestures, not childish or toy-like. Include a tiny potted plant and softly curved architectural arch integrated into the miniature base. Rich tactile depth, elegant studio lighting, soft contact shadows, palette deep burgundy #7d243d, sage #6e9a92, ivory #fff5e2, restrained brushed gold. Compose the group as a compact floating island, full objects and people visible, landscape composition, no background rectangle. No text, no letters, no symbols, no logo, no watermark, no robes or court insignia. The website provides all text separately. Render polished and detailed at high resolution.


## V0.5 · 2026-10-19

生成工具：内置 image_gen，未使用用户OpenAI API密钥。三个场景为AI生成的虚构教学配图，不是真实走访照片。透明Logo以用户提供原图为编辑目标。

- public/assets/scene-eggs-v5.webp：鸡蛋赠品、保健品、套餐协议、老人和推销员；替换不匹配的礼盒配图。
- public/assets/scene-senior-v5.webp：老年男女、中年男女、年轻志愿者共同讨论。
- public/assets/scene-student-v5.webp：男女大学生、较年长男教师、中年女志愿者共同讨论。
- public/assets/fayi-logo-transparent-v5.png：从用户原Logo去除白底，保留红心、天平、金色麦穗和“法益共筑”文字。第一次编辑出现彩色光晕，未采用；最终采用重新抠图输出。
- public/assets/fayi-hero-v5.webp、xiaoyi-v5.webp：此前已生成形象的压缩版本，未改变画面内容。
- public/assets/voice/doubao-zh.mp3、doubao-en.mp3、doubao-sc.mp3：使用用户已配置的豆包语音服务生成，Vivi 2.0。并非把本机语音标为豆包。

生成提示原则：暖米白/暗红/鼠尾草绿、具体生活场景、人物年龄和性别多样、无画面文字、避免礼盒代替鸡蛋。Logo仅要求背景去除，不重设计；透明输出由image_gen提供。

配图动画为CSS轻微缩放、悬停与交互线索反馈，不宣称精准口型或真人视频。其他通用主题SVG继续采用原有代码资产，不能当作逐案定制配图。

### V0.5提示词记录（内置image_gen）

鸡蛋场景：Use case: illustration-story. Asset: landscape website legal literacy scenario cover, no text. A polished editorial 3D miniature illustration, sophisticated warm ivory / muted burgundy / sage / soft golden palette, beautifully modelled Chinese people with realistic adult proportions rather than round stick figures. Scene: an older Chinese woman with short silver hair and an older Chinese man with glasses visit a community promotion stall. On the small table are a clearly recognizable open carton of white eggs in the foreground and a few plain health supplement jars at the back. A neatly dressed male salesperson points at an unmarked paper membership form; the woman pauses, looking thoughtfully at the form while holding a grocery basket. It must show the specific situation of free eggs being used to pitch an expensive health package, not gifts, no wrapped gift boxes and no bows. Wide 3:2 composition, entire figures and table comfortably in frame, uncluttered warm off-white background, soft tactile ceramic/paper materials, gentle studio shadows. No written labels, no letters, no numbers, no watermarks. Warm empathetic mood, no exaggerated villain caricature.

社区课堂：Use case: illustration-story. Asset: a wide website classroom cover for Chinese older adults, no text. Refined premium 3D editorial miniature in warm ivory, burgundy, sage green and muted gold, soft tactile matte materials and realistic adult proportions. A varied Chinese community group around a modest round table: silver-haired older woman, grey-haired older man with spectacles, middle-aged woman, middle-aged man, and a younger female community volunteer in burgundy. They are discussing a paper document and a phone, listening attentively, warm equal and respectful body language. Show both women and men and a clear variety of ages. No gift box. Whole small scene visible, wide 3:2 frame with breathing room, soft luminous cream background, elegant shadows and delicate details, faces distinct and expressive, not identical doll faces. No text, signage, letters, logos, numbers, watermarks.

学生课堂：Use case: illustration-story. Asset: a wide website student classroom cover, no text. Refined premium 3D editorial miniature in warm ivory, burgundy, sage green and muted gold, soft tactile matte materials, realistic human proportions. Four Chinese college students, two young women and two young men with varied hair and clothes, together with one older male teacher with greying hair and one middle-aged female volunteer, gather around a campus study table with an open laptop, a plain rental agreement and a phone. They look thoughtfully at the agreement, engaged in friendly discussion. All people clearly distinct, equal and respectful, no single gender dominance. Whole group and tabletop in a wide 3:2 composition, uncluttered pale sage and cream backdrop, studio light, soft shadows, sophisticated small-scene craftsmanship. No text, signage, letters, numbers, logos, watermarks. No gift boxes.

Logo最终抠图：Strict background removal / clean cutout only. Keep the supplied original logo exactly; do NOT recreate, redraw, shade, glow, soften, embellish or redesign it. Remove the white/off-white background completely and make it alpha=0, including the hole inside the heart and all white gaps. Preserve the existing opaque red and gold logo pixels and the exact existing Chinese lettering 法益共筑. Crisp hard logo edges with only a tiny antialias transition. Absolutely NO red glow, NO colored haze, NO semitransparent shadow, NO gradient background, NO bevel added. Tight crop around logo and lettering with a small transparent margin. On a cream web page this must look like the original crisp red/gold artwork without a rectangular white field or any halo.


## V0.6 礼品推销场景
- 工具：内置 image_gen；2026-10-19。
- 输出：`public/assets/scene-gift-pressure-v6.webp`。
- 对应案例：t01-03，领取礼品后被要求当场购买。生成后检查了长者拒绝的手势、销售员指向协议的动作、一个礼品袋和一个商品盒。
- 其余案例插图由`public/case-illustrations.js`扩展既有SVG体系，50组主题×8个案例逐条配置物件；不是独立生成的400张位图。
- 完整提示词：Use case: illustration-story. Asset: single wide website legal education story illustration, landscape 3:2. Scene in a Chinese community promotional event. An older Chinese woman with short grey hair and an older Chinese man are at a table, a young adult saleswoman points insistently at a boxed product and a purchase order, saying through body language that accepting the free gift obliges a purchase. The older woman calmly holds up an open palm to pause/refuse and looks at the order; the older man supports her. On the table place ONE small gift bag as the received free gift and ONE product box with plain packaging. The story is accepting a gift does not mean immediately agreeing to buy a product. The art should depict the pressure and thoughtful refusal, no written legal claims. Attractive premium soft clay-like 3D editorial illustration, warm ivory background, muted sage green and burgundy clothes, soft natural daylight, tactile materials, rounded believable expressive Chinese adults, elegant uncluttered scene with clear hand gestures and depth. Do not show medicine bottles as the main subject. No eggs, no repeated mini-scenes, no grids, no logo, no watermark, no readable text, no gibberish labels. Keep the scene visually simple and readable for older learners.


## V0.7 课堂封面与动态场景
11张新增引导课封面由内置image_gen逐主题单独生成，全部提示词、源文件与最终资产路径见`content/covers-v7-provenance.json`。与原有领鸡蛋图一起组成12课封面，生成后逐张检查主体、动作与主题。
400个动态场景是逐案例配置的本地立体几何场景，不是400张AI照片，也不靠更改标题区别。空间布景、布局、主次物件、人物动作和事件动画来自`public/scene-specs.js`。渲染器`public/scene-3d.js`支持鼠标视角、自动事件动作、暂停、视口节流及减少动态偏好。
