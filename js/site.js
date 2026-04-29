(function () {
  document.querySelectorAll(".brand").forEach((brand) => {
    if (!brand.querySelector(".brand-mark")) {
      const mark = document.createElement("span");
      mark.className = "brand-mark";
      mark.setAttribute("aria-hidden", "true");
      mark.textContent = "\u00AE";
      brand.append(mark);
    }
  });

  document.querySelectorAll(".footer-logo").forEach((logo) => {
    const parent = logo.parentElement;
    if (!parent || parent.querySelector(".footer-mark")) {
      return;
    }

    const mark = document.createElement("span");
    mark.className = "footer-mark";
    mark.setAttribute("aria-hidden", "true");
    mark.textContent = "\u00AE";
    logo.insertAdjacentElement("afterend", mark);
  });

  const navToggle = document.querySelector("#navToggle");
  const navMenu = document.querySelector("#navMenu");

  if (navToggle && navMenu) {
    navToggle.setAttribute("aria-label", "Open navigation menu");

    navToggle.addEventListener("click", () => {
      const nextState = !navMenu.classList.contains("is-open");
      navMenu.classList.toggle("is-open", nextState);
      document.body.classList.toggle("menu-open", nextState);
      navToggle.setAttribute("aria-expanded", String(nextState));
      navToggle.setAttribute("aria-label", nextState ? "Close navigation menu" : "Open navigation menu");
    });

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("is-open");
        document.body.classList.remove("menu-open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open navigation menu");
      });
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 920) {
        navMenu.classList.remove("is-open");
        document.body.classList.remove("menu-open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open navigation menu");
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

