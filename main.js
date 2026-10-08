const projects = [
  { name: "AI 产业情报知识库与研究平台", type: "AI Research · Agent Workflow", summary: "面向 AI 产业研究，串联多源采集、知识沉淀、证据检索、观点演进与报告生成。", role: "AI 产品设计 + Agent Workflow 落地", problem: "产业研究资料来源分散，原始信息、事实、观点与报告之间缺少统一的知识生产链路。", solution: "将信源发现、网页采集、Raw 入库、语义抽取、Wiki 编译、人工复核、Dashboard 与专题报告生成串联为统一 Workflow，并接入飞书机器人支持自然语言触发。", tech: "Python, FastAPI, Codex Skills, Hermes Agent, React, TypeScript, JSON Schema, LLM Tool Calling", result: "累计沉淀 3343 条 Raw、591 条事实、43 个动态观点、617 条事实—观点关联，支持五大 AI 产业板块的结构化研究交付。", link: "", screenshots: ["./images/a1.png", "./images/a2.png", "./images/a3.png", "./images/a4.png", "./images/a5.png"] },
  { name: "AI 智能疾病管理", type: "Healthcare AI · Multi-Agent", summary: "构建覆盖多轮问诊、医学证据检索、结构化诊断、护理计划与随访提醒的疾病管理平台。", role: "AI 应用设计 + RAG 链路落地", problem: "患者问诊需要连续追问、可靠医学证据和诊后管理，单一模型难以同时处理复杂流程与证据可信度。", solution: "由 MasterAgent 负责意图识别与路由，DiagnosisAgent 动态追问和诊断，PlanningAgent 异步生成 CarePlan 与 MonitoringEvent，并整合内部知识库、实时医学搜索和患者历史数据。", tech: "Python, FastAPI, PostgreSQL, Redis, Celery, Chroma, Qwen, Embedding/Rerank, SearXNG", result: "基于 150 条分层医学问题评测，Recall@5 达 0.8900、Hit@5 达 0.9467，Rerank 后 nDCG@5 提升 5.58%。", link: "https://github.com/zhangzeyu-430/meidicare-ai", screenshots: ["./images/m1.png", "./images/m2.png", "./images/m3.png", "./images/m4.png", "./images/m5.png"] },
  { name: "ETF 期权决策辅助桌面应用", type: "FinTech · Desktop App", summary: "面向个人客户的 ETF 期权研究工具，将行情、成分股、波动率和期权数据转化为可执行的策略建议。", role: "独立开发者", problem: "行情、成分股、波动率和期权数据分散，个人客户的策略判断缺少统一标准和可解释依据。", solution: "设计行情分析、方向判断、策略推荐、期权链、持仓管理和盘中告警功能，建立“趋势 40% + 权重股 30% + 跨 ETF 市场广度 30%”的方向评分模型，并映射至买入期权、牛熊价差、铁鹰或观望策略。", tech: "Python, Tauri, 腾讯财经, 东方财富, 上交所, QVIX, Black-Scholes", result: "独立完成需求分析、产品设计、算法开发、桌面端研发、部署和售后迭代，完成 2 万元定制化商业交付，并通过 166 个自动化测试用例。", link: "", screenshots: ["./images/e1.png", "./images/e2.png", "./images/e3.png", "./images/e4.png"] },
  { name: "语境词汇学习系统", type: "AI Coding · Learning", summary: "把背单词从孤立记忆变成语境、练习与复习的学习闭环。", role: "产品设计 + 工程落地", problem: "传统词表学习缺少真实语境，用户理解和迁移成本高。", solution: "用户选词，AI 生成语境化解释，再进入练习与间隔复习。", tech: "Python, LLM, React, Tailwind", result: "完成闭环复习流程，提升单词记忆效率。", link: "https://github.com/zhangzeyu-430/ContextVocab", screenshots: ["./images/2.1.png", "./images/2.2.png", "./images/2.3.png", "./images/2.4.png", "./images/2.5.png"] },
  { name: "paper-presentation Skill", type: "AI Tool · Skill", summary: "自动生成组会汇报材料，减少论文精读和整理的重复工作。", role: "产品设计与 Skill 输出", problem: "论文精读、逐页整理和组会准备耗时长。", solution: "支持 PDF 转 HTML / PPT，并生成逐页逐字稿和追问应答稿。", tech: "Skill, Python", result: "解决高重复场景的稳定提效问题。", link: "https://github.com/zhangzeyu-430/paper-presentation-Skill", screenshots: [] }
];

const experiences = [
  {
    period: "2026.01 — 2026.04",
    company: "亚信科技",
    role: "AI 应用开发实习生",
    title: "大表哥｜企业 Excel 智能分析与核验平台",
    tech: "Python、Node.js、SQLite、LLM、Agent Workflow、Tool Calling、Context Engineering、JSON Schema、本地化部署",
    summary: "面向财务、薪酬、预算等复杂 Excel，参与构建从表格理解、公式核验、异常定位到报告交付的 Agent 工作流，解决大模型直接处理 Excel 时容易出现的上下文超限、业务误判和结果不可追溯问题。",
    points: [
      "Agent Workflow：参与将 Excel 分析拆分为结构识别、公式还原、语义判断、专家确认、结果验证和报告交付等阶段，明确 LLM、确定性程序和业务专家的职责边界。",
      "Context Engineering：将 Workbook、Sheet、Cell、Formula、Reference 等底层证据整理为结构化上下文，使 Agent 只处理真正需要业务判断的问题。",
      "Tool Calling 与权限控制：参与设计 Skill、TaskContract 和 Tool Bridge，通过工具白名单、路径校验、JSON Schema 参数校验和人工确认，限制 Agent 越权访问文件、修改数据库或发布业务结论。",
      "复杂 Excel 受控验证覆盖 25 个 Sheet、8,025 个公式和 15,868 个重点单元格；4/4 类预置问题和 5/5 条检测路径全部命中。针对约 17 MB 公式密集工作簿，处理耗时由 73.5 秒降至 32.6 秒，内存占用由 1762 MB 降至 215 MB，并通过逐字节回归确认结果未发生变化。"
    ]
  },
  {
    period: "2026.04 — 2026.08",
    company: "CSDN",
    role: "AI 应用开发实习生（FDE）",
    title: "企业 AI 应用落地与 Agent Workflow",
    tech: "Agent Skill、Browser Automation、CLI、MCP、Tauri、Markdown、SQLite FTS5、Obsidian",
    summary: "面向企业客户真实业务场景开展 AI 应用落地，参与需求访谈、流程梳理与技术方案设计，将人工经验流程、跨系统操作和业务规则抽象为可执行的 Agent Workflow。",
    points: [
      "支撑 2 个企业客户、23 个 AI 应用场景分析与方案落地，完成从需求分析、流程梳理到技术方案设计的协作。",
      "参与企业级 Agent 应用架构设计与原型开发，根据业务复杂度选择 Agent Skill、CLI、浏览器自动化、MCP、Tauri 桌面端等技术方案，完成从技术验证到端侧交付。",
      "封装可复用 Agent Skill 与 Browser Automation 组件，探索合同审核、业务系统操作等场景中的自然语言驱动自动化能力。",
      "基于 Markdown、SQLite FTS5、Obsidian 与 MCP 搭建企业 AI 知识资产沉淀体系，归纳形成 6 类 AI 应用交付模式，提升后续场景复制效率。"
    ]
  }
];

const galleryImages = ["./images/生活1.jpg", "./images/生活2.jpg", "./images/生活3.jpg", "./images/生活4.jpg", "./images/生活5.jpg", "./images/生活6.jpg", "./images/生活7.jpg", "./images/生活8.jpg", "./images/生活9.jpg"];

const dom = {
  projectIndex: document.getElementById("projectIndex"), projectModal: document.getElementById("projectModal"), closeProjectModal: document.getElementById("closeProjectModal"),
  experienceModal: document.getElementById("experienceModal"), closeExperienceModal: document.getElementById("closeExperienceModal"),
  imageLightbox: document.getElementById("imageLightbox"), closeLightbox: document.getElementById("closeLightbox"), lightboxPrev: document.getElementById("lightboxPrev"), lightboxNext: document.getElementById("lightboxNext"), lightboxImage: document.getElementById("lightboxImage"),
  shotsSection: document.getElementById("projectShotsSection"), shotsGrid: document.getElementById("projectShotsGrid"), galleryWindow: document.getElementById("galleryWindow"), galleryTrack: document.getElementById("galleryTrack"), galleryCurrent: document.getElementById("galleryCurrent"), galleryPrev: document.getElementById("galleryPrev"), galleryPause: document.getElementById("galleryPause"), galleryNext: document.getElementById("galleryNext"), portraitImage: document.getElementById("portraitImage"),
  featuredCase: document.querySelector(".featured-case"), featuredKicker: document.querySelector(".featured-copy .eyebrow"), featuredTitle: document.querySelector(".featured-copy h3"), featuredSummary: document.querySelector(".featured-summary"), featuredRole: document.querySelector(".featured-role"), featuredSolution: document.querySelector(".featured-solution"), featuredResult: document.querySelector(".featured-result"), featuredButton: document.querySelector(".featured-copy [data-featured-project]")
};

const fields = { title: document.getElementById("projectTitle"), summary: document.getElementById("projectSummary"), role: document.getElementById("projectRole"), problem: document.getElementById("projectProblem"), solution: document.getElementById("projectSolution"), tech: document.getElementById("projectTech"), result: document.getElementById("projectResult"), link: document.getElementById("projectLink") };
const experienceFields = { period: document.getElementById("experiencePeriod"), company: document.getElementById("experienceCompany"), role: document.getElementById("experienceRole"), title: document.getElementById("experienceTitle"), tech: document.getElementById("experienceTech"), summary: document.getElementById("experienceSummary"), points: document.getElementById("experiencePoints") };
const lightbox = { shots: [], index: 0 };
let featuredIndex = 0;
const galleryState = { index: 0, paused: false, manual: false, offset: 0, dragging: false, dragStartX: 0, lastX: 0, startIndex: 0, startOffset: 0, moved: false, pressedItem: null, clickTimer: null, suppressClick: false, autoTimer: null };

function lockScroll(value) { document.body.classList.toggle("lock-scroll", value); }
function anyPanelOpen() { return !dom.projectModal.classList.contains("hidden") || !dom.experienceModal.classList.contains("hidden") || !dom.imageLightbox.classList.contains("hidden"); }

function setFeaturedProject(index) {
  const project = projects[index]; if (!project) return;
  if (index !== featuredIndex && dom.featuredCase) {
    dom.featuredCase.classList.remove("is-switching");
    void dom.featuredCase.offsetWidth;
    dom.featuredCase.classList.add("is-switching");
    window.setTimeout(() => dom.featuredCase.classList.remove("is-switching"), 620);
  }
  featuredIndex = index;
  dom.featuredKicker.textContent = `FEATURED CASE · ${String(index + 1).padStart(2, "0")}`;
  dom.featuredTitle.textContent = project.name;
  dom.featuredSummary.textContent = project.summary;
  dom.featuredRole.textContent = project.role;
  dom.featuredSolution.textContent = project.solution;
  dom.featuredResult.textContent = project.result;
  dom.featuredButton.dataset.featuredProject = String(index);
  dom.projectIndex?.querySelectorAll("[data-project-index]").forEach((row) => {
    const isActive = Number(row.dataset.projectIndex) === index;
    row.classList.toggle("is-active", isActive);
    row.setAttribute("aria-current", isActive ? "true" : "false");
  });
}

function renderProjects() {
  dom.projectIndex.innerHTML = projects.map((project, index) => `<button class="project-row reveal${index === 0 ? " is-active" : ""}" type="button" data-project-index="${index}" aria-current="${index === 0 ? "true" : "false"}" aria-label="查看项目：${project.name}"><span class="row-number">0${index + 1}</span><span class="row-copy"><span class="row-title"><img class="row-apple" src="./images/layers/apple.png" alt="" aria-hidden="true" />${project.name}</span><span class="row-summary">${project.summary}</span><span class="row-meta">${project.type} <i>·</i> ${project.role}</span></span><span class="row-result">${project.result}</span><span class="row-arrow"><span class="row-arrow-label">查看</span>↗</span></button>`).join("");
  dom.projectIndex.querySelectorAll("[data-project-index]").forEach((row) => {
    const update = () => setFeaturedProject(Number(row.dataset.projectIndex));
    row.addEventListener("mouseenter", update);
    row.addEventListener("focus", update);
    row.addEventListener("click", () => openProject(Number(row.dataset.projectIndex)));
  });
}

function renderGallery() {
  const repeated = [...galleryImages, ...galleryImages];
  dom.galleryTrack.innerHTML = repeated.map((src, index) => {
    const galleryIndex = index % galleryImages.length;
    const cloneAttrs = index >= galleryImages.length ? ' aria-hidden="true" tabindex="-1"' : "";
    return `<button class="gallery-item" type="button" data-gallery-index="${galleryIndex}"${cloneAttrs}><img src="${src}" alt="作品截图 ${galleryIndex + 1}" loading="lazy" /></button>`;
  }).join("");
  dom.galleryTrack.addEventListener("click", (event) => {
    if (event.detail !== 0) return;
    const item = event.target.closest?.("[data-gallery-index]");
    if (!item) return;
    galleryState.index = Number(item.dataset.galleryIndex);
    updateGalleryStatus();
    openLightbox(galleryImages, galleryState.index);
  });
  dom.galleryTrack.querySelectorAll("[data-gallery-index]").forEach((item) => item.addEventListener("click", () => {
    galleryState.suppressClick = false;
    galleryState.index = Number(item.dataset.galleryIndex);
    updateGalleryStatus();
    openLightbox(galleryImages, galleryState.index);
  }));
  dom.galleryTrack.querySelectorAll("[data-gallery-index]").forEach((item) => {
    let mouseStartX = 0;
    let mouseMoved = false;
    item.addEventListener("mousedown", (event) => {
      mouseStartX = event.clientX;
      mouseMoved = false;
    });
    item.addEventListener("mousemove", (event) => {
      if (Math.abs(event.clientX - mouseStartX) > 12) mouseMoved = true;
    });
    item.addEventListener("mouseup", () => {
      if (mouseMoved) return;
      galleryState.index = Number(item.dataset.galleryIndex);
      updateGalleryStatus();
      openLightbox(galleryImages, galleryState.index);
    });
    item.addEventListener("pointerdown", () => {
      galleryState.index = Number(item.dataset.galleryIndex);
      updateGalleryStatus();
      openLightbox(galleryImages, galleryState.index);
    });
    item.onclick = (event) => {
      event.stopPropagation();
      galleryState.index = Number(item.dataset.galleryIndex);
      updateGalleryStatus();
      openLightbox(galleryImages, galleryState.index);
    };
  });
}

function updateGalleryStatus() {
  if (dom.galleryCurrent) dom.galleryCurrent.textContent = String(galleryState.index + 1).padStart(2, "0");
}

function normalizeGalleryOffset(offset) {
  const halfWidth = dom.galleryTrack.scrollWidth / 2;
  if (!halfWidth) return offset;
  let normalized = offset % halfWidth;
  if (normalized > 0) normalized -= halfWidth;
  return normalized;
}

function setGalleryOffset(offset) {
  galleryState.offset = normalizeGalleryOffset(offset);
  dom.galleryTrack.style.setProperty("--gallery-offset", `${galleryState.offset}px`);
}

function pauseGallery() {
  galleryState.paused = true;
  dom.galleryTrack.classList.add("is-paused");
  dom.galleryPause?.setAttribute("aria-pressed", "true");
  if (dom.galleryPause) dom.galleryPause.textContent = "继续";
}

function resumeGallery() {
  galleryState.paused = false;
  if (galleryState.manual) {
    galleryState.manual = false;
    galleryState.offset = 0;
    dom.galleryTrack.classList.remove("is-manual");
    dom.galleryTrack.style.removeProperty("--gallery-offset");
  }
  dom.galleryTrack.classList.remove("is-paused");
  dom.galleryPause?.setAttribute("aria-pressed", "false");
  if (dom.galleryPause) dom.galleryPause.textContent = "暂停";
}

function moveGallery(step) {
  const firstItem = dom.galleryTrack.querySelector(".gallery-item");
  if (!firstItem) return;
  pauseGallery();
  galleryState.manual = true;
  dom.galleryTrack.classList.add("is-manual");
  const stepWidth = firstItem.getBoundingClientRect().width + 11;
  setGalleryOffset(galleryState.offset - step * stepWidth);
  galleryState.index = (galleryState.index + step + galleryImages.length) % galleryImages.length;
  updateGalleryStatus();
}

function setupGalleryControls() {
  if (!dom.galleryWindow || !dom.galleryTrack) return;
  updateGalleryStatus();
  dom.galleryPrev?.addEventListener("click", () => moveGallery(-1));
  dom.galleryNext?.addEventListener("click", () => moveGallery(1));
  dom.galleryPause?.addEventListener("click", () => galleryState.paused ? resumeGallery() : pauseGallery());

  const stopDragging = (event) => {
    if (!galleryState.dragging) return;
    const pressedItem = galleryState.pressedItem;
    galleryState.dragging = false;
    galleryState.pressedItem = null;
    if (galleryState.clickTimer) { window.clearTimeout(galleryState.clickTimer); galleryState.clickTimer = null; }
    dom.galleryWindow.classList.remove("is-dragging");
    if (galleryState.moved) {
      const firstItem = dom.galleryTrack.querySelector(".gallery-item");
      const stepWidth = firstItem ? firstItem.getBoundingClientRect().width + 11 : 1;
      const indexShift = Math.round((galleryState.dragStartX - galleryState.lastX) / stepWidth);
      galleryState.index = (galleryState.startIndex + indexShift + galleryImages.length) % galleryImages.length;
      updateGalleryStatus();
      galleryState.suppressClick = true;
      window.setTimeout(() => { galleryState.suppressClick = false; }, 80);
    } else if (pressedItem && !galleryState.suppressClick) {
      galleryState.index = Number(pressedItem.dataset.galleryIndex);
      updateGalleryStatus();
      openLightbox(galleryImages, galleryState.index);
    }
    if (event?.pointerId !== undefined && dom.galleryWindow.hasPointerCapture?.(event.pointerId)) dom.galleryWindow.releasePointerCapture(event.pointerId);
  };

  dom.galleryWindow.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    galleryState.dragging = true;
    galleryState.moved = false;
    galleryState.dragStartX = event.clientX;
    galleryState.lastX = event.clientX;
    galleryState.startIndex = galleryState.index;
    galleryState.startOffset = galleryState.offset;
    galleryState.pressedItem = event.target.closest?.(".gallery-item") || null;
    if (galleryState.pressedItem) {
      galleryState.clickTimer = window.setTimeout(() => {
        if (!galleryState.dragging || galleryState.moved || !galleryState.pressedItem) return;
        galleryState.index = Number(galleryState.pressedItem.dataset.galleryIndex);
        updateGalleryStatus();
        openLightbox(galleryImages, galleryState.index);
        galleryState.clickTimer = null;
      }, 140);
    }
    pauseGallery();
    galleryState.manual = true;
    dom.galleryTrack.classList.add("is-manual");
    dom.galleryWindow.classList.add("is-dragging");
  });
  dom.galleryWindow.addEventListener("pointermove", (event) => {
    if (!galleryState.dragging) return;
    const delta = event.clientX - galleryState.dragStartX;
    galleryState.lastX = event.clientX;
    if (Math.abs(delta) > 12) galleryState.moved = true;
    if (galleryState.moved && galleryState.clickTimer) { window.clearTimeout(galleryState.clickTimer); galleryState.clickTimer = null; }
    if (galleryState.moved) event.preventDefault();
    setGalleryOffset(galleryState.startOffset + delta);
  });
  dom.galleryWindow.addEventListener("pointerup", stopDragging);
  dom.galleryWindow.addEventListener("pointercancel", stopDragging);
  dom.galleryWindow.addEventListener("lostpointercapture", () => stopDragging());
  document.addEventListener("pointerup", stopDragging, true);

  galleryState.autoTimer = window.setInterval(() => {
    if (!galleryState.paused) {
      galleryState.index = (galleryState.index + 1) % galleryImages.length;
      updateGalleryStatus();
    }
  }, 3000);
}

function renderShots(project) {
  if (!project.screenshots.length) { dom.shotsSection.classList.add("hidden"); dom.shotsGrid.innerHTML = ""; return; }
  dom.shotsSection.classList.remove("hidden");
  dom.shotsGrid.innerHTML = project.screenshots.map((src, index) => `<button class="shot-card" type="button" data-shot-index="${index}"><img src="${src}" alt="${project.name} 截图 ${index + 1}" loading="lazy" /></button>`).join("");
  dom.shotsGrid.querySelectorAll("[data-shot-index]").forEach((shot) => shot.addEventListener("click", () => openLightbox(project.screenshots, Number(shot.dataset.shotIndex))));
}

function openProject(index) {
  const project = projects[index]; if (!project) return;
  fields.title.textContent = project.name; fields.summary.textContent = project.summary; fields.role.textContent = project.role; fields.problem.textContent = project.problem; fields.solution.textContent = project.solution; fields.tech.textContent = project.tech; fields.result.textContent = project.result; fields.link.innerHTML = project.link ? `<a href="${project.link}" target="_blank" rel="noreferrer">打开 GitHub ↗</a>` : "个人商业项目，无公开链接";
  renderShots(project); dom.projectModal.classList.remove("hidden"); lockScroll(true);
}
function closeProject() { dom.projectModal.classList.add("hidden"); lockScroll(anyPanelOpen()); }
function openExperience(index) {
  const experience = experiences[index]; if (!experience) return;
  experienceFields.period.textContent = experience.period;
  experienceFields.company.textContent = experience.company;
  experienceFields.role.textContent = experience.role;
  experienceFields.title.textContent = experience.title;
  experienceFields.tech.textContent = experience.tech;
  experienceFields.summary.textContent = experience.summary;
  experienceFields.points.innerHTML = experience.points.map((point) => `<li>${point}</li>`).join("");
  dom.experienceModal.classList.remove("hidden");
  lockScroll(true);
}
function closeExperience() { dom.experienceModal.classList.add("hidden"); lockScroll(anyPanelOpen()); }
function updateLightbox() { const count = lightbox.shots.length; if (!count) return; lightbox.index = (lightbox.index + count) % count; dom.lightboxImage.src = lightbox.shots[lightbox.index]; dom.lightboxImage.alt = `截图 ${lightbox.index + 1}`; }
function openLightbox(shots, index) { lightbox.shots = shots; lightbox.index = index; updateLightbox(); dom.imageLightbox.classList.remove("hidden"); lockScroll(true); }
function closeLightbox() { dom.imageLightbox.classList.add("hidden"); dom.lightboxImage.src = ""; lockScroll(anyPanelOpen()); }
function changeLightbox(step) { if (lightbox.shots.length > 1) { lightbox.index += step; updateLightbox(); } }

function bindEvents() {
  dom.closeProjectModal.addEventListener("click", closeProject); dom.closeExperienceModal.addEventListener("click", closeExperience); dom.closeLightbox.addEventListener("click", closeLightbox); dom.lightboxPrev.addEventListener("click", () => changeLightbox(-1)); dom.lightboxNext.addEventListener("click", () => changeLightbox(1));
  document.addEventListener("click", (event) => {
    const galleryItem = event.target.closest?.(".gallery-item");
    if (!galleryItem) return;
    galleryState.index = Number(galleryItem.dataset.galleryIndex);
    updateGalleryStatus();
    openLightbox(galleryImages, galleryState.index);
  });
  document.querySelectorAll("[data-close='project']").forEach((item) => item.addEventListener("click", closeProject)); document.querySelectorAll("[data-close='lightbox']").forEach((item) => item.addEventListener("click", closeLightbox));
  document.querySelectorAll("[data-close='experience']").forEach((item) => item.addEventListener("click", closeExperience));
  document.querySelectorAll("[data-open-experience]").forEach((item) => item.addEventListener("click", () => openExperience(Number(item.dataset.openExperience))));
  document.addEventListener("click", (event) => { const experienceItem = event.target.closest("[data-open-experience]"); if (experienceItem) { openExperience(Number(experienceItem.dataset.openExperience)); return; } const item = event.target.closest("[data-featured-project]"); if (item) openProject(Number(item.dataset.featuredProject)); });
  document.querySelectorAll("[data-open-about]").forEach((item) => item.addEventListener("click", () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })));
  document.addEventListener("keydown", (event) => { if (!dom.imageLightbox.classList.contains("hidden")) { if (event.key === "ArrowLeft") changeLightbox(-1); if (event.key === "ArrowRight") changeLightbox(1); if (event.key === "Escape") closeLightbox(); return; } if (event.key === "Escape" && !dom.experienceModal.classList.contains("hidden")) { closeExperience(); return; } if (event.key === "Escape" && !dom.projectModal.classList.contains("hidden")) closeProject(); });
}

function setupMobileNav() {
  const toggle = document.getElementById("mobileNavToggle");
  const panel = document.getElementById("mobileNavPanel");
  if (!toggle || !panel) return;
  const close = () => {
    panel.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "打开导航菜单");
    document.body.classList.remove("mobile-nav-open");
  };
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    if (isOpen) { close(); return; }
    panel.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "关闭导航菜单");
    document.body.classList.add("mobile-nav-open");
  });
  panel.querySelectorAll("a").forEach((link) => link.addEventListener("click", close));
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") close(); });
}

function setupReveal() { const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }), { threshold: 0.12 }); document.querySelectorAll(".reveal").forEach((element) => observer.observe(element)); }

function setupGlobalMotion() {
  const titleTargets = document.querySelectorAll(".section-heading, .hero-copy h1, .about-copy h2, .work-heading h2, .gallery-heading h2, .contact-layout h2");
  titleTargets.forEach((element) => element.classList.add("motion-title"));
  const titleObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add("is-title-visible"); titleObserver.unobserve(entry.target); }
  }), { threshold: 0.25 });
  titleTargets.forEach((element) => titleObserver.observe(element));

  const sections = [...document.querySelectorAll(".page-section")];
  const sectionObserver = new IntersectionObserver((entries) => entries.forEach((entry) => entry.target.classList.toggle("is-active", entry.isIntersecting)), { threshold: 0.28 });
  sections.forEach((section) => sectionObserver.observe(section));

  const parallaxTargets = [...document.querySelectorAll(".scene-leaf, .scene-star, .hero-leaf-rail img, .ambient-drift img, .about-leaf, .about-sprig, .work-leaf, .work-tape, .work-apple, .gallery-leaf, .gallery-sprig, .contact-leaf, .contact-note-art")];
  let frame = 0;
  const updateParallax = () => {
    frame = 0;
    const viewportCenter = window.innerHeight * 0.5;
    parallaxTargets.forEach((element, index) => {
      const rect = element.getBoundingClientRect();
      const speed = 0.018 + (index % 4) * 0.009;
      const offset = Math.max(-22, Math.min(22, (viewportCenter - (rect.top + rect.height * 0.5)) * speed));
      element.style.translate = `0 ${offset.toFixed(1)}px`;
    });
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const offset = Math.max(-28, Math.min(28, (window.innerHeight * 0.5 - (rect.top + rect.height * 0.5)) * 0.018));
      section.style.setProperty("--bg-shift", `${offset.toFixed(1)}px`);
    });
  };
  const requestParallax = () => { if (!frame) frame = window.requestAnimationFrame(updateParallax); };
  window.addEventListener("scroll", requestParallax, { passive: true });
  window.addEventListener("resize", requestParallax, { passive: true });
  requestParallax();
}

function setupPageTurn() {
  const overlay = document.querySelector(".page-turn-overlay");
  if (!overlay) return;
  document.querySelectorAll("a[href^='#']").forEach((link) => link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");
    const target = href ? document.querySelector(href) : null;
    if (!target || href === window.location.hash) return;
    event.preventDefault();
    overlay.classList.remove("is-turning");
    void overlay.offsetWidth;
    overlay.classList.add("is-turning");
    window.history.pushState(null, "", href);
    window.setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "start" }), 150);
    window.setTimeout(() => overlay.classList.remove("is-turning"), 1120);
  }));
}

function setupResponsiveInteractions() {
  const root = document.documentElement;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  const heroScene = document.querySelector(".hero-scene");
  const tooltipLabels = experiences.map((experience) => `${experience.company} · ${experience.role}`);

  document.querySelectorAll(".scene-apple").forEach((apple, index) => {
    apple.dataset.tooltip = tooltipLabels[index] || "查看项目";
  });

  const resetMagnetic = (element) => {
    element.style.setProperty("--mag-x", "0px");
    element.style.setProperty("--mag-y", "0px");
  };

  document.querySelectorAll(".button, .text-link").forEach((element) => {
    element.addEventListener("pointermove", (event) => {
      if (!finePointer.matches) return;
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - (rect.left + rect.width / 2)) / rect.width;
      const y = (event.clientY - (rect.top + rect.height / 2)) / rect.height;
      element.style.setProperty("--mag-x", `${(x * 7).toFixed(1)}px`);
      element.style.setProperty("--mag-y", `${(y * 5).toFixed(1)}px`);
    });
    element.addEventListener("pointerleave", () => resetMagnetic(element));
  });

  const updateCursorScene = (event) => {
    if (!finePointer.matches) return;
    const x = (event.clientX / window.innerWidth - 0.5) * 2;
    const y = (event.clientY / window.innerHeight - 0.5) * 2;
    root.style.setProperty("--cursor-x", `${event.clientX}px`);
    root.style.setProperty("--cursor-y", `${event.clientY}px`);
    if (heroScene) {
      heroScene.style.setProperty("--scene-shift-x", `${(x * -7).toFixed(1)}px`);
      heroScene.style.setProperty("--scene-shift-y", `${(y * -5).toFixed(1)}px`);
    }
  };
  window.addEventListener("pointermove", updateCursorScene, { passive: true });
  window.addEventListener("pointerleave", () => {
    root.style.setProperty("--cursor-x", "50vw");
    root.style.setProperty("--cursor-y", "50vh");
    if (heroScene) {
      heroScene.style.setProperty("--scene-shift-x", "0px");
      heroScene.style.setProperty("--scene-shift-y", "0px");
    }
  });

  document.addEventListener("pointerdown", (event) => {
    const target = event.target.closest(".button, .text-link, .project-row, .gallery-item, .lightbox-nav, .close-btn");
    if (!target) return;
    target.classList.add("is-pressed");
    window.setTimeout(() => target.classList.remove("is-pressed"), 220);
    if (!target.matches(".button, .text-link, .project-row, .gallery-item")) return;
    const rect = target.getBoundingClientRect();
    const ripple = document.createElement("span");
    ripple.className = "click-ripple";
    ripple.style.left = `${event.clientX - rect.left}px`;
    ripple.style.top = `${event.clientY - rect.top}px`;
    target.append(ripple);
    window.setTimeout(() => ripple.remove(), 550);
  });
}

renderProjects(); renderGallery(); setFeaturedProject(0); bindEvents(); setupMobileNav(); setupGalleryControls(); setupReveal(); setupGlobalMotion(); setupPageTurn(); setupResponsiveInteractions();
