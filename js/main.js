/* SSES Website — page logic. Content lives in js/data.js */
(function () {
  "use strict";

  const $ = (s) => document.querySelector(s);
  const esc = (t) => String(t ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function initials(name) {
    const clean = String(name).replace(/[\[\]]/g, "").trim();
    const parts = clean.split(/\s+/).filter(Boolean);
    if (!parts.length) return "?";
    return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : "")).toUpperCase();
  }

  function photoHTML(p, cls) {
    if (p.photo) return `<img class="${cls}" src="${esc(p.photo)}" alt="${esc(p.name)}" loading="lazy">`;
    return `<div class="${cls}" aria-hidden="true">${esc(initials(p.name))}</div>`;
  }

  /* ---------- Fill school info ---------- */
  document.querySelectorAll("[data-school]").forEach((el) => {
    const v = SCHOOL[el.dataset.school];
    if (v) el.textContent = v;
  });
  document.querySelectorAll("[data-school-link]").forEach((el) => {
    const key = el.dataset.schoolLink;
    const v = SCHOOL[key];
    if (!v) return;
    if (key === "email") { el.href = "mailto:" + v; el.textContent = v; }
    else el.href = v;
  });
  $("#year").textContent = new Date().getFullYear();
  $("#mapFrame").src = "https://maps.google.com/maps?q=" + encodeURIComponent(SCHOOL.mapQuery) + "&z=16&output=embed";

  /* ---------- Carousel ---------- */
  const track = $("#carTrack"), dotsBox = $("#carDots");
  track.innerHTML = PEOPLE.map((p, i) => `
    <div class="slide" role="group" aria-label="${i + 1} of ${PEOPLE.length}">
      <div class="slide-card">
        ${photoHTML(p, "slide-photo")}
        <div>
          <span class="badge ${p.role === "principal" ? "gold" : ""}">${p.role === "principal" ? "School Head" : "Faculty"}</span>
          <h3 class="slide-name">${esc(p.name)}</h3>
          <p class="slide-pos">${esc(p.position)}</p>
          ${p.message ? `<p class="slide-msg">${esc(p.message)}</p>` : ""}
        </div>
      </div>
    </div>`).join("");
  dotsBox.innerHTML = PEOPLE.map((_, i) => `<button aria-label="Go to slide ${i + 1}"></button>`).join("");
  const dots = [...dotsBox.children];

  let index = 0, timer = null;
  const DELAY = 5000;
  function go(i) {
    index = (i + PEOPLE.length) % PEOPLE.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, n) => d.classList.toggle("active", n === index));
  }
  function play() { stop(); timer = setInterval(() => go(index + 1), DELAY); }
  function stop() { clearInterval(timer); }

  $("#prevBtn").onclick = () => { go(index - 1); play(); };
  $("#nextBtn").onclick = () => { go(index + 1); play(); };
  dots.forEach((d, n) => (d.onclick = () => { go(n); play(); }));
  const car = $("#carousel");
  car.addEventListener("mouseenter", stop);
  car.addEventListener("mouseleave", play);

  // swipe on phones
  let sx = 0;
  car.addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; stop(); }, { passive: true });
  car.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
    play();
  });
  go(0); play();

  /* ---------- Faculty ---------- */
  $("#facultyGrid").innerHTML = PEOPLE.map((p) => `
    <div class="fac-card reveal ${p.role === "principal" ? "principal" : ""}">
      ${photoHTML(p, "fac-photo")}
      <h3>${esc(p.name)}</h3>
      <p>${esc(p.position)}</p>
    </div>`).join("");

  /* ---------- News ---------- */
  const fmt = (d) => {
    const dt = new Date(d + "T00:00:00");
    return isNaN(dt) ? d : dt.toLocaleDateString("en-PH", { year: "numeric", month: "long", day: "numeric" });
  };
  $("#newsGrid").innerHTML = NEWS.length
    ? NEWS.map((n) => `
      <article class="news-card reveal">
        <span class="news-date">${esc(fmt(n.date))}</span>
        <h3>${esc(n.title)}</h3>
        <p>${esc(n.text)}</p>
      </article>`).join("")
    : `<p class="empty">No announcements yet.</p>`;

  /* ---------- Gallery ---------- */
  const gal = $("#galleryGrid");
  gal.innerHTML = GALLERY.length
    ? GALLERY.map((g, i) => `
      <figure class="gal-item reveal" data-i="${i}">
        <img src="${esc(g.photo)}" alt="${esc(g.caption)}" loading="lazy">
        ${g.caption ? `<span>${esc(g.caption)}</span>` : ""}
      </figure>`).join("")
    : `<p class="empty">📷 Photos of school activities coming soon.</p>`;

  const lb = $("#lightbox");
  gal.addEventListener("click", (e) => {
    const item = e.target.closest(".gal-item");
    if (!item) return;
    const g = GALLERY[item.dataset.i];
    $("#lbImg").src = g.photo; $("#lbImg").alt = g.caption || "";
    $("#lbCap").textContent = g.caption || "";
    lb.classList.add("open");
  });
  const closeLb = () => lb.classList.remove("open");
  $("#lbClose").onclick = closeLb;
  lb.addEventListener("click", (e) => { if (e.target === lb) closeLb(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLb();
    if (e.key === "ArrowLeft") { go(index - 1); play(); }
    if (e.key === "ArrowRight") { go(index + 1); play(); }
  });

  /* ---------- Mobile menu ---------- */
  const links = $("#navLinks"), toggle = $("#navToggle");
  toggle.onclick = () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  };
  links.addEventListener("click", (e) => { if (e.target.tagName === "A") links.classList.remove("open"); });

  /* ---------- Active nav link while scrolling ---------- */
  const navAs = [...links.querySelectorAll("a")];
  const sections = navAs.map((a) => document.querySelector(a.getAttribute("href")));
  const toTop = $("#toTop");
  function onScroll() {
    const y = window.scrollY + 120;
    let cur = 0;
    sections.forEach((s, i) => { if (s && s.offsetTop <= y) cur = i; });
    navAs.forEach((a, i) => a.classList.toggle("active", i === cur));
    toTop.classList.toggle("show", window.scrollY > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  toTop.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
  onScroll();

  /* ---------- Reveal on scroll ---------- */
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  } else {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
  }
})();
