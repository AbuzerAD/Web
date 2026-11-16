/* =========================================================
   Abuzer Ditta — portfolio behaviour
   ========================================================= */
(() => {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const html = document.documentElement;
  const EMAIL = "abuzer@me.com";

  const escapeHtml = (value) =>
    String(value).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[char]));

  /* ---------------------------------------------------------
     Project data — edit titles, copy and links here.
     Images live in assets/work/.
     --------------------------------------------------------- */
  const PROJECTS = [
    {
      id: "hyke-distributor",
      title: "HYKE Distributor Dashboard",
      client: "HYKE",
      cats: ["product", "web"],
      catLabel: "Product · Web",
      image: "assets/work/hyke-distributor.jpg",
      alt: "HYKE distributor dashboard showing brand share, incentive and pre-booking charts",
      summary: "A distributor portal that turns brand share, incentives and pre-booking data into decisions.",
      overview:
        "HYKE’s distributor network needed one place to see performance across brands, outlets and incentive schemes. I designed the dashboard from information architecture through to the final UI, balancing dense reporting with a calm, scannable layout.",
      role: "Senior Product Designer — IA, data visualisation, UI, design system",
      tools: "Figma, Sketch",
      scope: [
        "Dashboard information architecture and navigation",
        "KPI cards and chart system",
        "Tabular reporting, filters and export states",
        "Component library and developer handoff",
      ],
      achievement:
        "Consolidated brand share, incentives and pre-booking reporting into one dashboard distributors could scan and act on, replacing scattered spreadsheet views.",
      link: "https://www.behance.net/gallery/146368539/HYKE-Distributor-Dashboard",
      linkLabel: "Behance",
    },
    {
      id: "hyke-rewards",
      title: "HYKE Rewards — Identity",
      client: "HYKE",
      cats: ["brand"],
      catLabel: "Brand",
      image: "assets/work/hyke-rewards.png",
      alt: "HYKE Rewards logo and medal icon in Arabic and English",
      summary: "A bilingual loyalty identity and icon system for a Gulf retail rewards programme.",
      overview:
        "The rewards programme needed a mark that could live next to the HYKE masterbrand in both Arabic and English. I designed the logo lockup, medal icon and supporting icon set, then applied it across app touchpoints.",
      role: "Brand and product designer",
      tools: "Illustrator, Figma",
      scope: [
        "Arabic and English logo lockup",
        "Medal, app icon and supporting icon set",
        "Brand application inside the product",
      ],
      achievement:
        "Delivered a bilingual lockup and icon system that sits naturally beside the HYKE masterbrand in both Arabic and English app touchpoints.",
      link: "https://www.behance.net/gallery/124257883/HYKE-Rewards",
      linkLabel: "Behance",
    },
    {
      id: "roundmenu-ios",
      title: "RoundMenu — iOS App",
      client: "RoundMenu",
      cats: ["mobile", "product"],
      catLabel: "Mobile · Product",
      image: "assets/work/roundmenu-ios.png",
      alt: "RoundMenu iOS app screens for restaurant discovery and ordering",
      summary: "Food discovery, table booking and ordering for 1,500+ restaurants across the UAE.",
      overview:
        "RoundMenu helped people find restaurants, book tables and order food. I designed the iOS experience end to end — discovery, restaurant pages, menus, booking and account — and later helped the platform evolve into Careem NOW after Careem acquired the business.",
      role: "Senior Product Designer",
      tools: "Sketch, Figma",
      scope: [
        "Discovery and recommendation flows",
        "Restaurant and menu browsing",
        "Booking and order flows",
        "iOS design language and reusable components",
      ],
      achievement:
        "Designed the end-to-end iOS experience for a platform serving 1,500+ restaurants — the product that Careem acquired and carried into Careem NOW.",
      link: "https://www.behance.net/gallery/97281015/RoundMenu-iOS-App",
      linkLabel: "Behance",
    },
    {
      id: "roundmenu-order",
      title: "RoundMenu — Order Online",
      client: "RoundMenu",
      cats: ["web", "product"],
      catLabel: "Web · Product",
      image: "assets/work/roundmenu-order.png",
      alt: "RoundMenu online ordering flow on desktop and mobile",
      summary: "A web ordering flow that made menus, offers and checkout feel effortless.",
      overview:
        "Ordering online had to work as well on a phone in a restaurant as on a laptop at home. I mapped the ordering journey, designed the menu and offer modules, and simplified checkout to reduce drop-off.",
      role: "Senior Product Designer",
      tools: "Sketch, Figma",
      scope: [
        "Ordering journey and task flows",
        "Menu, offer and cart modules",
        "Responsive checkout and confirmation",
      ],
      achievement:
        "Simplified the ordering journey from menu to confirmation, removing the friction that causes drop-off at checkout on both phone and desktop.",
      link: "https://www.behance.net/gallery/97282739/RoundMenu-Order-Online",
      linkLabel: "Behance",
    },
    {
      id: "roundmenu-green",
      title: "RoundMenu — Visual Refresh",
      client: "RoundMenu",
      cats: ["brand", "web"],
      catLabel: "Brand · Web",
      image: "assets/work/roundmenu-green.png",
      alt: "Green RoundMenu restaurant listing with food cards and offers",
      summary: "A fresher, greener visual system for restaurant discovery at scale.",
      overview:
        "A lighter, more appetising direction for the restaurant listing experience — new colour, type hierarchy and a card system that keeps food centre stage while making offers and delivery times easy to scan.",
      role: "Visual and product designer",
      tools: "Sketch, Photoshop",
      scope: [
        "Colour and type system",
        "Restaurant card and offer design",
        "Listing, filter and empty-state patterns",
      ],
      achievement:
        "Gave the listing experience an appetite-led visual system that keeps food centre stage while making offers and delivery times easy to scan.",
      link: "https://www.behance.net/gallery/112885111/RoundMenu-Project-Green",
      linkLabel: "Behance",
    },
    {
      id: "elgrocer",
      title: "elGrocer — Grocery App",
      client: "elGrocer",
      cats: ["brand", "mobile"],
      catLabel: "Brand · Mobile",
      image: "assets/work/elgrocer.png",
      alt: "elGrocer brand identity and grocery app screens",
      summary: "Brand and product design for a grocery app built around a smarter weekly shop.",
      overview:
        "I designed the elGrocer identity — a leaf-in-basket mark — and the iOS and Android shopping experience: browse by category, search, basket and delivery slots. The visual system kept fresh produce front and centre.",
      role: "Senior Product Designer",
      tools: "Illustrator, Sketch",
      scope: [
        "Logo and brand system",
        "iOS and Android shopping flows",
        "Vendor tablet experience",
        "App store creative",
      ],
      achievement:
        "Created a complete identity and shopping experience — logo, iOS and Android flows and vendor tablet — that keeps fresh produce at the centre of the brand.",
      link: "https://www.behance.net/gallery/92772905/elGrocer",
      linkLabel: "Behance",
    },
    {
      id: "ptmode",
      title: "PT Mode — Trainer Platform",
      client: "PT Mode",
      cats: ["product", "web"],
      catLabel: "Product · Web",
      image: "assets/work/ptmode.png",
      alt: "PT Mode trainer dashboard with client programmes and progress",
      summary: "A workspace where personal trainers run clients, programmes and progress.",
      overview:
        "PT Mode gives trainers a single view of every client: programmes, workouts, nutrition, measurements and schedules. I designed the desktop dashboard and companion mobile experience so trainers can plan at a desk and coach from the floor.",
      role: "Senior Product Designer",
      tools: "Sketch, Figma",
      scope: [
        "Client profile and progress model",
        "Programme and workout builder",
        "Schedule, check-ins and activity feed",
        "Responsive dashboard UI",
      ],
      achievement:
        "United programme planning and floor-side coaching in one responsive workspace, so trainers can run every client from a single view.",
      link: "https://www.behance.net/gallery/138032999/PTMode",
      linkLabel: "Behance",
    },
    {
      id: "space-corp-okr",
      title: "Space Corp — OKR Dashboard",
      client: "Space Corp",
      cats: ["product", "web"],
      catLabel: "Product · Web",
      image: "assets/work/space-corp-okr.png",
      alt: "Space Corp marketing OKR dashboard with progress rings and key results",
      summary: "An OKR dashboard that makes company goals legible at a glance.",
      overview:
        "Leadership needed a clear read on objectives, key results and marketing performance without spreadsheet archaeology. I designed a modular dashboard with progress rings, health badges and drill-downs for every initiative.",
      role: "Product designer",
      tools: "Sketch",
      scope: [
        "Dashboard layout and visual hierarchy",
        "OKR progress and status patterns",
        "KPI cards, charts and data tables",
      ],
      achievement:
        "Replaced spreadsheet archaeology with a modular dashboard where leadership can read goal health at a glance and drill into any initiative.",
      link: "https://www.behance.net/gallery/97283025/Space-Corp-OKR-Dashboard",
      linkLabel: "Behance",
    },
    {
      id: "you-got-a-gift",
      title: "You Got a Gift — eGift Cards",
      client: "You Got a Gift",
      cats: ["mobile", "product"],
      catLabel: "Mobile · Product",
      image: "assets/work/you-got-a-gift.png",
      alt: "You Got a Gift eGift card marketplace on mobile",
      summary: "A marketplace for sending digital gift cards in a few taps.",
      overview:
        "The product lets people send eGift cards to friends, family and employees without leaving home. I designed the browse experience, brand card grid and the send flow, keeping the moment of gifting warm and simple.",
      role: "Product designer",
      tools: "Sketch, Photoshop",
      scope: [
        "Browse and category experience",
        "Brand card presentation",
        "Send, personalise and checkout flow",
      ],
      achievement:
        "Designed a gifting flow that carries the warmth of the moment from browsing to checkout without adding steps to the send.",
      link: "https://www.behance.net/gallery/97409761/You-Got-a-Gift-UX-Design",
      linkLabel: "Behance",
    },
    {
      id: "careem-now-merchant",
      title: "Careem NOW — Merchant Dashboard",
      client: "Careem",
      cats: ["product", "web"],
      catLabel: "Product · Web",
      image: "assets/work/careem-now-merchant.jpg",
      alt: "Careem NOW merchant dashboard screens",
      initials: "CM",
      tile: ["#00b85c", "#013a22"],
      summary: "[TODO] One-line card description for the merchant dashboard.",
      overview:
        "[TODO] Case-study paragraph for the Careem NOW merchant dashboard — replace with final copy.",
      role: "Product designer",
      tools: "Figma, Sketch",
      scope: [
        "[TODO] Scope item",
      ],
      achievement:
        "[TODO] Key achievement for the merchant dashboard.",
      link: "https://www.behance.net/abuzerad",
      linkLabel: "Behance",
    },
    {
      id: "careem-now-account",
      title: "Careem NOW — Account Management",
      client: "Careem",
      cats: ["product", "web"],
      catLabel: "Product · Web",
      image: "assets/work/careem-now-account.jpg",
      alt: "Careem NOW account management screens",
      initials: "CA",
      tile: ["#00b85c", "#013a22"],
      summary: "[TODO] One-line card description for account management.",
      overview:
        "[TODO] Case-study paragraph for the Careem NOW account management app — replace with final copy.",
      role: "Product designer",
      tools: "Figma, Sketch",
      scope: [
        "[TODO] Scope item",
      ],
      achievement:
        "[TODO] Key achievement for account management.",
      link: "https://www.behance.net/abuzerad",
      linkLabel: "Behance",
    },
    {
      id: "laimoon",
      title: "Laimoon — Jobs Platform",
      client: "Laimoon",
      cats: ["web", "product"],
      catLabel: "Web · Product",
      image: "assets/work/laimoon.jpg",
      alt: "Laimoon jobs platform screens",
      initials: "LM",
      tile: ["#2b6cf0", "#0a2456"],
      summary: "Job search, onboarding and resume management for the Middle East.",
      overview:
        "Laimoon connects candidates and employers across the Gulf. I worked on the jobs portal, candidate onboarding and resume management, focusing on making a long, multi-step process feel quick.",
      role: "Senior Product Designer",
      tools: "Sketch, Figma",
      scope: [
        "Job search and filter experience",
        "Candidate onboarding",
        "Resume builder and management",
      ],
      achievement:
        "Made a long, multi-step job search and onboarding process feel quick — from first search through to a managed resume.",
      link: "https://www.behance.net/abuzerad",
      linkLabel: "Behance",
    },
    {
      id: "wyndy",
      title: "Wyndy — Service Platform",
      client: "Wyndy",
      cats: ["product", "mobile"],
      catLabel: "Product · Mobile",
      image: "assets/work/wyndy.png",
      alt: "Wyndy service platform screens",
      initials: "WY",
      tile: ["#7b5cff", "#251157"],
      summary: "One platform, three products: customer app, provider app and operations portal.",
      overview:
        "Wyndy needed a coherent product family rather than three disconnected tools. I designed the platform portal alongside the customer and service-provider apps, aligning flows, components and tone across all three.",
      role: "Product designer",
      tools: "Figma, Sketch",
      scope: [
        "Operations platform portal",
        "Customer app flows",
        "Service-provider app flows",
        "Shared component language",
      ],
      achievement:
        "Aligned three products — customer app, provider app and operations portal — into one coherent product family with shared flows and components.",
      link: "https://www.behance.net/abuzerad",
      linkLabel: "Behance",
    },
    {
      id: "silicon",
      title: "Silicon — Logo Design",
      client: "Silicon",
      cats: ["brand"],
      catLabel: "Brand",
      image: "assets/work/silicon.png",
      alt: "Silicon logo design",
      initials: "SI",
      tile: ["#4a5c72", "#0d131b"],
      summary: "A sharp, technical mark for a technology brand.",
      overview:
        "A compact identity exploration for Silicon — geometric, precise and built to work as an app icon, a wordmark and a one-colour print mark.",
      role: "Brand designer",
      tools: "Illustrator",
      scope: [
        "Logo concept and refinement",
        "Monochrome and app-icon variants",
        "Basic usage guidance",
      ],
      achievement:
        "Designed a mark that works as an app icon, a wordmark and a one-colour print mark from a single geometric idea.",
      link: "https://dribbble.com/shots/24231975-Silicon-Logo-Design",
      linkLabel: "Dribbble",
    },
    {
      id: "logoin",
      title: "logoin.com — Web & Brand",
      client: "logoin.com",
      cats: ["web", "brand"],
      catLabel: "Web · Brand",
      image: null,
      initials: "LG",
      tile: ["#f0a500", "#6b3300"],
      summary: "Website design and design support for a logo and brand services business.",
      overview:
        "I designed the marketing site, customer-facing templates and ongoing design assets that helped logoin.com present logo services clearly and sell them online.",
      role: "Web and graphic designer",
      tools: "Photoshop, Illustrator, WordPress",
      scope: [
        "Marketing website",
        "Customer solution pages",
        "Ongoing design support",
      ],
      achievement:
        "Built the marketing site and customer-facing templates that let logoin.com explain its logo services clearly and sell them online.",
      link: "https://www.behance.net/abuzerad",
      linkLabel: "Behance",
    },
  ];

  /* ---------------------------------------------------------
     Theme
     --------------------------------------------------------- */
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

  /* ---------------------------------------------------------
     Header, progress and back-to-top
     --------------------------------------------------------- */
  const header = $(".site-header");
  const progressBar = $("#progress-bar");
  const toTop = $("#to-top");
  let scrollTicking = false;

  const onScroll = () => {
    const y = window.scrollY;
    if (header) header.classList.toggle("is-scrolled", y > 8);
    if (progressBar) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progressBar.style.width = `${max > 0 ? Math.min(100, (y / max) * 100) : 0}%`;
    }
    if (toTop) toTop.classList.toggle("is-visible", y > 720);
    scrollTicking = false;
  };

  window.addEventListener("scroll", () => {
    if (!scrollTicking) {
      scrollTicking = true;
      window.requestAnimationFrame(onScroll);
    }
  }, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
  }

  /* ---------------------------------------------------------
     Mobile navigation
     --------------------------------------------------------- */
  const navToggle = $("#nav-toggle");
  const nav = $("#site-nav");

  const closeNav = () => {
    if (!nav || !navToggle) return;
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
  };

  if (nav && navToggle) {
    navToggle.addEventListener("click", () => {
      const isOpen = navToggle.getAttribute("aria-expanded") === "true";
      if (isOpen) {
        closeNav();
      } else {
        nav.classList.add("is-open");
        navToggle.setAttribute("aria-expanded", "true");
        navToggle.setAttribute("aria-label", "Close menu");
      }
    });

    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeNav();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        closeNav();
        navToggle.focus();
      }
    });

    document.addEventListener("click", (event) => {
      if (!nav.classList.contains("is-open")) return;
      if (nav.contains(event.target) || navToggle.contains(event.target)) return;
      closeNav();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 980) closeNav();
    });
  }

  /* ---------------------------------------------------------
     Work grid
     --------------------------------------------------------- */
  const grid = $("#work-grid");
  const countEl = $("#work-count");
  const emptyEl = $("#work-empty");
  const searchInput = $("#work-search");
  const filterGroup = $("#work-filters");
  let activeFilter = "all";
  let searchTerm = "";

  const projectCard = (project) => {
    const media = project.image
      ? `<img src="${project.image}" alt="${escapeHtml(project.alt)}" width="808" height="632" loading="lazy" decoding="async">`
      : `<div class="work-card__tile" style="--tile-a:${project.tile[0]};--tile-b:${project.tile[1]}" aria-hidden="true"><span>${project.initials}</span></div>`;

    return `
      <article class="work-card" data-cats="${project.cats.join(" ")}" data-search="${escapeHtml(
        `${project.title} ${project.client} ${project.summary} ${project.tools} ${project.cats.join(" ")}`.toLowerCase()
      )}">
        <a class="work-card__link" href="#p-${project.id}" data-project="${project.id}" aria-haspopup="dialog">
          <div class="work-card__media">
            ${media}
            <span class="work-card__tag">${project.catLabel}</span>
            <span class="work-card__open">Open case study <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></span>
          </div>
          <div class="work-card__body">
            <div class="work-card__top">
              <h3>${project.title}</h3>
              <span class="work-card__arrow" aria-hidden="true"><svg class="ico"><use href="#i-arrow"/></svg></span>
            </div>
            <p>${project.summary}</p>
            <span class="work-card__client">${project.client} · ${project.role.split("—")[0].trim()}</span>
          </div>
        </a>
      </article>`;
  };

  const applyFilters = () => {
    if (!grid) return;
    let shown = 0;
    const cards = $$(".work-card", grid);

    cards.forEach((card) => {
      const cats = (card.dataset.cats || "").split(" ");
      const matchesCat = activeFilter === "all" || cats.includes(activeFilter);
      const matchesText = !searchTerm || (card.dataset.search || "").includes(searchTerm);
      const visible = matchesCat && matchesText;
      card.hidden = !visible;
      if (visible) {
        card.style.setProperty("--i", `${Math.min(shown, 8) * 45}ms`);
        shown += 1;
      }
    });

    if (countEl) {
      countEl.textContent = `Showing ${shown} of ${PROJECTS.length} projects`;
    }
    if (emptyEl) emptyEl.hidden = shown !== 0;
  };

  if (grid) {
    grid.innerHTML = PROJECTS.map(projectCard).join("");

    if (filterGroup) {
      $$(".chip", filterGroup).forEach((chip) => {
        const filter = chip.dataset.filter;
        const total = filter === "all"
          ? PROJECTS.length
          : PROJECTS.filter((project) => project.cats.includes(filter)).length;
        const count = $(".chip__count", chip);
        if (count) count.textContent = String(total);
      });

      filterGroup.addEventListener("click", (event) => {
        const chip = event.target.closest(".chip");
        if (!chip) return;
        activeFilter = chip.dataset.filter;
        $$(".chip", filterGroup).forEach((item) => {
          const active = item === chip;
          item.classList.toggle("is-active", active);
          item.setAttribute("aria-pressed", String(active));
        });
        applyFilters();
      });
    }

    let searchTimer = 0;
    if (searchInput) {
      searchInput.addEventListener("input", () => {
        window.clearTimeout(searchTimer);
        searchTimer = window.setTimeout(() => {
          searchTerm = searchInput.value.trim().toLowerCase();
          applyFilters();
        }, 120);
      });
    }

    const reset = $("#work-reset");
    if (reset) {
      reset.addEventListener("click", () => {
        activeFilter = "all";
        searchTerm = "";
        if (searchInput) searchInput.value = "";
        if (filterGroup) {
          $$(".chip", filterGroup).forEach((chip) => {
            const active = chip.dataset.filter === "all";
            chip.classList.toggle("is-active", active);
            chip.setAttribute("aria-pressed", String(active));
          });
        }
        applyFilters();
        if (searchInput) searchInput.focus();
      });
    }

    applyFilters();
  }

  /* ---------------------------------------------------------
     Project dialog
     --------------------------------------------------------- */
  const projectModal = $("#project-modal");
  let currentProject = 0;

  const diskTile = (project) =>
    `<div class="work-card__tile" style="--tile-a:${project.tile[0]};--tile-b:${project.tile[1]}" aria-hidden="true"><span>${project.initials}</span></div>`;

  const openProject = (id, updateUrl = true) => {
    if (!projectModal) return;
    const index = PROJECTS.findIndex((project) => project.id === id);
    if (index < 0) return;
    currentProject = index;
    const project = PROJECTS[index];

    $("#pm-kicker").textContent = `${project.client} · ${project.catLabel}`;
    $("#pm-title").textContent = project.title;
    $("#pm-summary").textContent = project.summary;
    $("#pm-role").textContent = project.role;
    $("#pm-tools").textContent = project.tools;
    $("#pm-overview").textContent = project.overview;
    $("#pm-scope").innerHTML = project.scope.map((item) => `<li>${escapeHtml(item)}</li>`).join("");

    const achievement = $("#pm-achievement");
    const achievementText = $("#pm-achievement-text");
    if (achievement && achievementText) {
      achievementText.textContent = project.achievement || "";
      achievement.hidden = !project.achievement;
    }

    $("#pm-media").innerHTML = project.image
      ? `<img src="${project.image}" alt="${escapeHtml(project.alt)}" width="808" height="632" decoding="async">`
      : diskTile(project);

    const link = $("#pm-link");
    link.href = project.link;
    link.innerHTML = `View on ${project.linkLabel} <svg class="ico" aria-hidden="true"><use href="#i-external"/></svg>`;

    if (!projectModal.open) projectModal.showModal();
    document.body.classList.add("is-locked");

    if (updateUrl) {
      history.replaceState(null, "", `#p-${project.id}`);
    }

    const close = $("#pm-close");
    if (close) close.focus({ preventScroll: true });
  };

  if (projectModal) {
    const pmClose = $("#pm-close");
    if (pmClose) pmClose.addEventListener("click", () => projectModal.close());

    projectModal.addEventListener("click", (event) => {
      if (event.target === projectModal) projectModal.close();
    });

    projectModal.addEventListener("close", () => {
      if (!projectModal.open && !($("#palette") && $("#palette").open)) {
        document.body.classList.remove("is-locked");
      }
      if (window.location.hash.startsWith("#p-")) {
        history.replaceState(null, "", window.location.pathname + window.location.search);
      }
    });

    const next = $("#pm-next");
    if (next) {
      next.addEventListener("click", () => {
        const project = PROJECTS[(currentProject + 1) % PROJECTS.length];
        openProject(project.id);
      });
    }

    if (grid) {
      grid.addEventListener("click", (event) => {
        const link = event.target.closest("a[data-project]");
        if (!link) return;
        event.preventDefault();
        openProject(link.dataset.project);
      });
    }

    const deepLink = window.location.hash.match(/^#p-(.+)$/);
    if (deepLink) {
      window.requestAnimationFrame(() => openProject(deepLink[1], false));
    }
  }

  window.addEventListener("hashchange", () => {
    const match = window.location.hash.match(/^#p-(.+)$/);
    if (match && projectModal) {
      openProject(match[1], false);
    } else if (projectModal && projectModal.open) {
      projectModal.close();
    }
  });

  /* ---------------------------------------------------------
     Command palette
     --------------------------------------------------------- */
  const paletteDialog = $("#palette");
  const paletteInput = $("#palette-input");
  const paletteList = $("#palette-list");
  let paletteVisible = [];
  let paletteIndex = 0;

  const PALETTE_ITEMS = [
    { group: "Sections", label: "Selected work", hint: "Projects", icon: "i-arrow", type: "section", target: "#work" },
    { group: "Sections", label: "Experience", hint: "11 roles", icon: "i-arrow", type: "section", target: "#experience" },
    { group: "Sections", label: "Skills & toolkit", hint: "Capabilities", icon: "i-arrow", type: "section", target: "#skills" },
    { group: "Sections", label: "Design process", hint: "How I work", icon: "i-arrow", type: "section", target: "#process" },
    { group: "Sections", label: "Contact", hint: "Start a project", icon: "i-arrow", type: "section", target: "#contact" },
    ...PROJECTS.map((project) => ({
      group: "Projects",
      label: project.title,
      hint: project.catLabel,
      icon: "i-spark",
      type: "project",
      id: project.id,
      keywords: `${project.client} ${project.summary}`,
    })),
    { group: "Links", label: "Copy email address", hint: EMAIL, icon: "i-copy", type: "copy" },
    { group: "Links", label: "LinkedIn profile", hint: "abuzerad", icon: "i-linkedin", type: "href", href: "https://www.linkedin.com/in/abuzerad" },
    { group: "Links", label: "Behance portfolio", hint: "abuzerad", icon: "i-behance", type: "href", href: "https://www.behance.net/abuzerad" },
    { group: "Links", label: "Dribbble shots", hint: "abuzerad", icon: "i-dribbble", type: "href", href: "https://dribbble.com/abuzerad" },
  ];

  const updatePaletteActive = () => {
    if (!paletteList) return;
    const items = $$(".palette__item", paletteList);
    items.forEach((item, index) => {
      const active = index === paletteIndex;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-selected", String(active));
      if (active) {
        item.scrollIntoView({ block: "nearest" });
        if (paletteInput) paletteInput.setAttribute("aria-activedescendant", item.id);
      }
    });
  };

  const renderPalette = (term = "") => {
    if (!paletteList) return;
    const query = term.trim().toLowerCase();
    paletteVisible = PALETTE_ITEMS.filter((item) => {
      if (!query) return true;
      return `${item.label} ${item.hint} ${item.keywords || ""}`.toLowerCase().includes(query);
    });
    paletteIndex = 0;

    if (!paletteVisible.length) {
      paletteList.innerHTML = `<p class="palette__empty">No matches. Try “work”, “mobile”, “HYKE” or “email”.</p>`;
      if (paletteInput) paletteInput.removeAttribute("aria-activedescendant");
      return;
    }

    let markup = "";
    let lastGroup = "";
    paletteVisible.forEach((item, index) => {
      if (item.group !== lastGroup) {
        markup += `<p class="palette__group" role="presentation">${item.group}</p>`;
        lastGroup = item.group;
      }
      markup += `
        <button class="palette__item" type="button" role="option" id="palette-item-${index}" data-index="${index}" aria-selected="false">
          <svg class="ico" aria-hidden="true"><use href="#${item.icon}"/></svg>
          <span>${escapeHtml(item.label)}</span>
          <small>${escapeHtml(item.hint)}</small>
        </button>`;
    });
    paletteList.innerHTML = markup;
    updatePaletteActive();
  };

  const activatePalette = (item) => {
    if (!item) return;
    if (paletteDialog) paletteDialog.close();

    if (item.type === "section") {
      const target = document.querySelector(item.target);
      if (target) target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    } else if (item.type === "project") {
      openProject(item.id);
    } else if (item.type === "copy") {
      copyEmail();
    } else if (item.type === "href") {
      window.open(item.href, "_blank", "noopener");
    }
  };

  const openPalette = () => {
    if (!paletteDialog) return;
    if (typeof closeNav === "function") closeNav();
    if (projectModal && projectModal.open) projectModal.close();
    renderPalette("");
    if (!paletteDialog.open) paletteDialog.showModal();
    document.body.classList.add("is-locked");
    window.requestAnimationFrame(() => {
      if (paletteInput) {
        paletteInput.value = "";
        paletteInput.focus();
      }
    });
  };

  if (paletteDialog) {
    const opener = $("#palette-open");
    if (opener) opener.addEventListener("click", openPalette);

    if (paletteInput) {
      paletteInput.addEventListener("input", () => renderPalette(paletteInput.value));
      paletteInput.addEventListener("keydown", (event) => {
        if (event.key === "ArrowDown") {
          event.preventDefault();
          paletteIndex = Math.min(paletteIndex + 1, paletteVisible.length - 1);
          updatePaletteActive();
        } else if (event.key === "ArrowUp") {
          event.preventDefault();
          paletteIndex = Math.max(paletteIndex - 1, 0);
          updatePaletteActive();
        } else if (event.key === "Home") {
          event.preventDefault();
          paletteIndex = 0;
          updatePaletteActive();
        } else if (event.key === "End") {
          event.preventDefault();
          paletteIndex = paletteVisible.length - 1;
          updatePaletteActive();
        } else if (event.key === "Enter") {
          event.preventDefault();
          activatePalette(paletteVisible[paletteIndex]);
        }
      });
    }

    if (paletteList) {
      paletteList.addEventListener("click", (event) => {
        const item = event.target.closest(".palette__item");
        if (!item) return;
        activatePalette(paletteVisible[Number(item.dataset.index)]);
      });
    }

    paletteDialog.addEventListener("click", (event) => {
      if (event.target === paletteDialog) paletteDialog.close();
    });

    paletteDialog.addEventListener("close", () => {
      if (!paletteDialog.open && !(projectModal && projectModal.open)) {
        document.body.classList.remove("is-locked");
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    const target = document.activeElement;
    const typing = target && /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName);
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      openPalette();
    } else if (event.key === "/" && !typing) {
      event.preventDefault();
      openPalette();
    }
  });

  /* ---------------------------------------------------------
     Reveal on scroll + staggering
     --------------------------------------------------------- */
  $$(".skill-grid, .toolkit__grid, .education__grid, .timeline, .work-grid").forEach((parent) => {
    $$(":scope > .reveal", parent).forEach((el, index) => {
      el.style.setProperty("--i", `${Math.min(index, 6) * 55}ms`);
    });
  });

  const revealEls = $$(".reveal");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.06 });
    revealEls.forEach((el) => revealObserver.observe(el));
  }

  /* ---------------------------------------------------------
     Count-up stats
     --------------------------------------------------------- */
  const animateCount = (el) => {
    const target = Number(el.dataset.count) || 0;
    if (reduceMotion) {
      el.textContent = String(target);
      return;
    }
    const duration = 1100;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = String(Math.round(target * eased));
      if (progress < 1) window.requestAnimationFrame(tick);
    };
    el.textContent = "0";
    window.requestAnimationFrame(tick);
  };

  $$("[data-count]").forEach((el) => {
    if (!("IntersectionObserver" in window)) return;
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCount(entry.target);
        observer.disconnect();
      });
    }, { threshold: 0.6 });
    counterObserver.observe(el);
  });

  /* ---------------------------------------------------------
     Toolkit meters
     --------------------------------------------------------- */
  $$(".meter").forEach((meter) => {
    const tool = meter.closest(".tool");
    const pctEl = tool ? $(".tool__pct", tool) : null;
    const target = pctEl ? Number(pctEl.dataset.pct) : 0;

    const fillMeter = () => {
      meter.classList.add("is-on");
      if (!pctEl || reduceMotion) return;
      const duration = 1100;
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        pctEl.textContent = `${Math.round(target * eased)}%`;
        if (progress < 1) window.requestAnimationFrame(tick);
      };
      pctEl.textContent = "0%";
      window.requestAnimationFrame(tick);
    };

    if (!("IntersectionObserver" in window)) {
      fillMeter();
      return;
    }
    const meterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        fillMeter();
        observer.disconnect();
      });
    }, { threshold: 0.45 });
    meterObserver.observe(meter);
  });

  /* ---------------------------------------------------------
     Experience accordion
     --------------------------------------------------------- */
  const expItems = $$(".exp");
  expItems.forEach((item) => {
    const head = $(".exp__head", item);
    if (!head) return;
    head.addEventListener("click", () => {
      const wasOpen = item.classList.contains("is-open");
      expItems.forEach((other) => {
        other.classList.remove("is-open");
        const otherHead = $(".exp__head", other);
        if (otherHead) otherHead.setAttribute("aria-expanded", "false");
      });
      if (!wasOpen) {
        item.classList.add("is-open");
        head.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ---------------------------------------------------------
     Skills filter
     --------------------------------------------------------- */
  const skillFilters = $("#skill-filters");
  if (skillFilters) {
    skillFilters.addEventListener("click", (event) => {
      const chip = event.target.closest(".chip");
      if (!chip) return;
      const filter = chip.dataset.skillFilter;
      $$(".chip", skillFilters).forEach((item) => {
        const active = item === chip;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      $$(".skill").forEach((skill) => {
        skill.hidden = filter !== "all" && skill.dataset.skillCat !== filter;
      });
    });
  }

  /* ---------------------------------------------------------
     Process tabs
     --------------------------------------------------------- */
  const processTabs = $$(".process__tab");
  const processPanels = $$(".process__panel");

  const selectStep = (index) => {
    processTabs.forEach((tab, i) => {
      const active = i === index;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    processPanels.forEach((panel, i) => {
      panel.hidden = i !== index;
      panel.classList.toggle("is-active", i === index);
    });
  };

  processTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => selectStep(index));
    tab.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
      event.preventDefault();
      const next = (index + (event.key === "ArrowRight" ? 1 : -1) + processTabs.length) % processTabs.length;
      selectStep(next);
      processTabs[next].focus();
    });
  });

  /* ---------------------------------------------------------
     Recommendations carousel
     --------------------------------------------------------- */
  const quoteSlides = $$(".quote");
  const quoteDots = $("#quote-dots");
  let quoteIndex = 0;
  let quoteTimer = 0;

  const setQuote = (index) => {
    if (!quoteSlides.length) return;
    quoteIndex = (index + quoteSlides.length) % quoteSlides.length;
    quoteSlides.forEach((slide, i) => slide.classList.toggle("is-active", i === quoteIndex));
    $$(".quotes__dot").forEach((dot, i) => {
      dot.classList.toggle("is-active", i === quoteIndex);
      dot.setAttribute("aria-selected", String(i === quoteIndex));
    });
  };

  const restartQuotes = () => {
    if (reduceMotion || quoteSlides.length < 2) return;
    window.clearInterval(quoteTimer);
    quoteTimer = window.setInterval(() => setQuote(quoteIndex + 1), 9000);
  };

  if (quoteDots && quoteSlides.length) {
    quoteSlides.forEach((slide, index) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "quotes__dot";
      dot.setAttribute("role", "tab");
      dot.setAttribute("aria-label", `Recommendation ${index + 1}`);
      dot.addEventListener("click", () => {
        setQuote(index);
        restartQuotes();
      });
      quoteDots.appendChild(dot);
    });
    setQuote(0);
    restartQuotes();

    const prev = $("#quote-prev");
    const next = $("#quote-next");
    if (prev) prev.addEventListener("click", () => { setQuote(quoteIndex - 1); restartQuotes(); });
    if (next) next.addEventListener("click", () => { setQuote(quoteIndex + 1); restartQuotes(); });

    const quotes = $(".quotes");
    if (quotes) {
      quotes.addEventListener("mouseenter", () => window.clearInterval(quoteTimer));
      quotes.addEventListener("mouseleave", restartQuotes);
      quotes.addEventListener("focusin", () => window.clearInterval(quoteTimer));
      quotes.addEventListener("focusout", restartQuotes);
    }
  }

  /* ---------------------------------------------------------
     Toast + copy email
     --------------------------------------------------------- */
  let toastTimer = 0;
  const showToast = (message) => {
    const toast = $("#toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2800);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      showToast(`Email copied — ${EMAIL}`);
    } catch (error) {
      const field = document.createElement("textarea");
      field.value = EMAIL;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      try {
        document.execCommand("copy");
        showToast(`Email copied — ${EMAIL}`);
      } catch (fallbackError) {
        showToast(`Email: ${EMAIL}`);
      }
      field.remove();
    }
  };

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-copy-email]");
    if (!trigger) return;
    event.preventDefault();
    copyEmail();
  });

  /* ---------------------------------------------------------
     Project brief form
     --------------------------------------------------------- */
  const brief = $("#brief");
  if (brief) {
    brief.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (!brief.reportValidity()) return;
      const submitBtn = brief.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending…";
      }
      try {
        const response = await fetch("https://formsubmit.co/ajax/abuzer.ad@gmail.com", {
          method: "POST",
          body: new FormData(brief),
          headers: { Accept: "application/json" },
        });
        if (!response.ok) throw new Error("network");
        showToast("Thanks — your brief was sent. I’ll reply soon.");
        brief.reset();
      } catch (error) {
        showToast("Couldn’t send just now — please email abuzer.ad@gmail.com directly.");
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `Send project brief <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg>`;
        }
      }
    });
  }

  /* ---------------------------------------------------------
     Local time, hero rotator and pointer glow
     --------------------------------------------------------- */
  const localTime = $("#local-time");
  const updateTime = () => {
    if (!localTime) return;
    try {
      localTime.textContent = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York",
        hour: "numeric",
        minute: "2-digit",
      }).format(new Date());
    } catch (error) {
      localTime.textContent = "Florida";
    }
  };
  updateTime();
  window.setInterval(updateTime, 60000);

  const rotatorWords = $$("#rotator .rotator__word");
  if (!reduceMotion && rotatorWords.length > 1) {
    let wordIndex = 0;
    window.setInterval(() => {
      const current = rotatorWords[wordIndex];
      wordIndex = (wordIndex + 1) % rotatorWords.length;
      const next = rotatorWords[wordIndex];
      current.classList.remove("is-current");
      current.classList.add("is-leaving");
      next.classList.add("is-current");
      window.setTimeout(() => current.classList.remove("is-leaving"), 500);
    }, 2800);
  }

  const hero = $(".hero");
  const heroGlow = $("#hero-glow");
  if (hero && heroGlow && !reduceMotion && window.matchMedia("(pointer: fine)").matches) {
    let glowFrame = null;
    hero.addEventListener("pointermove", (event) => {
      if (glowFrame) return;
      glowFrame = window.requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        hero.style.setProperty("--mx", `${x}%`);
        hero.style.setProperty("--my", `${y}%`);
        hero.classList.add("has-pointer");
        glowFrame = null;
      });
    });
    hero.addEventListener("pointerleave", () => hero.classList.remove("has-pointer"));
  }

  /* ---------------------------------------------------------
     Active navigation link
     --------------------------------------------------------- */
  const navLinks = $$(".nav__link");
  const navSections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window && navSections.length) {
    const setActive = (id) => {
      navLinks.forEach((link) => {
        const active = link.getAttribute("href") === `#${id}`;
        link.classList.toggle("is-active", active);
        if (active) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    };

    const navObserver = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-42% 0px -52% 0px", threshold: 0 });

    navSections.forEach((section) => navObserver.observe(section));
  }

  /* ---------------------------------------------------------
     Footer year
     --------------------------------------------------------- */
  const year = $("#year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
