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
  let extendedSection = null;
  if (detailShell && inquirySection) {
    extendedSection = document.createElement("section");
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

  if (detailShell && extendedSection) {
    const contentSections = Array.from(detailShell.children).filter(
      (node) => node.matches("section") && !node.classList.contains("detail-hero")
    );

    const overviewPrimary = contentSections[0];
    const overviewSecondary = contentSections[1];
    const technicalSection = contentSections[2];
    const contactSection = contentSections[3];

    if (overviewPrimary && overviewSecondary && technicalSection && contactSection) {
      overviewPrimary.classList.add("detail-section-overview-primary");
      overviewSecondary.classList.add("detail-section-overview-secondary");
      technicalSection.classList.add("detail-section-technical");
      contactSection.classList.add("detail-section-inquiry");

      const tabs = [
        {
          id: "overview",
          label: "Overview",
          sections: [overviewPrimary, overviewSecondary]
        },
        {
          id: "specifications",
          label: "Specifications",
          sections: [technicalSection]
        },
        {
          id: "inquiry",
          label: "Inquiry",
          sections: [contactSection]
        }
      ];

      const tabShell = document.createElement("section");
      tabShell.className = "detail-tabs";

      const tabList = document.createElement("div");
      tabList.className = "detail-tab-list";
      tabList.setAttribute("role", "tablist");

      const panels = [];
      const buttons = [];

      tabs.forEach((tab, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "detail-tab-button";
        button.textContent = tab.label;
        button.id = `tab-${tab.id}`;
        button.setAttribute("role", "tab");
        button.setAttribute("aria-controls", `panel-${tab.id}`);
        button.setAttribute("aria-selected", index === 0 ? "true" : "false");
        if (index === 0) {
          button.classList.add("is-active");
        }
        tabList.append(button);
        buttons.push(button);

        const panel = document.createElement("div");
        panel.className = "detail-tab-panel";
        panel.id = `panel-${tab.id}`;
        panel.setAttribute("role", "tabpanel");
        panel.setAttribute("aria-labelledby", button.id);
        panel.hidden = index !== 0;
        if (index === 0) {
          panel.classList.add("is-active");
        }

        tab.sections.forEach((section) => panel.append(section));
        tabShell.append(panel);
        panels.push(panel);

        button.addEventListener("click", () => {
          buttons.forEach((item, itemIndex) => {
            const active = itemIndex === index;
            item.classList.toggle("is-active", active);
            item.setAttribute("aria-selected", String(active));
          });

          panels.forEach((item, itemIndex) => {
            const active = itemIndex === index;
            item.classList.toggle("is-active", active);
            item.hidden = !active;
          });
        });
      });

      detailShell.append(tabList, tabShell);
    }
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
