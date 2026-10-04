const projects = [
  { name: "语境词汇学习系统", type: "AI Coding · Learning", summary: "把背单词从孤立记忆变成语境、练习与复习的学习闭环。", role: "产品设计 + 工程落地", problem: "传统词表学习缺少真实语境，用户理解和迁移成本高。", solution: "用户选词，AI 生成语境化解释，再进入练习与间隔复习。", tech: "Python, LLM, React, Tailwind", result: "完成闭环复习流程，提升单词记忆效率。", link: "", screenshots: ["./images/2.1.png", "./images/2.2.png", "./images/2.3.png", "./images/2.4.png", "./images/2.5.png"] },
  { name: "游戏数字人音乐推荐模块", type: "AI Product · RAG", summary: "让数字人从泛聊天变成能够理解偏好的音乐伙伴。", role: "AI 产品经理，0-1 模块设计", problem: "游戏内数字人互动空洞，缺乏持续、有价值的推荐能力。", solution: "完成模块规划，搭建 8300+ 首歌曲语义知识库并编排 Query / Prompt。", tech: "Dify, RAG, GPT-4, gte-rerank-v2", result: "灰度测试有效响应率 95%，用户满意率 78%。", link: "", screenshots: [] },
  { name: "金杜律师事务所专利 RAG 系统", type: "Enterprise AI · RAG", summary: "用结构化文档理解和混合检索，提升专利流程处理效率。", role: "AI 产品经理", problem: "信息筛选繁琐，跨部门处理和知识查找效率低。", solution: "实现 PDF 结构解析、RAG 问答、多轮问答与混合检索。", tech: "RAG, PDF 解析, Python, Docker", result: "覆盖多部门 50+ 核心用户需求。", link: "", screenshots: [] },
  { name: "paper-presentation Skill", type: "AI Tool · Skill", summary: "自动生成组会汇报材料，减少论文精读和整理的重复工作。", role: "产品设计与 Skill 输出", problem: "论文精读、逐页整理和组会准备耗时长。", solution: "支持 PDF 转 HTML / PPT，并生成逐页逐字稿和追问应答稿。", tech: "Skill, Python", result: "解决高重复场景的稳定提效问题。", link: "", screenshots: [] },
  { name: "新项目占位苹果", type: "New Project · Coming soon", summary: "一个正在生长的新项目，等你来补充它的故事。", role: "待填写", problem: "待填写", solution: "待填写", tech: "待填写", result: "待填写", link: "", screenshots: ["./images/1.1.png", "./images/1.2.png", "./images/1.3.png", "./images/1.4.png"] }
];

const galleryImages = ["./images/2.1.png", "./images/2.2.png", "./images/2.3.png", "./images/2.4.png", "./images/2.5.png", "./images/1.1.png", "./images/1.2.png", "./images/1.3.png"];

const dom = {
  projectIndex: document.getElementById("projectIndex"), projectModal: document.getElementById("projectModal"), closeProjectModal: document.getElementById("closeProjectModal"),
  imageLightbox: document.getElementById("imageLightbox"), closeLightbox: document.getElementById("closeLightbox"), lightboxPrev: document.getElementById("lightboxPrev"), lightboxNext: document.getElementById("lightboxNext"), lightboxImage: document.getElementById("lightboxImage"),
  shotsSection: document.getElementById("projectShotsSection"), shotsGrid: document.getElementById("projectShotsGrid"), galleryTrack: document.getElementById("galleryTrack"), portraitImage: document.getElementById("portraitImage"),
  featuredCase: document.querySelector(".featured-case"), featuredKicker: document.querySelector(".featured-copy .eyebrow"), featuredTitle: document.querySelector(".featured-copy h3"), featuredSummary: document.querySelector(".featured-summary"), featuredRole: document.querySelector(".featured-role"), featuredSolution: document.querySelector(".featured-solution"), featuredResult: document.querySelector(".featured-result"), featuredButton: document.querySelector(".featured-copy [data-featured-project]")
};

const fields = { title: document.getElementById("projectTitle"), summary: document.getElementById("projectSummary"), role: document.getElementById("projectRole"), problem: document.getElementById("projectProblem"), solution: document.getElementById("projectSolution"), tech: document.getElementById("projectTech"), result: document.getElementById("projectResult"), link: document.getElementById("projectLink") };
const lightbox = { shots: [], index: 0 };
let featuredIndex = 0;

function lockScroll(value) { document.body.classList.toggle("lock-scroll", value); }
function anyPanelOpen() { return !dom.projectModal.classList.contains("hidden") || !dom.imageLightbox.classList.contains("hidden"); }

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
  dom.projectIndex.innerHTML = projects.map((project, index) => `<button class="project-row reveal" type="button" data-project-index="${index}"><span class="row-number">0${index + 1}</span><span class="row-copy"><span class="row-title"><span class="row-apple">●</span>${project.name}</span><span class="row-summary">${project.summary}</span><span class="row-meta">${project.type} <i>·</i> ${project.role}</span></span><span class="row-result">${project.result}</span><span class="row-arrow">↗</span></button>`).join("");
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
function updateLightbox() { const count = lightbox.shots.length; if (!count) return; lightbox.index = (lightbox.index + count) % count; dom.lightboxImage.src = lightbox.shots[lightbox.index]; dom.lightboxImage.alt = `截图 ${lightbox.index + 1}`; }
function openLightbox(shots, index) { lightbox.shots = shots; lightbox.index = index; updateLightbox(); dom.imageLightbox.classList.remove("hidden"); lockScroll(true); }
function closeLightbox() { dom.imageLightbox.classList.add("hidden"); dom.lightboxImage.src = ""; lockScroll(anyPanelOpen()); }
function changeLightbox(step) { if (lightbox.shots.length > 1) { lightbox.index += step; updateLightbox(); } }

function bindEvents() {
  dom.closeProjectModal.addEventListener("click", closeProject); dom.closeLightbox.addEventListener("click", closeLightbox); dom.lightboxPrev.addEventListener("click", () => changeLightbox(-1)); dom.lightboxNext.addEventListener("click", () => changeLightbox(1));
  document.querySelectorAll("[data-close='project']").forEach((item) => item.addEventListener("click", closeProject)); document.querySelectorAll("[data-close='lightbox']").forEach((item) => item.addEventListener("click", closeLightbox));
  document.addEventListener("click", (event) => { const item = event.target.closest("[data-featured-project]"); if (item) openProject(Number(item.dataset.featuredProject)); });
  document.querySelectorAll("[data-open-about]").forEach((item) => item.addEventListener("click", () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })));
  document.addEventListener("keydown", (event) => { if (!dom.imageLightbox.classList.contains("hidden")) { if (event.key === "ArrowLeft") changeLightbox(-1); if (event.key === "ArrowRight") changeLightbox(1); if (event.key === "Escape") closeLightbox(); return; } if (event.key === "Escape" && !dom.projectModal.classList.contains("hidden")) closeProject(); });
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

renderProjects(); renderGallery(); bindEvents(); setupReveal(); setupGlobalMotion();
