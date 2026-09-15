const LOCALES = {
  zh: "中文",
  en: "English"
};

const COPY = {
  zh: {
    htmlLang: "zh-CN",
    languageLabel: "语言",
    back: "返回首页",
    openDetail: "点击查看详情",
    source: "数据来自用户提供的研究文档，截止 2026-08-23。带有口径差异或“需核实”的数字，公开引用前应回到一手来源确认。",
    hero: {
      eyebrow: "全球医药产业深度调研",
      title: "医药把技术兑成定价权，但天花板由支付方决定。",
      intro: "这不是通用网页模板，而是把原报告压缩成一张可扫读、可点击、可分享的研究界面。首页抓住四个关键问题：钱在哪里、价值怎么被拿走、超级赢家怎么产生、未来五年看什么。",
      primary: "阅读四个模块",
      secondary: "查看详情页",
      panelTitle: "核心不对称",
      panelNote: "销量全球化，利润美国化"
    },
    metrics: [
      { value: "~1.7T", label: "2025 全球处方药市场，标价口径" },
      { value: "~50%", label: "美国品牌药支出占全球接近一半" },
      { value: "105", label: "2026H1 中国创新药 License-out 笔数" },
      { value: "5-6.5%", label: "已披露首付款占潜在总额比例" }
    ],
    bars: [
      { label: "美国人口占比", value: "4%", width: 4, color: "#b42318" },
      { label: "美国品牌药支出", value: "~50%", width: 50, color: "#0f766e" },
      { label: "美国单一市场净利润贡献", value: "60-80%", width: 70, color: "#a66f00" }
    ],
    tweet: {
      kicker: "English X draft",
      title: "先发 X 的核心表达",
      text: "Pharma can turn science into pricing power, but payers set the ceiling. China proved it can make competitive molecules. The next 5 years answer three questions: who buys, who pays, and how much value Chinese companies can actually keep."
    },
    modulesTitle: "四个定制模块",
    modulesIntro: "每个模块对应不同阅读目的：有的看政策冲击，有的看交易结构，有的看公司打分，有的看未来机会。点击进入后展示结构不同。",
    insightTitle: "这份报告真正要筛掉什么",
    insightIntro: "原文信息很多，网页版需要把信息密度和判断层级拆开。首页保留结论，详情页放证据和推演。",
    factRows: [
      ["第一层", "支付方决定利润池。美国药价如果重构，全球创新药 DCF 的峰值销售和折现率都要重算。"],
      ["第二层", "中国创新药出海不是情怀，是支付能力差异造成的倍数题。同一分子在美国和中国的商业价值可能相差 10-30 倍。"],
      ["第三层", "License-out 的总额很大，但多数是或有里程碑。真正的价值捕获要看首付款、共担权益、自建商业化。"],
      ["第四层", "AI、ADC、TCE、GLP-1、CXO 都不是孤立热点，只有能穿过支付、临床、制造和商业化的组合才有上限。"]
    ],
    monitorTitle: "2026-2030 跟踪变量",
    monitors: [
      ["A", "美国药价", "MFN 是否法典化、IRA 谈判扩围、TrumpRx 对净价影响。"],
      ["B", "License-out", "总额是否维持，首付款比例能否从 5-6.5% 走向 8-12%。"],
      ["C", "国内支付", "丙类目录、基药目录、DRG 除外支付和商保赔付是否真正起量。"],
      ["D", "技术供给", "代谢、ADC、自免 TCE / 体内 CAR-T、CXO/CDMO 的数据与订单兑现。"]
    ],
    detailNav: "切换模块"
  },
  en: {
    htmlLang: "en",
    languageLabel: "Language",
    back: "Back to home",
    openDetail: "Open detail",
    source: "Data is distilled from the user-provided research document, cut off on 2026-08-23. Figures marked with source conflicts or verification notes should be checked against primary sources before public use.",
    hero: {
      eyebrow: "Global pharma research brief",
      title: "Pharma converts science into pricing power, but payers set the ceiling.",
      intro: "This is a customized research interface, not a generic landing page. The first screen frames four questions: where the profit pool sits, how value is captured, how super-winners emerge, and what to watch over the next five years.",
      primary: "Read the modules",
      secondary: "Open details",
      panelTitle: "Core asymmetry",
      panelNote: "Volume is global. Profit is US-centric."
    },
    metrics: [
      { value: "~$1.7T", label: "2025 global prescription-drug market, list-price basis" },
      { value: "~50%", label: "US share of global branded-drug spending" },
      { value: "105", label: "China innovative-drug license-out deals in 2026H1" },
      { value: "5-6.5%", label: "Disclosed upfront share of potential deal value" }
    ],
    bars: [
      { label: "US share of population", value: "4%", width: 4, color: "#b42318" },
      { label: "US share of branded-drug spending", value: "~50%", width: 50, color: "#0f766e" },
      { label: "US contribution to net profit of global blockbusters", value: "60-80%", width: 70, color: "#a66f00" }
    ],
    tweet: {
      kicker: "English X draft",
      title: "Core message for X",
      text: "Pharma can turn science into pricing power, but payers set the ceiling. China proved it can make competitive molecules. The next 5 years answer three questions: who buys, who pays, and how much value Chinese companies can actually keep."
    },
    modulesTitle: "Four customized modules",
    modulesIntro: "Each module has a different job: policy impact, deal structure, company scoring, and future opportunity maps. Detail pages use different layouts instead of one repeated template.",
    insightTitle: "What the report is really filtering",
    insightIntro: "The original report is dense. The web version separates high-level judgments from evidence and scenarios so mobile readers can scan first, then drill down.",
    factRows: [
      ["Layer 1", "Payers define the profit pool. If US pricing is restructured, peak-sales assumptions and discount rates for global innovative drugs need to be rebuilt."],
      ["Layer 2", "China pharma globalization is arithmetic, not aspiration. Payment capacity can make the same molecule worth 10-30x more in the US than in China."],
      ["Layer 3", "Headline license-out value is large, but most of it is contingent. Real value capture depends on upfront cash, shared economics, and direct commercialization."],
      ["Layer 4", "AI, ADCs, TCE, GLP-1, and CXO/CDMO are not isolated themes. Upside only appears when clinical value, manufacturing, access, and commercialization line up."]
    ],
    monitorTitle: "2026-2030 watch variables",
    monitors: [
      ["A", "US drug pricing", "Whether MFN is codified, IRA negotiation expands, and TrumpRx affects net pricing."],
      ["B", "License-out", "Whether annual totals hold and upfront share improves from 5-6.5% toward 8-12%."],
      ["C", "China payment", "Whether Category C, essential-drug access, DRG carve-outs, and commercial insurance become real payers."],
      ["D", "Technology supply", "Data and order conversion across metabolic drugs, ADCs, autoimmune TCE / in vivo CAR-T, and CXO/CDMO."]
    ],
    detailNav: "Switch module"
  }
};

const MODULES = [
  {
    id: "profit",
    accent: "#0f766e",
    zh: {
      index: "01 / 利润池",
      title: "美国仍是全球品牌药利润池",
      summary: "全球处方药市场很大，但真正决定创新药估值中枢的是美国支付方。任何药价重构都会改变全行业模型。",
      metric: "~50%",
      metricLabel: "美国贡献全球品牌药支出接近一半",
      detailTitle: "利润池：美国支付方决定全球医药估值",
      detailLead: "这部分适合用时间线和不对称图来读。核心不是“市场多大”，而是“利润在哪里、谁有能力付款、政策是否改变净价”。",
      keyValue: "60-80%",
      keyLabel: "全球重磅药净利润常由美国单一市场贡献",
      chartTitle: "一个必须先理解的不对称",
      textTitle: "结论怎么用",
      text: [
        "2025 年全球处方药市场约 1.7 万亿美元，同比增长约 10%，但规模不是估值的全部。",
        "美国人口约占全球 4%，却贡献全球品牌药支出的接近一半，品牌药价格也通常高于其他发达国家。",
        "所以 MFN、IRA、TrumpRx 这类政策不是局部事件，而是直接进入创新药估值模型的系统变量。"
      ],
      timelineTitle: "美国定价重构时间线",
      timeline: [
        ["2022-08", "IRA 签署，授权 Medicare 药价谈判，并设置小分子 9 年 / 生物药 13 年的差异待遇。"],
        ["2025-05-12", "美国行政令推动最惠国定价，要求美国药价对标其他发达国家低价。"],
        ["2026-02-05", "TrumpRx.gov 上线，推动药企直销和折扣渠道。"],
        ["2026-05-05", "17 家药企签署 MFN 协议，报告口径称覆盖美国品牌药市场约 86%。"]
      ]
    },
    en: {
      index: "01 / Profit pool",
      title: "The US is still the profit pool",
      summary: "The global prescription market is huge, but US payers define the valuation center of gravity for innovative drugs. Any US pricing reset changes the model.",
      metric: "~50%",
      metricLabel: "US share of global branded-drug spending",
      detailTitle: "Profit Pool: US Payers Set Global Pharma Valuation",
      detailLead: "This module is best read as a timeline plus an asymmetry chart. The issue is not only market size, but where profits sit, who can pay, and whether policy changes net price.",
      keyValue: "60-80%",
      keyLabel: "Net profit of global blockbusters often comes from the US alone",
      chartTitle: "The asymmetry that comes first",
      textTitle: "How to use the conclusion",
      text: [
        "The 2025 global prescription-drug market was about $1.7T, up roughly 10%, but size alone does not define value.",
        "The US is about 4% of global population yet accounts for nearly half of branded-drug spending, with branded prices often above other developed markets.",
        "That makes MFN, IRA, and TrumpRx-style changes systemic valuation inputs, not isolated policy headlines."
      ],
      timelineTitle: "US pricing reset timeline",
      timeline: [
        ["2022-08", "IRA authorized Medicare price negotiation and created different exposure windows for small molecules and biologics."],
        ["2025-05-12", "A US executive order advanced Most-Favored-Nation pricing against lower prices in other developed markets."],
        ["2026-02-05", "TrumpRx.gov launched, pushing direct-to-consumer and discount channels."],
        ["2026-05-05", "Seventeen companies signed MFN agreements; the report says this covered about 86% of the US branded-drug market."]
      ]
    }
  },
  {
    id: "capture",
    accent: "#a66f00",
    zh: {
      index: "02 / 价值捕获",
      title: "出海不是总额，是真能拿走多少",
      summary: "License-out 大单能证明资产被全球定价，但潜在总额多数是或有里程碑。首付款和权益结构才决定确定性。",
      metric: "5-6.5%",
      metricLabel: "2026H1 首付款占潜在总额比例",
      detailTitle: "价值捕获：从 BD 公告到真正收入",
      detailLead: "这个模块用价值瀑布和路径卡片展示。重点不是“签了多少亿美元”，而是这笔价值有多少已经确定、多少留在合作方手里。",
      keyValue: "$99.7B-110B",
      keyLabel: "2026H1 中国创新药 License-out 潜在总额",
      chartTitle: "潜在总额 vs 已披露首付",
      textTitle: "读 BD 公告的顺序",
      text: [
        "2026H1 中国创新药 License-out 约 105 笔，潜在总额约 997-1100 亿美元。",
        "已披露首付款约 50-64.5 亿美元，只占潜在总额约 5-6.5%，其余大多取决于临床、注册、销售里程碑。",
        "真正升级的信号不是单笔 headline，而是首付款比例提升、NewCo / Co-Co 占比提升，以及出现第二个百济式自建商业化样本。"
      ],
      pathsTitle: "四条出海路径",
      paths: [
        ["License-out", "确定性高，上限有限。适合早中期资产，但远期商业价值大部分让渡给 MNC。"],
        ["NewCo / Co-Co", "保留更多权益，也承担更多开发和融资风险。适合想提高价值捕获的龙头。"],
        ["自建商业化", "最难但上限最高。百济是当前唯一完整美国直销样本。"],
        ["CXO / CDMO", "不赌单一分子成败，卖复杂分子供给能力，风险更多来自地缘和订单迁移。"]
      ]
    },
    en: {
      index: "02 / Value capture",
      title: "Globalization is about what you keep",
      summary: "License-out deals validate global demand for Chinese assets, but headline value is mostly contingent. Upfront cash and retained economics matter most.",
      metric: "5-6.5%",
      metricLabel: "2026H1 upfront share of potential value",
      detailTitle: "Value Capture: From BD Headlines to Real Income",
      detailLead: "This module uses a value waterfall and route cards. The key question is not how large the announced deal is, but how much is already certain and how much stays with the partner.",
      keyValue: "$99.7B-110B",
      keyLabel: "Potential value of China innovative-drug license-outs in 2026H1",
      chartTitle: "Potential value vs disclosed upfront cash",
      textTitle: "How to read a BD announcement",
      text: [
        "China innovative-drug license-outs reached about 105 deals in 2026H1, with potential value of roughly $99.7B-110B.",
        "Disclosed upfront payments were about $5B-6.45B, only around 5-6.5% of potential value; the rest depends on clinical, regulatory, and sales milestones.",
        "The real upgrade signal is not one headline deal, but higher upfront share, more NewCo / co-commercial structures, and a second BeOne-style direct commercialization case."
      ],
      pathsTitle: "Four globalization routes",
      paths: [
        ["License-out", "Higher certainty, capped upside. Useful for early and mid-stage assets, but much of the long-term economics goes to MNCs."],
        ["NewCo / Co-Co", "More retained economics with more development and financing risk. Better for leaders seeking higher value capture."],
        ["Direct commercialization", "Hardest and highest ceiling. BeOne is the only complete US direct-sales case in the current report."],
        ["CXO / CDMO", "Sells complex-molecule supply capability instead of betting on one molecule; risk is more geopolitical and order-transfer driven."]
      ]
    }
  },
  {
    id: "formula",
    accent: "#335f8f",
    zh: {
      index: "03 / 赢家公式",
      title: "超级牛股是五因子乘法",
      summary: "未满足需求、疗效代差、专利周期、自建全球商业化、领域深耕必须同时成立。任一项接近 0，总分归零。",
      metric: "5x",
      metricLabel: "五因子相乘，不是相加",
      detailTitle: "赢家公式：为什么同一赛道能出牛股也能出熊股",
      detailLead: "这里适合用打分卡，而不是普通文字。医药不是“赛道好就赢”，正确赛道加错误执行也会变成深度回撤。",
      keyValue: "$1.1T-1.2T",
      keyLabel: "报告口径下礼来 2026 年 8 月市值区间",
      chartTitle: "五因子乘法卡",
      textTitle: "公式的使用边界",
      text: [
        "超级赢家需要巨大未满足需求、疗效代差、长专利窗口、自建全球商业化、单一领域深耕同时成立。",
        "礼来是正面样本：GLP-1 赛道、替尔泊肽、产能、美国商业化和连续收购共同推升上限。",
        "诺和诺德提醒另一面：同在正确赛道，如果产能、下一代数据和美国定价策略失误，估值会从成长叙事切成价值叙事。"
      ],
      scores: [
        ["未满足需求", "患者规模必须换算成可诊断、可治疗、可支付的人群，而不是只看流行病学人数。", 92],
        ["疗效代差", "美国市场不需要 me-too，需要拿得出头对头数据的 me-better。", 84],
        ["专利周期", "上市后还剩多少有效独占期，直接决定峰值能否被摊开。", 76],
        ["全球商业化", "MNC 买中国资产，买的核心是自己已有的支付、准入和销售能力。", 70],
        ["领域深耕", "十年以上机制认知、团队稳定性和持续研发投入，决定能否滚动出下一代资产。", 88]
      ]
    },
    en: {
      index: "03 / Winner formula",
      title: "Super-winners are multiplicative",
      summary: "Unmet need, efficacy gap, patent runway, global commercialization, and therapeutic focus must all work. If one factor is near zero, the score collapses.",
      metric: "5x",
      metricLabel: "Five factors multiply; they do not add",
      detailTitle: "Winner Formula: Why the Same Theme Can Create Winners and Losers",
      detailLead: "This module works as a scorecard. Pharma is not won by being in the right theme alone; the right theme plus poor execution can still create severe drawdowns.",
      keyValue: "$1.1T-1.2T",
      keyLabel: "Eli Lilly market-cap range in Aug 2026 in the report",
      chartTitle: "Five-factor multiplication card",
      textTitle: "How to use the formula",
      text: [
        "A super-winner needs large unmet need, a clear efficacy gap, a long patent runway, global commercialization, and deep therapeutic focus at the same time.",
        "Lilly is the positive case: GLP-1, tirzepatide, capacity, US commercialization, and continuous acquisitions reinforced each other.",
        "Novo Nordisk is the warning: even in the right theme, capacity problems, next-generation data disappointments, and US pricing pressure can flip growth into value."
      ],
      scores: [
        ["Unmet need", "Patient count must be converted into diagnosable, treatable, payable demand, not just epidemiology.", 92],
        ["Efficacy gap", "The US market does not need me-too; it needs me-better assets with head-to-head evidence.", 84],
        ["Patent runway", "Remaining exclusivity after launch defines whether peak sales can be harvested long enough.", 76],
        ["Global commercialization", "When MNCs buy Chinese assets, they are buying the access, payer, and sales capabilities they already own.", 70],
        ["Therapeutic focus", "A decade of mechanism knowledge, stable teams, and persistent R&D raises the odds of follow-on assets.", 88]
      ]
    }
  },
  {
    id: "themes",
    accent: "#6f4aa8",
    zh: {
      index: "04 / 机会地图",
      title: "四条主线与两类陷阱",
      summary: "未来五年不是所有创新药都有同样上限。要看技术瓶颈是否落在中国有结构优势的位置。",
      metric: "4+2",
      metricLabel: "四条主线，两类陷阱",
      detailTitle: "机会地图：未来五年看什么，避开什么",
      detailLead: "这个模块用雷达卡片展示。每条主线都写清楚机会、信号、风险，不把赛道口号当结论。",
      keyValue: "2026-2030",
      keyLabel: "主线观察窗口",
      chartTitle: "四条可能主线",
      textTitle: "筛选原则",
      text: [
        "报告认为，中国优势更容易在制造、速度、工程化和复杂分子供给上兑现。",
        "真正有上限的方向，要么进入美国大支付市场，要么成为全球研发生产链不可替代的一环。",
        "需要主动排除两类资产：同质化 me-too 管线，以及靠单笔 BD 首付款制造利润幻觉的壳型 Biotech。"
      ],
      themes: [
        ["代谢 / 减重供给侧", "口服 GLP-1、多靶点、肌肉保护、注射装置和多肽 API。信号是产能和临床数据同时兑现。"],
        ["自免 TCE / 体内 CAR-T", "把肿瘤武器降维到大适应症。机会大，但安全性、耐受性和支付路径必须成立。"],
        ["下一代 ADC / 双抗 ADC", "中国是重要供给方，真正差异化来自治疗窗口、payload、连接子稳定性和脱靶毒性控制。"],
        ["全球 CXO / CDMO", "行业 beta 的表达，不赌单一分子。关注在手订单、北美收入、复杂分子能力和地缘折价。"]
      ],
      traps: [
        ["me-too 内卷", "只有靶点跟随、没有头对头优势，海外市场很难给高估值。"],
        ["壳型 Biotech", "利润主要来自一次性 BD 首付款，研发投入和经营性现金流不稳定。"]
      ]
    },
    en: {
      index: "04 / Opportunity map",
      title: "Four themes and two traps",
      summary: "Not every innovative-drug theme has the same ceiling. The question is whether the bottleneck falls where China has structural strengths.",
      metric: "4+2",
      metricLabel: "Four themes, two traps",
      detailTitle: "Opportunity Map: What to Watch and What to Avoid",
      detailLead: "This module uses radar cards. Each theme states the opportunity, signal, and risk so theme labels do not become conclusions.",
      keyValue: "2026-2030",
      keyLabel: "Main observation window",
      chartTitle: "Four possible mainlines",
      textTitle: "Screening rule",
      text: [
        "The report argues that China is more likely to monetize manufacturing, speed, engineering, and complex-molecule supply.",
        "High-ceiling opportunities either reach large US payer markets or become hard-to-replace parts of the global R&D and manufacturing chain.",
        "Two groups need active filtering: me-too pipelines and shell-like biotechs where one BD upfront payment creates a profit illusion."
      ],
      themes: [
        ["Metabolic / obesity supply", "Oral GLP-1, multi-target agents, muscle preservation, injection devices, and peptide APIs. The signal is capacity plus clinical data."],
        ["Autoimmune TCE / in vivo CAR-T", "Taking oncology tools into larger indications. Upside is large, but safety, tolerability, and payment must work."],
        ["Next-gen ADC / bispecific ADC", "China is a major supplier; differentiation depends on therapeutic window, payload, linker stability, and off-target toxicity."],
        ["Global CXO / CDMO", "A cleaner expression of industry beta, not a single-molecule bet. Watch backlog, North America revenue, complex-molecule capability, and geopolitical discount."]
      ],
      traps: [
        ["Me-too crowding", "Target following without head-to-head superiority rarely earns premium valuation overseas."],
        ["Shell-like biotech", "Profit mainly comes from one-off BD upfront payments, while R&D and operating cash flow remain unstable."]
      ]
    }
  }
];

const page = document.body.dataset.page;
const app = document.getElementById("app");
const localeSelect = document.getElementById("localeSelect");
const languageLabel = document.querySelector("[data-role='language-label']");

function currentLocale() {
  const stored = localStorage.getItem("pharmaResearchLocale");
  return LOCALES[stored] ? stored : "zh";
}

function setLocale(locale) {
  localStorage.setItem("pharmaResearchLocale", locale);
  render();
}

function getModule(id) {
  return MODULES.find((item) => item.id === id) || MODULES[0];
}

function moduleUrl(id) {
  return `detail.html?module=${encodeURIComponent(id)}`;
}

function barRows(rows, light = false) {
  return `<div class="${light ? "light-bars " : ""}bar-stack">${rows.map((row) => `
    <div class="bar-row">
      <div class="bar-meta"><span>${row.label}</span><strong>${row.value}</strong></div>
      <div class="bar-track"><i class="bar-fill" style="--w:${row.width}%;--c:${row.color}"></i></div>
    </div>
  `).join("")}</div>`;
}

function renderChrome(locale) {
  document.documentElement.lang = COPY[locale].htmlLang;
  languageLabel.textContent = COPY[locale].languageLabel;
  localeSelect.innerHTML = Object.entries(LOCALES)
    .map(([key, label]) => `<option value="${key}" ${key === locale ? "selected" : ""}>${label}</option>`)
    .join("");
  localeSelect.onchange = (event) => setLocale(event.target.value);
}

function renderHome(locale) {
  const c = COPY[locale];
  app.innerHTML = `
    <section class="hero">
      <div class="hero-inner">
        <div>
          <p class="eyebrow">${c.hero.eyebrow}</p>
          <h1>${c.hero.title}</h1>
          <p class="hero-copy">${c.hero.intro}</p>
          <div class="hero-actions">
            <a class="button primary" href="#modules">${c.hero.primary}</a>
            <a class="button secondary" href="${moduleUrl("profit")}">${c.hero.secondary}</a>
          </div>
        </div>
        <aside class="data-panel" aria-label="${c.hero.panelTitle}">
          <div class="panel-head">
            <strong>${c.hero.panelTitle}</strong>
            <span>${c.hero.panelNote}</span>
          </div>
          <div class="thesis-grid">
            <div class="donut" aria-label="${c.metrics[1].label}">
              <strong>~50%</strong>
              <span>${locale === "zh" ? "品牌药支出" : "branded spend"}</span>
            </div>
            ${barRows(c.bars)}
          </div>
          <div class="metric-strip">
            ${c.metrics.map((item) => `<div><b>${item.value}</b><span>${item.label}</span></div>`).join("")}
          </div>
        </aside>
      </div>
    </section>

    <section class="section alt">
      <div class="section-inner section-header">
        <div>
          <p class="section-kicker">${c.tweet.kicker}</p>
          <h2>${c.tweet.title}</h2>
        </div>
        <div class="tweet-box"><p>${c.tweet.text}</p></div>
      </div>
    </section>

    <section class="section" id="modules">
      <div class="section-inner">
        <div class="section-header">
          <div>
            <p class="section-kicker">Modules</p>
            <h2>${c.modulesTitle}</h2>
          </div>
          <p class="section-intro">${c.modulesIntro}</p>
        </div>
        <div class="module-grid">
          ${MODULES.map((module) => {
            const m = module[locale];
            return `
              <a class="module-card" href="${moduleUrl(module.id)}" style="--accent:${module.accent}">
                <div>
                  <div class="module-top">
                    <span class="module-index">${m.index}</span>
                    <span class="mini-dot" aria-hidden="true"></span>
                  </div>
                  <h3>${m.title}</h3>
                  <p>${m.summary}</p>
                </div>
                <div class="module-metric">
                  <b>${m.metric}</b>
                  <span>${m.metricLabel}</span>
                </div>
              </a>
            `;
          }).join("")}
        </div>
      </div>
    </section>

    <section class="section alt">
      <div class="section-inner">
        <div class="section-header">
          <div>
            <p class="section-kicker">Framework</p>
            <h2>${c.insightTitle}</h2>
          </div>
          <p class="section-intro">${c.insightIntro}</p>
        </div>
        <div class="insight-layout">
          <table class="fact-table">
            <tbody>
              ${c.factRows.map(([label, text]) => `<tr><th>${label}</th><td>${text}</td></tr>`).join("")}
            </tbody>
          </table>
          <div class="scenario-list" aria-label="${c.monitorTitle}">
            ${c.monitors.map(([letter, title, text]) => `
              <div class="scenario-item">
                <b>${letter}</b>
                <div><strong>${title}</strong><span>${text}</span></div>
              </div>
            `).join("")}
          </div>
        </div>
        <p class="disclaimer">${c.source}</p>
      </div>
    </section>
  `;
}

function renderDetail(locale) {
  const params = new URLSearchParams(window.location.search);
  const module = getModule(params.get("module"));
  const c = COPY[locale];
  const m = module[locale];

  app.innerHTML = `
    <section class="detail-hero" style="--accent:${module.accent}">
      <div class="detail-inner detail-head">
        <div>
          <a class="back-link" href="index.html">${c.back}</a>
          <p class="section-kicker">${m.index}</p>
          <h1>${m.detailTitle}</h1>
          <p class="detail-lead">${m.detailLead}</p>
        </div>
        <aside class="key-number">
          <b>${m.keyValue}</b>
          <span>${m.keyLabel}</span>
        </aside>
      </div>
      <div class="detail-inner">
        <nav class="nav-modules" aria-label="${c.detailNav}">
          ${MODULES.map((item) => {
            const label = item[locale].index.replace(/^[0-9]+\s\/\s/, "");
            return `<a class="${item.id === module.id ? "active" : ""}" href="${moduleUrl(item.id)}">${label}</a>`;
          }).join("")}
        </nav>
      </div>
    </section>
    <section class="detail-body">
      <div class="detail-inner">
        ${renderDetailModule(module, locale)}
        <p class="disclaimer">${c.source}</p>
      </div>
    </section>
  `;
}

function renderDetailModule(module, locale) {
  const m = module[locale];
  if (module.id === "profit") {
    return `
      <div class="detail-grid">
        <div class="viz-panel">
          <h2 class="panel-title">${m.chartTitle}</h2>
          ${barRows(COPY[locale].bars, true)}
        </div>
        <div class="text-panel">
          <h2 class="panel-title">${m.textTitle}</h2>
          ${m.text.map((item) => `<p>${item}</p>`).join("")}
        </div>
      </div>
      <div class="section">
        <h2 class="panel-title">${m.timelineTitle}</h2>
        <div class="timeline">
          ${m.timeline.map(([date, text]) => `<div class="timeline-item"><time>${date}</time><span>${text}</span></div>`).join("")}
        </div>
      </div>
    `;
  }

  if (module.id === "capture") {
    const waterfall = locale === "zh"
      ? [
          { label: "潜在总额高位", value: "100%", width: 100, color: "#a66f00" },
          { label: "已披露首付高位", value: "6.5%", width: 6.5, color: "#0f766e" },
          { label: "或有里程碑", value: "93.5%+", width: 93.5, color: "#335f8f" }
        ]
      : [
          { label: "Potential value high end", value: "100%", width: 100, color: "#a66f00" },
          { label: "Disclosed upfront high end", value: "6.5%", width: 6.5, color: "#0f766e" },
          { label: "Contingent milestones", value: "93.5%+", width: 93.5, color: "#335f8f" }
        ];
    return `
      <div class="detail-grid">
        <div class="viz-panel">
          <h2 class="panel-title">${m.chartTitle}</h2>
          ${barRows(waterfall, true)}
        </div>
        <div class="text-panel">
          <h2 class="panel-title">${m.textTitle}</h2>
          ${m.text.map((item) => `<p>${item}</p>`).join("")}
        </div>
      </div>
      <div class="section">
        <h2 class="panel-title">${m.pathsTitle}</h2>
        <div class="path-grid">
          ${m.paths.map(([title, text]) => `<article class="path-card"><h3>${title}</h3><p>${text}</p></article>`).join("")}
        </div>
      </div>
    `;
  }

  if (module.id === "formula") {
    return `
      <div class="detail-grid">
        <div class="viz-panel">
          <h2 class="panel-title">${m.chartTitle}</h2>
          <div class="score-grid">
            ${m.scores.map(([title, text, score]) => `
              <article class="score-card">
                <h3>${title}</h3>
                <p>${text}</p>
                <div class="score-meter" aria-label="${score}%">
                  <span><i style="--w:${score}%;--accent:${module.accent}"></i></span>
                </div>
              </article>
            `).join("")}
          </div>
        </div>
        <div class="text-panel">
          <h2 class="panel-title">${m.textTitle}</h2>
          ${m.text.map((item) => `<p>${item}</p>`).join("")}
        </div>
      </div>
    `;
  }

  return `
    <div class="detail-grid">
      <div class="viz-panel">
        <h2 class="panel-title">${m.chartTitle}</h2>
        <div class="radar-grid">
          ${m.themes.map(([title, text]) => `<article class="radar-card"><h3>${title}</h3><p>${text}</p></article>`).join("")}
        </div>
        <div class="trap-row">
          ${m.traps.map(([title, text]) => `<article class="trap-card"><h3>${title}</h3><p>${text}</p></article>`).join("")}
        </div>
      </div>
      <div class="text-panel">
        <h2 class="panel-title">${m.textTitle}</h2>
        ${m.text.map((item) => `<p>${item}</p>`).join("")}
      </div>
    </div>
  `;
}

function render() {
  const locale = currentLocale();
  renderChrome(locale);
  if (page === "detail") {
    renderDetail(locale);
  } else {
    renderHome(locale);
  }
}

render();
