"use client";

import { useMemo, useState } from "react";

type Brand = {
  id: string;
  name: string;
  company: string;
  position: string;
  material: string;
  concept: string;
  audience: string;
  personality: string;
  slogan: string;
  sloganCn: string;
  confidence: string;
  intro: string;
  companyIntro: string;
  story: string[];
  promotion: string[];
  website: { url: string; label: string; role: string };
  images: { src: string; label: string; note: string }[];
  system: string[];
  sellingPoints: string[];
  packs: { line: string; formula: string; size: string; role: string }[];
  colors: { name: string; color: string; note: string }[];
  packaging: string[];
  style: string;
  shelf: string;
  source: { label: string; href: string }[];
};

const brands: Brand[] = [
  {
    id: "pipicat",
    name: "Pipicat",
    company: "Kelco Pet Care / Grupo Bun",
    position: "大众至中高端 · 全价格带",
    material: "矿物砂 / 白色矿物颗粒 / 植物谷物",
    concept: "让不同家庭都能找到匹配的猫砂解决方案",
    audience: "大众养猫家庭、多猫家庭、重视易购与性价比的人群",
    personality: "可靠、亲民、活泼、功能导向",
    slogan: "Seu lar sem cheiros desagradáveis!",
    sloganCn: "让家中远离难闻气味。",
    confidence: "公司与产品资料完整",
    intro:
      "1982年推出，是巴西较早的专业猫用卫生砂品牌之一。品牌从传统矿物结团砂扩展至活性炭砂、轻量砂、白色非结团颗粒、植物砂和猫砂添加剂，形成五个品牌中覆盖最广的产品组合。",
    companyIntro:
      "Kelco Pet Care隶属于Grupo Bun，业务覆盖猫砂、猫狗零食、湿粮、狗用尿垫及猫砂添加剂。旗下还包括Mitzi、Putz、Keldog和Kelcat等品牌。",
    story: [
      "1982年，Grupo Bun通过收购Kelco Sul Artefatos de Couro进入巴西宠物市场。",
      "同年先推出Mitzi——巴西早期专为猫设计的卫生砂之一，随后推出Pipicat，在消费者仍普遍使用海滩沙和花园土的时期完成品类教育。",
      "品牌以40余年的品类经验为信誉基础，从基础矿物砂逐步扩展到香型、多猫、高吸收、活性炭、白色颗粒和植物基产品。",
      "品牌故事的核心不是单一环保理念，而是“长期陪伴巴西养猫家庭、持续改善猫砂盆卫生体验”。",
    ],
    promotion: [
      "以Odor Block作为跨系列技术资产，长期强化“家中无异味”的单一记忆点。",
      "通过Classic、Floral、Multi-Cat等场景命名降低消费者选择成本。",
      "利用Instagram内容塑造轻松、拟人化的养猫日常，并以卡通猫保持大众亲和力。",
      "通过Cobasi、Petz、Petlove及传统商超形成高可见度分销；4–20kg规格支持促销和家庭囤货。",
      "推出猫砂添加剂形成交叉销售，让品牌从猫砂产品扩展为猫砂盆卫生解决方案。",
    ],
    website: {
      url: "https://www.kelcopetcare.com.br/marcas/pipicat/",
      label: "Pipicat品牌官网",
      role: "品牌内容设在Kelco Pet Care企业官网内，承担产品目录、使用说明、购买入口与社交媒体导流。",
    },
    images: [
      { src: "/packaging/pipicat-classic.png", label: "Classic 12kg", note: "品牌蓝＋绿色，大众基础线" },
      { src: "/packaging/pipicat-multicat.png", label: "Multi-Cat 12kg", note: "蓝＋橙，多猫场景识别" },
      { src: "/packaging/pipicat-bianco.png", label: "Bianco Sensitive 1.8kg", note: "蓝＋白，敏感照护升级线" },
    ],
    system: [
      "大众矿物结团砂：Classic、Floral、Campestre、Multi-Cat",
      "高性能矿物砂：Ultra Dry、Ultra Control、Ultra Light",
      "白色非结团颗粒：Bianco Original、Lavanda、Sensitive",
      "植物基猫砂：Pipicat Bio / Bio Cereais",
      "功能添加剂：花香、田园香、无香/抑菌等500g除臭添加剂",
    ],
    sellingPoints: [
      "Odor Block抑制氨味",
      "细颗粒与超细颗粒强化吸收和结团",
      "覆盖单猫、多猫、香味、敏感猫等场景",
      "4–20kg规格完整，适合大众及多猫家庭",
      "Ultra Control以活性炭强化除臭",
      "添加剂形成关联销售和复购",
    ],
    packs: [
      { line: "Classic", formula: "基础矿物结团砂", size: "4 / 12 / 20kg", role: "入门、经济型" },
      { line: "Floral / Campestre", formula: "香味矿物结团砂", size: "4 / 12 / 20kg*", role: "香氛除臭" },
      { line: "Multi-Cat", formula: "多猫矿物砂", size: "4 / 12kg", role: "多猫与高用量" },
      { line: "Ultra Dry", formula: "超细高吸收砂", size: "4 / 12kg", role: "强结团" },
      { line: "Ultra Control", formula: "膨润土＋活性炭", size: "4kg", role: "高端强除臭" },
      { line: "Ultra Light", formula: "轻量颗粒", size: "2kg", role: "便携、高吸收" },
      { line: "Bianco", formula: "白色非结团颗粒", size: "1.8kg", role: "不粘爪、健康观察" },
      { line: "Bio", formula: "植物谷物砂", size: "1.8 / 2.2kg*", role: "天然、可降解" },
      { line: "Aditivos", formula: "除臭添加剂", size: "500g", role: "香味、除臭、抑菌" },
    ],
    colors: [
      { name: "品牌蓝", color: "#0d56b3", note: "全系列统一底色" },
      { name: "Classic绿", color: "#52a34a", note: "基础、自然" },
      { name: "Floral粉", color: "#ef76a8", note: "花香、柔和" },
      { name: "Multi-Cat橙", color: "#f28b25", note: "活力、多猫" },
      { name: "Ultra黑金", color: "#26282d", note: "技术、高性能" },
    ],
    packaging: [
      "1.8–4kg常规热封软袋，12–20kg采用更宽的大规格袋",
      "蓝底、黄白大Logo构成远距离品牌识别",
      "大众线多用卡通猫，高性能线转向真实猫和技术图形",
      "正面信息密集：系列名、技术名、3–4项卖点与净含量",
      "多数包装未突出重复密封与倒砂控制结构",
    ],
    style: "大众快消、活泼、信息密集；从Classic到Ultra形成明显视觉升级。",
    shelf: "蓝黄Logo最醒目，品牌块强；子系列通过粉、绿、橙、黑金完成二次识别。",
    source: [
      { label: "Kelco品牌历史", href: "https://www.kelcopetcare.com.br/quem-somos/" },
      { label: "Pipicat官方目录", href: "https://www.kelcopetcare.com.br/para-o-seu-gato/pipicat/" },
      { label: "2024产品目录", href: "https://www.kelcopetcare.com.br/wp-content/uploads/2024/10/Kelco_Catalogo_OUT24.pdf" },
    ],
  },
  {
    id: "viva",
    name: "Viva!Verde",
    company: "Petfive Brands Brasil S.A.",
    position: "高端植物基 · 猫本位 · 环保",
    material: "玉米＋木薯",
    concept: "以猫的自然需求为中心，让高性能与可持续并行",
    audience: "城市中高收入猫主人、环保消费者、重视粉尘与尿液观察的人群",
    personality: "聪明、现代、猫本位、有社会责任",
    slogan: "Tecnologia com alma felina.",
    sloganCn: "拥有猫科灵魂的科技。",
    confidence: "公司、品牌与产品资料完整",
    intro:
      "巴西高端植物基猫砂代表品牌，强调第一家真正以猫为中心的品牌。以玉米和木薯替代矿物和刺激性化学物，通过颗粒粗细而非香型建立产品选择逻辑。",
    companyIntro:
      "运营主体Petfive Brands Brasil S.A.注册于里约热内卢。品牌强调巴西科学团队、本地可再生农作物以及与Rainforest Trust的栖息地保护合作。",
    story: [
      "品牌从巴西丰富的玉米和木薯资源出发，试图证明植物原料同样可以实现高水平结团、除臭和低粉尘表现。",
      "Viva!Verde将自己定义为“真正cat-centric”的品牌：产品文案常从猫的第一视角描述爪感、生活空间和清洁体验。",
      "品牌故事把家猫与野生猫科动物连接起来，通过Rainforest Trust合作延伸到热带森林与猫科动物栖息地保护。",
      "“Tecnologia com alma felina”把科学技术与猫科灵魂结合，形成区别于普通环保猫砂的情感叙事。",
    ],
    promotion: [
      "以猫行为专家Jackson Galaxy和兽医推荐构建专业背书。",
      "运营Viva!Vet专业内容体系，持续发布猫泌尿、呼吸、行为、饮水等健康教育。",
      "通过“Para os loucos por gatos”建立猫主人社群身份，官网设置真实养猫故事栏目。",
      "与Rainforest Trust合作，把每次购买与野生猫科栖息地保护联系起来。",
      "为宠物店提供演示套装、门店物料、社交媒体素材和经销商支持，强化现场结团演示。",
    ],
    website: {
      url: "https://www.vivaverde.com.br/",
      label: "Viva!Verde官方独立站",
      role: "五品牌中内容最完整的独立官网，覆盖消费者、兽医、宠物店、品牌故事、健康内容、经销商与在线购买。",
    },
    images: [
      { src: "/packaging/viva-finos.png", label: "Grãos Finos 4kg", note: "蓝色：最大效率与快速结团" },
      { src: "/packaging/viva-mistos.png", label: "Grãos Mistos 4kg", note: "粉色：颗粒与带砂综合平衡" },
      { src: "/packaging/viva-grossos.png", label: "Grãos Grossos 4kg", note: "橙色：最小化带砂" },
    ],
    system: [
      "Grãos Finos：细颗粒，最大使用效率与快速结团",
      "Grãos Mistos：混合颗粒，结团与带砂控制平衡",
      "Grãos Grossos：粗颗粒，最小化带砂",
      "同一核心配方，以颗粒方案和4/10kg规格构成组合",
    ],
    sellingPoints: [
      "只使用玉米和木薯",
      "植物基、可生物降解、无矿物",
      "主张零粉尘和无人工香料",
      "快速形成干燥、坚固团块",
      "浅色颗粒便于观察尿液变化",
      "Cat-centric猫本位与环保资产完整",
    ],
    packs: [
      { line: "Grãos Finos", formula: "玉米＋木薯 / 细颗粒", size: "4 / 10kg", role: "最大效率、快速结团" },
      { line: "Grãos Mistos", formula: "玉米＋木薯 / 混合颗粒", size: "4 / 10kg", role: "综合平衡" },
      { line: "Grãos Grossos", formula: "玉米＋木薯 / 粗颗粒", size: "4 / 10kg", role: "最小带砂" },
    ],
    colors: [
      { name: "品牌绿", color: "#167c4b", note: "环保母品牌资产" },
      { name: "细颗粒蓝", color: "#38a7d8", note: "洁净、效率" },
      { name: "混合颗粒粉", color: "#ec7fa6", note: "柔和、平衡" },
      { name: "粗颗粒橙", color: "#ed7b2e", note: "低带砂、活力" },
      { name: "留白", color: "#f6f2e9", note: "高端、现代" },
    ],
    packaging: [
      "4kg与10kg软袋保持高度统一的正面比例",
      "绿色母品牌区＋白色留白＋蓝/粉/橙系列色",
      "不同SKU配不同品种真实猫，强化猫本位",
      "底部以Technology / Performance / Sustainability三栏表达",
      "无透明窗口，完整保留高端品牌画面",
    ],
    style: "现代、高端、编辑化；更接近天然消费品和高端宠物食品。",
    shelf: "绿色统一品牌块，蓝/粉/橙直接区分颗粒，是五品牌中最成熟的包装系统。",
    source: [
      { label: "品牌介绍", href: "https://www.vivaverde.com.br/viva-verde" },
      { label: "细颗粒", href: "https://www.vivaverde.com.br/viva-verde-graos-finos/p" },
      { label: "混合颗粒", href: "https://www.vivaverde.com.br/viva-verde-graos-mistos/p" },
      { label: "粗颗粒", href: "https://www.vivaverde.com.br/viva-verde-graos-grossos/p" },
    ],
  },
  {
    id: "catbio",
    name: "Catbio",
    company: "Flexipet体系运营；Claripet与官网关联",
    position: "高性价比植物基 · 电商导向",
    material: "玉米＋木薯 / 纯木薯 / 豆腐",
    concept: "让天然、可持续猫砂以更丰富原料和可接受价格进入日常",
    audience: "线上购物者、植物砂入门用户、多猫家庭与价格敏感人群",
    personality: "务实、热情、直接、功能密集",
    slogan: "Natural, sustentável e do jeitinho que seu gato merece.",
    sloganCn: "天然、可持续，正是你的猫应得的选择。",
    confidence: "品牌资料完整；法定主体需谨慎表述",
    intro:
      "巴西本土植物基猫砂品牌，以天然、安全、性价比和多原料选择为核心。产品从玉米木薯扩展到纯木薯和豆腐砂，正面包装强调结团、除臭、零粉尘与经济性。",
    companyIntro:
      "官网使用Flexipet联系邮箱，投诉处理也以FlexiPet | CatBio名义出现；当前企业资料又将catbio.com.br与Claripet Comércio de Produtos Ltda.关联。公开信息不足以把某一主体直接认定为制造商。",
    story: [
      "官网将品牌起点描述为“对猫的爱与对环境的承诺”，定位为100%巴西本土品牌。",
      "品牌希望为有环保意识的猫主人提供安全、有效且可持续的日常替代方案。",
      "故事主轴围绕植物来源、避免刺激性化学物和照顾敏感猫展开，强调照顾猫不仅是食物和陪伴，也包括卫生环境。",
      "从玉米木薯扩展到纯木薯和豆腐砂，体现其通过原料创新寻找差异化和价格空间。",
    ],
    promotion: [
      "以Shopee、Mercado Livre和品牌独立站等电商渠道为核心，强调价格、包邮、分期和评价。",
      "包装与详情页重复展示结团、除臭、零粉尘、高产出等转化型卖点。",
      "利用Max Clean、Super Clean、Ultra Clean建立性能等级感。",
      "通过多件套、大包装组合和多猫适用信息促进囤货。",
      "传播重点偏交易和产品证明，品牌文化、专业合作及线下活动资产相对有限。",
    ],
    website: {
      url: "https://www.catbio.com.br/",
      label: "Catbio官方商城",
      role: "以直接销售为核心，集中展示产品分类、促销、包邮、支付与品牌简介；企业主体信息仍需进一步透明化。",
    },
    images: [
      { src: "/packaging/catbio-max.png", label: "Max Clean 4kg", note: "米白＋橙，细颗粒与快速吸收" },
      { src: "/packaging/catbio-mandioca.png", label: "100% Mandioca 4kg", note: "绿色，纯木薯原料识别" },
      { src: "/packaging/catbio-tofu.png", label: "Tofu Natural 2kg", note: "真空袋，天然食品化表达" },
    ],
    system: [
      "玉米＋木薯：Max Clean细颗粒、Super Clean中颗粒、Ultra Clean混合颗粒",
      "纯木薯：Catbio Mandioca中颗粒",
      "豆腐砂：Natural、Lavanda、Carvão Ativado",
      "以原料 × 颗粒 × 香型/活性炭构成多维组合",
    ],
    sellingPoints: [
      "植物原料与可生物降解",
      "结团、除臭、低粉尘/零粉尘",
      "玉米木薯、纯木薯、豆腐三类原料",
      "强调使用效率和月度经济性",
      "部分产品按条件主张可冲厕",
      "覆盖幼猫、成年猫和老年猫",
    ],
    packs: [
      { line: "Max Clean", formula: "玉米＋木薯 / 细颗粒", size: "4kg", role: "快速吸收、多猫" },
      { line: "Super Clean", formula: "玉米＋木薯 / 中颗粒", size: "4kg", role: "平衡、减少带砂" },
      { line: "Ultra Clean", formula: "玉米＋木薯 / 混合颗粒", size: "4kg", role: "综合性能" },
      { line: "Mandioca", formula: "100%木薯淀粉", size: "4kg", role: "单一植物原料" },
      { line: "Tofu", formula: "植物豆腐基材", size: "2kg", role: "原味/薰衣草/活性炭" },
    ],
    colors: [
      { name: "米白底", color: "#efe5cf", note: "天然、原料感" },
      { name: "Max橙", color: "#e87826", note: "细颗粒、快速吸收" },
      { name: "Super绿", color: "#4b8d50", note: "中颗粒、植物" },
      { name: "Tofu棕", color: "#9b7457", note: "天然食品感" },
      { name: "活性炭黑", color: "#333333", note: "强除臭" },
    ],
    packaging: [
      "玉米/木薯系列采用4kg软袋；豆腐砂采用2kg真空紧缩袋",
      "米白底、绿色猫轮廓、真实猫和原料说明并置",
      "正面承载大量电商式卖点与功能图标",
      "新旧包装可见Flexipet与Claripet标识切换",
      "豆腐砂真空结构有利于降低运输体积",
    ],
    style: "电商转化型、参数密集；天然底色明确，但品牌层级稍显拥挤。",
    shelf: "橙与绿能区分产品，但CAT BIO、系列名、Super Premium和运营方Logo相互竞争。",
    source: [
      { label: "品牌介绍", href: "https://www.catbio.com.br/pages/sobre-nos" },
      { label: "产品目录", href: "https://www.catbio.com.br/" },
      { label: "木薯产品", href: "https://www.catbio.com.br/products/areia-higienica-gatos-catbio-mandioca" },
      { label: "豆腐产品", href: "https://www.catbio.com.br/products/areia-higienica-gatos-catbio-tofu-2-kg" },
    ],
  },
  {
    id: "kadi",
    name: "KÄDI",
    company: "官网未清楚披露猫砂法定主体",
    position: "天然植物基 · 精简产品线",
    material: "玉米＋木薯",
    concept: "用简洁天然配方同时照顾宠物、主人和自然",
    audience: "希望从传统砂转向植物砂、重视简单配方的家庭",
    personality: "温暖、自然、陪伴、朴素",
    slogan: "A marca companheira do seu Pet.",
    sloganCn: "陪伴你宠物的品牌。",
    confidence: "产品资料完整；公司归属信息有限",
    intro:
      "巴西本土宠物品牌，猫砂以天然、环保及猫—主人—自然三方利益为核心。产品线集中，通过细颗粒和混合颗粒完成主要选择。",
    companyIntro:
      "官网同时经营猫砂和宠物零食，产品在巴西及部分南美市场销售，但未清楚披露猫砂业务法定公司名称、成立时间或CNPJ。公开信息不足以可靠确认制造商。",
    story: [
      "品牌以“对动物的热爱是最大动力”为情感起点，把自己定义为陪伴宠物的品牌。",
      "猫砂叙事强调产品同时为主人、猫和自然创造价值，而不是只解决异味。",
      "玉米和木薯作为巴西本地植物原料，是其天然、可降解和无化学残留故事的核心。",
      "目前公开故事较短，品牌成立背景、创始团队、生产技术和企业发展历程仍缺少系统披露。",
    ],
    promotion: [
      "官网以直接电商销售、产品卖点和市场评价为主要内容。",
      "强调“主要Marketplace超过7,000条评价”，以社会证明弥补品牌历史信息不足。",
      "同时销售宠物咀嚼零食，利用“陪伴宠物”概念做跨品类延伸。",
      "通过Petz、Mercado Livre、Shopee等渠道扩大覆盖，并提及进入部分南美国家。",
      "传播重点集中在天然配方、坚固结团、无粉尘和健康观察，尚未形成强IP或大型品牌项目。",
    ],
    website: {
      url: "https://kadi.com.br/",
      label: "KÄDI官方商城",
      role: "承担猫砂与宠物零食销售、产品卖点、常见问题和Marketplace评价展示；公司历史披露较少。",
    },
    images: [
      { src: "/packaging/kadi-finos.jpg", label: "Grãos Finos 4kg", note: "奶油白＋绿色，细颗粒" },
      { src: "/packaging/kadi-mistos.jpg", label: "Grãos Mistos 4kg", note: "奶油白＋橙/绿，混合颗粒" },
    ],
    system: [
      "Grãos Finos：细颗粒",
      "Grãos Mistos：混合颗粒",
      "同一玉米木薯配方 × 两种颗粒 × 2/4kg规格",
      "品牌另有犬猫咀嚼零食，但不属于猫砂体系",
    ],
    sellingPoints: [
      "玉米和木薯天然配方",
      "100%可生物降解主张",
      "不含化学残留与人工香味",
      "高吸收、坚固团块",
      "浅色颗粒便于观察排泄变化",
      "对敏感猫较友好",
    ],
    packs: [
      { line: "Grãos Finos", formula: "玉米＋木薯 / 细颗粒", size: "2 / 4kg", role: "结团、爪感、效率" },
      { line: "Grãos Mistos", formula: "玉米＋木薯 / 混合颗粒", size: "2 / 4kg", role: "结团与带砂平衡" },
    ],
    colors: [
      { name: "奶油白", color: "#eee2c5", note: "天然、朴素" },
      { name: "植物绿", color: "#5f7e45", note: "细颗粒、环保" },
      { name: "农作物橙", color: "#d78035", note: "混合颗粒、原料" },
      { name: "深灰字", color: "#333531", note: "品牌与信息" },
    ],
    packaging: [
      "2/4kg常规热封软袋，无透明窗口",
      "奶油白底，辅以绿色或橙色区分颗粒",
      "真实虎斑猫/行走猫与玉米、木薯原料图并置",
      "正面使用低粉尘、结团、除臭、吸收图标",
      "渠道可见不同猫形象与配色版本，可能处于包装更新期",
    ],
    style: "自然、朴素、农作物感；比Catbio留白更多，但高级感和识别规则较弱。",
    shelf: "植物原料容易理解，Logo与SKU颜色体系需要强化，复购识别弱于前三个品牌。",
    source: [
      { label: "品牌官网", href: "https://kadi.com.br/" },
      { label: "细颗粒", href: "https://kadi.com.br/produto/areia-higienica-kadi-para-gatos-graos-finos-2kg/" },
      { label: "混合颗粒", href: "https://kadi.com.br/produto/areia-higienica-kadi-para-gatos-graos-mistos-2kg/" },
    ],
  },
  {
    id: "wisecat",
    name: "WiseCat / Bionature",
    company: "Wisepet · Tapejara, Paraná",
    position: "纯木薯专业化 · 中高端",
    material: "100%木薯衍生原料",
    concept: "以纯木薯专业技术连接猫的健康舒适与环境责任",
    audience: "重视木薯原料、敏感爪、尿液观察和专业建议的人群",
    personality: "专业、洁净、理性、关怀",
    slogan: "Qualidade, sustentabilidade e bem-estar para o seu gato.",
    sloganCn: "为猫带来品质、可持续与健康舒适。",
    confidence: "产品资料较完整；正式Slogan与公司历史有限",
    intro:
      "WiseCat是品牌识别，Bionature承担核心产品系列角色。品牌聚焦天然木薯猫砂，以可降解、低粉尘、柔软爪感、结团和除臭为主要定位。",
    companyIntro:
      "官网版权主体显示Wisepet，地址位于巴拉那州Tapejara。公开页面未充分披露成立时间、CNPJ或生产规模，因此不宜描述为大型综合宠物集团。",
    story: [
      "WiseCat以巴西木薯衍生原料为技术起点，强调天然、可再生和低环境影响。",
      "Bionature系列承担主要产品故事：从Trad基础性能，发展到Sensitive Ultra White和Performance功能升级。",
      "Sensitive把浅色猫砂与尿液健康观察、敏感爪舒适度连接，形成较明确的护理场景。",
      "品牌故事偏专业产品逻辑，创立历程和人物故事披露有限。",
    ],
    promotion: [
      "官网设置经销商、零售商、联盟营销和兽医合作入口，渠道分工较清楚。",
      "WiseVet项目尝试通过兽医专业网络构建推荐和教育。",
      "以Bionature Sensitive Ultra White等长产品名强化专业技术和高端感。",
      "通过颗粒、粉尘、结团、颜色和相对价格的对比内容帮助消费者选择。",
      "电商与专业渠道并行，但母品牌WiseCat和系列品牌Bionature的主次仍需统一。",
    ],
    website: {
      url: "https://wisecat.com.br/",
      label: "WiseCat官方商城",
      role: "覆盖产品销售、品牌介绍、经销商、零售商、联盟营销与WiseVet兽医项目，是渠道合作导向较强的官网。",
    },
    images: [
      { src: "/packaging/wisecat-trad.webp", label: "Bionature Trad", note: "基础天然木薯线" },
      { src: "/packaging/wisecat-sensitive.webp", label: "Sensitive Ultra White", note: "蓝白洁净、敏感照护" },
      { src: "/packaging/wisecat-performance.webp", label: "Performance WCB", note: "技术升级、综合性能" },
    ],
    system: [
      "Bionature Trad / Super Premium：基础中颗粒与性价比",
      "Bionature Sensitive Ultra White：细颗粒、敏感爪和健康观察",
      "Bionature Performance：混合颗粒、低粉尘和性能强化",
      "纯木薯配方 × 颗粒粗细 × 功能定位",
    ],
    sellingPoints: [
      "100%木薯、天然、可生物降解",
      "不添加刺激性化学物和人工香精",
      "坚固结团与持久控制氨味",
      "低粉尘、柔软爪感、高吸收",
      "浅色颗粒便于观察尿液",
      "部分产品按说明可少量冲厕",
    ],
    packs: [
      { line: "Trad / Super Premium", formula: "木薯 / 中颗粒", size: "2 / 4 / 10kg*", role: "基础性能与性价比" },
      { line: "Sensitive Ultra White", formula: "木薯 / 细颗粒", size: "2 / 4 / 10kg", role: "敏感爪、健康观察" },
      { line: "Performance", formula: "木薯 / 混合颗粒", size: "渠道规格不同", role: "低粉尘、综合性能" },
    ],
    colors: [
      { name: "洁净白", color: "#f3f4ef", note: "超白、健康观察" },
      { name: "Sensitive蓝", color: "#297fbd", note: "洁净、专业" },
      { name: "叶片绿", color: "#5ca66a", note: "植物、天然" },
      { name: "Performance深色", color: "#354653", note: "技术、高性能" },
    ],
    packaging: [
      "2/4/10kg软袋，白色上半部＋高饱和系列色下半部",
      "WiseCat为品牌，Bionature为更醒目的系列名",
      "Sensitive以亮蓝、白色、绿色叶片和灰猫构成",
      "正面集中100% Natural、轻量、结团与除臭信息",
      "不同渠道仍可见包装版本差异",
    ],
    style: "专业、洁净、带医护感；Sensitive的视觉成熟度最高。",
    shelf: "蓝白对比强，但WiseCat与Bionature的双品牌关系可能让消费者先记住系列而非母品牌。",
    source: [
      { label: "WiseCat官网", href: "https://wisecat.com.br/" },
      { label: "Bionature Sensitive", href: "https://wisecat.com.br/produtos/bionature-sensitive/" },
      { label: "零售产品资料", href: "https://www.pethere.com.br/produtos/areia-higienica-wisecat-bionature/" },
    ],
  },
];

const compareRows = [
  ["公司透明度", "高", "高", "中", "低", "中"],
  ["产品宽度", "最宽", "聚焦", "多原料", "精简", "功能分层"],
  ["核心原料", "矿物＋植物", "玉米＋木薯", "三类植物基", "玉米＋木薯", "纯木薯"],
  ["核心区隔", "功能/价格/场景", "颗粒粗细", "原料＋颗粒", "颗粒粗细", "功能＋颗粒"],
  ["包装系统性", "强", "最强", "中", "中偏弱", "较强"],
  ["货架识别", "蓝黄大Logo", "绿＋蓝粉橙", "米白＋橙绿", "奶油白＋绿橙", "蓝白专业感"],
];

const socialProfiles: Record<string, {
  facebook: { label: string; href?: string; followers: string };
  instagram: { label: string; href?: string; followers: string };
  tiktok: { label: string; href?: string; followers: string };
  twitter: { label: string; href?: string; followers: string };
}> = {
  pipicat: {
    facebook: { label: "Pipicatoficial", href: "https://www.facebook.com/Pipicatoficial", followers: "92,997 赞" },
    instagram: { label: "@pipicatoficial", href: "https://www.instagram.com/pipicatoficial/", followers: "46K" },
    tiktok: { label: "官网未提供TikTok入口", followers: "—" },
    twitter: { label: "未发现官方账号", followers: "—" },
  },
  viva: {
    facebook: { label: "vivaverdeareia", href: "https://www.facebook.com/vivaverdeareia", followers: "2,362 赞" },
    instagram: { label: "@vivaverdeareia", href: "https://www.instagram.com/vivaverdeareia/", followers: "87K" },
    tiktok: { label: "@vivaverdeareia", href: "https://www.tiktok.com/@vivaverdeareia", followers: "4,384" },
    twitter: { label: "未发现官方账号", followers: "—" },
  },
  catbio: {
    facebook: { label: "未发现可核实官方主页", followers: "—" },
    instagram: { label: "@catbioareia", href: "https://www.instagram.com/catbioareia", followers: "4,473" },
    tiktok: { label: "未发现官方账号", followers: "—" },
    twitter: { label: "未发现官方账号", followers: "—" },
  },
  kadi: {
    facebook: { label: "官网链接为空／未核实", followers: "—" },
    instagram: { label: "官网未公开／未核实", followers: "—" },
    tiktok: { label: "未发现官方账号", followers: "—" },
    twitter: { label: "未发现官方账号", followers: "—" },
  },
  wisecat: {
    facebook: { label: "未发现可核实官方主页", followers: "—" },
    instagram: { label: "@usewisecat", href: "https://www.instagram.com/usewisecat/", followers: "9,968" },
    tiktok: { label: "@use.wisecat", href: "https://www.tiktok.com/@use.wisecat", followers: "224" },
    twitter: { label: "未发现官方账号", followers: "—" },
  },
};

export default function Home() {
  const [active, setActive] = useState("all");
  const [query, setQuery] = useState("");
  const visibleBrands = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return brands.filter((brand) => {
      const activeMatch = active === "all" || brand.id === active;
      const haystack = [
        brand.name,
        brand.company,
        brand.position,
        brand.material,
        brand.intro,
        ...brand.system,
        ...brand.sellingPoints,
      ]
        .join(" ")
        .toLowerCase();
      return activeMatch && (!normalized || haystack.includes(normalized));
    });
  }, [active, query]);

  return (
    <main>
      <header className="hero">
        <nav className="topbar">
          <a className="brandmark" href="#top" aria-label="返回顶部">
            <span>BR</span>
            <strong>CAT LITTER INDEX</strong>
          </a>
          <div className="top-actions">
            <a href="#matrix">横向比较</a>
            <a href="#brands">品牌档案</a>
            <button onClick={() => window.print()}>打印 / PDF</button>
          </div>
        </nav>
        <div id="top" className="hero-grid">
          <div>
            <p className="eyebrow">BRAZIL · CATEGORY INTELLIGENCE · 2026</p>
            <h1>巴西猫砂品牌<br />竞争与包装研究</h1>
            <p className="hero-copy">
              Pipicat、Viva!Verde、Catbio、KÄDI 与 WiseCat/Bionature 的品牌、公司、Slogan、
              产品体系、核心卖点、产品结构与包装视觉整合报告。
            </p>
            <div className="hero-meta">
              <span>5个品牌</span><span>21+产品线</span><span>矿物与植物基双赛道</span>
            </div>
          </div>
          <div className="hero-card">
            <p>核心判断</p>
            <h2>市场正从“矿物砂功能细分”转向“植物基原料与颗粒体验”。</h2>
            <div className="signal-list">
              <span><b>01</b>Pipicat以全品类和大众渠道构筑规模优势</span>
              <span><b>02</b>Viva!Verde建立最完整的高端植物基品牌资产</span>
              <span><b>03</b>Catbio、KÄDI、WiseCat围绕木薯和颗粒效率竞争</span>
            </div>
          </div>
        </div>
      </header>

      <section className="section overview">
        <div className="section-head">
          <div><p className="eyebrow">MARKET MAP</p><h2>五个品牌，五种竞争角色</h2></div>
          <p>从全价格带领导者到纯木薯专业品牌，组合宽度与包装系统性决定货架角色。</p>
        </div>
        <div className="role-grid">
          {brands.map((brand, index) => (
            <button key={brand.id} className={`role-card role-${brand.id}`} onClick={() => { setActive(brand.id); document.querySelector("#brands")?.scrollIntoView({ behavior: "smooth" }); }}>
              <span>0{index + 1}</span>
              <h3>{brand.name}</h3>
              <p>{brand.position}</p>
              <small>{brand.material}</small>
            </button>
          ))}
        </div>
        <div className="comparison-title">
          <div>
            <p className="eyebrow">BRAND & SOCIAL SNAPSHOT</p>
            <h3>品牌基础信息与官网社交媒体对比</h3>
          </div>
          <p>核查逻辑：品牌官网社媒入口 → 对应平台主页 → 公开粉丝数据。核查日期：2026-07-27；官网未链接的同名账号不计入官方账号。</p>
        </div>
        <div className="concept-table-wrap">
          <table className="concept-table social-table">
            <thead>
              <tr>
                <th>品牌</th>
                <th>所属公司</th>
                <th>Slogan</th>
                <th>Facebook</th>
                <th>Instagram</th>
                <th>TikTok</th>
                <th>X / Twitter</th>
              </tr>
            </thead>
            <tbody>
              {brands.map((brand) => {
                const profiles = socialProfiles[brand.id];
                return (
                  <tr key={`${brand.id}-social`}>
                    <td><strong>{brand.name}</strong><a href={brand.website.url} target="_blank" rel="noreferrer">品牌官网 ↗</a></td>
                    <td>{brand.company}</td>
                    <td><strong className="slogan-original">{brand.slogan}</strong><small>{brand.sloganCn}</small></td>
                    {[profiles.facebook, profiles.instagram, profiles.tiktok, profiles.twitter].map((profile, index) => (
                      <td key={`${brand.id}-${index}`}>
                        {profile.href
                          ? <a href={profile.href} target="_blank" rel="noreferrer">{profile.label} ↗</a>
                          : <span className="social-missing">{profile.label}</span>}
                        <small>粉丝：{profile.followers}</small>
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="concept-table-wrap">
          <table className="concept-table">
            <thead>
              <tr>
                <th>品牌</th>
                <th>品牌概念</th>
                <th>目标人群</th>
                <th>品牌个性</th>
                <th>核心证明</th>
                <th>官网</th>
              </tr>
            </thead>
            <tbody>
              {brands.map((brand) => (
                <tr key={brand.id}>
                  <td><strong>{brand.name}</strong><small>{brand.position}</small></td>
                  <td>{brand.concept}</td>
                  <td>{brand.audience}</td>
                  <td>{brand.personality}</td>
                  <td>{brand.material}</td>
                  <td><a href={brand.website.url} target="_blank" rel="noreferrer">访问官网 ↗</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="matrix" className="section matrix-section">
        <div className="section-head">
          <div><p className="eyebrow">COMPETITIVE MATRIX</p><h2>横向竞争矩阵</h2></div>
          <p>产品体系指品牌如何划分产品线；产品结构指原料、颗粒、功能与规格的组合。</p>
        </div>
        <div className="table-wrap">
          <table className="matrix">
            <thead><tr><th>维度</th>{brands.map((brand) => <th key={brand.id}>{brand.name}</th>)}</tr></thead>
            <tbody>{compareRows.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={cell + index}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </div>
        <div className="two-routes">
          <article>
            <span>A</span><div><h3>传统全品类路线</h3><p><strong>Pipicat</strong>以矿物砂为基本盘，通过香型、活性炭、轻量化、白色颗粒和植物砂覆盖更多价位及使用场景。</p></div>
          </article>
          <article>
            <span>B</span><div><h3>植物基专业路线</h3><p><strong>Viva!Verde / Catbio / KÄDI / WiseCat</strong>以玉米、木薯和豆腐切入，用结团、除臭、低粉尘及环保替代传统矿物砂。</p></div>
          </article>
        </div>
      </section>

      <section className="section packaging-map">
        <div className="section-head">
          <div><p className="eyebrow">PACKAGING SYSTEM</p><h2>包装识别地图</h2></div>
          <p>同一种颜色在不同品牌中可能代表不同功能，跨品牌比较不能仅靠颜色推断颗粒或香型。</p>
        </div>
        <div className="visual-axis">
          <div className="axis-label"><span>大众快消</span><span>高端生活方式</span></div>
          <div className="axis-line">
            <i style={{ left: "8%" }}>Pipicat</i><i style={{ left: "29%" }}>Catbio</i><i style={{ left: "48%" }}>KÄDI</i><i style={{ left: "69%" }}>WiseCat</i><i style={{ left: "89%" }}>Viva!Verde</i>
          </div>
        </div>
        <div className="pack-grid">
          {brands.map((brand) => (
            <article key={brand.id} className="pack-card">
              <div className="pack-title"><h3>{brand.name}</h3><span>{brand.style}</span></div>
              <div className="swatches">{brand.colors.map((color) => <div key={color.name}><i style={{ background: color.color }} /><b>{color.name}</b><small>{color.note}</small></div>)}</div>
              <p>{brand.shelf}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="brands" className="section brand-section">
        <div className="section-head brand-head">
          <div><p className="eyebrow">BRAND DOSSIERS</p><h2>品牌完整档案</h2></div>
          <div className="controls">
            <label><span>搜索</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="输入原料、产品线或卖点" /></label>
            <div className="filters">
              <button className={active === "all" ? "active" : ""} onClick={() => setActive("all")}>全部</button>
              {brands.map((brand) => <button key={brand.id} className={active === brand.id ? "active" : ""} onClick={() => setActive(brand.id)}>{brand.name}</button>)}
            </div>
          </div>
        </div>

        <div className="dossiers">
          {visibleBrands.map((brand, index) => (
            <article key={brand.id} className={`dossier dossier-${brand.id}`}>
              <div className="dossier-index">{String(index + 1).padStart(2, "0")}</div>
              <div className="dossier-main">
                <div className="identity">
                  <div><p className="brand-label">BRAND PROFILE</p><h2>{brand.name}</h2><p className="position">{brand.position}</p></div>
                  <div className="confidence"><span>信息状态</span><strong>{brand.confidence}</strong></div>
                </div>
                <div className="brand-intro">
                  <p>{brand.intro}</p>
                  <blockquote><span>“{brand.slogan}”</span><small>{brand.sloganCn}</small></blockquote>
                </div>
                <div className="company-box"><span>公司 / 运营主体</span><h3>{brand.company}</h3><p>{brand.companyIntro}</p></div>
                <a className="website-card" href={brand.website.url} target="_blank" rel="noreferrer">
                  <div><span>OFFICIAL WEBSITE</span><h3>{brand.website.label}</h3><p>{brand.website.role}</p></div>
                  <strong>访问官网 ↗</strong>
                </a>

                <div className="narrative-grid">
                  <div>
                    <div className="narrative-title"><span>01</span><h3>品牌故事</h3></div>
                    <ol>{brand.story.map((item) => <li key={item}>{item}</li>)}</ol>
                  </div>
                  <div>
                    <div className="narrative-title"><span>02</span><h3>品牌推广与传播</h3></div>
                    <ol>{brand.promotion.map((item) => <li key={item}>{item}</li>)}</ol>
                  </div>
                </div>

                <div className="content-grid">
                  <div><h3>产品体系</h3><ul>{brand.system.map((item) => <li key={item}>{item}</li>)}</ul></div>
                  <div><h3>核心卖点</h3><ul className="checks">{brand.sellingPoints.map((item) => <li key={item}>{item}</li>)}</ul></div>
                </div>

                <div className="subsection"><div className="subhead"><h3>产品结构</h3><span>{brand.material}</span></div>
                  <div className="product-table">
                    {brand.packs.map((pack) => <div key={pack.line}><strong>{pack.line}</strong><span>{pack.formula}</span><span>{pack.size}</span><em>{pack.role}</em></div>)}
                  </div>
                </div>

                <div className="subsection packaging-detail">
                  <div className="subhead"><h3>包装与视觉</h3><span>{brand.style}</span></div>
                  <div className={`product-gallery gallery-${brand.id}`}>
                    {brand.images.map((image) => (
                      <figure key={image.src}>
                        <a className="product-image" href={image.src} target="_blank" rel="noreferrer" title="点击查看完整包装原图">
                          <img src={image.src} alt={`${brand.name} ${image.label}产品包装`} loading="lazy" />
                          <span>查看完整图 ↗</span>
                        </a>
                        <figcaption><strong>{image.label}</strong><span>{image.note}</span></figcaption>
                      </figure>
                    ))}
                  </div>
                  <p className="image-note">包装图按原始比例完整展示；点击图片可查看原图。素材来自品牌官网公开商品资料，不同销售渠道可能同时存在新旧包装。</p>
                  <div className="color-strip">{brand.colors.map((color) => <div key={color.name} style={{ background: color.color }} title={`${color.name}：${color.note}`} />)}</div>
                  <div className="packaging-copy"><ul>{brand.packaging.map((item) => <li key={item}>{item}</li>)}</ul><aside><span>货架判断</span><p>{brand.shelf}</p></aside></div>
                </div>

                <footer className="sources"><span>主要来源</span>{brand.source.map((source) => <a href={source.href} target="_blank" rel="noreferrer" key={source.href}>{source.label} ↗</a>)}</footer>
              </div>
            </article>
          ))}
          {visibleBrands.length === 0 && <div className="empty">没有匹配结果，请尝试“木薯”“多猫”或“零粉尘”。</div>}
        </div>
      </section>

      <section className="section conclusions">
        <div className="section-head">
          <div><p className="eyebrow">STRATEGIC TAKEAWAYS</p><h2>对新品开发的启示</h2></div>
          <p>把五个品牌的优势重新组合，可以得到更有效的巴西市场新品框架。</p>
        </div>
        <div className="takeaway-grid">
          <article><span>01</span><h3>识别</h3><p>学习Pipicat：保留一个高对比母品牌块，确保3米外仍能识别。</p></article>
          <article><span>02</span><h3>系统</h3><p>学习Viva!Verde：让每种颜色长期固定对应一种颗粒利益。</p></article>
          <article><span>03</span><h3>转化</h3><p>学习Catbio：正面保留结团、除臭、粉尘和原料四个购买理由。</p></article>
          <article><span>04</span><h3>专业</h3><p>学习WiseCat：用洁净色和健康观察场景提高产品专业感。</p></article>
          <article><span>05</span><h3>原料</h3><p>学习KÄDI：直接展示玉米、木薯等原料，降低消费者理解成本。</p></article>
        </div>
      </section>

      <footer className="page-footer">
        <div><strong>Brazil Cat Litter Index</strong><p>基于品牌官网、公司页面与巴西主流宠物零售渠道的公开资料整理。</p></div>
        <div><span>研究日期</span><strong>2026.07</strong><small>* 不同渠道可能存在新旧包装、规格或翻译差异。</small></div>
      </footer>
    </main>
  );
}
