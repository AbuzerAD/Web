/* =========================================================
   Case study pages + logo gallery — small shared script
   (theme, mobile nav, scroll state, table of contents)
   ========================================================= */
(function () {
  "use strict";

  const html = document.documentElement;
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  /* ---------- Theme ---------- */
  const themeBtn = $("#theme-toggle");
  const metaTheme = document.querySelector('meta[name="theme-color"]');

  const setTheme = (theme, persist = true) => {
    html.dataset.theme = theme;
    const dark = theme === "dark";
    if (themeBtn) {
      themeBtn.setAttribute("aria-pressed", String(dark));
      themeBtn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    }
    if (metaTheme) metaTheme.setAttribute("content", dark ? "#0a0f1a" : "#003049");
    if (persist) {
      try { localStorage.setItem("ad-theme", theme); } catch (error) { /* private mode */ }
    }
  };

  setTheme(html.dataset.theme === "dark" ? "dark" : "light", false);
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      setTheme(html.dataset.theme === "dark" ? "light" : "dark");
    });
  }

  /* ---------- Mobile navigation ---------- */
  const navToggle = $("#nav-toggle");
  const nav = $("#site-nav");

  const closeNav = () => {
    if (!nav || !navToggle) return;
    nav.classList.remove("is-open");
    navToggle.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
    document.body.classList.remove("is-locked");
  };

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      navToggle.classList.toggle("is-open", open);
      navToggle.setAttribute("aria-expanded", String(open));
      navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      document.body.classList.toggle("is-locked", open);
    });
    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeNav();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeNav();
    });
  }

  /* ---------- Header shadow ---------- */
  const header = $(".site-header");
  if (header) {
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Footer year ---------- */
  const year = $("#year");
  if (year) year.textContent = String(new Date().getFullYear());

  /* ---------- Table of contents active state ---------- */
  const tocLinks = $$(".cs-toc a");
  const sections = tocLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (sections.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          tocLinks.forEach((link) => {
            link.classList.toggle(
              "is-active",
              link.getAttribute("href") === `#${entry.target.id}`
            );
          });
        });
      },
      { rootMargin: "-20% 0px -65% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
  }
})();
