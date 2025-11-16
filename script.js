/* ========= PRESERVED APP DATA (you can extend this) ========= */
const apps = [
    { name: "Oasis Maps", icon: "assets/icons/Omaps.webp", desc: "Find Your Destination And Location", link: "", category: "" },
    { name: "Quest AI", icon: "assets/icons/QAI.png", desc: "Build For Students,Search Anything", link: "https://sanskar-satao.github.io/Quest-AI/", category: "Developer" },
    { name: "Oasis Browser", icon: "assets/icons/OB.jpeg", desc: "Search For Anything, Anywhere", link: "https://sanskar-satao.github.io/Oasis-Browser/", category: "Browser" },
    { name: "Oasis Maths", icon: "assets/icons/OMM.png", desc: "Solve Maths Problem In a Second", link: "", category: "Developer" },
    { name: "Google Chrome", icon: "assets/icons/Chrome.webp", desc: "Fast, secure browser by Google.", link: "https://www.google.com/chrome/", category: "Browser" },
    { name: "Visual Studio Code", icon: "assets/icons/vscode.jpg", desc: "Lightweight but powerful source code editor.", link: "https://code.visualstudio.com/", category: "Developer" },
    { name: "Spotify", icon: "assets/icons/spotify.png", desc: "Millions of songs and podcasts.", link: "https://www.spotify.com/", category: "Entertainment" },
    { name: "Discord", icon: "assets/icons/discord.webp", desc: "Communicate with communities and friends.", link: "https://discord.com/", category: "Social" },
    { name: "Steam", icon: "assets/icons/Steam.png", desc: "PC gaming platform.", link: "https://store.steampowered.com/", category: "Entertainment" },
    { name: "Notion", icon: "assets/icons/Notion.png", desc: "All-in-one workspace.", link: "https://www.notion.so/", category: "Productivity" },
    { name: "Zoom", icon: "assets/icons/zoom.png", desc: "Video conferencing for work.", link: "https://zoom.us/", category: "Social" },
    { name: "Telegram", icon: "assets/icons/Telegram.png", desc: "Fast and secure messaging.", link: "https://telegram.org/", category: "Social" },
    { name: "Brave", icon: "assets/icons/brave.png", desc: "Privacy-first browser.", link: "https://brave.com/", category: "Browser" },
    { name: "Opera GX", icon: "assets/icons/opera.png", desc: "Gaming browser with resource controls.", link: "https://www.opera.com/gx", category: "Browser" },
    { name: "GitHub Desktop", icon: "assets/icons/github.png", desc: "Git GUI client for GitHub.", link: "https://desktop.github.com/", category: "Developer" },
    { name: "Microsoft Edge", icon: "assets/icons/Edge.jpeg", desc: "Microsoft's modern browser.", link: "https://www.microsoft.com/edge", category: "Browser" },
    { name: "Snapchat", icon: "assets/icons/Snapchat.jpg", desc: "A Fast Messenger App.", link: "https://www.snapchat.com/", category: "Social" },
    { name: "Tlauncher", icon: "assets/icons/Tlauncher.webp", desc: "A Minecraft Launcher", link: "https://tlauncher.org/", category: "Entertainment" },
    { name: "Instagram", icon: "assets/icons/Instagram.svg", desc: "A Reels Special App", link: "https://www.instagram.com/", category: "Social" },
    { name: "Arduino IDE", icon: "assets/icons/Arduino.png", desc: "Code A Robot With IDE", link: "https://www.arduino.cc/en/software", category: "Developer" },
    { name: "Perplexity", icon: "assets/icons/perplexity.png", desc: "Create, Build, Ask Perplexity", link: "https://www.perplexity.ai/", category: "Developer" },
    { name: "Microsoft Teams", icon: "assets/icons/Teams.jpeg", desc: "Connect from Anywhere", link: "https://www.microsoft.com/en-in/microsoft-teams/log-in", category: "Social" },
    { name: "Canva", icon: "assets/icons/Canva.jpeg", desc: "Create Using Cool Tampletes", link: "https://www.canva.com/en_in/", category: "Productivity" },
    { name: "Linkedin", icon: "assets/icons/Linkdin.png", desc: "Find Jobs From anywhere", link: "https://www.linkedin.com/", category: "Social" },
    { name: "Microsoft Copilot", icon: "assets/icons/Copilot.jpeg", desc: " Your AI companion", link: "https://copilot.microsoft.com/", category: "Developer" },
    { name: "Adobe Express", icon: "assets/icons/AX.png", desc: "Free Design, Photo & Video Editing Tool", link: "https://www.adobe.com/in/express/", category: "Productivity" },
    { name: "X-Twitter", icon: "assets/icons/X.png", desc: "breaking news and entertainment to sports and politics", link: "https://x.com/", category: "Social" },
    { name: "Meta AI", icon: "assets/icons/Meta.png", desc: "Meta AI assistant to get things done, create AI-generated images for free", link: "https://www.meta.ai/", category: "Developer" },
    { name: "", icon: "assets/icons/", desc: "", link: "", category: "" },
    { name: "", icon: "assets/icons/", desc: "", link: "", category: "" },
    { name: "", icon: "assets/icons/", desc: "", link: "", category: "" },
    { name: "", icon: "assets/icons/", desc: "", link: "", category: "" },
    { name: "", icon: "assets/icons/", desc: "", link: "", category: "" },
    { name: "", icon: "assets/icons/", desc: "", link: "", category: "" },
    { name: "", icon: "assets/icons/", desc: "", link: "", category: "" },
];

/* ========= HERO ADS (reusing heroAds pattern you had) ========= */
const heroAds = [
    { title: "Find Your Destination, From Anywhere", subtitle: "Made In India.", img: apps[0].icon, appIndex: 0 },
    { title: "Search Smarter, Not Harder", subtitle: "Made for Students.", img: apps[1].icon, appIndex: 1 },
    { title: "Fast And Secure Search By Oasis", subtitle: "Oasis Browser.", img: apps[2].icon, appIndex: 2 },
    { title: "Solve Maths Problem In a Second", subtitle: "Oasis Maths.", img: apps[3].icon, appIndex: 3 }
];

/* ========= DOM REFS (preserved IDs) ========= */
const appGrid = document.getElementById("appGrid");
const featuredGrid = document.getElementById("featuredGrid");
const searchInput = document.getElementById("search");
const appCardTemplate = document.getElementById("appCardTemplate");
const categoryFilters = document.getElementById("categoryFilters");

const modal = document.getElementById("appModal");
const modalIcon = document.getElementById("modalIcon");
const modalName = document.getElementById("modalName");
const modalDesc = document.getElementById("modalDesc");
const downloadBtn = document.getElementById("downloadBtn");
const installBtn = document.getElementById("installBtn");
const closeModal = document.getElementById("closeModal");
const installProgressWrap = document.getElementById("installProgressWrap");
const installProgress = document.getElementById("installProgress");
const installProgressLabel = document.getElementById("installProgressLabel");

const heroCarousel = document.getElementById("heroCarousel");
const heroPrev = document.getElementById("heroPrev");
const heroNext = document.getElementById("heroNext");
const heroProgress = document.getElementById("heroProgress");
const heroDots = document.getElementById("heroDots");

const sidebar = document.getElementById("msSidebar");
const sidebarToggle = document.getElementById("sidebarToggle");
const showAllBtn = document.getElementById("showAllBtn");
const sortSelect = document.getElementById("sortSelect");
const themeToggle = document.getElementById("themeToggle");

/* ========= STATE ========= */
let currentCategory = 'all';
let heroIndex = 0;
let HERO_DURATION = 2000;
let heroRAF = null;
let heroStart = null;
let installInterval = null;

/* ========= UTILITIES ========= */
const debounce = (fn, wait = 240) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), wait); } }
function safeText(s) { return (s || '').toString(); }

/* ========= RENDERING ========= */
function createAppCard(app) {
    const node = appCardTemplate.content.cloneNode(true).firstElementChild;
    const img = node.querySelector('img');
    const h4 = node.querySelector('h4');

    img.src = app.icon || '';
    img.alt = app.name || 'app';
    h4.textContent = app.name || 'Unnamed';
    node.addEventListener('click', () => openModal(app));
    node.addEventListener('keydown', (e) => { if (e.key === 'Enter') openModal(app); });
    return node;
}

function loadAllApps(list) {
    appGrid.innerHTML = '';
    if (!list.length) {
        appGrid.innerHTML = `<div class="app-grid-empty"><h3>No results found</h3><p>Try adjusting your search or category filters.</p></div>`;
        return;
    }
    const frag = document.createDocumentFragment();
    list.forEach(a => frag.appendChild(createAppCard(a)));
    appGrid.appendChild(frag);
}

function loadFeatured(list) {
    featuredGrid.innerHTML = '';
    const featured = list.slice(0, 4);
    featured.forEach(app => {
        const el = document.createElement('div');
        el.className = 'feature-card';
        el.tabIndex = 0;
        el.innerHTML = `<img src="${app.icon}" alt="${safeText(app.name)}" /><div><strong>${safeText(app.name)}</strong><div style="color:var(--muted);margin-top:6px;font-size:13px">${safeText(app.desc)}</div></div>`;
        el.addEventListener('click', () => openModal(app));
        featuredGrid.appendChild(el);
    });
}

/* central filter + sort */
function filterAndRenderApps() {
    const q = (searchInput && searchInput.value.trim().toLowerCase()) || '';
    let filtered = apps.slice();

    // category filter
    if (currentCategory !== 'all') {
        filtered = filtered.filter(a => a.category === currentCategory);
    }

    // search filter
    if (q) {
        filtered = filtered.filter(a => (a.name && a.name.toLowerCase().includes(q)) || (a.desc && a.desc.toLowerCase().includes(q)));
    }

    // sort
    const s = sortSelect && sortSelect.value;
    if (s === 'alpha') filtered.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
    else if (s === 'new') filtered = filtered.slice().reverse();

    loadAllApps(filtered);
}

/* ========= HERO (restored original) ========= */
function buildHero() {
    heroCarousel.innerHTML = '';
    heroDots.innerHTML = '';
    heroAds.forEach((ad, i) => {
        const slide = document.createElement('div');
        slide.className = 'hero-slide' + (i === 0 ? ' active' : '');
        slide.innerHTML = `
      <div class="left">
        <h2 class="hero-title">${safeText(ad.title)}</h2>
        <div class="hero-sub">${safeText(ad.subtitle)}</div>
        <div class="hero-cta">
          <button class="cta-btn cta-primary" data-ad-index="${i}">Learn more</button>
          <button class="cta-btn cta-ghost" type="button">Share</button>
        </div>
      </div>
      <div class="right">
        <img src="${ad.img}" alt="${safeText(ad.title)}" loading="lazy" />
      </div>
    `;
        heroCarousel.appendChild(slide);

        const dot = document.createElement('div');
        dot.className = 'dot' + (i === 0 ? ' active' : '');
        dot.dataset.index = i;
        dot.addEventListener('click', () => {
            setHero(i);
            restartHero();
        });
        heroDots.appendChild(dot);
    });

    // attach CTAs
    setTimeout(() => {
        document.querySelectorAll('.cta-primary').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = parseInt(btn.dataset.adIndex, 10);
                const ad = heroAds[idx];
                if (ad && apps[ad.appIndex]) openModal(apps[ad.appIndex]);
            });
        });
    }, 20);
}

function heroTick(ts) {
    if (heroStart === null) heroStart = ts;
    const elapsed = ts - heroStart;
    const pct = Math.min(1, elapsed / HERO_DURATION);
    if (heroProgress) heroProgress.style.width = (pct * 100) + '%';
    if (pct >= 1) {
        nextHero();
        heroStart = null;
    }
    heroRAF = requestAnimationFrame(heroTick);
}
function startHero() { cancelAnimationFrame(heroRAF); heroStart = null; heroRAF = requestAnimationFrame(heroTick); }
function stopHero() { cancelAnimationFrame(heroRAF); heroRAF = null; heroStart = null; }
function setHero(index) {
    const slides = Array.from(heroCarousel.querySelectorAll('.hero-slide'));
    slides.forEach((s, i) => { s.classList.remove('active', 'exit-left'); if (i === index) s.classList.add('active'); else if (i < index) s.classList.add('exit-left'); });
    Array.from(heroDots.children).forEach((d, i) => d.classList.toggle('active', i === index));
    heroIndex = index;
    if (heroProgress) heroProgress.style.width = '0%';
}
function nextHero() { setHero((heroIndex + 1) % heroAds.length); }
function prevHero() { setHero((heroIndex - 1 + heroAds.length) % heroAds.length); }
function restartHero() { stopHero(); startHero(); }

/* ========= MODAL (preserved behavior) ========= */
function openModal(app) {
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'false');
    modalIcon.src = app.icon || '';
    modalIcon.alt = app.name ? `${app.name} icon` : 'app icon';
    modalName.textContent = app.name || '';
    modalDesc.textContent = app.desc || '';
    downloadBtn.onclick = () => window.open(app.link, '_blank');
    if (installProgress) installProgress.style.width = '0%';
    if (installProgressLabel) installProgressLabel.textContent = '0%';
    if (installProgressWrap) installProgressWrap.classList.add('hidden');
    if (installBtn) { installBtn.disabled = false; installBtn.textContent = 'Install (simulate)'; }
}
function closeModalFn() { if (modal) modal.setAttribute('aria-hidden', 'true'); }
closeModal && closeModal.addEventListener('click', closeModalFn);
modal && modal.addEventListener('click', (e) => { if (e.target === modal) closeModalFn(); });

installBtn && installBtn.addEventListener('click', () => {
    if (!installProgressWrap || !installProgress) return;
    installProgressWrap.classList.remove('hidden');
    installBtn.disabled = true;
    installBtn.textContent = "Downloading...";
    let pct = 0;
    installProgress.style.width = '0%';
    installProgressLabel.textContent = '0%';
    clearInterval(installInterval);
    installInterval = setInterval(() => {
        pct += Math.random() * 8 + 4;
        if (pct >= 100) pct = 100;
        installProgress.style.width = pct + '%';
        installProgressLabel.textContent = Math.floor(pct) + '%';
        if (pct >= 100) { clearInterval(installInterval); installBtn.textContent = 'Installed'; installBtn.disabled = true; }
        else if (pct > 90) installBtn.textContent = 'Installing...';
    }, 420);
});

/* ========= SEARCH, FILTERS, SORT wiring ========= */
const handleSearch = debounce(() => filterAndRenderApps(), 260);
searchInput && searchInput.addEventListener('input', handleSearch);

categoryFilters && categoryFilters.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    Array.from(categoryFilters.querySelectorAll('.filter-btn')).forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = btn.dataset.category || 'all';
    filterAndRenderApps();
});

showAllBtn && showAllBtn.addEventListener('click', () => {
    currentCategory = 'all';
    searchInput.value = '';
    Array.from(categoryFilters.querySelectorAll('.filter-btn')).forEach(b => b.classList.remove('active'));
    const allBtn = categoryFilters.querySelector('.filter-btn[data-category="all"]');
    if (allBtn) allBtn.classList.add('active');
    filterAndRenderApps();
});

sortSelect && sortSelect.addEventListener('change', () => filterAndRenderApps());
/* expand on hover when collapsed (optional UX) */
sidebar && sidebar.addEventListener('mouseenter', () => {
    if (sidebar.classList.contains('collapsed')) sidebar.classList.add('hover-expand');
});
sidebar && sidebar.addEventListener('mouseleave', () => {
    if (sidebar.classList.contains('hover-expand')) sidebar.classList.remove('hover-expand');
});
/* clicking nav items */
document.querySelectorAll('.ms-nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.ms-nav-item').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        // optional: handle view switching (home/apps/categories) if you want in future
    });
});

/* ========= THEME toggle with localStorage ========= */
function setTheme(theme) {
    if (theme === 'light') document.body.classList.add('light');
    else document.body.classList.remove('light');
    localStorage.setItem('oasis_theme', theme);
    themeToggle && themeToggle.setAttribute('aria-pressed', theme === 'light');
}
themeToggle && themeToggle.addEventListener('click', () => {
    const isLight = document.body.classList.contains('light');
    setTheme(isLight ? 'dark' : 'light');
});
/* initialize theme */
const saved = localStorage.getItem('oasis_theme') || 'dark';
setTheme(saved);

/* ========= INIT ========= */
function init() {
    filterAndRenderApps();
    loadFeatured(apps);
    buildHero();
    setHero(0);
    startHero();

    // hero controls
    heroNext && heroNext.addEventListener('click', () => { nextHero(); restartHero(); });
    heroPrev && heroPrev.addEventListener('click', () => { prevHero(); restartHero(); });

    // pause on hero hover
    const heroEl = document.querySelector('.hero');
    if (heroEl) {
        heroEl.addEventListener('mouseenter', () => stopHero());
        heroEl.addEventListener('mouseleave', () => startHero());
    }

    // keyboard
    window.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' && (!modal || modal.getAttribute('aria-hidden') === 'true')) nextHero();
        if (e.key === 'ArrowLeft' && (!modal || modal.getAttribute('aria-hidden') === 'true')) prevHero();
        if (e.key === 'Escape') closeModalFn();
    });
}

document.addEventListener('DOMContentLoaded', init);

/*----Costum cursor----*/

const cursor = document.querySelector('.ms-cursor');
let mouseX = 0, mouseY = 0;

document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function updateCursor() {
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
    requestAnimationFrame(updateCursor);
}

updateCursor();


