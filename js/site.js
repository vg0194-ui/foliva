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
  }

  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
})();
