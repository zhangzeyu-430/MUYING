const projects = [
  { name: "语境词汇学习系统", type: "AI Coding · Learning", summary: "把背单词从孤立记忆变成语境、练习与复习的学习闭环。", role: "产品设计 + 工程落地", problem: "传统词表学习缺少真实语境，用户理解和迁移成本高。", solution: "用户选词，AI 生成语境化解释，再进入练习与间隔复习。", tech: "Python, LLM, React, Tailwind", result: "完成闭环复习流程，提升单词记忆效率。", link: "", screenshots: ["./images/2.1.png", "./images/2.2.png", "./images/2.3.png", "./images/2.4.png", "./images/2.5.png"] },
  { name: "游戏数字人音乐推荐模块", type: "AI Product · RAG", summary: "让数字人从泛聊天变成能够理解偏好的音乐伙伴。", role: "AI 产品经理，0-1 模块设计", problem: "游戏内数字人互动空洞，缺乏持续、有价值的推荐能力。", solution: "完成模块规划，搭建 8300+ 首歌曲语义知识库并编排 Query / Prompt。", tech: "Dify, RAG, GPT-4, gte-rerank-v2", result: "灰度测试有效响应率 95%，用户满意率 78%。", link: "", screenshots: [] },
  { name: "金杜律师事务所专利 RAG 系统", type: "Enterprise AI · RAG", summary: "用结构化文档理解和混合检索，提升专利流程处理效率。", role: "AI 产品经理", problem: "信息筛选繁琐，跨部门处理和知识查找效率低。", solution: "实现 PDF 结构解析、RAG 问答、多轮问答与混合检索。", tech: "RAG, PDF 解析, Python, Docker", result: "覆盖多部门 50+ 核心用户需求。", link: "", screenshots: [] },
  { name: "paper-presentation Skill", type: "AI Tool · Skill", summary: "自动生成组会汇报材料，减少论文精读和整理的重复工作。", role: "产品设计与 Skill 输出", problem: "论文精读、逐页整理和组会准备耗时长。", solution: "支持 PDF 转 HTML / PPT，并生成逐页逐字稿和追问应答稿。", tech: "Skill, Python", result: "解决高重复场景的稳定提效问题。", link: "", screenshots: [] },
  { name: "新项目占位苹果", type: "New Project · Coming soon", summary: "一个正在生长的新项目，等你来补充它的故事。", role: "待填写", problem: "待填写", solution: "待填写", tech: "待填写", result: "待填写", link: "", screenshots: ["./images/1.1.png", "./images/1.2.png", "./images/1.3.png", "./images/1.4.png"] }
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

const galleryImages = ["./images/2.1.png", "./images/2.2.png", "./images/2.3.png", "./images/2.4.png", "./images/2.5.png", "./images/1.1.png", "./images/1.2.png", "./images/1.3.png"];

const dom = {
  projectIndex: document.getElementById("projectIndex"), projectModal: document.getElementById("projectModal"), closeProjectModal: document.getElementById("closeProjectModal"),
  experienceModal: document.getElementById("experienceModal"), closeExperienceModal: document.getElementById("closeExperienceModal"),
  imageLightbox: document.getElementById("imageLightbox"), closeLightbox: document.getElementById("closeLightbox"), lightboxPrev: document.getElementById("lightboxPrev"), lightboxNext: document.getElementById("lightboxNext"), lightboxImage: document.getElementById("lightboxImage"),
  shotsSection: document.getElementById("projectShotsSection"), shotsGrid: document.getElementById("projectShotsGrid"), galleryTrack: document.getElementById("galleryTrack"), portraitImage: document.getElementById("portraitImage"),
  featuredCase: document.querySelector(".featured-case"), featuredKicker: document.querySelector(".featured-copy .eyebrow"), featuredTitle: document.querySelector(".featured-copy h3"), featuredSummary: document.querySelector(".featured-summary"), featuredRole: document.querySelector(".featured-role"), featuredSolution: document.querySelector(".featured-solution"), featuredResult: document.querySelector(".featured-result"), featuredButton: document.querySelector(".featured-copy [data-featured-project]")
};

const fields = { title: document.getElementById("projectTitle"), summary: document.getElementById("projectSummary"), role: document.getElementById("projectRole"), problem: document.getElementById("projectProblem"), solution: document.getElementById("projectSolution"), tech: document.getElementById("projectTech"), result: document.getElementById("projectResult"), link: document.getElementById("projectLink") };
const experienceFields = { period: document.getElementById("experiencePeriod"), company: document.getElementById("experienceCompany"), role: document.getElementById("experienceRole"), title: document.getElementById("experienceTitle"), tech: document.getElementById("experienceTech"), summary: document.getElementById("experienceSummary"), points: document.getElementById("experiencePoints") };
const lightbox = { shots: [], index: 0 };
let featuredIndex = 0;

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
}

function renderProjects() {
  dom.projectIndex.innerHTML = projects.map((project, index) => `<button class="project-row reveal" type="button" data-project-index="${index}"><span class="row-number">0${index + 1}</span><span class="row-copy"><span class="row-title"><img class="row-apple" src="./images/layers/apple.png" alt="" aria-hidden="true" />${project.name}</span><span class="row-summary">${project.summary}</span><span class="row-meta">${project.type} <i>·</i> ${project.role}</span></span><span class="row-result">${project.result}</span><span class="row-arrow">↗</span></button>`).join("");
  dom.projectIndex.querySelectorAll("[data-project-index]").forEach((row) => {
    const update = () => setFeaturedProject(Number(row.dataset.projectIndex));
    row.addEventListener("mouseenter", update);
    row.addEventListener("focus", update);
    row.addEventListener("click", () => openProject(Number(row.dataset.projectIndex)));
  });
}

function renderGallery() {
  const repeated = [...galleryImages, ...galleryImages];
  dom.galleryTrack.innerHTML = repeated.map((src, index) => `<button class="gallery-item" type="button" data-gallery-index="${index % galleryImages.length}"><img src="${src}" alt="作品截图 ${index % galleryImages.length + 1}" loading="lazy" /></button>`).join("");
  dom.galleryTrack.querySelectorAll("[data-gallery-index]").forEach((item) => item.addEventListener("click", () => openLightbox(galleryImages, Number(item.dataset.galleryIndex))));
}

function renderShots(project) {
  if (!project.screenshots.length) { dom.shotsSection.classList.add("hidden"); dom.shotsGrid.innerHTML = ""; return; }
  dom.shotsSection.classList.remove("hidden");
  dom.shotsGrid.innerHTML = project.screenshots.map((src, index) => `<button class="shot-card" type="button" data-shot-index="${index}"><img src="${src}" alt="${project.name} 截图 ${index + 1}" loading="lazy" /></button>`).join("");
  dom.shotsGrid.querySelectorAll("[data-shot-index]").forEach((shot) => shot.addEventListener("click", () => openLightbox(project.screenshots, Number(shot.dataset.shotIndex))));
}

function openProject(index) {
  const project = projects[index]; if (!project) return;
  fields.title.textContent = project.name; fields.summary.textContent = project.summary; fields.role.textContent = project.role; fields.problem.textContent = project.problem; fields.solution.textContent = project.solution; fields.tech.textContent = project.tech; fields.result.textContent = project.result; fields.link.textContent = project.link || "项目资料待补充";
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
  document.querySelectorAll("[data-close='project']").forEach((item) => item.addEventListener("click", closeProject)); document.querySelectorAll("[data-close='lightbox']").forEach((item) => item.addEventListener("click", closeLightbox));
  document.querySelectorAll("[data-close='experience']").forEach((item) => item.addEventListener("click", closeExperience));
  document.querySelectorAll("[data-open-experience]").forEach((item) => item.addEventListener("click", () => openExperience(Number(item.dataset.openExperience))));
  document.addEventListener("click", (event) => { const experienceItem = event.target.closest("[data-open-experience]"); if (experienceItem) { openExperience(Number(experienceItem.dataset.openExperience)); return; } const item = event.target.closest("[data-featured-project]"); if (item) openProject(Number(item.dataset.featuredProject)); });
  document.querySelectorAll("[data-open-about]").forEach((item) => item.addEventListener("click", () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })));
  document.addEventListener("keydown", (event) => { if (!dom.imageLightbox.classList.contains("hidden")) { if (event.key === "ArrowLeft") changeLightbox(-1); if (event.key === "ArrowRight") changeLightbox(1); if (event.key === "Escape") closeLightbox(); return; } if (event.key === "Escape" && !dom.experienceModal.classList.contains("hidden")) { closeExperience(); return; } if (event.key === "Escape" && !dom.projectModal.classList.contains("hidden")) closeProject(); });
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

renderProjects(); renderGallery(); bindEvents(); setupReveal(); setupGlobalMotion(); setupPageTurn(); setupResponsiveInteractions();
