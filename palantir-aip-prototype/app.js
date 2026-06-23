const viewMeta = {
  flow: {
    title: "Palantir AIP 总流程图",
    subtitle: "从业务目标、治理、数据、Ontology、AI 构建、用户使用，到上线运营的完整使用流程。",
    inspectorTitle: "用户怎么用 Palantir AIP",
    inspectorBody:
      "这个页面按真实使用顺序串起平台功能：管理员先开通和治理，Builder 准备数据和 Ontology，再构建 Chatbot、Logic、应用和自动化，最终用户使用，运营团队持续评估和监控。点击中间任意功能节点，会直接跳到对应原型页面。",
    bullets: [
      "先看流程顺序，不要先背菜单。",
      "每个绿色/蓝色节点都可以点击跳转。",
      "AIP Assist、AI FDE、Dev Tools 是贯穿构建过程的辅助能力。",
      "Evals、Workflow、Admin 形成上线后的生产闭环。"
    ]
  },
  home: {
    title: "AIP Home",
    subtitle: "Enterprise AI platform across data, ontology, agents, applications, and governance.",
    inspectorTitle: "AIP 总览",
    inspectorBody:
      "这版原型中，中间区域尽量保留英文产品术语和界面形态；右侧区域专门用中文解释当前页面或被点击功能。",
    bullets: [
      "AIP 不是单一聊天窗口，而是一组企业 AI 工作台。",
      "核心路径是 Data -> Ontology -> Agent / Logic -> Workshop / Analyst -> Governance。",
      "AI 的查询和动作都通过 Ontology、权限、工具和审计体系约束。",
      "这不是官方截图复刻，而是基于公开资料还原的学习型界面。"
    ]
  },
  agent: {
    title: "AIP Agent Studio",
    subtitle: "Configure agents with models, retrieval context, tools, citations, versions, and usage.",
    inspectorTitle: "Agent Studio",
    inspectorBody:
      "Agent Studio 是创建交互式智能体的地方。官方教程里重点展示了 Standard Agent、AIP Assist Agent、Retrieval Context、Tools、Citations、Test Chat、Publish 和 Workshop 嵌入。",
    bullets: [
      "Standard Agent 面向业务应用，AIP Assist Agent 面向平台助手入口。",
      "Retrieval Context 是每次对话都会带上的知识。",
      "Tools 是 Agent 判断需要时才调用的能力。",
      "发布后的 Agent 通常嵌入 Workshop，而不是让最终用户进入 Studio。"
    ]
  },
  ontology: {
    title: "Ontology Manager",
    subtitle: "Model business objects, properties, links, actions, permissions, and descriptions.",
    inspectorTitle: "Ontology",
    inspectorBody:
      "Ontology 是 Palantir AIP 的核心语义层。AI 不是直接理解一堆表，而是通过业务对象、属性说明、对象关系和动作来理解企业系统。",
    bullets: [
      "Object Type 定义业务对象，例如 Order、Customer、Document Chunk。",
      "Property Description 会进入 Agent 的工具 prompt，影响查询质量。",
      "Actions 是写回业务系统的受控入口。",
      "Links 让 AI 沿着业务关系获取上下文。"
    ]
  },
  logic: {
    title: "AIP Logic",
    subtitle: "Build LLM-powered functions with blocks, tools, tests, and publishing.",
    inspectorTitle: "AIP Logic",
    inspectorBody:
      "AIP Logic 更像 AI 函数和流程编辑器。它把 LLM 调用、函数、条件、循环和 Ontology Action 封装成可复用工作流。",
    bullets: [
      "Use LLM block 负责模型调用和结构化生成。",
      "Apply Action block 负责通过 Ontology 写回业务对象。",
      "Execute Function block 可调用已有函数或外部逻辑。",
      "发布后的 Logic Function 可被 Agent、Automate、Evals 或应用调用。"
    ]
  },
  workflow: {
    title: "Workflow Lineage",
    subtitle: "Formerly Workflow Builder. Understand and manage objects, actions, functions, agents, automations, and applications as a graph.",
    inspectorTitle: "Workflow Lineage / Workflow Builder",
    inspectorBody:
      "你记得的工作流界面是对的，但要分清：Agent/Chatbot 通常在 AIP Chatbot Studio 创建；Workflow Lineage/旧 Workflow Builder 更像图谱式工作台，用来理解、管理和编排应用背后的对象、动作、函数、Logic、Agent 和自动化流程。",
    bullets: [
      "它展示 workflow graph：objects、links、actions、functions、AIP widgets、agents 等依赖关系。",
      "它可以帮助迁移、重构、批量更新函数版本、查看模型使用和安全权限。",
      "如果是拖拽式搭建 LLM 函数流程，更接近 AIP Logic 的 block builder。",
      "如果是创建对话智能体，更接近 AIP Chatbot Studio / formerly Agent Studio。"
    ]
  },
  automate: {
    title: "Automate",
    subtitle: "Trigger AIP Logic, Ontology edits, notifications, and human review from object or schedule events.",
    inspectorTitle: "Automate",
    inspectorBody:
      "Automate 是把 AIP Logic 和 Ontology 动作接入真实业务触发器的界面。它可以在对象变化、新对象创建或定时条件下运行 Logic，并把写回动作直接执行或先暂存为人工审批 proposal。",
    bullets: [
      "官方 AIP Logic 文档明确支持从 Logic 创建 automation。",
      "条件通常监控 object set 或新对象事件。",
      "Logic 产生 Ontology edit 时，可自动执行或 staged for human review。",
      "Overview 页会展示自动化 flow、状态和事件图。"
    ]
  },
  workshop: {
    title: "Workshop Application",
    subtitle: "Compose agents, object tables, charts, maps, PDF viewers, actions, and variables.",
    inspectorTitle: "Workshop",
    inspectorBody:
      "Workshop 是最终用户更可能真正使用 AIP 的地方。Agent 只是页面里的一个组件，旁边可以放对象表、PDF Viewer、图表、审批和业务动作。",
    bullets: [
      "AIP Agent Interactive Widget 承载聊天体验。",
      "Application State 让 Agent 和页面变量联动。",
      "点击 Citation 可写入 object set variable，再联动 PDF Viewer。",
      "业务动作可通过按钮或 Agent 工具触发。"
    ]
  },
  analyst: {
    title: "AIP Analyst",
    subtitle: "Ask questions over ontology objects, generate object sets, charts, maps, and provenance.",
    inspectorTitle: "AIP Analyst",
    inspectorBody:
      "AIP Analyst 面向业务分析。它不是用来创建 Agent，而是让业务用户通过自然语言查数、聚合、生成图表，并查看分析过程。",
    bullets: [
      "适合自然语言查数、聚合、趋势分析和对象集合筛选。",
      "可生成 charts、maps、Mermaid、summary 等输出。",
      "Analysis Provenance 用来解释分析过程。",
      "它依赖 Ontology 中已建好的业务对象。"
    ]
  },
  assist: {
    title: "AIP Assist",
    subtitle: "Platform assistant for help, documentation, code explanation, and contextual actions.",
    inspectorTitle: "AIP Assist",
    inspectorBody:
      "AIP Assist 是平台内助手，主要帮助用户理解和使用 Palantir 平台。它不是业务 Agent Studio，而是平台级帮助入口。",
    bullets: [
      "可回答平台使用问题、查文档、解释代码和提供 suggested actions。",
      "可接入 custom content sources，用企业内部帮助内容增强回答。",
      "和 AIP Chatbot 不同，它更像平台助手，而不是某个业务流程里的 Agent。",
      "通常作为侧边栏或应用内辅助入口出现。"
    ]
  },
  aifde: {
    title: "AI FDE",
    subtitle: "AI Forward Deployed Engineer for building pipelines, ontology, logic, evals, and apps.",
    inspectorTitle: "AI FDE",
    inspectorBody:
      "AI FDE 是 Palantir 把 forward deployed engineering 工作自动化的方向。它可以在用户权限和分支上下文中帮助构建数据、Ontology、Functions、Logic、Evals 和应用。",
    bullets: [
      "它像 AI 工程师，不是最终用户聊天机器人。",
      "可辅助创建 pipeline、编辑 Ontology、写 Functions、创建 AIP Logic 和 Evals。",
      "关键写操作通常需要 human approval。",
      "它按用户权限和 branch context 工作，避免直接破坏生产。"
    ]
  },
  threads: {
    title: "AIP Threads",
    subtitle: "Drag in documents or select AIP Chatbots for quick enterprise productivity conversations.",
    inspectorTitle: "AIP Threads",
    inspectorBody:
      "AIP Threads 是面向普通企业用户的通用生产力界面。用户可以拖入 PDF 等文档，选择已有 AIP Chatbot，然后在同一个 thread 里做问答、摘要、比较和临时分析。",
    bullets: [
      "官方当前标记为 Beta，是否可用取决于 enrollment。",
      "不要求用户自己配置 Agent 或 Ontology。",
      "适合快速文档问答、跨语言分析和引用核验。",
      "和 Chatbot Studio 不同，它是使用入口，不是构建入口。"
    ]
  },
  evals: {
    title: "AIP Evals & Observability",
    subtitle: "Evaluate, compare, monitor, and operate AI workflows in production.",
    inspectorTitle: "Evals & Observability",
    inspectorBody:
      "Evals 和观测能力让 AI 从 demo 进入生产。它用测试样例、指标、日志、模型比较和用户反馈来判断 AI 工作流是否可靠。",
    bullets: [
      "Evaluation Suite 保存测试样例和目标函数。",
      "Metrics Dashboard 展示通过率、稳定性、失败原因。",
      "Model Comparison 比较不同模型或 prompt 版本。",
      "Observability 追踪调用、成本、工具使用和用户反馈。"
    ]
  },
  data: {
    title: "Data & Document Intelligence",
    subtitle: "Connect data, process documents, build embeddings, and publish ontology-ready assets.",
    inspectorTitle: "Data & Document Intelligence",
    inspectorBody:
      "数据和文档准备是 AIP 的基础。结构化数据进入 Pipeline 和 Ontology；非结构化文档经过抽取、chunk、embedding 后成为可检索知识对象。",
    bullets: [
      "Data Connection 用于连接 ERP、CRM、数据库、云存储和文件。",
      "Pipeline Builder 负责清洗、转换、同步，也可使用 LLM 节点。",
      "Document Intelligence 处理 OCR、版面、图像、表格和 PDF。",
      "Embedding 属性让文档片段可被 Agent 语义检索。"
    ]
  },
  models: {
    title: "Model Catalog",
    subtitle: "Enable models, compare capabilities, test in playground, and route provider APIs.",
    inspectorTitle: "Model Catalog",
    inspectorBody:
      "Model Catalog 是模型目录和模型治理入口。管理员决定哪些模型可用，Builder 可以查看模型能力、生命周期状态和调用方式。",
    bullets: [
      "模型类型包括 completion、embedding、vision 等。",
      "生命周期状态包括 Experimental、Stable、Deprecated 等。",
      "Provider-compatible APIs 兼容 OpenAI、Anthropic 等调用格式。",
      "BYOM 允许企业接入自己的模型或模型账户。"
    ]
  },
  devtools: {
    title: "Developer Tools",
    subtitle: "OSDK, Foundry APIs, MCP, Functions, Code Workspaces, and external application integration.",
    inspectorTitle: "Developer Tools",
    inspectorBody:
      "Developer Tools 是开发者把 AIP 和 Ontology 能力接入外部应用、代码仓库、IDE 或自定义前后端系统的工具层。",
    bullets: [
      "OSDK 让应用以业务对象方式访问 Ontology。",
      "Foundry APIs / AIP Chatbots APIs 支持外部系统调用。",
      "MCP 让外部 AI 工具或 IDE 获得 Foundry / Ontology 上下文。",
      "Code Workspaces、Functions、Transforms 支持代码式开发。"
    ]
  },
  marketplace: {
    title: "Marketplace & Applications",
    subtitle: "Package, distribute, and reuse AIP Chatbots, Workshop apps, and platform resources.",
    inspectorTitle: "Marketplace / Applications",
    inspectorBody:
      "Marketplace 和 Applications Portal 更偏分发层，用来把 AIP Chatbot、Workshop 应用和相关资源打包给组织内用户使用。",
    bullets: [
      "AIP Chatbot 可以加入 Marketplace product。",
      "如果 Workshop 应用嵌入了 Chatbot，添加 Workshop module 时可自动包含 Chatbot。",
      "适合把已构建好的应用和智能体分发给团队。",
      "它不是构建 Agent 的主界面，而是上线和分发入口。"
    ]
  },
  featuremap: {
    title: "Feature Map",
    subtitle: "A one-to-one checklist that aligns every prototype page with a Palantir AIP capability.",
    inspectorTitle: "功能清单对照表",
    inspectorBody:
      "这个页面专门解决“功能清单和原型界面对不上”的问题。左侧每个模块在这里都有一行对应关系：原型入口、官方功能名、页面上模拟了什么、该功能做什么。",
    bullets: [
      "按左侧导航顺序阅读即可。",
      "点击表格行，右侧会说明该模块在原型中的定位。",
      "Home 和 Feature Map 是学习导航页，不是 Palantir 独立官方产品。",
      "其余模块都对应公开官方文档或教程中出现的主干能力。"
    ]
  },
  admin: {
    title: "Control Panel & Governance",
    subtitle: "Control AIP access, model enablement, organizations, markings, audit logs, and cost.",
    inspectorTitle: "Control Panel & Governance",
    inspectorBody:
      "治理层控制谁能使用 AIP、能用哪些模型、能访问哪些资源、能执行哪些动作。Palantir 的重点是 AI 不能绕过企业权限体系。",
    bullets: [
      "AIP Settings 控制功能开关和使用范围。",
      "Model Enablement 控制模型族启用、禁用或禁止。",
      "Organizations 和 markings 限制资源访问。",
      "Audit Logs 记录输入、输出、工具调用、审批和写回动作。"
    ]
  }
};

const callouts = {
  "Retrieval Context": {
    title: "Retrieval Context",
    body: "给 Agent 每次对话都带上的知识来源。官方教程里强调它和 Tools 不同：Retrieval Context 是默认上下文，Tools 是需要时才调用。",
    bullets: ["Document Context 适合只服务当前 Agent 的文档。", "Ontology Context 适合企业级共享知识资产。", "可配置 relevant objects、query rewriting、threshold 和 max objects。"]
  },
  "Ontology Context": {
    title: "Ontology Context",
    body: "让 Agent 使用带 embedding 的 Ontology object type 作为知识库。它比单纯上传文档更适合企业长期复用。",
    bullets: ["需要 embedding property。", "需要 text/extracted text 作为模型可读内容。", "可以和 structured objects、links、actions 建立关系。"]
  },
  "Agent Tools": {
    title: "Agent Tools",
    body: "Tools 是 Agent 能做的事，包括 Apply Action、Object Query、Call Function、Update Application Variable、Request Clarification 等。",
    bullets: ["工具不是每轮都调用。", "工具描述会帮助模型判断何时使用。", "高风险动作可以要求用户确认。"]
  },
  "Apply Action": {
    title: "Apply Action",
    body: "让 Agent 通过 Ontology Action 创建、更新或删除业务对象。B 站教程里用它创建 Reported Issue。",
    bullets: ["可人工确认后执行。", "也可配置为 Agent 自动执行。", "它是写回业务系统的受控入口。"]
  },
  "Object Query": {
    title: "Object Query",
    body: "让 Agent 生成对 Ontology backend 的查询。关键点：不是把全量数据发给 LLM，而是把对象类型、属性和描述发给 LLM，让它写查询。",
    bullets: ["支持 filter、aggregate、order by、limit。", "可限制可查询对象和属性。", "属性描述会显著影响查询质量。"]
  },
  "Citations": {
    title: "Citations",
    body: "回答里的引用来源。用户点击引用后，可以把被点击对象写入变量，并联动 PDF Viewer 或对象详情。",
    bullets: ["适合文档问答和合规场景。", "让用户回到原文核验。", "和 Application State 组合后可驱动页面联动。"]
  },
  "Application State": {
    title: "Application State",
    body: "Agent 和宿主应用之间的变量桥梁。Workshop 中的变量可以给 Agent 读，也可以让 Agent 或 citation 点击写回。",
    bullets: ["可读写 object set variable。", "可用于 PDF Viewer、对象表、筛选器联动。", "是 Agent 融入业务应用的关键。"]
  },
  "Property Description": {
    title: "Property Description",
    body: "属性描述不仅给人看，也会进入 Agent 的工具 prompt。B 站 Object Query 教程专门演示了它如何修正 customer_status 查询。",
    bullets: ["比在每个 prompt 里重复说明更可复用。", "Ontology 层改一次，多处 Agent 受益。", "可解释字段含义、取值、查询建议。"]
  },
  "Evaluation Suite": {
    title: "Evaluation Suite",
    body: "对 Agent、AIP Logic Function 或普通 Function 做测试评估，防止模型、prompt 或工具配置变化导致效果退化。",
    bullets: ["保存 test cases。", "比较模型和版本。", "输出 metrics 和失败样例。"]
  },
  "Document Intelligence": {
    title: "Document Intelligence",
    body: "处理 PDF、表格、扫描件、图片和工业图纸，把非结构化内容抽取成可进入 Pipeline 和 Ontology 的结构化结果。",
    bullets: ["支持 OCR 和 layout-aware OCR。", "可用视觉模型抽取。", "可输出 markdown、bounding boxes 和 transform。"]
  },
  "Model Enablement": {
    title: "Model Enablement",
    body: "管理员启用或限制模型族。禁用模型可能影响依赖该模型的 Agent、Logic、Pipeline 或应用。",
    bullets: ["按模型族启用。", "可区分 Enabled、Disabled、Disallowed。", "结合用户组和组织标记控制使用范围。"]
  },
  "Workflow Graph": {
    title: "Workflow Graph",
    body: "工作流图谱视图，用节点和连线展示 Workshop 应用、AIP Agent/Chatbot、Ontology objects、actions、functions、AIP Logic 和 Automate 之间的依赖。",
    bullets: ["用于理解复杂应用背后的流程。", "可以看清一个 Agent 或应用依赖哪些对象和函数。", "更像治理和编排视图，不是单纯聊天界面。"]
  },
  "Function Version Upgrade": {
    title: "Function Version Upgrade",
    body: "Workflow Lineage 可以帮助选择和升级应用依赖的函数版本，包括 functions repository、AIP Logic 或 compute modules 生成的函数。",
    bullets: ["适合生产应用升级。", "可以降低依赖不清导致的发布风险。", "和版本、发布、回归测试配合使用。"]
  },
  "Model Usage Graph": {
    title: "Model Usage Graph",
    body: "AIP usage observability 用来在 workflow graph 中查看哪些节点使用了模型，以及模型调用、成本和依赖情况。",
    bullets: ["帮助定位模型使用来源。", "适合成本和治理分析。", "能辅助判断模型禁用或替换影响范围。"]
  },
  "Security Review": {
    title: "Security Review",
    body: "Workflow Lineage 的安全管理能力帮助检查应用和流程涉及的资源权限，理解谁能访问和执行哪些底层资源。",
    bullets: ["适合上线前审查。", "帮助发现权限和组织标记影响。", "和 AIP 治理、审计能力配合。"]
  },
  "Agent Orchestration": {
    title: "Agent Orchestration",
    body: "这里不是直接拖拽创建 Agent，而是把 Agent 作为工作流中的一个节点，与 actions、functions、Ontology objects 和 Workshop widgets 连接起来理解或编排。",
    bullets: ["创建 Agent 仍主要在 AIP Chatbot Studio。", "Agent 背后的工具和函数可进入 workflow graph。", "业务流程通常由 Agent + Logic + Actions + Workshop 组合完成。"]
  },
  "Create Agent": {
    title: "Create Agent",
    body: "这是 AIP Agent Studio 的入口型能力，用来创建 Standard Agent 或 AIP Assist Agent，并配置模型、instructions、context、tools 和发布版本。",
    bullets: ["适合需要 chat-based interactive experience 的业务场景。", "创建后需要保存为 Foundry resource。", "最终通常嵌入 Workshop 应用。"]
  },
  "Model Ontology": {
    title: "Model Ontology",
    body: "这是 Ontology 建模能力，把企业数据转成业务对象、属性、关系和动作，使 AI 可以按业务语义工作。",
    bullets: ["对象和属性来自数据源或手动创建。", "属性描述会帮助 Agent 正确查询。", "Actions 是写回业务系统的受控入口。"]
  },
  "Ship AI Workflow": {
    title: "Ship AI Workflow",
    body: "这是把 AI demo 变成生产工作流的一组能力，包括 Logic、Workflow Builder、Evals、版本、发布和观测。",
    bullets: ["用 Evals 做上线前质量检查。", "用 workflow lineage 看依赖和影响范围。", "用版本和分支降低生产风险。"]
  },
  "Build Application": {
    title: "Build Application",
    body: "这是用 Workshop 或 OSDK 把 Agent、对象、图表、PDF、动作和状态变量组合成最终用户应用的能力。",
    bullets: ["Agent 只是应用中的一个组件。", "Application State 让页面和 Agent 联动。", "Action Controls 让用户确认并执行业务动作。"]
  },
  "Configuration": {
    title: "Configuration",
    body: "Agent 的配置页，主要设置 agent type、model、instructions、retrieval context、tools、citations、application state 等。",
    bullets: ["属于 Builder 使用的后台配置界面。", "不是最终用户主要使用入口。", "配置完成后需要 save / publish。"]
  },
  "Test Chat": {
    title: "Test Chat",
    body: "Agent Studio 内置测试对话区，用来验证 instructions、retrieval context、tools 和 citations 是否按预期工作。",
    bullets: ["可以观察 Agent 的回答效果。", "可以查看是否正确检索上下文。", "适合发布前快速调试。"]
  },
  "Versions": {
    title: "Versions",
    body: "Agent 的版本管理区，用来查看已发布版本、历史版本和对比状态。",
    bullets: ["发布后生成可用版本。", "旧版本可以作为回滚或对比依据。", "生产化场景需要版本管理。"]
  },
  "Usage": {
    title: "Usage",
    body: "Agent 的使用统计区，用来观察 sessions、users、helpful/unhelpful feedback 等基本使用情况。",
    bullets: ["帮助判断是否有人用。", "反馈可用于后续优化。", "和 observability / evals 形成闭环。"]
  },
  "Standard Agent": {
    title: "Standard Agent",
    body: "标准业务智能体类型，适合嵌入 Workshop 或自定义应用，给最终用户提供对话式业务体验。",
    bullets: ["常用于文档问答、业务查询、流程辅助。", "和 AIP Assist Agent 不同，它不是平台助手入口。", "需要配置上下文和工具。"]
  },
  "Model Settings": {
    title: "Model Settings",
    body: "模型配置项，选择 Agent 使用的大模型和 temperature 等生成参数。",
    bullets: ["模型影响质量、速度和成本。", "temperature 越高回答越发散。", "可用模型受管理员启用范围限制。"]
  },
  "Source Citation": {
    title: "Source Citation",
    body: "这是某一次回答命中的具体引用来源。用户点击它后，系统可以把该对象写入 selected citation object set，用来联动 PDF Viewer。",
    bullets: ["对应你截图里的 FAA Handbook Chunk。", "它不是泛泛的 Citations 功能，而是一条具体被选中的 source。", "适合让用户回到原文核验。"]
  },
  "Research Paper Chunk": {
    title: "Research Paper Chunk",
    body: "这是被 Agent 检索到的文档片段对象，通常包含 embedding、extracted text、page、media reference 等属性。",
    bullets: ["用于 Ontology Context 语义检索。", "LLM 使用 text 内容生成回答。", "media reference 可联动原始 PDF。"]
  },
  "FAA Handbook Chunk": {
    title: "FAA Handbook Chunk",
    body: "这是 Workshop 示例里被点击的具体引用对象，代表 FAA 手册中的一个 chunk。点击后会成为当前 selected citation。",
    bullets: ["Page 12 是该 chunk 对应的来源页。", "selected citation object set 保存用户点击结果。", "右侧 PDF Viewer 可以根据它跳到对应页面。"]
  },
  "Performance Chart": {
    title: "Performance Chart",
    body: "这是和回答相关的图表或媒体引用，属于可被 PDF Viewer 或媒体组件展示的 linked media reference。",
    bullets: ["用于补充文本 chunk 之外的证据。", "适合图表、PDF 页面、工程图等材料。", "可和 citation 一起帮助用户核验。"]
  },
  "PDF Viewer": {
    title: "PDF Viewer",
    body: "Workshop 中的文档查看组件。它读取 selected citation 的 media reference 和 page 属性，在右侧展示原始文档位置。",
    bullets: ["用于展示 source material。", "和 Citation / Application State 配合使用。", "解决“AI 回答从哪里来”的核验问题。"]
  },
  "Action Controls": {
    title: "Action Controls",
    body: "Workshop 页面里的业务动作控件，例如 approve、submit、update、write back、trigger workflow。",
    bullets: ["适合人工确认后执行动作。", "可调用 Ontology Action 或 Workflow。", "比让 AI 自动执行更适合高风险场景。"]
  },
  "Customer Object": {
    title: "Customer Object",
    body: "Customer 是 Ontology 中的业务对象类型，用来承载客户属性，并通过 links 连接订单、合同、服务工单等对象。",
    bullets: ["对象关系帮助 AI 理解业务上下文。", "可被 Object Query 查询。", "可作为 Workshop 页面筛选或详情对象。"]
  },
  "Maintenance Work Order": {
    title: "Maintenance Work Order",
    body: "Maintenance Work Order 是业务动作类对象，通常包含 assign、approve、close 等动作，适合现场作业或运维流程。",
    bullets: ["适合和 Actions / Automate 结合。", "AI 可以建议动作，但执行应受权限和审批控制。", "属于系统 of action 的一部分。"]
  },
  "Primary Key": {
    title: "Primary Key",
    body: "Primary Key 是对象的唯一标识。Ontology object type 需要主键来识别每一条业务对象。",
    bullets: ["例如 order_id。", "对象查询、链接和写回都依赖稳定主键。", "通常来自底层数据源或系统生成。"]
  },
  "Object Links": {
    title: "Object Links",
    body: "Links 定义对象之间的业务关系，例如 Order -> Customer -> Contract。",
    bullets: ["帮助应用和 Agent 沿关系查找上下文。", "比手写 join 更接近业务语义。", "也是 Ontology 的重要能力。"]
  },
  "Function Input": {
    title: "Function Input",
    body: "AIP Logic 的输入变量，例如用户提交的一段文本、对象、对象集合或应用传入参数。",
    bullets: ["后续 block 会使用这些输入。", "输入类型决定函数如何被调用。", "可来自 Agent、Workshop 或 Automate。"]
  },
  "Use LLM": {
    title: "Use LLM",
    body: "AIP Logic 不是创建 Agent 的界面，它是把一次 AI 判断或一段业务逻辑封装成可复用函数的地方。Use LLM 只是其中一个 block，用于分类、摘要、抽取、生成或结构化判断。",
    bullets: ["它可以被 Agent 当成 tool 调用，但它本身不是 Agent。", "它也可以被 Automate、Workshop、Functions 或 API 调用。", "适合把稳定业务步骤做成可测试、可发布的 AI 函数。"]
  },
  "Tool Accuracy": {
    title: "Tool Accuracy",
    body: "评估 Agent 是否在正确时机调用正确工具，以及工具参数是否合理。",
    bullets: ["适合评估 Object Query、Apply Action、Function Tool。", "错误工具调用会直接影响业务结果。", "生产前应重点测试。"]
  },
  "Action Safety": {
    title: "Action Safety",
    body: "评估写回类动作是否安全，例如是否需要人工确认、是否越权、是否对错误对象执行动作。",
    bullets: ["适用于 Apply Action。", "高风险动作应默认人工确认。", "需要权限和审计配合。"]
  },
  "Citation Quality": {
    title: "Citation Quality",
    body: "评估回答引用是否准确、是否支持答案、是否能带用户回到正确原文。",
    bullets: ["适合文档问答、合规、医疗、工程资料场景。", "引用质量差会削弱可信度。", "可作为 eval metric。"]
  },
  "Data Connection": {
    title: "Data Connection",
    body: "连接企业数据源的入口，例如 SAP、ERP、CRM、数据库、云存储、文件上传等。",
    bullets: ["是数据进入 Foundry / AIP 的第一步。", "后续通常进入 Pipeline Builder。", "连接结果可用于 Ontology 建模。"]
  },
  "Pipeline Builder": {
    title: "Pipeline Builder",
    body: "数据清洗和转换界面，可做 schema 修正、转换、调度，也可用 LLM 节点处理文本。",
    bullets: ["把原始数据整理成可用数据集。", "可生成 embeddings 或 LLM 输出。", "结果可同步到 Ontology。"]
  },
  "Chunk": {
    title: "Chunk",
    body: "把长文档切成可检索的小片段。每个 chunk 通常会成为一个 Ontology object。",
    bullets: ["便于语义检索。", "可以保存 page、text、media reference。", "是 RAG/OAG 工作流基础。"]
  },
  "Sync to Ontology": {
    title: "Sync to Ontology",
    body: "把处理后的数据、文档片段、embedding、media reference 和 links 发布到 Ontology。",
    bullets: ["让 Agent 和应用可以复用这些资产。", "从数据处理层进入业务语义层。", "支撑 Object Query 和 Ontology Context。"]
  },
  "Claude Sonnet": {
    title: "Claude Sonnet",
    body: "Model Catalog 中可用的大模型之一，适合长上下文、推理和文本生成类工作流。",
    bullets: ["是否可用取决于管理员启用。", "可被 Agent、Logic、Functions 等使用。", "需要结合成本、速度和质量选择。"]
  },
  "Embedding Model": {
    title: "Embedding Model",
    body: "用于把文本转成向量，使文档 chunk 或对象可做 semantic search。",
    bullets: ["Ontology Context 依赖 embedding property。", "用户问题也会被转成向量用于匹配。", "是 RAG/OAG 的基础模型能力。"]
  },
  "Vision Model": {
    title: "Vision Model",
    body: "用于理解图片、图表、扫描件、PDF 页面或工程图纸的模型能力。",
    bullets: ["适合 Document Intelligence。", "可用于 RFP、图纸、医疗记录等场景。", "常和 OCR / extraction workflow 结合。"]
  },
  "AIP Settings": {
    title: "AIP Settings",
    body: "管理员配置 AIP 功能开关和可用范围的地方。",
    bullets: ["可按用户组限制。", "可控制 core assistants 和 custom workflow capabilities。", "是治理入口之一。"]
  },
  "Organizations": {
    title: "Organizations",
    body: "按组织或资源标记控制 AIP 是否可用于特定项目、数据或对象。",
    bullets: ["用于隔离敏感组织或项目。", "资源标记会影响 AIP 访问。", "和权限系统一起限制 AI 可见范围。"]
  },
  "Purpose-based Controls": {
    title: "Purpose-based Controls",
    body: "目的约束控制 AI 在什么业务目的下访问或处理数据。",
    bullets: ["用于更细粒度的数据治理。", "AI 行为应继承用户权限和目的限制。", "适合高合规场景。"]
  },
  "Data": {
    title: "Data",
    body: "AIP 能力栈的底层数据入口，包括结构化数据、非结构化文档、业务系统和流式数据。",
    bullets: ["先接入数据，再进入 Pipeline 或 Ontology。", "没有数据和权限底座，Agent 只能做普通聊天。", "这是 AIP 的基础层。"]
  },
  "AI": {
    title: "AI",
    body: "AIP 能力层，包括 Agents、AIP Logic、AIP Analyst、Document Intelligence、AI FDE 等。",
    bullets: ["这些能力都建立在 Ontology 和数据权限之上。", "模型不是孤立使用，而是通过工具和业务上下文工作。", "适合构建交互、分析和自动化。"]
  },
  "Applications": {
    title: "Applications",
    body: "应用层把 AI 能力呈现给最终用户，例如 Workshop 应用、OSDK 应用和行业工作流。",
    bullets: ["最终用户通常不进入 Studio。", "Agent、表格、图表、PDF、动作按钮会组合在同一应用中。", "应用层负责把 AI 融入真实业务流程。"]
  },
  "Governance": {
    title: "Governance",
    body: "治理层控制模型、权限、审计、成本、发布和生产运行。",
    bullets: ["AI 不应绕过用户权限。", "工具调用和业务写回应被审计。", "模型启用和组织标记由管理员控制。"]
  },
  "Object types": {
    title: "Object types",
    body: "Ontology Manager 中的对象类型列表，例如 Order、Customer、Reported Issue、Document Chunk。",
    bullets: ["对象类型定义业务实体。", "属性和 links 描述对象细节和关系。", "Agent 的 Object Query 会依赖这些定义。"]
  },
  "Actions": {
    title: "Actions",
    body: "Ontology 中定义的可执行业务动作，例如 create、update、delete、approve、assign。",
    bullets: ["Agent 可通过 Apply Action 调用。", "动作通常受权限和审批控制。", "这是 AI 写回业务系统的入口。"]
  },
  "Links": {
    title: "Links",
    body: "Ontology 中对象之间的关系配置，例如 Order 连接 Customer，Customer 连接 Contract。",
    bullets: ["帮助系统沿业务关系取上下文。", "减少重复建模和手写 join。", "让 AI 查询更接近业务语言。"]
  },
  "Security": {
    title: "Security",
    body: "Ontology 层的数据和动作权限配置，决定谁能看对象、谁能查属性、谁能执行动作。",
    bullets: ["AI 应继承用户权限。", "敏感对象和属性需要权限控制。", "写回动作需要更严格治理。"]
  },
  "Builder": {
    title: "Builder",
    body: "AIP Logic 的可视化构建页，用 blocks 编排输入、LLM、查询、动作和评估步骤。",
    bullets: ["适合低代码构建 AI Function。", "每个 block 对应一个处理步骤。", "构建完成后可测试和发布。"]
  },
  "Test": {
    title: "Test",
    body: "AIP Logic 或 Agent 的测试页，用于在发布前运行样例输入，检查输出是否符合预期。",
    bullets: ["适合调 prompt 和 block 配置。", "可以发现工具参数、输出格式、上下文问题。", "正式质量判断仍应进入 Evals。"]
  },
  "Publish": {
    title: "Publish",
    body: "发布页用于把 Agent、Logic Function 或应用版本发布给其他流程和最终用户使用。",
    bullets: ["发布后才能稳定被 Workshop、Automate 或其他应用引用。", "生产场景需要版本和回滚意识。", "发布前建议先测试和评估。"]
  },
  "Analysis": {
    title: "Analysis",
    body: "AIP Analyst 的分析主视图，用户用自然语言提出问题，系统基于 Ontology 做查询和聚合。",
    bullets: ["适合查数和业务分析。", "可生成对象集合和指标。", "依赖 Ontology 中的业务对象。"]
  },
  "Provenance": {
    title: "Provenance",
    body: "分析来源和过程说明，用来解释 Analyst 是如何得到结论的。",
    bullets: ["展示查询对象和推理过程。", "帮助用户判断结果可信度。", "适合审计和复核。"]
  },
  "Charts": {
    title: "Charts",
    body: "AIP Analyst 的可视化输出，用于把查询和聚合结果展示成柱状图、折线图等图表。",
    bullets: ["让自然语言分析结果可视化。", "适合趋势、分布、对比分析。", "可和对象集合联动。"]
  },
  "Export": {
    title: "Export",
    body: "导出分析结果，例如导出 PDF 报告或把结果用于后续应用和流程。",
    bullets: ["适合汇报和共享。", "保留分析上下文更利于复核。", "不是 Agent 构建功能，而是 Analyst 输出能力。"]
  },
  "Automate AIP Logic": {
    title: "Automate AIP Logic",
    body: "Automate 也不是 Agent。它是触发器和调度器：当对象变化、定时任务或事件发生时，自动运行 AIP Logic 或相关业务流程。",
    bullets: ["它不负责和用户聊天。", "它负责在后台按条件触发流程。", "如果流程要写回业务对象，可以直接执行，也可以先生成 proposal 让人审批。"]
  },
  "Automation Overview": {
    title: "Automation Overview",
    body: "自动化保存后的总览页，展示 flow、运行状态、事件图、最近执行和失败原因。",
    bullets: ["用于确认自动化是否启用。", "可以观察触发频率和运行结果。", "是运营人员排查自动化问题的入口。"]
  },
  "Object Trigger": {
    title: "Object Trigger",
    body: "当 object set 中出现新对象或对象满足条件时触发自动化。",
    bullets: ["适合新工单、新订单、新风险事件等场景。", "输入对象会传给 AIP Logic。", "触发范围由对象类型、过滤条件和权限共同决定。"]
  },
  "Schedule Trigger": {
    title: "Schedule Trigger",
    body: "按固定时间或周期运行自动化。",
    bullets: ["适合日报、周期性检查、批量同步。", "通常和对象查询或数据 pipeline 配合。", "对时效性要求不高但需要稳定重复执行的任务很合适。"]
  },
  "Event Trigger": {
    title: "Event Trigger",
    body: "由近实时事件或业务事件触发自动化。",
    bullets: ["适合异常预警、供应链扰动、状态变化。", "可以触发 Logic、通知或 action proposal。", "需要关注频率、幂等和失败重试。"]
  },
  "Proposals": {
    title: "Proposals",
    body: "Ontology Actions / Proposals 不是 Agent，而是业务写回机制。Agent、AIP Logic、Automate 或 Workshop 都可以触发受控动作，但动作本身只是创建、更新、审批、关闭等业务操作。",
    bullets: ["Agent 可以调用 Action 作为 tool。", "Automate 可以触发 Action 做后台写回。", "高风险动作通常先变成 proposal，等待人工确认。"]
  },
  "AIP Assist": {
    title: "AIP Assist",
    body: "平台级助手入口，帮助用户理解 Palantir 平台、查文档、解释代码和获得上下文建议。它不是某个业务流程里的自定义 Agent。",
    bullets: ["可在 Foundry 工作区侧边栏使用。", "支持多语言和上下文感知。", "回答遵守平台安全标准。"]
  },
  "Assist Modes": {
    title: "Assist Modes",
    body: "AIP Assist 的模式选择器，用来决定它回答问题时优先使用什么知识和能力。",
    bullets: ["Default AIP Assist 会在平台文档、开发者文档和自定义内容间选择。", "Platform Documentation Assist 专注平台文档。", "Developer Assist 专注 API、SDK 和代码示例。"]
  },
  "Custom Content Sources": {
    title: "Custom Content Sources",
    body: "企业可以把 Notepad 文档或 Code Repositories 中的 Markdown 文档注册到 AIP Assist，增强平台助手或创建专用 Assist Chatbot。",
    bullets: ["适合内部 SOP、支持知识库、项目说明。", "可加入默认 AIP Assist 知识库。", "也可作为自定义 AIP Chatbot 的检索上下文。"]
  },
  "Suggested Actions": {
    title: "Suggested Actions",
    body: "AIP Assist 根据当前应用上下文给用户建议下一步操作，例如打开文档、解释代码、查找相关资源或执行平台导航。",
    bullets: ["属于平台助手增强效率的能力。", "依赖当前 Foundry 应用上下文。", "通常作为侧边栏里的建议项呈现。"]
  },
  "Developer Assist": {
    title: "Developer Assist",
    body: "AIP Assist 的开发者模式，偏向 Foundry APIs、SDK、代码示例和开发问题。",
    bullets: ["适合开发者查 OSDK、Functions、API 用法。", "可结合代码上下文解释和调试。", "和 Dev Tools 页面里的 SDK / MCP 是互补关系。"]
  },
  "AI FDE Session": {
    title: "AI FDE Session",
    body: "AI FDE 的会话界面。用户用自然语言请求它在 Foundry 内执行工程任务，例如改 pipeline、建 Ontology、写 functions、配置应用。",
    bullets: ["它以当前用户身份运行。", "会话可在顶部工具栏管理。", "每个会话有自己的上下文和工具使用历史。"]
  },
  "FDE Modes": {
    title: "FDE Modes",
    body: "AI FDE 的模式决定当前任务类型和可用工具，例如数据转换、Ontology 编辑、代码仓库、应用构建等。",
    bullets: ["模型工具越聚焦，执行效果通常越稳定。", "模式可以由用户选择，也可由请求意图推断。", "某些模式还会要求语言、分支或资源范围配置。"]
  },
  "FDE Context": {
    title: "FDE Context",
    body: "AI FDE 只访问用户加入会话的上下文，例如 datasets、functions、branches、interfaces、action types、object types、文档 bundle 或拖入的 Foundry 链接。",
    bullets: ["初始状态只加载最少上下文。", "用户明确添加资源后模型才可使用。", "这样可以降低无关上下文污染和权限风险。"]
  },
  "Tool Approval": {
    title: "Tool Approval",
    body: "AI FDE 执行会影响系统状态的工具时需要用户批准。只读搜索通常可自动运行，写操作和发布类操作默认更保守。",
    bullets: ["Ontology actions、发布、创建应用等通常需要批准。", "分支上的文件编辑和构建可按策略自动批准。", "AI FDE 不能越过用户权限执行操作。"]
  },
  "Chat Outline": {
    title: "Chat Outline",
    body: "AI FDE 右侧会话大纲，记录 prompts、responses、工具调用和 token 使用，并支持摘要或移除旧上下文。",
    bullets: ["帮助理解 AI 做了什么。", "适合长会话管理上下文窗口。", "也是追踪工具调用的重要界面。"]
  },
  "Branch-aware Approval": {
    title: "Branch-aware Approval",
    body: "AI FDE 的审批策略会区分 feature branch 和 protected branch。低风险分支操作可以更自动化，生产或受保护分支会要求更严格批准。",
    bullets: ["适合工程开发流程。", "降低直接影响生产的风险。", "与 Global Branching 和权限系统配合。"]
  },
  "AIP Threads": {
    title: "AIP Threads",
    body: "面向普通企业用户的 LLM 工作区，可拖入文档、选择已有 AIP Chatbot，在 thread 中做问答、总结、比较和临时分析。",
    bullets: ["官方当前标记 Beta。", "使用门槛低，不要求创建 Agent。", "适合 PDF、文档和已有 Chatbot 的快速交互。"]
  },
  "Thread Documents": {
    title: "Thread Documents",
    body: "用户可以把 PDF 或其他文档拖入 AIP Threads，让系统基于文档内容回答、总结、比较，并提供引用。",
    bullets: ["适合临时文档分析。", "不一定需要先建 Ontology。", "引用能帮助用户回到原文核验。"]
  },
  "Thread Chatbots": {
    title: "Thread Chatbots",
    body: "AIP Threads 可以选择组织内已经创建的 AIP Chatbot，让用户在生产力界面里调用专用业务助手。",
    bullets: ["Chatbot 由 Chatbot Studio 构建。", "Threads 是使用入口。", "适合把已有业务智能体带入临时分析。"]
  },
  "Thread Citations": {
    title: "Thread Citations",
    body: "AIP Threads 回答中可以带引用，帮助用户验证答案来自哪个文档或上下文。",
    bullets: ["适合法律、合规、工程文档和报告核验。", "引用点击后应能定位到源材料。", "这是文档问答可信度的重要部分。"]
  },
  "Ad-hoc Analysis": {
    title: "Ad-hoc Analysis",
    body: "无需先搭建完整应用或 Agent，用户可以在 Threads 里做一次性分析、摘要、比较和跨语言阅读。",
    bullets: ["适合个人生产力和轻量协作。", "不替代正式 Workshop 应用。", "复杂业务分析仍更适合 AIP Analyst。"]
  },
  "Provider-compatible APIs": {
    title: "Provider-compatible APIs",
    body: "Foundry 提供兼容常见 LLM provider 格式的代理 API，让外部 SDK 或工具用熟悉的 OpenAI、Anthropic 等格式调用，同时保留 Foundry 的治理、限流和使用追踪。",
    bullets: ["适合外部系统集成。", "调用前需要 AIP 启用和权限。", "比直接绕过平台调用模型更便于治理。"]
  },
  "Bring Your Own Model": {
    title: "Bring Your Own Model",
    body: "BYOM / registered models 让企业把自己的 LLM 或模型账号接入 AIP，在 AI FDE、Analyst、Chatbot Studio、Logic、Workshop、Functions 等产品中使用。",
    bullets: ["适合合规、私有模型、专有微调模型。", "官方当前推荐 registered models。", "可用范围仍受模型能力、权限和平台配置限制。"]
  },
  "Model Playground": {
    title: "Model Playground",
    body: "Model Catalog 中用于测试不同模型的沙盒/Playground，帮助 Builder 选择合适模型。",
    bullets: ["可比较输出质量、速度和成本。", "适合 prompt 初步验证。", "正式上线前仍需 Evals。"]
  },
  "Developer Console": {
    title: "Developer Console",
    body: "开发者管理外部应用、OSDK 应用、OAuth、应用权限和 Marketplace 安装的控制面。",
    bullets: ["适合把 Ontology / AIP 能力接到自定义应用。", "可以配置应用限制和权限。", "和 OSDK、Ontology MCP 配套。"]
  },
  "OSDK": {
    title: "Ontology SDK / OSDK",
    body: "OSDK 让 Python、Java、TypeScript 应用以业务对象方式访问 Ontology，并调用 AIP Logic 等能力。",
    bullets: ["适合自定义前后端应用。", "开发者不用直接拼底层表查询。", "应用权限和对象限制仍由平台控制。"]
  },
  "Foundry APIs": {
    title: "Foundry APIs",
    body: "Foundry APIs / AIP Chatbots APIs 让外部系统调用平台资源、Chatbot、Ontology 或其它服务。",
    bullets: ["适合系统集成和自动化。", "需要认证、授权和应用限制。", "和 provider-compatible LLM APIs 是不同层级。"]
  },
  "Palantir MCP": {
    title: "Palantir MCP",
    body: "Palantir MCP 把 Foundry 平台上下文提供给外部 AI IDE 和 Agent，帮助开发者搜索文档、理解仓库、配置 Ontology 和构建应用。",
    bullets: ["更偏 builders / developers。", "可修改 Ontology 类型，但不是直接写业务数据的入口。", "适合 Claude Code 等 AI IDE 使用。"]
  },
  "Ontology MCP": {
    title: "Ontology MCP",
    body: "Ontology MCP 把应用的 object types、action types、query functions 暴露成 MCP tools，让外部 AI 系统安全地读写 Ontology 数据。",
    bullets: ["更偏 ontology consumers。", "可通过应用限制约束外部 agent 能做什么。", "启用外部模型时需要注意数据治理和组织政策。"]
  },
  "Code Workspaces": {
    title: "Code Workspaces",
    body: "代码式开发环境，用于 Functions、Transforms、Notebook、Jupyter 等开发工作，也可使用 AIP 能力加速开发。",
    bullets: ["适合 pro-code builder。", "与低代码 AIP Logic 互补。", "可把代码函数发布给应用和工作流调用。"]
  },
  "Functions": {
    title: "Functions",
    body: "代码编写的可复用函数，可被 AIP Logic、Workshop、Ontology、Evals 或 APIs 调用。",
    bullets: ["适合复杂逻辑和强类型开发。", "可作为 Agent 工具。", "生产化时需要版本、权限和测试。"]
  },
  "Transforms": {
    title: "Transforms",
    body: "数据转换代码或管道逻辑，用于构建数据资产、清洗数据、处理文档输出，并供 Ontology / AIP 使用。",
    bullets: ["适合数据工程。", "可由 AI FDE 辅助编写。", "是 Data -> Ontology 的重要支撑。"]
  },
  "Marketplace Product": {
    title: "Marketplace Product",
    body: "Marketplace product 是分发包，用来把 AIP Chatbot、Workshop app、媒体集和相关资源打包给其他用户安装和复用。",
    bullets: ["AIP Chatbot 可作为 product resource 加入。", "嵌入 Chatbot 的 Workshop module 可自动包含 Chatbot。", "Assist agents 是官方文档里注明的例外。"]
  },
  "Foundry DevOps": {
    title: "Foundry DevOps",
    body: "Foundry DevOps 负责创建和管理 Marketplace product，把资源加入发布包，并支持安装、复用和版本化交付。",
    bullets: ["适合把构建好的 AIP 资产交付给组织。", "比直接分享单个文件更适合生产分发。", "和 Marketplace / Applications Portal 配合。"]
  },
  "Add Resources": {
    title: "Add Resources",
    body: "Marketplace product 的资源添加步骤，选择 AIP Chatbot、Workshop module、media set 等需要一起分发的资源。",
    bullets: ["资源依赖要一起纳入。", "Document context 的 media set 会被打包。", "可以降低安装后缺依赖的问题。"]
  },
  "Install Product": {
    title: "Install Product",
    body: "最终用户或团队安装 Marketplace product 后，可以复用其中的应用、Chatbot 和相关资源。",
    bullets: ["适合组织内复用。", "安装后仍受权限和配置影响。", "这是上线分发入口，不是构建入口。"]
  },
  "Release Management": {
    title: "Release Management",
    body: "管理已发布 product 或应用版本，控制版本升级、回滚、依赖和部署范围。",
    bullets: ["适合生产环境治理。", "和 Evals、Workflow Lineage、Audit 配合。", "避免随意变更影响用户流程。"]
  },
  "User Flow": {
    title: "AIP 用户流程",
    body: "这个流程图把 Palantir AIP 当成一条企业 AI 应用生产线：先确定业务问题和治理边界，再准备数据和 Ontology，然后按使用场景选择 Threads、Analyst、Chatbot、Logic、Workshop、Automate 或 Dev Tools，最后进入评估、监控、发布和治理闭环。",
    bullets: ["按箭头从上往下跑一遍。", "带 Open 的功能节点可以点击跳转到对应原型页面。", "右侧说明会解释当前节点在整个平台里的作用。"]
  },
  "Platform Setup": {
    title: "平台开通和治理",
    body: "企业使用 AIP 前，管理员要先决定哪些人能用 AIP、哪些模型可用、哪些组织和资源允许被 AI 使用。",
    bullets: ["对应 Admin 和 Model Catalog。", "这是所有 AI 能力的安全边界。", "后续 Agent、Logic、Analyst 都受这里控制。"]
  },
  "Build Foundation": {
    title: "数据和业务语义底座",
    body: "AIP 的关键不是先写 prompt，而是把数据、文档和业务系统整理成 AI 能理解、能检索、能执行动作的 Ontology。",
    bullets: ["Data & Docs 负责接入、清洗、抽取和 embedding。", "Ontology 负责对象、属性、关系、Actions 和权限。", "没有这个底座，Agent 只能做普通聊天。"]
  },
  "Build AI Workflow": {
    title: "构建 AI 能力",
    body: "Builder 基于 Ontology 构建 Chatbot、AIP Logic、Workshop 应用和自动化流程；AI FDE、AIP Assist、Dev Tools 会在构建过程中辅助工程和集成。",
    bullets: ["Chatbot Studio 负责对话智能体。", "AIP Logic 负责可复用 AI 函数。", "Workshop 和 Automate 把 AI 放进真实业务流程。"]
  },
  "Use AI": {
    title: "最终用户使用入口",
    body: "最终用户通常不会进入构建后台，而是在 Threads、Analyst 或 Workshop 应用里使用 AI。",
    bullets: ["Threads 适合临时文档问答。", "Analyst 适合自然语言查数分析。", "Workshop 是正式业务应用入口。"]
  },
  "Operate AI": {
    title: "上线后的运营闭环",
    body: "AI 工作流上线后，需要通过 Evals、Workflow Lineage、Observability、Marketplace 和 Admin 持续评估、发布、监控和治理。",
    bullets: ["Evals 检查质量和回归。", "Workflow 看依赖和调用链。", "Admin 和 Model Catalog 控制权限、模型和成本。"]
  },
  "Business Objective": {
    title: "业务目标",
    body: "AIP 的起点不是选模型，而是一个具体业务目标：要让谁在什么业务流程里用 AI，AI 需要读什么数据、做什么判断、是否要写回系统。",
    bullets: ["先定义业务对象和使用场景。", "明确最终用户是谁。", "判断是临时问答、分析、正式应用、自动化还是外部集成。"]
  },
  "Usage Pattern": {
    title: "选择使用方式",
    body: "同一个 AIP 底座可以走不同使用路径。只有 Chatbot Studio 这条路径是在创建 Agent；AIP Logic 是 AI 函数，Automate 是触发器，Ontology Actions 是写回动作，Workshop 是最终应用界面。",
    bullets: ["Agent 是一种交互方式，不等于整个平台。", "Workflow / Logic / Automate 是业务流程能力，不是 Agent 本身。", "复杂业务通常是 Agent + Logic + Actions + Workshop + Evals 的组合。"]
  },
  "Business Users": {
    title: "业务用户使用",
    body: "最终用户通常不会进入构建后台，而是在 Threads、Analyst、Workshop 应用、Marketplace 安装的应用或外部应用里完成工作。",
    bullets: ["他们看到的是业务流程，不是底层模型。", "权限、引用和动作审批仍由平台控制。", "用户反馈会进入评估和运营闭环。"]
  },
  "Production Feedback": {
    title: "生产反馈闭环",
    body: "上线后的日志、用户反馈、评估结果、成本和错误案例会回到 Evals、Workflow、Admin、Model Catalog、Ontology、Chatbot Studio 和 AIP Logic，用来持续优化。",
    bullets: ["这是从 demo 变成生产系统的关键。", "发现问题后可能改数据、Ontology、prompt、tools、模型或权限。", "闭环越清楚，平台越可运营。"]
  },
  "Feature Map": {
    title: "Feature Map",
    body: "功能清单对照页。它不是 Palantir 的官方产品页面，而是这个学习原型用来把左侧导航、官方功能和页面模拟内容对齐的索引。",
    bullets: ["每个左侧模块都有一行。", "可以先看表，再点对应页面。", "用于防止原型和清单再次错位。"]
  }
};

const canvas = document.getElementById("canvas");
const viewTitle = document.getElementById("viewTitle");
const viewSubtitle = document.getElementById("viewSubtitle");
const inspectorTitle = document.getElementById("inspectorTitle");
const inspectorBody = document.getElementById("inspectorBody");
const inspectorBullets = document.getElementById("inspectorBullets");

function setInspector(meta) {
  inspectorTitle.textContent = meta.inspectorTitle;
  inspectorBody.textContent = meta.inspectorBody;
  inspectorBullets.innerHTML = meta.bullets.map((item) => `<div class="bullet">${item}</div>`).join("");
}

function setCallout(name) {
  const item = callouts[name];
  if (!item) return false;
  setInspector({
    inspectorTitle: item.title,
    inspectorBody: item.body,
    bullets: item.bullets
  });
  return true;
}

function getElementLabel(element) {
  const strong = element.querySelector("strong")?.textContent?.trim();
  const span = element.querySelector("span")?.textContent?.trim();
  const own = element.textContent?.replace(/\s+/g, " ").trim();
  return strong || span || own || "Selected item";
}

function setElementFallback(element) {
  const label = getElementLabel(element);
  const detail = element.textContent?.replace(/\s+/g, " ").trim();
  setInspector({
    inspectorTitle: label,
    inspectorBody: `这是当前页面里的一个系统界面项：${label}。它的页面文本是：${detail || label}`,
    bullets: [
      "这个项目在原型中没有单独复杂逻辑。",
      "它属于当前页面的辅助配置、状态或数据展示。",
      "这里给出简单说明，避免右侧停留在其他模块的解释。"
    ]
  });
}

function pageShell(body) {
  return `<div class="view">${body}</div>`;
}

function tag(name, type = "") {
  return `<button class="tag ${type}" type="button" data-callout="${name}">${name}</button>`;
}

function tab(label, active = false, callout = "") {
  return `<button class="tab ${active ? "is-active" : ""}" type="button" data-tab="${label}" data-callout="${callout || label}">${label}</button>`;
}

function processNode({ view = "", title, role, action, output, callout, kind = "" }) {
  const classes = `process-node selectable${view ? " jump-view" : ""}`;
  const jumpAttr = view ? ` data-jump-view="${view}"` : "";
  const openLabel = view ? `<small>打开 ${title}</small>` : "<small>流程说明节点</small>";
  return `
    <button class="${classes}"${jumpAttr} type="button" data-callout="${callout}">
      <span class="node-kind">${kind}</span>
      <strong>${title}</strong>
      <span><b>角色：</b>${role}</span>
      <span><b>操作：</b>${action}</span>
      <span><b>产出：</b>${output}</span>
      ${openLabel}
    </button>
  `;
}

function processArrow(label = "") {
  return `<div class="process-arrow"><span>-></span>${label ? `<small>${label}</small>` : ""}</div>`;
}

const featureRows = [
  {
    module: "总流程图",
    view: "flow",
    official: "Learning workflow across AIP capabilities",
    surface: "Clickable role-based process map",
    functionText: "按用户真实使用顺序串起 Admin、Data、Ontology、Chatbot、Logic、Workshop、Automate、Evals 和发布治理。",
    callout: "User Flow",
    status: "学习导航"
  },
  {
    module: "Home",
    view: "home",
    official: "AIP overview / capability stack",
    surface: "Launchpad + capability stack",
    functionText: "把 Data、Ontology、AI capabilities、Applications、Governance 串成一张学习总览。",
    callout: "Create Agent",
    status: "学习导航"
  },
  {
    module: "Chatbot Studio",
    view: "agent",
    official: "AIP Chatbot Studio, formerly AIP Agent Studio",
    surface: "Configuration / Test Chat / Versions / Usage",
    functionText: "创建交互式业务 Chatbot，配置模型、instructions、retrieval context、tools、citations 和发布版本。",
    callout: "Create Agent",
    status: "独立页面"
  },
  {
    module: "Ontology",
    view: "ontology",
    official: "Ontology Manager",
    surface: "Object types / Actions / Links / Security",
    functionText: "把企业数据建模为业务对象、属性、关系和可控动作，供 AI 查询和执行。",
    callout: "Model Ontology",
    status: "独立页面"
  },
  {
    module: "AIP Logic",
    view: "logic",
    official: "AIP Logic",
    surface: "Block builder + test/evaluate/publish tabs",
    functionText: "用 no-code blocks 构建 LLM-backed functions，封装查询、生成、动作和测试。",
    callout: "Use LLM",
    status: "独立页面"
  },
  {
    module: "Workflow",
    view: "workflow",
    official: "Workflow Lineage / AIP observability",
    surface: "Workflow graph + refactor/usage/security tabs",
    functionText: "用图谱理解应用、Chatbot、Logic、Actions、Objects、Automations 和 Evals 的依赖与运行情况。",
    callout: "Workflow Graph",
    status: "独立页面"
  },
  {
    module: "Automate",
    view: "automate",
    official: "Automate AIP Logic",
    surface: "Trigger -> Logic -> Edit/Proposal -> Monitor",
    functionText: "由对象变化、事件或定时条件触发 AIP Logic，把业务写回自动执行或交给人工审批。",
    callout: "Automate AIP Logic",
    status: "新增页面"
  },
  {
    module: "Workshop App",
    view: "workshop",
    official: "Workshop + AIP Chatbot widget",
    surface: "Agent widget + PDF viewer + application state + actions",
    functionText: "把 Chatbot、对象表、图表、PDF、变量和动作控件组合成最终用户应用。",
    callout: "Application State",
    status: "独立页面"
  },
  {
    module: "AIP Analyst",
    view: "analyst",
    official: "AIP Analyst",
    surface: "Conversation + object sets + charts + provenance",
    functionText: "用自然语言跨 Ontology 做 ad-hoc analysis，生成对象集合、聚合、可视化和来源过程。",
    callout: "Analysis",
    status: "独立页面"
  },
  {
    module: "AIP Assist",
    view: "assist",
    official: "AIP Assist",
    surface: "Sidebar assistant + modes + custom sources + suggested actions",
    functionText: "平台级帮助助手，回答 Palantir 使用问题、查文档、解释代码，并提供上下文建议。",
    callout: "AIP Assist",
    status: "新增页面"
  },
  {
    module: "AI FDE",
    view: "aifde",
    official: "AI FDE",
    surface: "Conversation + modes + context + tool approval + outline",
    functionText: "用自然语言操作 Foundry，辅助建 pipeline、Ontology、Functions、Logic、Evals 和应用。",
    callout: "AI FDE Session",
    status: "新增页面"
  },
  {
    module: "AIP Threads",
    view: "threads",
    official: "AIP Threads",
    surface: "Thread list + document/chatbot picker + citations",
    functionText: "普通用户拖入文档或选择已有 Chatbot，做快速问答、摘要、比较和临时分析。",
    callout: "AIP Threads",
    status: "新增页面"
  },
  {
    module: "Evals & Ops",
    view: "evals",
    official: "AIP Evals + AIP observability",
    surface: "Evaluation suite + observability timeline",
    functionText: "用测试样例、评估函数、指标、日志和追踪来验证并运营生产 AI 工作流。",
    callout: "Evaluation Suite",
    status: "独立页面"
  },
  {
    module: "Data & Docs",
    view: "data",
    official: "Data Connection / Pipeline Builder / AIP Document Intelligence",
    surface: "Data source cards + Document to Ontology flow",
    functionText: "接入结构化数据和文档，做抽取、chunk、embedding，并同步到 Ontology。",
    callout: "Document Intelligence",
    status: "独立页面"
  },
  {
    module: "Model Catalog",
    view: "models",
    official: "Model Catalog / BYOM / LLM-provider compatible APIs",
    surface: "Model cards + APIs + BYOM + playground",
    functionText: "发现、启用、测试和治理模型，并接入自有模型或兼容 provider API。",
    callout: "Model Enablement",
    status: "独立页面"
  },
  {
    module: "Dev Tools",
    view: "devtools",
    official: "OSDK / Foundry APIs / Palantir MCP / Ontology MCP / Code Workspaces",
    surface: "Developer console + SDK/API/MCP/workspace cards",
    functionText: "让外部应用、AI IDE、代码仓库和自定义系统接入 Ontology 与 AIP 能力。",
    callout: "Developer Console",
    status: "新增页面"
  },
  {
    module: "Marketplace",
    view: "marketplace",
    official: "Marketplace products / Foundry DevOps",
    surface: "Package -> add resources -> release -> install",
    functionText: "把 Chatbot、Workshop app、media set 等资源打包、发布、安装和组织内复用。",
    callout: "Marketplace Product",
    status: "新增页面"
  },
  {
    module: "Feature Map",
    view: "featuremap",
    official: "Prototype alignment checklist",
    surface: "One-to-one feature table",
    functionText: "把本原型左侧模块、官方功能名称、界面模拟内容和中文说明统一对齐。",
    callout: "Feature Map",
    status: "学习导航"
  },
  {
    module: "Admin",
    view: "admin",
    official: "Control Panel / AIP administration / governance",
    surface: "AIP settings + model enablement + org markings + audit log",
    functionText: "控制 AIP 功能开关、模型启用、组织权限、purpose controls、审计和使用治理。",
    callout: "AIP Settings",
    status: "独立页面"
  }
];

function renderFlow() {
  return pageShell(`
    <div class="section-title">
      <h3>Palantir AIP 完整使用流程</h3>
      <span class="pill">按箭头从上往下跑一遍</span>
    </div>

    <div class="process-chart">
      <div class="process-band">
        ${processNode({
          title: "业务目标",
          role: "业务负责人",
          action: "定义要改造的业务流程、使用者、数据来源、决策点和写回风险。",
          output: "清晰的 AI 使用场景",
          callout: "Business Objective",
          kind: "起点"
        })}
      </div>

      <div class="process-down"><span>先治理，再构建</span></div>

      <div class="process-row two">
        ${processNode({
          view: "admin",
          title: "Admin",
          role: "平台管理员",
          action: "开通 AIP，配置组织标记、审计、用途控制和访问权限。",
          output: "安全使用边界",
          callout: "AIP Settings",
          kind: "治理"
        })}
        ${processArrow("限定可用模型")}
        ${processNode({
          view: "models",
          title: "Model Catalog",
          role: "管理员 / 构建人员",
          action: "启用模型、BYOM、Embedding、Vision、Provider-compatible APIs。",
          output: "可被平台使用的模型集合",
          callout: "Model Enablement",
          kind: "模型"
        })}
      </div>

      <div class="process-down"><span>准备可信业务上下文</span></div>

      <div class="process-row two">
        ${processNode({
          view: "data",
          title: "Data & Docs",
          role: "数据团队 / 构建人员",
          action: "连接业务系统，跑数据 Pipeline，抽取文档，切分 chunk，生成 embedding。",
          output: "可用的数据集和文档对象",
          callout: "Document Intelligence",
          kind: "数据底座"
        })}
        ${processArrow("发布业务语义")}
        ${processNode({
          view: "ontology",
          title: "Ontology",
          role: "Ontology 构建人员",
          action: "创建对象类型、属性、关系、Actions 和权限。",
          output: "AI 可理解、可查询、可执行动作的业务对象",
          callout: "Model Ontology",
          kind: "业务模型"
        })}
      </div>

      <div class="process-down"><span>选择合适的 AI 使用路径</span></div>

      <div class="process-decision selectable" data-callout="Usage Pattern">
        <strong>使用路径判断</strong>
        <span>临时问文档？查数分析？正式 Agent 应用？后台自动化？外部系统集成？</span>
      </div>

      <div class="branch-chart">
        <div class="branch-row">
          <div class="branch-label">临时文档问答</div>
          ${processNode({
            view: "threads",
            title: "AIP Threads",
            role: "业务用户",
            action: "拖入文档，或选择已有 Chatbot，快速提问、总结、比较。",
            output: "临时问答、摘要和引用来源",
            callout: "AIP Threads",
            kind: "直接使用"
          })}
          ${processArrow("得到回答")}
          ${processNode({
            title: "业务用户",
            role: "最终用户",
            action: "查看回答、引用、摘要，并完成文档对比或临时判断。",
            output: "即时生产力结果",
            callout: "Business Users",
            kind: "消费结果"
          })}
        </div>

        <div class="branch-row">
          <div class="branch-label">业务分析</div>
          ${processNode({
            view: "analyst",
            title: "AIP Analyst",
            role: "业务分析师",
            action: "用自然语言基于 Ontology 对象提问、筛选、聚合和分析。",
            output: "对象集合、图表、分析来源和导出结果",
            callout: "Analysis",
            kind: "分析"
          })}
          ${processArrow("形成洞察")}
          ${processNode({
            title: "业务用户",
            role: "决策者",
            action: "查看分析结论、图表、对象集合和来源过程。",
            output: "决策支持",
            callout: "Business Users",
            kind: "消费结果"
          })}
        </div>

        <div class="branch-row long">
          <div class="branch-label">正式 AI 应用</div>
          ${processNode({
            view: "agent",
            title: "Chatbot Studio",
            role: "Agent 构建人员",
            action: "配置 instructions、retrieval context、tools、citations 和版本。",
            output: "可发布的业务 Chatbot",
            callout: "Create Agent",
            kind: "构建 Agent"
          })}
          ${processArrow("嵌入应用")}
          ${processNode({
            view: "workshop",
            title: "Workshop App",
            role: "应用构建人员",
            action: "组合 Chatbot、表格、图表、PDF Viewer、变量和动作控件。",
            output: "面向最终用户的业务 AI 应用",
            callout: "Application State",
            kind: "构建应用"
          })}
          ${processArrow("发布分发")}
          ${processNode({
            view: "marketplace",
            title: "Marketplace",
            role: "发布负责人",
            action: "打包应用、Chatbot、media set 和依赖资源，供团队复用。",
            output: "可安装的产品包",
            callout: "Marketplace Product",
            kind: "分发"
          })}
        </div>

        <div class="branch-row long">
          <div class="branch-label">后台自动化<br/>不是 Agent</div>
          ${processNode({
            view: "logic",
            title: "AIP Logic",
            role: "流程构建人员",
            action: "用查询、动作、条件、测试等 blocks 构建 AI 函数，不是在创建 Agent。",
            output: "可被 Agent / Automate / Workshop 调用的 AI 函数",
            callout: "Use LLM",
            kind: "AI 函数"
          })}
          ${processArrow("触发执行")}
          ${processNode({
            view: "automate",
            title: "Automate",
            role: "运营构建人员",
            action: "在对象变化、定时任务或业务事件发生时运行 AIP Logic，不负责聊天。",
            output: "后台自动化流程",
            callout: "Automate AIP Logic",
            kind: "触发器"
          })}
          ${processArrow("审批 / 写回")}
          ${processNode({
            view: "ontology",
            title: "Ontology Actions",
            role: "人工 / 自动化流程",
            action: "把受控动作写回业务对象；Agent 或流程都可以调用它。",
            output: "有审计记录的业务更新 / 待审批 proposal",
            callout: "Proposals",
            kind: "写回动作"
          })}
        </div>

        <div class="branch-row long">
          <div class="branch-label">外部系统集成</div>
          ${processNode({
            view: "devtools",
            title: "Dev Tools",
            role: "开发者",
            action: "使用 OSDK、APIs、MCP、Functions、Code Workspaces 和 provider APIs。",
            output: "外部应用或 AI 工具集成",
            callout: "Developer Console",
            kind: "集成"
          })}
          ${processArrow("连接模型")}
          ${processNode({
            view: "models",
            title: "Provider APIs / BYOM",
            role: "开发者 / 管理员",
            action: "把外部模型调用通过 AIP 受治理的接口进行路由。",
            output: "受治理的模型访问能力",
            callout: "Provider-compatible APIs",
            kind: "模型访问"
          })}
          ${processArrow("服务业务")}
          ${processNode({
            title: "外部应用",
            role: "应用用户",
            action: "在自定义应用中使用由 Ontology 和 AIP 服务支撑的 AI 能力。",
            output: "AI 能力进入非 Foundry 产品",
            callout: "Business Users",
            kind: "消费结果"
          })}
        </div>
      </div>

      <div class="support-strip">
        ${processNode({
          view: "assist",
          title: "AIP Assist",
          role: "所有构建人员",
          action: "询问平台用法、查找文档、解释代码、获得下一步建议。",
          output: "构建过程中的辅助指导",
          callout: "AIP Assist",
          kind: "辅助能力"
        })}
        ${processNode({
          view: "aifde",
          title: "AI FDE",
          role: "工程师 / 构建人员",
          action: "让 AI 辅助创建 pipeline、Ontology、Logic、Evals 和应用。",
          output: "待确认的工程变更建议",
          callout: "AI FDE Session",
          kind: "辅助能力"
        })}
      </div>

      <div class="process-down"><span>运营生产中的 AI</span></div>

      <div class="process-row three">
        ${processNode({
          view: "evals",
          title: "Evals & Ops",
          role: "AI 运营人员",
          action: "评估回答、工具调用、动作安全、引用质量、成本和用户反馈。",
          output: "质量、成本和回归风险信号",
          callout: "Evaluation Suite",
          kind: "评估"
        })}
        ${processArrow("追踪影响")}
        ${processNode({
          view: "workflow",
          title: "Workflow Lineage",
          role: "运营人员 / 架构师",
          action: "查看依赖图、模型使用、安全权限和函数版本影响。",
          output: "影响范围和可观测性图谱",
          callout: "Workflow Graph",
          kind: "观测"
        })}
        ${processArrow("持续优化")}
        ${processNode({
          title: "生产反馈闭环",
          role: "管理员 + 构建人员",
          action: "调整模型、prompt、tools、Ontology、权限和发布版本。",
          output: "更安全、更稳定的 AI 工作流",
          callout: "Production Feedback",
          kind: "反馈闭环"
        })}
      </div>
    </div>
  `);
}

function renderHome() {
  return pageShell(`
    <div class="section-title">
      <h3>Launchpad</h3>
      <span class="pill">AIP as enterprise AI operating layer</span>
    </div>
    <div class="card-grid">
      <article class="module-card selectable" data-callout="Create Agent">
        <strong>Create Agent</strong>
        <p>Build a chat-based AIP Agent with model, instructions, context, tools, citations, and publishing.</p>
        <div class="tag-row">${tag("Retrieval Context")}${tag("Agent Tools")}</div>
      </article>
      <article class="module-card selectable" data-callout="Model Ontology">
        <strong>Model Ontology</strong>
        <p>Define object types, properties, links, actions, permissions, and AI-readable descriptions.</p>
        <div class="tag-row">${tag("Property Description")}${tag("Apply Action")}</div>
      </article>
      <article class="module-card selectable" data-callout="Ship AI Workflow">
        <strong>Ship AI Workflow</strong>
        <p>Use Logic, Evals, Workflow Builder, lineage, and monitoring to move AI workflows to production.</p>
        <div class="tag-row">${tag("Evaluation Suite")}${tag("Apply Action")}</div>
      </article>
      <article class="module-card selectable" data-callout="Build Application">
        <strong>Build Application</strong>
        <p>Compose agents, object sets, charts, maps, PDF viewers, variables, and action controls in Workshop.</p>
        <div class="tag-row">${tag("Application State")}${tag("Citations")}</div>
      </article>
    </div>

    <div class="mock-window">
      <div class="mock-titlebar">
        <strong>AIP capability stack</strong>
        <div class="tabs">
          ${tab("Data", true)}
          ${tab("Ontology", false, "Property Description")}
          ${tab("AI")}
          ${tab("Applications", false, "Application State")}
          ${tab("Governance", false, "Model Enablement")}
        </div>
      </div>
      <div class="mock-body">
        <div class="layer-map">
          <div class="layer"><strong>Data & Documents</strong><small>ERP, CRM, datasets, files, PDFs, diagrams, streams.</small></div>
          <div class="layer"><strong>Ontology</strong><small>Objects, properties, links, actions, permissions.</small></div>
          <div class="layer"><strong>AIP Capabilities</strong><small>Agents, Logic, Analyst, Evals, AI FDE.</small></div>
          <div class="layer"><strong>Applications</strong><small>Workshop, OSDK apps, automations, operational workflows.</small></div>
          <div class="layer"><strong>Governance</strong><small>Model enablement, guardrails, audit, cost, lineage.</small></div>
        </div>
      </div>
    </div>
  `);
}

function renderAgent() {
  return pageShell(`
    <div class="mock-window">
      <div class="mock-titlebar">
        <strong>PFAS Research Agent</strong>
        <div class="tabs">
          ${tab("Configuration", true)}
          ${tab("Test Chat", false, "Retrieval Context")}
          ${tab("Versions")}
          ${tab("Usage")}
        </div>
      </div>
      <div class="mock-body split">
        <div>
          <div class="tab-panel" data-tab-panel="Configuration">
            <div class="config-list">
              <div class="config-item selectable" data-callout="Standard Agent"><span>Agent type</span><strong>Standard Agent</strong><small>Alternative: AIP Assist Agent</small></div>
              <div class="config-item selectable" data-callout="Model Settings"><span>Model</span><strong>GPT-4.1</strong><small>Temperature 0.2</small></div>
              <div class="config-item selectable" data-callout="Retrieval Context"><span>Retrieval context</span><strong>Ontology Context: Research Paper Chunks</strong><small>Relevant objects, embedding property, extracted text</small></div>
              <div class="config-item selectable" data-callout="Agent Tools"><span>Tools</span><strong>Apply Action, Object Query, Call Function, Update Application Variable, Request Clarification</strong></div>
              <div class="config-item selectable" data-callout="Citations"><span>Citations</span><strong>Source links enabled</strong><small>Citation object set variable available</small></div>
            </div>
          </div>
          <div class="tab-panel is-hidden" data-tab-panel="Test Chat">
            <div class="chat">
              <div class="message user">Has glyphosate been found in soybeans?</div>
              <div class="message agent">Yes. The agent retrieved relevant research paper chunks and generated an answer with sources.</div>
              <div class="source-list">
                <div class="source selectable" data-callout="Source Citation"><div class="source-icon">PDF</div><div><strong>Residue study, page 14</strong><small>selected citation object set</small></div></div>
                <div class="source selectable" data-callout="Research Paper Chunk"><div class="source-icon">OBJ</div><div><strong>Research Paper Chunk</strong><small>embedding + extracted text + media reference</small></div></div>
              </div>
            </div>
          </div>
          <div class="tab-panel is-hidden" data-tab-panel="Versions">
            <div class="table">
              <div class="row header"><span>Version</span><span>Status</span><span>Updated</span><span>Action</span></div>
              <div class="row"><span>v3</span><span>Published</span><span>Today</span><span>View</span></div>
              <div class="row"><span>v2</span><span>Archived</span><span>Yesterday</span><span>Compare</span></div>
            </div>
          </div>
          <div class="tab-panel is-hidden" data-tab-panel="Usage">
            <div class="metric-grid">
              <div class="metric"><span>Sessions</span><strong>48</strong></div>
              <div class="metric"><span>Users</span><strong>12</strong></div>
              <div class="metric"><span>Helpful</span><strong>91%</strong></div>
              <div class="metric"><span>Unhelpful</span><strong>3</strong></div>
            </div>
          </div>
        </div>
        <div class="panel-card">
          <h3>Agent configuration</h3>
          <div class="tag-row">${tag("Retrieval Context")}${tag("Agent Tools")}${tag("Citations")}${tag("Application State")}</div>
          <p>Click the tabs or feature chips. The right panel explains the selected capability in Chinese.</p>
        </div>
      </div>
    </div>
  `);
}

function renderOntology() {
  return pageShell(`
    <div class="split">
      <div class="mock-window">
        <div class="mock-titlebar">
          <strong>Ontology Manager</strong>
          <div class="tabs">${tab("Object types", true)}${tab("Actions", false, "Apply Action")}${tab("Links")}${tab("Security")}</div>
        </div>
        <div class="mock-body">
          <div class="object-list">
            <div class="object-pill selectable" data-callout="Property Description"><strong>Order</strong><span>properties: customer_status, order_date, quantity_ordered</span></div>
            <div class="object-pill selectable" data-callout="Customer Object"><strong>Customer</strong><span>links: orders, contracts, service tickets</span></div>
            <div class="object-pill selectable" data-callout="Apply Action"><strong>Reported Issue</strong><span>actions: create, update, delete</span></div>
            <div class="object-pill selectable" data-callout="FAA Handbook Chunk"><strong>FAA Chunk</strong><span>embedding + extracted_text + media_reference</span></div>
            <div class="object-pill selectable" data-callout="Maintenance Work Order"><strong>Maintenance Work Order</strong><span>actions: assign, approve, close</span></div>
          </div>
        </div>
      </div>
      <div class="panel-card">
        <div class="section-title"><h3>Object: Order</h3><span class="tag">AI readable</span></div>
        <div class="config-list">
          <div class="config-item selectable" data-callout="Primary Key"><span>Primary key</span><strong>order_id</strong></div>
          <div class="config-item selectable" data-callout="Property Description"><span>Property description</span><strong>Use this property to answer questions about loyalty or customer status. Values include Silver, Gold, Platinum.</strong></div>
          <div class="config-item selectable" data-callout="Object Links"><span>Links</span><strong>Order -> Customer -> Contract</strong></div>
          <div class="config-item selectable" data-callout="Apply Action"><span>Actions</span><strong>Update status, create exception, request approval</strong></div>
        </div>
      </div>
    </div>
  `);
}

function renderLogic() {
  return pageShell(`
    <div class="mock-window">
      <div class="mock-titlebar">
        <strong>AIP Logic Function: triage_reported_issue</strong>
        <div class="tabs">${tab("Builder", true)}${tab("Test")}${tab("Evaluate", false, "Evaluation Suite")}${tab("Publish")}</div>
      </div>
      <div class="mock-body split">
        <div class="flow">
          <div class="flow-step selectable" data-callout="Function Input"><span>Input</span><strong>User report text</strong><span class="tag blue">Variable</span></div>
          <div class="flow-step selectable" data-callout="Use LLM"><span>LLM</span><strong>Classify severity and produce structured JSON</strong><span class="tag">Use LLM</span></div>
          <div class="flow-step selectable" data-callout="Object Query"><span>Query</span><strong>Check for similar existing issues</strong><span class="tag">Object Query</span></div>
          <div class="flow-step selectable" data-callout="Apply Action"><span>Action</span><strong>Create or update Reported Issue</strong><span class="tag amber">Apply Action</span></div>
          <div class="flow-step selectable" data-callout="Evaluation Suite"><span>Eval</span><strong>Run test cases before publishing</strong><span class="tag blue">Evaluation</span></div>
        </div>
        <div class="panel-card">
          <h3>Function blocks</h3>
          <p>Use LLM, Apply Action, Execute Function, Conditionals, Loops, Variables, Testing, Publishing.</p>
          <div class="tag-row">${tag("Object Query")}${tag("Apply Action")}${tag("Evaluation Suite")}</div>
        </div>
      </div>
    </div>
  `);
}

function renderWorkflow() {
  return pageShell(`
    <div class="mock-window">
      <div class="mock-titlebar">
        <strong>Workflow Lineage</strong>
        <div class="tabs">
          ${tab("Graph", true, "Workflow Graph")}
          ${tab("Refactor", false, "Function Version Upgrade")}
          ${tab("AIP Usage", false, "Model Usage Graph")}
          ${tab("Security", false, "Security Review")}
        </div>
      </div>
      <div class="mock-body">
        <div class="workflow-board">
          <div class="graph-node app selectable" data-callout="Workflow Graph">
            <span>Workshop Application</span>
            <strong>FAA Expert Agent App</strong>
            <small>AIP widget + PDF viewer + variables</small>
          </div>
          <div class="graph-node agent selectable" data-callout="Agent Orchestration">
            <span>AIP Chatbot</span>
            <strong>FAA Expert</strong>
            <small>formerly AIP Agent</small>
          </div>
          <div class="graph-node logic selectable" data-callout="Use LLM">
            <span>AIP Logic Function</span>
            <strong>answer_with_context</strong>
            <small>Use LLM + structured output</small>
          </div>
          <div class="graph-node action selectable" data-callout="Apply Action">
            <span>Ontology Action</span>
            <strong>Create Reported Issue</strong>
            <small>human approval optional</small>
          </div>
          <div class="graph-node object selectable" data-callout="Ontology Context">
            <span>Object Type</span>
            <strong>FAA Chunk</strong>
            <small>embedding + extracted_text</small>
          </div>
          <div class="graph-node object selectable" data-callout="Object Query">
            <span>Object Query</span>
            <strong>Orders / Customers</strong>
            <small>filter, aggregate, limit</small>
          </div>
          <div class="graph-node ops selectable" data-callout="Model Usage Graph">
            <span>Observability</span>
            <strong>Model usage</strong>
            <small>cost, calls, lineage</small>
          </div>
          <div class="graph-node eval selectable" data-callout="Evaluation Suite">
            <span>AIP Evals</span>
            <strong>Regression suite</strong>
            <small>quality gates</small>
          </div>
        </div>
      </div>
    </div>

    <div class="three-col">
      <div class="mini-card selectable" data-callout="Workflow Graph"><strong>Understand workflows</strong><p>Inspect the graph of objects, actions, functions, AIP widgets, agents, and applications.</p></div>
      <div class="mini-card selectable" data-callout="Function Version Upgrade"><strong>Refactor and upgrade</strong><p>Manage function versions and cross-stack changes without losing dependency context.</p></div>
      <div class="mini-card selectable" data-callout="Security Review"><strong>Review security</strong><p>Check permissions and resource access across a workflow before production changes.</p></div>
    </div>
  `);
}

function renderAutomate() {
  return pageShell(`
    <div class="mock-window">
      <div class="mock-titlebar">
        <strong>Automation Overview: triage_reported_issue</strong>
        <div class="tabs">
          ${tab("Overview", true, "Automation Overview")}
          ${tab("Triggers", false, "Object Trigger")}
          ${tab("Proposals")}
          ${tab("Run history", false, "Model Usage Graph")}
        </div>
      </div>
      <div class="mock-body automation-layout">
        <div class="automation-flow">
          <div class="flow-step selectable" data-callout="Object Trigger"><span>Trigger</span><strong>New Reported Issue object created</strong><span class="tag blue">Object</span></div>
          <div class="flow-step selectable" data-callout="Automate AIP Logic"><span>Logic</span><strong>Run triage_reported_issue AIP Logic</strong><span class="tag">AIP Logic</span></div>
          <div class="flow-step selectable" data-callout="Apply Action"><span>Edit</span><strong>Create work order or update severity</strong><span class="tag amber">Ontology edit</span></div>
          <div class="flow-step selectable" data-callout="Proposals"><span>Review</span><strong>Stage high-risk edits for human approval</strong><span class="tag red">Proposal</span></div>
          <div class="flow-step selectable" data-callout="Automation Overview"><span>Monitor</span><strong>Track flow status, events, and failures</strong><span class="tag blue">Overview</span></div>
        </div>
        <div class="panel-card">
          <h3>Event chart</h3>
          <div class="chart compact">
            <span style="height:36%"></span><span style="height:44%"></span><span style="height:71%"></span><span style="height:64%"></span><span style="height:82%"></span><span style="height:58%"></span><span style="height:77%"></span><span style="height:49%"></span>
          </div>
          <div class="tag-row">${tag("Object Trigger")}${tag("Schedule Trigger")}${tag("Event Trigger")}</div>
        </div>
      </div>
    </div>
    <div class="three-col">
      <div class="mini-card selectable" data-callout="Automate AIP Logic"><strong>Create from AIP Logic</strong><p>Start an automation from a Logic file's Uses panel and pre-populate the flow.</p></div>
      <div class="mini-card selectable" data-callout="Proposals"><strong>Human review</strong><p>Stage AI-generated edits as proposals before applying them to the Ontology.</p></div>
      <div class="mini-card selectable" data-callout="Automation Overview"><strong>Operate</strong><p>Review status, event history, failures, and approvals after saving.</p></div>
    </div>
  `);
}

function renderWorkshop() {
  return pageShell(`
    <div class="mock-window">
      <div class="mock-titlebar">
        <strong>FAA Expert Agent App</strong>
        <span class="pill good">Published view</span>
      </div>
      <div class="mock-body split">
        <div class="chat">
          <div class="message user">How does density altitude impact aircraft performance?</div>
          <div class="message agent">Higher density altitude reduces aircraft performance, increasing takeoff distance and reducing climb rate.</div>
          <div class="tag-row">${tag("Citations")}${tag("Application State")}</div>
          <div class="source-list">
            <div class="source selectable" data-callout="FAA Handbook Chunk"><div class="source-icon">1</div><div><strong>FAA Handbook Chunk</strong><small>Page 12, selected citation object set</small></div></div>
            <div class="source selectable" data-callout="Performance Chart"><div class="source-icon">2</div><div><strong>Performance Chart</strong><small>Linked media reference</small></div></div>
          </div>
        </div>
        <div class="panel-card selectable" data-callout="PDF Viewer">
          <h3>PDF Viewer</h3>
          <div class="doc-preview">
            <p><mark>Density altitude</mark> affects aircraft takeoff and climb performance...</p>
            <p>Application variable: user_selected_citation</p>
          </div>
        </div>
      </div>
    </div>
    <div class="two-col">
      <div class="panel-card selectable" data-callout="Application State"><strong>Application State</strong><p>Object set variables, selected citation, filters, page state.</p></div>
      <div class="panel-card selectable" data-callout="Action Controls"><strong>Action Controls</strong><p>Approve, submit, update, write back, trigger workflow.</p></div>
    </div>
  `);
}

function renderAnalyst() {
  return pageShell(`
    <div class="mock-window">
      <div class="mock-titlebar">
        <strong>AIP Analyst Workspace</strong>
        <div class="tabs">${tab("Analysis", true)}${tab("Provenance")}${tab("Charts")}${tab("Export")}</div>
      </div>
      <div class="mock-body">
        <div class="chat">
          <div class="message user">Which customer segments have the highest delayed order risk this quarter?</div>
          <div class="message agent">I will query Order, Customer, and Shipment objects, then aggregate delayed order risk by segment and region.</div>
        </div>
        <div class="metric-grid">
          <div class="metric"><span>Object set</span><strong>12,482</strong><small class="muted">orders selected</small></div>
          <div class="metric"><span>Risk segment</span><strong>Gold</strong><small class="muted">highest exposure</small></div>
          <div class="metric"><span>Revenue at risk</span><strong>$8.7M</strong><small class="muted">estimated</small></div>
          <div class="metric"><span>Confidence</span><strong>82%</strong><small class="muted">with provenance</small></div>
        </div>
        <div class="chart">
          <span style="height:42%"></span><span style="height:68%"></span><span style="height:54%"></span><span style="height:78%"></span><span style="height:46%"></span><span style="height:88%"></span><span style="height:61%"></span><span style="height:35%"></span>
        </div>
      </div>
    </div>
  `);
}

function renderAssist() {
  return pageShell(`
    <div class="mock-window">
      <div class="mock-titlebar">
        <strong>AIP Assist Sidebar</strong>
        <div class="tabs">
          ${tab("AIP Assist", true)}
          ${tab("Modes", false, "Assist Modes")}
          ${tab("Custom Sources", false, "Custom Content Sources")}
          ${tab("Suggested Actions")}
        </div>
      </div>
      <div class="mock-body assist-layout">
        <div class="assist-panel selectable" data-callout="AIP Assist">
          <div class="assistant-head">
            <strong>AIP Assist</strong>
            <span class="pill good">Context aware</span>
          </div>
          <div class="message user">How do I create an AIP Chatbot with citations?</div>
          <div class="message agent">Use AIP Chatbot Studio, add retrieval context, enable citations, then test and publish the chatbot.</div>
          <div class="suggestion-grid">
            <button class="suggestion selectable" type="button" data-callout="Suggested Actions">Open Chatbot Studio docs</button>
            <button class="suggestion selectable" type="button" data-callout="Developer Assist">Show API example</button>
            <button class="suggestion selectable" type="button" data-callout="Custom Content Sources">Search custom docs</button>
          </div>
        </div>
        <div class="config-list">
          <div class="config-item selectable" data-callout="Assist Modes"><span>Mode selector</span><strong>Default AIP Assist</strong><small>Platform documentation + developer docs + custom content sources</small></div>
          <div class="config-item selectable" data-callout="Developer Assist"><span>Developer mode</span><strong>Foundry APIs, OSDK, code examples</strong><small>For builders and engineers</small></div>
          <div class="config-item selectable" data-callout="Custom Content Sources"><span>Custom content</span><strong>Notepad docs + documentation repositories</strong><small>Registered internal knowledge sources</small></div>
          <div class="config-item selectable" data-callout="AIP Assist"><span>Access</span><strong>Workspace navigation sidebar / keyboard shortcut</strong><small>Requires AIP enabled in Control Panel</small></div>
        </div>
      </div>
    </div>
    <div class="three-col">
      <div class="mini-card selectable" data-callout="AIP Assist"><strong>Platform help</strong><p>Natural language support for Palantir platform usage.</p></div>
      <div class="mini-card selectable" data-callout="Custom Content Sources"><strong>Custom sources</strong><p>Bring internal docs into Assist responses or Assist-backed chatbots.</p></div>
      <div class="mini-card selectable" data-callout="Suggested Actions"><strong>Suggested actions</strong><p>Context-aware next steps inside Foundry applications.</p></div>
    </div>
  `);
}

function renderAiFde() {
  return pageShell(`
    <div class="mock-window">
      <div class="mock-titlebar">
        <strong>AI FDE</strong>
        <div class="tabs">
          ${tab("Session", true, "AI FDE Session")}
          ${tab("Modes", false, "FDE Modes")}
          ${tab("Context", false, "FDE Context")}
          ${tab("Approvals", false, "Tool Approval")}
          ${tab("Outline", false, "Chat Outline")}
        </div>
      </div>
      <div class="mock-body fde-layout">
        <div class="chat selectable" data-callout="AI FDE Session">
          <div class="context-ribbon">
            <button class="tag" type="button" data-callout="FDE Context">+ Dataset</button>
            <button class="tag" type="button" data-callout="FDE Context">+ Object type</button>
            <button class="tag" type="button" data-callout="FDE Context">+ Branch</button>
            <button class="tag" type="button" data-callout="FDE Modes">Mode: Ontology builder</button>
          </div>
          <div class="message user">Create an object type for reported equipment issues and link it to work orders.</div>
          <div class="message agent">I found the existing Maintenance Work Order object type and prepared an ontology edit on branch feature/issues.</div>
          <div class="approval-card selectable" data-callout="Tool Approval">
            <strong>Approval required</strong>
            <p>Create object type: Reported Issue. Add link: Reported Issue -> Maintenance Work Order.</p>
            <div class="tag-row">${tag("Tool Approval")}${tag("Branch-aware Approval")}</div>
          </div>
        </div>
        <div class="panel-card">
          <h3>Chat Outline</h3>
          <div class="timeline">
            <div class="event selectable" data-callout="FDE Context"><time>Context</time><span>Object type: Maintenance Work Order</span></div>
            <div class="event selectable" data-callout="FDE Modes"><time>Mode</time><span>Ontology builder</span></div>
            <div class="event selectable" data-callout="Tool Approval"><time>Tool</time><span>Propose ontology edit</span></div>
            <div class="event selectable" data-callout="Chat Outline"><time>Tokens</time><span>Prompt and tool history tracked</span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="three-col">
      <div class="mini-card selectable" data-callout="FDE Modes"><strong>Modes and skills</strong><p>Focus the AI engineer on data, ontology, code, apps, or evals.</p></div>
      <div class="mini-card selectable" data-callout="FDE Context"><strong>Managed context</strong><p>User explicitly adds Foundry resources before the model can use them.</p></div>
      <div class="mini-card selectable" data-callout="Tool Approval"><strong>Human control</strong><p>Mutating tools require approval and obey current user permissions.</p></div>
    </div>
  `);
}

function renderThreads() {
  return pageShell(`
    <div class="mock-window">
      <div class="mock-titlebar">
        <strong>AIP Threads</strong>
        <div class="tabs">
          ${tab("Threads", true, "AIP Threads")}
          ${tab("Documents", false, "Thread Documents")}
          ${tab("Chatbots", false, "Thread Chatbots")}
          ${tab("Citations", false, "Thread Citations")}
        </div>
      </div>
      <div class="mock-body threads-layout">
        <div class="thread-list">
          <div class="thread-item selectable is-selected" data-callout="AIP Threads"><strong>FAA Handbook questions</strong><small>PDF + FAA Expert Chatbot</small></div>
          <div class="thread-item selectable" data-callout="Ad-hoc Analysis"><strong>RFP comparison</strong><small>3 documents, cross-language summary</small></div>
          <div class="thread-item selectable" data-callout="Thread Chatbots"><strong>Supply chain helper</strong><small>AIP Chatbot selected</small></div>
        </div>
        <div class="chat selectable" data-callout="Thread Documents">
          <div class="drop-zone selectable" data-callout="Thread Documents">Drag documents here or pick previously uploaded documents</div>
          <div class="message user">Summarize the takeoff performance constraints and cite the source page.</div>
          <div class="message agent">Density altitude affects takeoff distance and climb performance. See the FAA Handbook citation below.</div>
          <div class="source-list">
            <div class="source selectable" data-callout="Thread Citations"><div class="source-icon">PDF</div><div><strong>FAA Handbook page 12</strong><small>citation in thread response</small></div></div>
            <div class="source selectable" data-callout="Thread Chatbots"><div class="source-icon">BOT</div><div><strong>FAA Expert Chatbot</strong><small>organization-created AIP Chatbot</small></div></div>
          </div>
        </div>
        <div class="panel-card">
          <h3>Thread resources</h3>
          <div class="config-list">
            <div class="config-item selectable" data-callout="Thread Documents"><span>Document</span><strong>FAA-Handbook.pdf</strong></div>
            <div class="config-item selectable" data-callout="Thread Chatbots"><span>Chatbot</span><strong>FAA Expert</strong></div>
            <div class="config-item selectable" data-callout="Ad-hoc Analysis"><span>Task</span><strong>Quick document analysis</strong></div>
          </div>
        </div>
      </div>
    </div>
  `);
}

function renderEvals() {
  return pageShell(`
    <div class="metric-grid">
      <div class="metric"><span>Eval pass rate</span><strong>91%</strong></div>
      <div class="metric"><span>Regression risk</span><strong>Low</strong></div>
      <div class="metric"><span>Avg latency</span><strong>2.8s</strong></div>
      <div class="metric"><span>Model cost</span><strong>$184</strong></div>
    </div>
    <div class="split">
      <div class="mock-window">
        <div class="mock-titlebar"><strong>Evaluation Suite</strong><span class="pill">Agent v4 vs v5</span></div>
        <div class="mock-body bars">
          <div class="bar selectable" data-callout="Evaluation Suite"><strong>Answer grounded</strong><div class="track"><div class="fill" style="width:94%"></div></div><span>94%</span></div>
          <div class="bar selectable" data-callout="Tool Accuracy"><strong>Tool accuracy</strong><div class="track"><div class="fill" style="width:88%"></div></div><span>88%</span></div>
          <div class="bar selectable" data-callout="Action Safety"><strong>Action safety</strong><div class="track"><div class="fill" style="width:97%"></div></div><span>97%</span></div>
          <div class="bar selectable" data-callout="Citation Quality"><strong>Citation quality</strong><div class="track"><div class="fill" style="width:86%"></div></div><span>86%</span></div>
        </div>
      </div>
      <div class="panel-card">
        <h3>Observability timeline</h3>
        <div class="timeline">
          <div class="event"><time>09:12</time><span>Agent used Object Query on Order ontology.</span></div>
          <div class="event"><time>09:13</time><span>Apply Action required human approval.</span></div>
          <div class="event"><time>09:14</time><span>User marked answer helpful.</span></div>
          <div class="event"><time>09:16</time><span>Eval case added from production feedback.</span></div>
        </div>
      </div>
    </div>
  `);
}

function renderData() {
  return pageShell(`
    <div class="three-col">
      <div class="module-card selectable" data-callout="Data Connection"><strong>Data Connection</strong><p>SAP, ERP, CRM, databases, object stores, file uploads.</p><div class="tag-row"><span class="tag blue">ERP</span><span class="tag">CRM</span></div></div>
      <div class="module-card selectable" data-callout="Pipeline Builder"><strong>Pipeline Builder</strong><p>Clean, transform, schedule, use LLM nodes, sync to ontology.</p><div class="tag-row"><span class="tag">Use LLM</span><span class="tag blue">Transform</span></div></div>
      <div class="module-card selectable" data-callout="Document Intelligence"><strong>Document Intelligence</strong><p>OCR, layout-aware OCR, VLM extraction, markdown output, bounding boxes.</p><div class="tag-row">${tag("Document Intelligence")}</div></div>
    </div>
    <div class="mock-window">
      <div class="mock-titlebar"><strong>Document to Ontology flow</strong><span class="pill">RAG / OAG preparation</span></div>
      <div class="mock-body flow">
        <div class="flow-step selectable" data-callout="Document Intelligence"><span>Extract</span><strong>PDF / diagram / invoice to markdown and bounding boxes</strong><span class="tag">Document Intelligence</span></div>
        <div class="flow-step selectable" data-callout="Chunk"><span>Chunk</span><strong>Split text into reusable document chunk objects</strong><span class="tag blue">Pipeline</span></div>
        <div class="flow-step selectable" data-callout="Ontology Context"><span>Embed</span><strong>Create embedding property for semantic search</strong><span class="tag">Embedding</span></div>
        <div class="flow-step selectable" data-callout="Sync to Ontology"><span>Sync</span><strong>Publish chunks, media references, links into Ontology</strong><span class="tag amber">Ontology</span></div>
      </div>
    </div>
  `);
}

function renderModels() {
  return pageShell(`
    <div class="card-grid">
      <div class="module-card selectable" data-callout="Model Enablement"><strong>GPT-4.1</strong><p>Stable completion model for agents and logic functions.</p><div class="tag-row"><span class="tag">Enabled</span><span class="tag blue">Text</span></div></div>
      <div class="module-card selectable" data-callout="Claude Sonnet"><strong>Claude Sonnet</strong><p>Reasoning and long-context workflows.</p><div class="tag-row"><span class="tag">Enabled</span><span class="tag blue">Text</span></div></div>
      <div class="module-card selectable" data-callout="Embedding Model"><strong>Embedding model</strong><p>Creates vectors for ontology and document retrieval.</p><div class="tag-row"><span class="tag amber">Embedding</span></div></div>
      <div class="module-card selectable" data-callout="Vision Model"><strong>Vision model</strong><p>Supports image, chart, diagram, and document understanding.</p><div class="tag-row"><span class="tag blue">Vision</span></div></div>
    </div>
    <div class="two-col">
      <div class="panel-card selectable" data-callout="Provider-compatible APIs"><strong>Provider-compatible APIs</strong><p>OpenAI, Anthropic, xAI, Google compatible API formats with Foundry governance.</p></div>
      <div class="panel-card selectable" data-callout="Bring Your Own Model"><strong>Bring Your Own Model</strong><p>Register enterprise-owned models or model provider accounts into AIP workflows.</p></div>
      <div class="panel-card selectable" data-callout="Model Playground"><strong>Model Playground</strong><p>Test models in a sandbox before using them in Chatbot Studio, Logic, or Workshop.</p></div>
      <div class="panel-card selectable" data-callout="Model Usage Graph"><strong>Usage and lifecycle</strong><p>Track availability, deprecation, request volume, and model replacement impact.</p></div>
    </div>
  `);
}

function renderDevTools() {
  return pageShell(`
    <div class="mock-window">
      <div class="mock-titlebar">
        <strong>Developer Tools</strong>
        <div class="tabs">
          ${tab("Developer Console", true)}
          ${tab("OSDK")}
          ${tab("APIs", false, "Foundry APIs")}
          ${tab("MCP", false, "Palantir MCP")}
          ${tab("Code", false, "Code Workspaces")}
        </div>
      </div>
      <div class="mock-body">
        <div class="card-grid">
          <div class="module-card selectable" data-callout="Developer Console"><strong>Developer Console</strong><p>Manage applications, permissions, restrictions, OAuth, Ontology MCP, and app metrics.</p><div class="tag-row">${tag("OSDK")}${tag("Ontology MCP")}</div></div>
          <div class="module-card selectable" data-callout="OSDK"><strong>Ontology SDK</strong><p>Build Python, Java, or TypeScript apps against Ontology objects and AIP Logic functions.</p><div class="tag-row"><span class="tag blue">TypeScript</span><span class="tag">Python</span></div></div>
          <div class="module-card selectable" data-callout="Foundry APIs"><strong>Foundry APIs</strong><p>Call platform resources, AIP Chatbots, Ontology services, and workflow APIs from external systems.</p><div class="tag-row">${tag("Provider-compatible APIs")}</div></div>
          <div class="module-card selectable" data-callout="Palantir MCP"><strong>Palantir MCP</strong><p>Give external AI IDEs Foundry documentation, repository, and ontology-building context.</p><div class="tag-row">${tag("Ontology MCP")}</div></div>
        </div>
      </div>
    </div>
    <div class="three-col">
      <div class="mini-card selectable" data-callout="Code Workspaces"><strong>Code Workspaces</strong><p>Use notebooks, repositories, VS Code-style workspaces, and AI assistance for pro-code work.</p></div>
      <div class="mini-card selectable" data-callout="Functions"><strong>Functions</strong><p>Publish code-authored functions for Workshop, Logic, Agents, APIs, and Evals.</p></div>
      <div class="mini-card selectable" data-callout="Transforms"><strong>Transforms</strong><p>Build datasets, document outputs, and pipeline assets that feed the Ontology.</p></div>
    </div>
  `);
}

function renderMarketplace() {
  return pageShell(`
    <div class="mock-window">
      <div class="mock-titlebar">
        <strong>Marketplace Product: FAA Expert Workspace</strong>
        <div class="tabs">
          ${tab("Product", true, "Marketplace Product")}
          ${tab("Resources", false, "Add Resources")}
          ${tab("Release", false, "Release Management")}
          ${tab("Install", false, "Install Product")}
        </div>
      </div>
      <div class="mock-body split">
        <div class="flow">
          <div class="flow-step selectable" data-callout="Foundry DevOps"><span>DevOps</span><strong>Create Marketplace product</strong><span class="tag blue">Product</span></div>
          <div class="flow-step selectable" data-callout="Add Resources"><span>Add</span><strong>AIP Chatbot + Workshop module + media set</strong><span class="tag">Resources</span></div>
          <div class="flow-step selectable" data-callout="Marketplace Product"><span>Package</span><strong>Include document context and required dependencies</strong><span class="tag amber">Bundle</span></div>
          <div class="flow-step selectable" data-callout="Release Management"><span>Release</span><strong>Publish version for organization installation</strong><span class="tag blue">Version</span></div>
          <div class="flow-step selectable" data-callout="Install Product"><span>Install</span><strong>Users install and reuse the app/chatbot package</strong><span class="tag">Marketplace</span></div>
        </div>
        <div class="panel-card">
          <h3>Included resources</h3>
          <div class="source-list">
            <div class="source selectable" data-callout="Create Agent"><div class="source-icon">BOT</div><div><strong>FAA Expert AIP Chatbot</strong><small>all chatbot features except Assist agents</small></div></div>
            <div class="source selectable" data-callout="Build Application"><div class="source-icon">APP</div><div><strong>Workshop module</strong><small>embeds AIP Chatbot widget</small></div></div>
            <div class="source selectable" data-callout="Thread Documents"><div class="source-icon">PDF</div><div><strong>Media set</strong><small>document context packaged with product</small></div></div>
          </div>
        </div>
      </div>
    </div>
  `);
}

function renderFeatureMap() {
  const rows = featureRows
    .map(
      (row) => `
        <div class="feature-row selectable" data-callout="${row.callout}">
          <div><strong>${row.module}</strong><small>${row.status}</small></div>
          <div><span>${row.official}</span><small>${row.surface}</small></div>
          <p>${row.functionText}</p>
          <button class="text-button jump-view" type="button" data-jump-view="${row.view}">打开页面</button>
        </div>
      `
    )
    .join("");

  return pageShell(`
    <div class="mock-window">
      <div class="mock-titlebar">
        <strong>Palantir AIP feature map</strong>
        <span class="pill">Prototype navigation aligned with feature checklist</span>
      </div>
      <div class="feature-table">
        <div class="feature-row feature-header">
          <div>Prototype module</div>
          <div>Official capability / page surface</div>
          <div>What this function does</div>
          <div>Open</div>
        </div>
        ${rows}
      </div>
    </div>
  `);
}

function renderAdmin() {
  return pageShell(`
    <div class="split">
      <div class="mock-window">
        <div class="mock-titlebar"><strong>Control Panel</strong><span class="pill good">Governance active</span></div>
        <div class="mock-body config-list">
          <div class="config-item selectable" data-callout="AIP Settings"><span>AIP Settings</span><strong>Core assistants enabled for selected user groups</strong></div>
          <div class="config-item selectable" data-callout="Model Enablement"><span>Model Enablement</span><strong>GPT-4.1 enabled, experimental models restricted</strong></div>
          <div class="config-item selectable" data-callout="Organizations"><span>Organizations</span><strong>Only approved org markings can use AIP on marked resources</strong></div>
          <div class="config-item selectable" data-callout="Purpose-based Controls"><span>Purpose-based controls</span><strong>AI access follows user permission and purpose</strong></div>
        </div>
      </div>
      <div class="panel-card">
        <h3>Audit log</h3>
        <div class="timeline">
          <div class="event"><time>10:22</time><span>User asked Agent to create issue.</span></div>
          <div class="event"><time>10:22</time><span>Agent proposed Apply Action.</span></div>
          <div class="event"><time>10:23</time><span>Human approved action execution.</span></div>
          <div class="event"><time>10:23</time><span>Ontology object created with lineage.</span></div>
        </div>
      </div>
    </div>
  `);
}

const renderers = {
  flow: renderFlow,
  home: renderHome,
  agent: renderAgent,
  ontology: renderOntology,
  logic: renderLogic,
  workflow: renderWorkflow,
  automate: renderAutomate,
  workshop: renderWorkshop,
  analyst: renderAnalyst,
  assist: renderAssist,
  aifde: renderAiFde,
  threads: renderThreads,
  evals: renderEvals,
  data: renderData,
  models: renderModels,
  devtools: renderDevTools,
  marketplace: renderMarketplace,
  featuremap: renderFeatureMap,
  admin: renderAdmin
};

function setView(view) {
  const meta = viewMeta[view] || viewMeta.home;
  document.body.dataset.view = view;
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === view);
  });
  viewTitle.textContent = meta.title;
  viewSubtitle.textContent = meta.subtitle;
  setInspector(meta);
  const render = renderers[view] || renderHome;
  canvas.innerHTML = render();
}

function selectElement(element) {
  canvas.querySelectorAll(".is-selected").forEach((item) => item.classList.remove("is-selected"));
  element.classList.add("is-selected");
}

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.view));
});

canvas.addEventListener("click", (event) => {
  const jumpButton = event.target.closest(".jump-view");
  if (jumpButton) {
    setView(jumpButton.dataset.jumpView);
    return;
  }

  const tabButton = event.target.closest(".tab");
  if (tabButton) {
    const tabs = tabButton.closest(".tabs");
    tabs.querySelectorAll(".tab").forEach((button) => button.classList.remove("is-active"));
    tabButton.classList.add("is-active");

    const windowEl = tabButton.closest(".mock-window");
    const panels = windowEl?.querySelectorAll(".tab-panel");
    if (panels?.length) {
      panels.forEach((panel) => panel.classList.toggle("is-hidden", panel.dataset.tabPanel !== tabButton.dataset.tab));
    }
    if (tabButton.dataset.callout && !setCallout(tabButton.dataset.callout)) {
      setElementFallback(tabButton);
    }
    return;
  }

  const selectable = event.target.closest(".selectable, [data-callout]");
  if (!selectable || !canvas.contains(selectable)) return;
  selectElement(selectable);
  if (selectable.dataset.callout) {
    if (!setCallout(selectable.dataset.callout)) setElementFallback(selectable);
  } else {
    setElementFallback(selectable);
  }
});

document.getElementById("pinMode").addEventListener("click", () => {
  setInspector(viewMeta.home);
});

setView("flow");
