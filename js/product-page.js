(function () {
  const site = window.FOLIVA_SITE;
  const page = document.querySelector("[data-product-slug]");
  if (!site || !page) {
    return;
  }

  const slug = page.dataset.productSlug;
  const product = site.products.find((item) => item.slug === slug);

  if (!product) {
    return;
  }

  document.title = `${product.name} | Foliva`;
  let descriptionMeta = document.querySelector('meta[name="description"]');
  if (!descriptionMeta) {
    descriptionMeta = document.createElement("meta");
    descriptionMeta.name = "description";
    document.head.append(descriptionMeta);
  }
  descriptionMeta.setAttribute("content", product.description);

  document.querySelectorAll("[data-product-name]").forEach((node) => {
    node.textContent = product.name;
  });
  document.querySelector("[data-product-category]").textContent = product.category;
  document.querySelector("[data-product-description]").textContent = product.description;
  document.querySelector("[data-product-type]").textContent = product.type;
  document.querySelector("[data-product-focus]").textContent = product.focus;
  document.querySelector("[data-product-crops]").textContent = product.crops;
  document.querySelector("[data-product-usage]").textContent = product.usage;

  const hero = document.querySelector("[data-product-hero]");
  if (hero) {
    hero.style.background = product.palette;
    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.imageAlt;
    hero.replaceChildren(image);
  }

  const detailLink = document.querySelector("[data-product-whatsapp]");
  if (detailLink) {
    detailLink.href = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
      `Hello Foliva,\nI want more details about ${product.name}.`
    )}`;
  }

  const benefits = document.querySelector("[data-product-benefits]");
  const includes = document.querySelector("[data-product-includes]");

  product.benefits.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    benefits.append(li);
  });

  product.includes.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    includes.append(li);
  });

  const detailShell = document.querySelector(".detail-layout");
  const inquirySection = document.querySelector(".detail-layout .detail-columns:last-of-type");
  if (detailShell && inquirySection) {
    const extendedSection = document.createElement("section");
    extendedSection.className = "detail-sections-grid";

    const specificationRows = product.specifications
      .map(
        (item) => `
          <tr>
            <th scope="row">${item.label}</th>
            <td>${item.value}</td>
          </tr>
        `
      )
      .join("");

    const applicationRows = product.applicationNotes
      .map((item) => `<li>${item}</li>`)
      .join("");

    extendedSection.innerHTML = `
      <article class="panel spec-card">
        <h2>Composition & specification</h2>
        <table class="spec-table">
          <tbody>${specificationRows}</tbody>
        </table>
      </article>
      <article class="panel application-card">
        <h2>Application & pack guidance</h2>
        <ul class="application-list">${applicationRows}</ul>
      </article>
    `;

    detailShell.insertBefore(extendedSection, inquirySection);
  }

  const form = document.querySelector(".inquiry-form");
  if (form) {
    const productSelect = form.querySelector('select[name="product"]');
    const messageField = form.querySelector('[name="message"]');
    if (productSelect) {
      productSelect.value = product.name;
    }
    if (messageField && !messageField.value.trim()) {
      messageField.value = `I would like more details about ${product.name} for ${product.crops}`;
    }
  }

  const relatedGrid = document.querySelector("[data-related-products]");
  const template = document.querySelector("#relatedProductTemplate");
  if (!relatedGrid || !template) {
    return;
  }

  site.products
    .filter((item) => item.category === product.category && item.slug !== product.slug)
    .slice(0, 3)
    .forEach((item) => {
      const card = template.content.cloneNode(true);
      card.querySelector("h3").textContent = item.name;
      card.querySelector("p").textContent = item.description;
      card.querySelector("a").href = `${item.slug}.html`;
      relatedGrid.append(card);
    });
})();
