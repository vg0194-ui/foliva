(function () {
  const site = window.FOLIVA_SITE;
  const categoryFilter = document.querySelector("#categoryFilter");
  const searchInput = document.querySelector("#searchInput");
  const grid = document.querySelector("#productsGrid");
  const template = document.querySelector("#productCardTemplate");

  if (!site || !categoryFilter || !searchInput || !grid || !template) {
    return;
  }

  ["all", ...new Set(site.products.map((product) => product.category))].forEach((category) => {
    if (category === "all") {
      return;
    }

    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.append(option);
  });

  function render() {
    const category = categoryFilter.value;
    const query = searchInput.value.trim().toLowerCase();

    const visibleProducts = site.products.filter((product) => {
      const matchesCategory = category === "all" || product.category === category;
      const matchesQuery =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.focus.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.crops.toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });

    grid.replaceChildren();

    if (visibleProducts.length === 0) {
      const emptyState = document.createElement("div");
      emptyState.className = "empty-state";
      emptyState.innerHTML =
        "<h3>No products found</h3><p>Try another crop type, category, or product keyword.</p>";
      grid.append(emptyState);
      return;
    }

    visibleProducts.forEach((product, index) => {
      const card = template.content.cloneNode(true);
      const article = card.querySelector(".product-card");
      const visual = card.querySelector(".product-visual");
      const detailsLink = card.querySelector(".product-details-link");

      visual.style.background = product.palette;
      article.style.animationDelay = `${index * 55}ms`;
      card.querySelector(".product-badge").textContent = product.tag;
      card.querySelector("h3").textContent = product.name;
      card.querySelector(".price").textContent = product.type;
      card.querySelector(".description").textContent = product.description;
      card.querySelector(".category").textContent = product.category;
      card.querySelector(".material").textContent = product.focus;
      detailsLink.href = `${product.slug}.html`;

      grid.append(card);
    });
  }

  categoryFilter.addEventListener("change", render);
  searchInput.addEventListener("input", render);
  render();
})();
