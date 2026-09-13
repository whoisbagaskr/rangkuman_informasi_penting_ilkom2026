document.addEventListener("DOMContentLoaded", () => {
  const tocContainer = document.getElementById("toc-container");
  const accordionContainer = document.getElementById("accordion-container");
  const searchInput = document.getElementById("search-input");
  const searchClear = document.getElementById("search-clear");
  const themeToggleBtn = document.getElementById("theme-toggle");
  const readingProgressBar = document.getElementById("reading-progress-bar");
  const sidebar = document.getElementById("sidebar");
  const sidebarToggle = document.getElementById("sidebar-toggle");
  const sidebarClose = document.getElementById("sidebar-close");
  const sidebarOverlay = document.getElementById("sidebar-overlay");

  function renderApp(data) {
    tocContainer.innerHTML = "";
    accordionContainer.innerHTML = "";

    if (!data || data.length === 0) {
      accordionContainer.innerHTML = `
        <div class="welcome-card" style="text-align: center;">
          <h3>⚠️ Hasil Tidak Ditemukan</h3>
          <p>Materi dengan kata kunci tersebut tidak ditemukan. Coba kata kunci lain.</p>
        </div>
      `;
      return;
    }

    data.forEach((bab) => {
      /* Render TOC Sidebar */
      const tocBabDiv = document.createElement("div");
      tocBabDiv.className = "toc-bab-wrapper";

      let subBabTocHtml = bab.subBab
        .map(
          (sub) => `
        <li class="toc-item">
          <a href="#${sub.id}" data-subid="${sub.id}">${sub.judul}</a>
        </li>
      `
        )
        .join("");

      tocBabDiv.innerHTML = `
        <div class="toc-bab">${bab.judulBab}</div>
        <ul class="toc-sub-list">${subBabTocHtml}</ul>
      `;
      tocContainer.appendChild(tocBabDiv);

      /* Render Content Area (Materi) */
      const accordionItem = document.createElement("div");
      accordionItem.className = "accordion-item active";
      accordionItem.id = bab.id;

      let subBabCardsHtml = bab.subBab
        .map(
          (sub) => `
        <article class="sub-bab-card" id="${sub.id}">
          <h4>${sub.judul}</h4>
          <div>${sub.isiTeks}</div>
          ${
            sub.gambar
              ? `<img src="${sub.gambar}" alt="${sub.judul}" class="sub-bab-img" loading="lazy" onerror="this.onerror=null; this.style.display='none';">
                 <div class="img-caption">${sub.captionGambar || ""}</div>`
              : ""
          }
        </article>
      `
        )
        .join("");

      accordionItem.innerHTML = `
        <div class="accordion-header">
          <h3>${bab.judulBab}</h3>
          <span class="accordion-icon">▼</span>
        </div>
        <div class="accordion-body">
          <p style="color: var(--text-secondary); margin-bottom: 1rem; font-size: 0.85rem;">${bab.deskripsi}</p>
          ${subBabCardsHtml}
        </div>
      `;

      accordionContainer.appendChild(accordionItem);
    });

    initAccordionEvents();
    initTocNavigation();
  }

  function initAccordionEvents() {
    document.querySelectorAll(".accordion-header").forEach((header) => {
      header.addEventListener("click", () => {
        header.parentElement.classList.toggle("active");
      });
    });
  }

  function initTocNavigation() {
    document.querySelectorAll(".toc-item a").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("data-subid");
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const parentAccordion = targetElement.closest(".accordion-item");
          if (parentAccordion && !parentAccordion.classList.contains("active")) {
            parentAccordion.classList.add("active");
          }
          closeSidebar();
          const offsetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 75;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });

          targetElement.classList.remove("highlight-target");
          void targetElement.offsetWidth;
          targetElement.classList.add("highlight-target");
        }
      });
    });
  }

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    searchClear.style.display = query.length > 0 ? "block" : "none";

    const filteredData = window.contentData
      .map((bab) => {
        const isBabMatch =
          bab.judulBab.toLowerCase().includes(query) ||
          bab.deskripsi.toLowerCase().includes(query) ||
          (bab.kataKunci && bab.kataKunci.some((tag) => tag.toLowerCase().includes(query)));

        const matchingSubBab = bab.subBab.filter(
          (sub) =>
            sub.judul.toLowerCase().includes(query) ||
            sub.isiTeks.toLowerCase().includes(query)
        );

        if (isBabMatch || matchingSubBab.length > 0) {
          return {
            ...bab,
            subBab: matchingSubBab.length > 0 ? matchingSubBab : bab.subBab
          };
        }
        return null;
      })
      .filter((item) => item !== null);

    renderApp(filteredData);
  });

  searchClear.addEventListener("click", () => {
    searchInput.value = "";
    searchClear.style.display = "none";
    renderApp(window.contentData);
  });

  window.addEventListener("scroll", () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    readingProgressBar.style.width = (winScroll / height) * 100 + "%";
  });

  /* Theme Setup */
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeUI(savedTheme);

  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeUI(newTheme);
  });

  function updateThemeUI(theme) {
    const icon = themeToggleBtn.querySelector(".theme-icon");
    const text = themeToggleBtn.querySelector(".theme-text");
    icon.textContent = theme === "dark" ? "🌙" : "☀️";
    text.textContent = theme === "dark" ? "Gelap" : "Terang";
  }

  function openSidebar() {
    sidebar.classList.add("open");
    sidebarOverlay.classList.add("active");
  }

  function closeSidebar() {
    sidebar.classList.remove("open");
    sidebarOverlay.classList.remove("active");
  }

  if (sidebarToggle) sidebarToggle.addEventListener("click", openSidebar);
  if (sidebarClose) sidebarClose.addEventListener("click", closeSidebar);
  if (sidebarOverlay) sidebarOverlay.addEventListener("click", closeSidebar);

  /* PENGAMAN ERROR (Try-Catch) */
  try {
    if (typeof window.contentData === "undefined") {
      throw new Error("File content.js gagal dimuat! Pastikan file sudah ter-upload di GitHub dengan nama 'content.js' (semua huruf kecil).");
    }
    renderApp(window.contentData);
  } catch (error) {
    accordionContainer.innerHTML = `
      <div class="welcome-card" style="border: 2px solid #ef4444; background: #fef2f2; color: #991b1b;">
        <h3 style="color: #dc2626;">❌ ERROR: Data Materi Gagal Dimuat</h3>
        <p style="margin-top: 10px; font-weight: 600;">${error.message}</p>
        <p style="margin-top: 10px; font-size: 0.85rem;">Cara perbaiki: Cek kembali apakah isi file content.js kamu sudah ter-copy sampai habis (jangan sampai kurung tutup di paling bawah hilang).</p>
      </div>`;
  }
});
