export const products = [
  {
    slug: "hi-api",
    name: "HI API",
    label: "API Gateway",
    audience: "For developers",
    status: "Live",
    href: "/products/hi-api",
    productUrl: "https://hiapis.cloud/",
    tone: "api",
    tagline: "Model access, routed cleanly.",
    headline: "把多模型接入收束到一个稳定入口。",
    description:
      "面向开发者和团队的 AI 模型中转站。适合统一管理模型接入、降低切换成本，并为业务应用保留更清晰的调用边界。",
    bullets: ["统一模型入口", "适合接入 AI 应用与自动化工作流", "简化配置、调试与调用管理"],
    cta: "查看 HI API",
    features: [
      "统一 API 调用入口，减少业务侧适配成本",
      "适合接入聊天、图片、自动化、内部工具等 AI 场景",
      "保留清晰的调用边界，便于后续做额度、日志和权限管理",
      "为模型切换和供应商切换预留更稳定的工程空间"
    ],
    metrics: [
      { value: "1", label: "统一入口" },
      { value: "多模型", label: "按业务切换" },
      { value: "低改造", label: "减少接入成本" }
    ],
    bestFor: ["AI 应用开发者", "需要多模型接入的小团队", "正在验证 AI 产品的独立开发者"],
    notFor: ["只想做一次性模型体验", "不需要稳定业务接入的临时 Demo"],
    scenarios: [
      {
        title: "AI 应用后端",
        body: "把聊天、生成、自动化等能力接入统一服务，业务代码不直接绑定具体模型供应商。"
      },
      {
        title: "内部工具自动化",
        body: "为客服、运营、数据处理等内部流程提供稳定模型入口。"
      },
      {
        title: "产品验证阶段",
        body: "先快速跑通模型能力，后续再扩展用量、权限和日志。"
      }
    ],
    workflow: ["选择模型能力", "配置调用参数", "接入业务服务", "观察使用表现"],
    pricing: [
      {
        name: "Starter",
        price: "按量使用",
        body: "适合个人项目、Demo 和小规模验证。",
        includes: ["基础模型调用", "适合单项目接入", "按实际使用扩展"]
      },
      {
        name: "Team",
        price: "联系开通",
        body: "适合多项目、多成员和更稳定的业务接入。",
        includes: ["多项目使用边界", "团队级接入建议", "后续可扩展用量管理"]
      }
    ],
    faq: [
      {
        question: "HI API 适合谁？",
        answer: "适合需要统一接入 AI 模型的开发者、独立产品和小团队。"
      },
      {
        question: "后续会支持用量统计吗？",
        answer: "会。Hi Console 会承接账号、额度、用量和产品入口管理。"
      }
    ]
  },
  {
    slug: "image-studio",
    name: "Hi AI Image Studio",
    label: "Image Studio",
    audience: "For creators",
    status: "Live",
    href: "/products/image-studio",
    productUrl: "https://studio.hiapis.cloud/",
    tone: "studio",
    tagline: "Creative image generation, organized.",
    headline: "更快完成从想法到可用图片的创意链路。",
    description:
      "面向创作者、运营和产品设计的 AI 图片生成工作台。让提示词、风格探索、结果管理和再次迭代更自然。",
    bullets: ["快速生成产品图、海报和创意素材", "适合小团队做视觉探索", "减少从想法到可用素材的往返成本"],
    cta: "查看 Image Studio",
    features: [
      "围绕图片生成任务组织提示词、风格和结果",
      "适合快速产出产品图、社媒图、活动海报和视觉草案",
      "降低反复试错成本，让创意过程更连续",
      "后续可接入素材库、项目归档和多人协作"
    ],
    metrics: [
      { value: "4步", label: "从想法到图片" },
      { value: "多风格", label: "快速探索" },
      { value: "可迭代", label: "持续优化结果" }
    ],
    bestFor: ["运营和内容创作者", "需要快速视觉探索的产品团队", "独立开发者和小团队"],
    notFor: ["需要完整专业设计交付的项目", "需要严格品牌资产审批的大型团队"],
    scenarios: [
      {
        title: "活动视觉探索",
        body: "为活动海报、封面图、社媒图快速生成多个方向，先看效果再投入设计资源。"
      },
      {
        title: "产品图与概念图",
        body: "围绕产品卖点探索不同画面风格，帮助产品和运营快速对齐视觉方向。"
      },
      {
        title: "内容素材生产",
        body: "把提示词、风格和候选结果放在一个连续流程里，减少来回切工具。"
      }
    ],
    workflow: ["输入创意方向", "选择风格目标", "生成候选图片", "筛选并继续迭代"],
    pricing: [
      {
        name: "Creator",
        price: "按量使用",
        body: "适合个人创作、运营素材和轻量设计探索。",
        includes: ["图片生成任务", "风格探索", "轻量素材验证"]
      },
      {
        name: "Studio",
        price: "联系开通",
        body: "适合团队素材生产、品牌风格探索和批量任务。",
        includes: ["团队素材工作流", "批量创意探索", "品牌视觉实验"]
      }
    ],
    faq: [
      {
        question: "它和普通图片生成工具有什么区别？",
        answer: "重点不是只生成一张图，而是把提示词、风格探索和结果迭代组织成更顺手的工作流。"
      },
      {
        question: "后续会有素材管理吗？",
        answer: "会。Hi Assets 会用于管理生成素材、项目归档和复用。"
      }
    ]
  }
] as const;

export const principles = [
  {
    title: "清晰入口",
    body: "用户能在几秒内理解产品解决什么问题，以及下一步该点哪里。",
    details: ["官网先分流，再解释", "产品页承接决策", "真实产品入口保持醒目"]
  },
  {
    title: "低摩擦使用",
    body: "减少配置感和学习成本，把默认路径做成最顺手的路径。",
    details: ["减少无效选择", "默认路径可直接开始", "复杂能力逐步展开"]
  },
  {
    title: "持续演进",
    body: "先把核心场景做扎实，再围绕真实使用反馈逐步扩展。",
    details: ["先做高频任务", "根据使用反馈排优先级", "新模块保持同一套体验"]
  }
] as const;

export const roadmap = [
  {
    phase: "Next",
    title: "Hi Console",
    body: "统一账户、产品入口、额度与使用记录。"
  },
  {
    phase: "Later",
    title: "Hi Prompt Lab",
    body: "沉淀提示词模板、版本和效果对比。"
  },
  {
    phase: "Later",
    title: "Hi Assets",
    body: "管理生成素材，支持项目归档和复用。"
  }
] as const;

export const trustItems = [
  {
    metric: "Static-first",
    title: "官网默认静态输出",
    body: "首页和详情页优先静态生成，部署简单，加载稳定，也方便后续做 SEO。"
  },
  {
    metric: "Product-led",
    title: "围绕真实产品扩展",
    body: "每个模块都对应具体使用场景，避免把官网做成只有概念没有入口的展示页。"
  },
  {
    metric: "Composable",
    title: "内容可持续维护",
    body: "产品、路线图、场景和 FAQ 都抽到数据层，后续新增模块不需要重写页面结构。"
  }
] as const;

export const useCases = [
  {
    audience: "开发者",
    title: "用 HI API 接入 AI 应用",
    body: "把模型调用统一到一个入口，降低业务代码和供应商变化之间的耦合。",
    product: "HI API",
    href: "/products/hi-api",
    steps: ["统一调用入口", "接入业务服务", "观察调用表现"]
  },
  {
    audience: "运营与创作者",
    title: "用 Image Studio 生成活动素材",
    body: "快速探索海报、封面、产品图和社媒图，让视觉验证不被工具链打断。",
    product: "Hi AI Image Studio",
    href: "/products/image-studio",
    steps: ["输入创意方向", "批量生成候选", "筛选并继续迭代"]
  },
  {
    audience: "独立开发者",
    title: "用 Hi Series 快速验证想法",
    body: "先用已有产品完成关键路径，再把真实需求沉淀成下一个 Hi 模块。",
    product: "Hi Series",
    href: "/#products",
    steps: ["选定验证场景", "组合现有产品", "沉淀新模块需求"]
  }
] as const;

export const authorLinks = [
  {
    label: "GitHub",
    href: "#"
  },
  {
    label: "Blog",
    href: "#"
  },
  {
    label: "Contact",
    href: "mailto:hello@example.com"
  }
] as const;

export const siteMeta = {
  title: "Hi Series - AI tools made for builders",
  description: "Hi Series 是一组面向 AI 创作者和开发者的产品集合，包括 HI API 与 Hi AI Image Studio。",
  image: "/og.svg",
  url: "https://hi-series.example.com"
} as const;
