(function(){
  "use strict";

  const cfg = window.SITE_CONFIG || {};

  /* ---------------------------------------------------------------------
     TOAST
     --------------------------------------------------------------------- */
  const toastEl = document.getElementById("toast");
  let toastTimer;
  function showToast(msg){
    if(!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("is-visible"), 2600);
  }

  /* ---------------------------------------------------------------------
     MEDIA SLOT RENDERER
     Builds hero / about / project media from a single config shape:
       { type: "placeholder" | "video" | "youtube" | "image", ... }
     Same function powers every media slot on the page — edit config.js
     only, this never needs to change.
     --------------------------------------------------------------------- */
  function renderMedia(target, media, opts){
    opts = opts || {};
    media = media || { type: "placeholder" };
    target.innerHTML = "";

    if(opts.avatar){
      // Simple circular avatar slot (About section)
      if(media.type === "image" && media.src){
        const img = document.createElement("img");
        img.src = media.src;
        img.alt = opts.alt || "Photo";
        target.appendChild(img);
      } else {
        const div = document.createElement("div");
        div.className = "avatar-placeholder";
        div.textContent = media.initials || "?";
        target.appendChild(div);
      }
      return;
    }

    // Standard "browser frame" media panel (hero + project cards)
    const chrome = document.createElement("div");
    chrome.className = "media-frame__chrome";
    chrome.innerHTML = "<span></span><span></span><span></span>";

    const body = document.createElement("div");
    body.className = "media-frame__body";

    if(media.type === "video" && media.src){
      const video = document.createElement("video");
      video.src = media.src;
      if(media.poster) video.poster = media.poster;
      video.muted = true; video.loop = true; video.playsInline = true; video.autoplay = true;
      video.controls = !!opts.controls;
      body.appendChild(video);
    } else if(media.type === "youtube" && media.id){
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube.com/embed/${media.id}`;
      iframe.title = opts.alt || "Video";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.loading = "lazy";
      body.appendChild(iframe);
    } else if(media.type === "image" && media.src){
      const img = document.createElement("img");
      img.src = media.src;
      img.alt = opts.alt || "";
      body.appendChild(img);
    } else {
      // placeholder
      const ph = document.createElement("div");
      ph.className = "media-placeholder";
      ph.innerHTML = `
        <span class="media-placeholder__scan"></span>
        <span class="media-placeholder__play">▶</span>
        <span class="media-placeholder__label">${media.label || "Video — Coming Soon"}</span>
      `;
      ph.addEventListener("click", () => showToast("Add your video in js/config.js →"));
      body.appendChild(ph);
    }

    target.appendChild(chrome);
    target.appendChild(body);
  }

  // Hero
  const heroSlot = document.getElementById("heroMedia");
  if(heroSlot) renderMedia(heroSlot, cfg.heroMedia, { alt: "Work reel" });

  // About
  const aboutSlot = document.getElementById("aboutMedia");
  if(aboutSlot) renderMedia(aboutSlot, cfg.aboutMedia, { avatar: true, alt: "Anish Bala" });

  /* ---------------------------------------------------------------------
     WORK GRID
     --------------------------------------------------------------------- */
  const workGrid = document.getElementById("workGrid");
  if(workGrid && Array.isArray(cfg.projects)){
    cfg.projects.forEach((project, i) => {
      const card = document.createElement("article");
      card.className = "project-card reveal";
      card.style.setProperty("--delay", `${(i % 2) * 80}ms`);

      const mediaWrap = document.createElement("div");
      mediaWrap.className = "media-frame";
      renderMedia(mediaWrap, project.media, { alt: project.title, controls: true });
      card.appendChild(mediaWrap);

      const body = document.createElement("div");
      body.className = "project-card__body";

      const tagsHtml = (project.tags || []).map(t => `<span>${t}</span>`).join("");

      const isPlaceholderLink = !project.link || project.link === "#";

      body.innerHTML = `
        <span class="project-card__cat mono">${project.category || ""}</span>
        <h3>${project.title || ""}</h3>
        <p>${project.description || ""}</p>
        ${tagsHtml ? `<div class="project-card__tags">${tagsHtml}</div>` : ""}
        <a href="${project.link || '#'}" class="project-card__link mono">${project.cta || "View Project"} <span class="arrow">→</span></a>
      `;

      const link = body.querySelector(".project-card__link");
      if(isPlaceholderLink){
        link.addEventListener("click", (e) => {
          e.preventDefault();
          showToast("Add your case study link in js/config.js →");
        });
      }

      card.appendChild(body);
      workGrid.appendChild(card);
    });
  }

  /* ---------------------------------------------------------------------
     CONTACT DETAILS (email / phone) — hidden entirely if not set
     --------------------------------------------------------------------- */
  const contactDetails = document.getElementById("contactDetails");
  if(contactDetails && cfg.contact){
    let html = "";
    if(cfg.contact.email) html += `<a href="mailto:${cfg.contact.email}">${cfg.contact.email}</a>`;
    if(cfg.contact.phone) html += `<a href="tel:${cfg.contact.phone.replace(/\s+/g,'')}">${cfg.contact.phone}</a>`;
    contactDetails.innerHTML = html;
  }

  /* ---------------------------------------------------------------------
     CONTACT FORM
     Uses config.contact.formEndpoint if set (POST, e.g. Formspree).
     Otherwise falls back to opening a pre-filled email — zero backend.
     --------------------------------------------------------------------- */
  const form = document.getElementById("contactForm");
  const formNote = document.getElementById("formNote");
  if(form){
    const endpoint = cfg.contact && cfg.contact.formEndpoint;

    if(endpoint){
      form.action = endpoint;
      form.method = "POST";
      form.addEventListener("submit", () => {
        formNote.textContent = "Sending…";
        formNote.classList.remove("is-success");
      });
    } else {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = new FormData(form);
        const name = data.get("name") || "";
        const email = data.get("email") || "";
        const company = data.get("company") || "";
        const need = data.get("need") || "";
        const message = data.get("message") || "";

        const subject = `New Project Inquiry from ${name}`;
        const body =
          `Name: ${name}\n` +
          `Email: ${email}\n` +
          `Company / Website: ${company}\n` +
          `Needs help with: ${need}\n\n` +
          `Message:\n${message}`;

        const to = (cfg.contact && cfg.contact.email) || "";
        const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailto;

        formNote.textContent = "Opening your email app with the details filled in…";
        formNote.classList.add("is-success");
      });
    }
  }

  /* ---------------------------------------------------------------------
     MOBILE NAV TOGGLE
     --------------------------------------------------------------------- */
  const header = document.getElementById("header");
  const navToggle = document.getElementById("navToggle");
  if(navToggle){
    navToggle.addEventListener("click", () => {
      const open = header.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.querySelectorAll(".nav__link").forEach(link => {
      link.addEventListener("click", () => {
        header.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------------------------------------------------------------------
     REVEAL ON SCROLL
     --------------------------------------------------------------------- */
  const revealEls = document.querySelectorAll(".reveal");
  if("IntersectionObserver" in window){
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add("is-visible"));
  }

  /* ---------------------------------------------------------------------
     SIGNAL SPINE + SCROLLSPY + PROGRESS
     --------------------------------------------------------------------- */
  const SECTION_IDS = ["hero", "services", "work", "process", "about", "contact"];
  const sections = SECTION_IDS
    .map(id => ({ id, el: document.getElementById(id) }))
    .filter(s => s.el);

  const spineNodes = document.getElementById("spineNodes");
  const spineFill = document.getElementById("spineFill");
  const topbarProgress = document.getElementById("topbarProgress");
  const navLinks = document.querySelectorAll(".nav__link");

  let nodeEls = [];
  function buildNodes(){
    if(!spineNodes) return;
    spineNodes.innerHTML = "";
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    nodeEls = sections.map(s => {
      const topPct = docHeight > 0 ? (s.el.offsetTop / docHeight) * 100 : 0;
      const node = document.createElement("div");
      node.className = "spine__node";
      node.style.top = `${Math.min(Math.max(topPct, 0), 100)}%`;
      node.dataset.id = s.id;
      const label = document.createElement("span");
      label.className = "spine__label";
      label.textContent = s.id;
      node.appendChild(label);
      spineNodes.appendChild(node);
      return node;
    });
  }

  function updateProgress(){
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? Math.min(Math.max((scrollTop / docHeight) * 100, 0), 100) : 0;
    if(spineFill) spineFill.style.height = pct + "%";
    if(topbarProgress) topbarProgress.style.width = pct + "%";
  }

  function updateActiveSection(){
    const scrollPos = window.scrollY + window.innerHeight * 0.35;
    let activeId = sections[0] && sections[0].id;
    sections.forEach(s => {
      if(s.el.offsetTop <= scrollPos) activeId = s.id;
    });
    nodeEls.forEach(n => n.classList.toggle("is-active", n.dataset.id === activeId));
    navLinks.forEach(link => link.classList.toggle("is-active", link.dataset.section === activeId));
  }

  let ticking = false;
  function onScroll(){
    if(ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      updateProgress();
      updateActiveSection();
      ticking = false;
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", () => { buildNodes(); onScroll(); });
  window.addEventListener("load", () => { buildNodes(); onScroll(); });
  buildNodes();
  onScroll();

  /* ---------------------------------------------------------------------
     FOOTER YEAR
     --------------------------------------------------------------------- */
  const yearEl = document.getElementById("year");
  if(yearEl) yearEl.textContent = new Date().getFullYear();

})();
