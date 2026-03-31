const navbarComponent = `
  <!-- Modal Search Halaman (Desktop Fallback) -->
  <div id="search-modal" class="fixed inset-0 z-[100] bg-black/60 hidden flex items-center justify-center backdrop-blur-sm transition-opacity">
    <div class="bg-white rounded-2xl w-full max-w-lg p-8 mx-4 shadow-2xl relative">
      <button onclick="closeSearch()" class="absolute top-4 right-4 text-gray-400 hover:text-brand-dark transition-colors">
        <i class="ph-bold ph-x text-2xl"></i>
      </button>
      <h3 class="text-2xl font-serif font-bold text-brand-dark mb-2">Pencarian</h3>
      <p class="text-sm text-gray-500 mb-6">Temukan artikel, layanan, atau portofolio desain kami.</p>
      <form action="/search" method="GET" class="flex gap-4">
        <input type="text" name="q" id="search-input" class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue transition-colors" placeholder="Ketik kata kunci..." required>
        <button type="submit" class="bg-brand-dark text-white px-6 py-3 rounded-xl font-bold hover:bg-brand-blue transition-colors shadow-md">Cari</button>
      </form>
    </div>
  </div>

  <!-- Mobile Menu Backdrop & Drawer -->
  <div id="mobile-menu-backdrop" class="fixed inset-0 bg-brand-dark/40 backdrop-blur-sm z-[100] hidden opacity-0 transition-opacity duration-500" onclick="closeMobileMenu()"></div>
  <div id="mobile-menu-drawer" class="fixed top-0 right-0 w-[85%] max-w-sm h-full bg-white z-[101] transform translate-x-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-2xl flex flex-col overflow-y-auto">
    
    <!-- Drawer Header -->
    <div class="p-6 flex justify-between items-center border-b border-gray-100 shrink-0">
      <span class="font-sans font-bold text-xl tracking-tight text-brand-dark">Menu Navigasi</span>
      <button onclick="closeMobileMenu()" class="text-gray-400 hover:text-brand-dark transition-colors p-2 bg-gray-50 rounded-full">
        <i class="ph-bold ph-x text-xl"></i>
      </button>
    </div>
    
    <!-- Drawer Content -->
    <div class="p-6 flex flex-col gap-8 flex-1">
      
      <!-- Mobile Live Search -->
      <div class="relative">
        <i class="ph ph-magnifying-glass absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg"></i>
        <input 
          type="text" 
          id="mobile-live-search-input" 
          class="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-12 pr-4 py-3.5 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all text-sm text-brand-dark" 
          placeholder="Cari kata di halaman ini..." 
          oninput="handleLiveSearch(event)" 
          onkeydown="executeSearchScroll(event)"
        >
      </div>

      <!-- Mobile Links -->
      <nav class="flex flex-col text-lg font-medium text-brand-dark gap-2">
        <a href="/#about" class="px-2 py-3 hover:text-brand-blue transition-colors" onclick="closeMobileMenu()">Tentang Kami</a>
        <a href="/#services" class="px-2 py-3 hover:text-brand-blue transition-colors" onclick="closeMobileMenu()">Layanan</a>
        
        <!-- Mobile Accordion for Themes -->
        <div class="border-y border-gray-100 py-2 my-2">
          <button onclick="toggleMobileThemeMenu()" class="flex justify-between items-center w-full px-2 py-3 text-left hover:text-brand-blue transition-colors group">
            <span>Tema Desain</span>
            <div class="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-brand-blue/10">
              <i id="mobile-theme-icon" class="ph-bold ph-caret-down text-sm transition-transform duration-500"></i>
            </div>
          </button>
          
          <div id="mobile-theme-list" class="hidden flex-col gap-4 pt-2 pb-4 pl-6 text-base text-gray-500 border-l-2 border-brand-blue/20 ml-3">
            <a href="/themes/catalog.html" class="hover:text-brand-blue transition-colors" onclick="closeMobileMenu()">All Catalogues</a>
            <a href="/themes/wabi-sabi" class="hover:text-brand-blue transition-colors" onclick="closeMobileMenu()">Wabi Sabi</a>
            <a href="/themes/tropical" class="hover:text-brand-blue transition-colors" onclick="closeMobileMenu()">Tropical Bali</a>
            <a href="/themes/japandi" class="hover:text-brand-blue transition-colors" onclick="closeMobileMenu()">Japandi</a>
            <a href="/themes/mediteranian" class="hover:text-brand-blue transition-colors" onclick="closeMobileMenu()">Mediteranian</a>
            <a href="/themes/industrial" class="hover:text-brand-blue transition-colors" onclick="closeMobileMenu()">Industrial</a>
            <a href="/themes/modern/modern.html" class="hover:text-brand-blue transition-colors" onclick="closeMobileMenu()">Modern Luxury</a>
          </div>
        </div>

        <a href="/#workflow" class="px-2 py-3 hover:text-brand-blue transition-colors" onclick="closeMobileMenu()">Proses</a>
      </nav>
    </div>

    <!-- Drawer Footer CTA -->
    <div class="p-6 bg-gray-50 mt-auto shrink-0">
       <a href="https://wa.me/6281222250143" class="w-full flex items-center justify-center gap-2 bg-brand-dark text-white px-6 py-4 rounded-xl font-bold hover:bg-brand-blue transition-all duration-300 shadow-lg">
          <i class="ph-fill ph-whatsapp-logo text-xl"></i> Konsultasi
       </a>
    </div>
  </div>

  <!-- Navigation Desktop (Main) -->
  <nav class="fixed top-0 left-0 w-full z-50 glass-nav transition-all duration-500 py-3 lg:py-4" id="main-navbar">
    <div class="max-w-[90rem] mx-auto px-5 lg:px-6 flex justify-between items-center w-full gap-4">
      
      <!-- Left: Logo -->
      <a href="/" class="flex-shrink-0 flex items-center gap-2 cursor-pointer group z-10 w-auto lg:w-1/4">
        <img src="https://iili.io/B2YSb8Q.png" alt="LangitLangit Logo"               width="150"
              height="32" class="h-7 md:h-8 lg:h-9 w-auto transition-transform duration-300 group-hover:scale-105" onerror="this.style.display='none'" fetchpriority="high" loading="eager" decoding="sync" />
        <span class="font-sans font-bold text-xl lg:text-2xl tracking-tight text-brand-dark hidden sm:inline-block">Langitlangit<span class="text-brand-yellow">.ID</span></span>
      </a>

      <!-- Center: Menu Links (Hidden on Mobile) -->
      <div class="hidden lg:flex flex-1 items-center justify-center space-x-6 xl:space-x-10 text-sm font-medium tracking-wide text-gray-600">
        <a href="/#about" class="hover:text-brand-blue transition-colors duration-300">Tentang Kami</a>
        <a href="/#services" class="hover:text-brand-blue transition-colors duration-300">Layanan</a>
        
        <!-- Dropdown Tema Desain -->
        <div class="relative group cursor-pointer py-2">
          <a href="/themes/catalog.html" class="hover:text-brand-blue transition-colors duration-300 flex items-center gap-1">
            Tema Desain <i class="ph-bold ph-caret-down text-[10px]"></i>
          </a>
          <!-- Dropdown Menu -->
          <div class="absolute top-full left-1/2 transform -translate-x-1/2 mt-0 w-48 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2 z-50">
            <a href="/themes/wabi-sabi" class="block px-5 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-brand-blue transition-colors">Wabi Sabi</a>
            <a href="/themes/tropical" class="block px-5 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-brand-blue transition-colors">Tropical Bali</a>
            <a href="/themes/japandi" class="block px-5 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-brand-blue transition-colors">Japandi</a>
            <a href="/themes/mediteranian" class="block px-5 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-brand-blue transition-colors">Mediteranian</a>
            <a href="/themes/industrial" class="block px-5 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-brand-blue transition-colors">Industrial</a>
            <a href="/themes/modern/modern.html" class="block px-5 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-brand-blue transition-colors">Modern Luxury</a>
          </div>
        </div>
        
        <a href="/#workflow" class="hover:text-brand-blue transition-colors duration-300">Proses</a>
      </div>

      <!-- Right: Action Area -->
      <div class="flex items-center justify-end gap-3 xl:gap-5 flex-shrink-0 z-10 w-auto lg:w-1/4">
        
        <!-- Location (Visible only on XL screens to save space) -->
        <div class="hidden xl:flex items-center gap-1.5 text-sm font-medium text-gray-600">
          <i class="ph ph-map-pin text-lg"></i> Depok, ID
        </div>
        
        <!-- Search trigger (Desktop inline search) -->
        <div class="hidden lg:flex items-center text-sm font-medium text-gray-600 xl:border-l border-gray-300 xl:pl-5">
          <div class="flex items-center cursor-pointer hover:text-brand-blue transition-colors" onclick="toggleLiveSearch()">
            <i class="ph ph-magnifying-glass text-xl"></i>
            <span id="search-label" class="ml-1.5 hidden xl:inline-block">Search</span>
          </div>
          <input 
            type="text" 
            id="live-search-input" 
            class="w-0 opacity-0 bg-transparent border-b-2 border-brand-blue focus:outline-none text-sm text-brand-dark transition-all duration-300 ml-0 pointer-events-none" 
            placeholder="Cari & Enter.." 
            oninput="handleLiveSearch(event)" 
            onblur="hideLiveSearch()" 
            onkeydown="executeSearchScroll(event)"
          >
        </div>

        <a href="https://wa.me/6281222250143" class="hidden lg:inline-flex items-center justify-center bg-brand-dark text-white px-5 xl:px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-blue transition-all duration-300 shadow-md">
          Konsultasi
        </a>

        <!-- Mobile Hamburger Button -->
        <button onclick="openMobileMenu()" class="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 text-brand-dark hover:bg-gray-50 transition-colors shadow-sm">
          <i class="ph-bold ph-list text-xl"></i>
        </button>
      </div>

    </div>
  </nav>
`;

// ==========================================
// LOGIKA PEMANGGILAN KOMPONEN DAN NAVIGASI
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  const placeholder = document.getElementById("navbar-placeholder");
  if (placeholder) {
    placeholder.innerHTML = navbarComponent;
  } else {
    document.body.insertAdjacentHTML("afterbegin", navbarComponent);
  }

  // Navbar Styling on Scroll Logic
  const navbar = document.getElementById("main-navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("shadow-sm");
      navbar.classList.replace("py-4", "py-2");
      navbar.classList.replace("py-4", "lg:py-2");
    } else {
      navbar.classList.remove("shadow-sm");
      navbar.classList.replace("py-2", "py-4");
      navbar.classList.replace("lg:py-2", "lg:py-4");
    }
  });
});

// ==========================================
// LOGIKA MENU SELULER (MOBILE DRAWER)
// ==========================================

window.openMobileMenu = function () {
  const backdrop = document.getElementById("mobile-menu-backdrop");
  const drawer = document.getElementById("mobile-menu-drawer");

  backdrop.classList.remove("hidden");
  // Force Reflow
  void backdrop.offsetWidth;
  backdrop.classList.remove("opacity-0");
  backdrop.classList.add("opacity-100");

  drawer.classList.remove("translate-x-full");
  drawer.classList.add("translate-x-0");

  // Prevent background scroll
  document.body.style.overflow = "hidden";
};

window.closeMobileMenu = function () {
  const backdrop = document.getElementById("mobile-menu-backdrop");
  const drawer = document.getElementById("mobile-menu-drawer");

  backdrop.classList.remove("opacity-100");
  backdrop.classList.add("opacity-0");

  drawer.classList.remove("translate-x-0");
  drawer.classList.add("translate-x-full");

  setTimeout(() => {
    backdrop.classList.add("hidden");
    document.body.style.overflow = "";
  }, 500);
};

window.toggleMobileThemeMenu = function () {
  const list = document.getElementById("mobile-theme-list");
  const icon = document.getElementById("mobile-theme-icon");

  if (list.classList.contains("hidden")) {
    list.classList.remove("hidden");
    list.classList.add("flex");
    icon.classList.add("rotate-180");
  } else {
    list.classList.add("hidden");
    list.classList.remove("flex");
    icon.classList.remove("rotate-180");
  }
};

// ==========================================
// LOGIKA LIVE SEARCH (HIGHLIGHT NATIVE)
// ==========================================
let searchTimeout;

window.toggleLiveSearch = function () {
  const label = document.getElementById("search-label");
  const input = document.getElementById("live-search-input");

  if (label && input) {
    label.classList.add("hidden");
    label.classList.remove("xl:inline-block");

    input.classList.remove("w-0", "opacity-0", "ml-0", "pointer-events-none");
    input.classList.add(
      "w-32",
      "xl:w-48",
      "opacity-100",
      "ml-2",
      "pointer-events-auto",
    );
    input.focus();
  }
};

window.hideLiveSearch = function () {
  const label = document.getElementById("search-label");
  const input = document.getElementById("live-search-input");

  if (input && input.value.trim() === "") {
    input.classList.remove(
      "w-32",
      "xl:w-48",
      "opacity-100",
      "ml-2",
      "pointer-events-auto",
    );
    input.classList.add("w-0", "opacity-0", "ml-0", "pointer-events-none");

    if (label) {
      setTimeout(() => {
        label.classList.remove("hidden");
        label.classList.add("hidden", "xl:inline-block");
      }, 300);
    }
    clearHighlights();
  }
};

window.handleLiveSearch = function (e) {
  clearTimeout(searchTimeout);
  const query = e.target.value.trim().toLowerCase();

  searchTimeout = setTimeout(() => {
    clearHighlights();
    if (query.length >= 2) {
      highlightText(document.body, query);
    }
  }, 300);
};

window.executeSearchScroll = function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    const firstMark = document.querySelector("mark.search-highlight");

    if (firstMark) {
      firstMark.classList.add(
        "ring-4",
        "ring-brand-blue",
        "transition-all",
        "duration-300",
      );
      firstMark.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(
        () => firstMark.classList.remove("ring-4", "ring-brand-blue"),
        1000,
      );

      // Tutup menu seluler jika melakukan pencarian di HP
      if (window.innerWidth < 1024) closeMobileMenu();
    }
  }
};

function clearHighlights() {
  const marks = document.querySelectorAll("mark.search-highlight");
  marks.forEach((mark) => {
    const parent = mark.parentNode;
    if (parent) {
      parent.replaceChild(document.createTextNode(mark.textContent), mark);
      parent.normalize();
    }
  });
}

function highlightText(node, query) {
  // Abaikan script, SVG, tombol, serta komponen Drawer Menu agar tidak merusak tata letak
  if (
    node.nodeType === 1 &&
    /(script|style|nav|svg|img|input|button)/i.test(node.tagName)
  )
    return 0;
  if (node.nodeType === 1 && node.id === "mobile-menu-drawer") return 0;

  if (node.nodeType === 3) {
    const text = node.nodeValue;
    const lowerText = text.toLowerCase();
    const matchIndex = lowerText.indexOf(query);

    if (matchIndex >= 0 && text.trim() !== "") {
      const mark = document.createElement("mark");
      mark.className =
        "search-highlight bg-brand-yellow text-brand-dark rounded px-1 font-bold";

      const middle = node.splitText(matchIndex);
      middle.splitText(query.length);
      const clone = middle.cloneNode(true);

      mark.appendChild(clone);
      middle.parentNode.replaceChild(mark, middle);
      return 1;
    }
  } else if (node.nodeType === 1 && node.childNodes) {
    for (let i = 0; i < node.childNodes.length; i++) {
      if (highlightText(node.childNodes[i], query)) i++;
    }
  }
  return 0;
}

window.openSearch = function () {
  const modal = document.getElementById("search-modal");
  const input = document.getElementById("search-input");
  if (modal) {
    modal.classList.remove("hidden");
    if (input) setTimeout(() => input.focus(), 100);
  }
};

window.closeSearch = function () {
  const modal = document.getElementById("search-modal");
  if (modal) modal.classList.add("hidden");
};
