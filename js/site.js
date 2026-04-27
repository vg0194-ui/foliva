(function () {
  const navToggle = document.querySelector("#navToggle");
  const navMenu = document.querySelector("#navMenu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const nextState = !navMenu.classList.contains("is-open");
      navMenu.classList.toggle("is-open", nextState);
      document.body.classList.toggle("menu-open", nextState);
      navToggle.setAttribute("aria-expanded", String(nextState));
    });

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("is-open");
        document.body.classList.remove("menu-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 920) {
        navMenu.classList.remove("is-open");
        document.body.classList.remove("menu-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  const page = document.body.dataset.page;
  if (page === "products") {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    if (category) {
      window.requestAnimationFrame(() => {
        const filter = document.querySelector("#categoryFilter");
        if (filter) {
          filter.value = category;
          filter.dispatchEvent(new Event("change"));
        }
      });
    }
  }
})();
