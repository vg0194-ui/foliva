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

  function createSpecSummary(product) {
    return product.specifications
      .slice(0, 2)
      .map((item) => `${item.label}: ${item.value}`)
      .join(" • ");
  }

  function render() {
    const category = categoryFilter.value;
    const query = searchInput.value.trim().toLowerCase();

    const visibleProducts = site.products.filter((product) => {
      const searchableText = [
        product.name,
        product.category,
        product.focus,
        product.type,
        product.description,
        product.crops,
        ...product.benefits,
        ...product.includes,
        ...product.applicationNotes,
        ...product.specifications.map((item) => `${item.label} ${item.value}`)
      ]
        .join(" ")
        .toLowerCase();

      const matchesCategory = category === "all" || product.category === category;
      const matchesQuery = !query || searchableText.includes(query);

      return matchesCategory && matchesQuery;
    });

    grid.replaceChildren();

    if (visibleProducts.length === 0) {
      const emptyState = document.createElement("div");
      emptyState.className = "empty-state";
      emptyState.innerHTML =
        "<h3>No products found</h3><p>Try another crop, category, nutrient or application keyword.</p>";
      grid.append(emptyState);
      return;
    }

    visibleProducts.forEach((product) => {
      const card = template.content.cloneNode(true);
      const visual = card.querySelector(".product-visual");
      const detailsLink = card.querySelector(".product-details-link");
      const image = document.createElement("img");
      image.src = product.image;
      image.alt = product.imageAlt;
      image.loading = "lazy";

      visual.style.background = product.palette;
      visual.append(image);

      card.querySelector(".product-badge").textContent = product.tag;
      card.querySelector("h3").textContent = product.name;
      card.querySelector(".price").textContent = product.type;
      card.querySelector(".description").textContent = product.description;
      card.querySelector(".category").textContent = product.category;
      card.querySelector(".material").textContent = createSpecSummary(product);
      detailsLink.href = `${product.slug}.html`;

      grid.append(card);
    });
  }

  categoryFilter.addEventListener("change", render);
  searchInput.addEventListener("input", render);
  render();
})();
