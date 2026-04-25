(function () {
  const site = window.FOLIVA_SITE;
  const grid = document.querySelector("#featuredProductsGrid");
  const template = document.querySelector("#productCardTemplate");

  if (!site || !grid || !template) {
    return;
  }

  site.products.slice(0, 6).forEach((product, index) => {
    const card = template.content.cloneNode(true);
    const article = card.querySelector(".product-card");
    const visual = card.querySelector(".product-visual");
    const detailsLink = card.querySelector(".product-details-link");
    const inquiryButton = card.querySelector(".product-inquiry-button");

    visual.style.background = product.palette;
    article.style.animationDelay = `${index * 65}ms`;
    card.querySelector(".product-badge").textContent = product.tag;
    card.querySelector("h3").textContent = product.name;
    card.querySelector(".price").textContent = product.type;
    card.querySelector(".description").textContent = product.description;
    card.querySelector(".category").textContent = product.category;
    card.querySelector(".material").textContent = product.focus;
    detailsLink.href = `products/${product.slug}.html`;

    inquiryButton.addEventListener("click", () => {
      const form = document.querySelector(".inquiry-form");
      if (!form) {
        return;
      }

      const select = form.querySelector('select[name="product"]');
      const messageField = form.querySelector('[name="message"]');
      if (select) {
        select.value = product.name;
      }
      if (messageField && !messageField.value.trim()) {
        messageField.value = `I would like more details about ${product.name} for ${product.crops}`;
      }
      document.querySelector("#contact").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    grid.append(card);
  });
})();
