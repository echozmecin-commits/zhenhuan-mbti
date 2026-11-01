export const questions = [
  // P 权谋维度 (4题)
  {
    id: 1,
    dimension: 'P',
    text: '你入宫第一天，得知有位妃子刚被降位。你会：',
    options: [
      { text: '同情她，想着以后不要得罪人就好', score: 1 },
      { text: '先打听她被降位的原因，了解后宫的规则', score: 2 },
      { text: '暗暗记下谁是推手，分析各方势力格局', score: 3 },
    ],
  },
  {
    id: 2,
    dimension: 'P',
    text: '一位嫔妃当众讽刺你出身低微，你会：',
    options: [
      { text: '笑笑不回应，退一步海阔天空', score: 1 },
      { text: '不卑不亢地回应，维护尊严但不升级冲突', score: 2 },
      { text: '表面谦和，事后寻找她的弱点以备不时之需', score: 3 },
    ],
  },
  {
    id: 3,
    dimension: 'P',
    text: '皇后赐你一份看似贵重的礼物，但宫中老人暗示"小心"。你会：',
    options: [
      { text: '大方收下，不想多想这些弯弯绕绕', score: 1 },
      { text: '收下但留心观察，不动声色地调查', score: 2 },
      { text: '设法让别人先用这礼物，试探是否有问题', score: 3 },
    ],
  },
  {
    id: 4,
    dimension: 'P',
    text: '你无意中听到两位太监在议论一个宫中秘密。你会：',
    options: [
      { text: '当作没听到，不想卷入是非', score: 1 },
      { text: '记在心里，日后可能有用', score: 2 },
      { text: '想办法验证消息真假，并思考能否为我所用', score: 3 },
    ],
  },
  // E 情感维度 (4题)
  {
    id: 5,
    dimension: 'E',
    text: '你心仪的人因为身份原因不能和你在一起。你会：',
    options: [
      { text: '理性接受现实，把感情深埋心底', score: 1 },
      { text: '内心痛苦但表面平静，偶尔在无人时怀念', score: 2 },
      { text: '哪怕代价很大，也要想办法在一起或守护对方', score: 3 },
    ],
  },
  {
    id: 6,
    dimension: 'E',
    text: '你最信任的侍女似乎背叛了你。你会：',
    options: [
      { text: '冷静确认事实后果断做出决定，不感情用事', score: 1 },
      { text: '心痛但还是会给她一次解释的机会', score: 2 },
      { text: '无法控制失望和愤怒，质问她为什么', score: 3 },
    ],
  },
  {
    id: 7,
    dimension: 'E',
    text: '你在宫中遇到一个处境艰难的新人，她让你想起了当初的自己。你会：',
    options: [
      { text: '提醒自己不要轻易动感情，保持距离', score: 1 },
      { text: '私下给一些建议和帮助，但不过分牵涉', score: 2 },
      { text: '忍不住想要保护她，甚至冒一些风险', score: 3 },
    ],
  },
  {
    id: 8,
    dimension: 'E',
    text: '一段曾经美好的关系因为利益冲突走向破裂。你会：',
    options: [
      { text: '果断切割，利益面前感情不值一提', score: 1 },
      { text: '惋惜但承认现实，保留最后的体面', score: 2 },
      { text: '很长时间无法释怀，反复回忆曾经的美好', score: 3 },
    ],
  },
  // A 联盟维度 (4题)
  {
    id: 9,
    dimension: 'A',
    text: '一位处境与你相似的妃子暗示想和你结盟。你会：',
    options: [
      { text: '婉拒，在宫中最安全的是只靠自己', score: 1 },
      { text: '保持友好但不急于承诺，先观察她的为人', score: 2 },
      { text: '欣然接受，在后宫有盟友才能走得更远', score: 3 },
    ],
  },
  {
    id: 10,
    dimension: 'A',
    text: '你的盟友做了一件可能连累你的事。你会：',
    options: [
      { text: '立即撇清关系，自保是第一位的', score: 1 },
      { text: '暗中帮她善后，但也提醒她不要再犯', score: 2 },
      { text: '和她共同承担，共进退才是真正的联盟', score: 3 },
    ],
  },
  {
    id: 11,
    dimension: 'A',
    text: '宫中宴会上，你注意到有个不起眼的人在默默观察所有人。你会：',
    options: [
      { text: '不在意，做好自己就行', score: 1 },
      { text: '点头示意，保持基本的礼貌即可', score: 2 },
      { text: '主动搭话，了解她的身份和立场', score: 3 },
    ],
  },
  {
    id: 12,
    dimension: 'A',
    text: '你有一个重要的秘密需要保守。你会：',
    options: [
      { text: '绝对不告诉任何人，只信任自己', score: 1 },
      { text: '只告诉一个最信任的人，分担压力', score: 2 },
      { text: '与核心圈子分享，集思广益想对策', score: 3 },
    ],
  },
  // W 意志维度 (4题)
  {
    id: 13,
    dimension: 'W',
    text: '你被冤枉陷害，被罚禁足半年。你会：',
    options: [
      { text: '利用这段时间调整自己，等待风向变化', score: 1 },
      { text: '表面顺从，暗中寻找翻身的机会', score: 2 },
      { text: '即使被禁足也要想尽办法为自己申冤', score: 3 },
    ],
  },
  {
    id: 14,
    dimension: 'W',
    text: '你坚持的一个原则与生存产生了冲突。你会：',
    options: [
      { text: '灵活调整，活下去才能谈原则', score: 1 },
      { text: '尽量在不违背底线的前提下妥协', score: 2 },
      { text: '宁可付出代价也要坚守，这是我之所以是我的原因', score: 3 },
    ],
  },
  {
    id: 15,
    dimension: 'W',
    text: '你连续经历了三次失败和打击。你会：',
    options: [
      { text: '换个方向试试，也许之前的路本来就不适合', score: 1 },
      { text: '休息一下重新振作，但可能会调整策略', score: 2 },
      { text: '越挫越勇，失败只会让我更加坚定', score: 3 },
    ],
  },
  {
    id: 16,
    dimension: 'W',
    text: '宫中突然变天，曾经的靠山倒了。你会：',
    options: [
      { text: '迅速适应新局面，该低头时就低头', score: 1 },
      { text: '保持低调，静观其变后再做打算', score: 2 },
      { text: '不随波逐流，坚持自己的立场和判断', score: 3 },
    ],
  },
  // D 欲望维度 (4题)
  {
    id: 17,
    dimension: 'D',
    text: '如果可以选择，你希望在后宫达到什么位置？',
    options: [
      { text: '安安稳稳就好，不求高位只求安宁', score: 1 },
      { text: '有一定的地位和话语权，能保护自己和身边的人', score: 2 },
      { text: '当然是站到最高处，掌控自己的命运', score: 3 },
    ],
  },
  {
    id: 18,
    dimension: 'D',
    text: '你发现一个可以快速上位的机会，但需要牺牲一些东西。你会：',
    options: [
      { text: '不值得，我不想为了地位失去太多', score: 1 },
      { text: '权衡利弊，看牺牲的是什么再决定', score: 2 },
      { text: '机会难得，该出手时就出手', score: 3 },
    ],
  },
  {
    id: 19,
    dimension: 'D',
    text: '你已经获得了较高的位分和稳定的生活。你会：',
    options: [
      { text: '满足了，安心享受当下', score: 1 },
      { text: '保持现状但不放松警惕，防止失去', score: 2 },
      { text: '继续向上，没有最高只有更高', score: 3 },
    ],
  },
  {
    id: 20,
    dimension: 'D',
    text: '回顾你的后宫之路，你最希望被人记住的是：',
    options: [
      { text: '她是一个善良纯净的人，从未被这里改变', score: 1 },
      { text: '她是一个聪明通透的人，在乱世中守住了自己', score: 2 },
      { text: '她是一个传奇，用自己的方式改写了命运', score: 3 },
    ],
  },
]
