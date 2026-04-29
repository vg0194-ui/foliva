(function () {
  const site = window.FOLIVA_SITE;
  if (!site) {
    return;
  }

  const heroSlides = [
    {
      title: "Empowering Soil, Empowering Growth through sustainable crop nutrition.",
      copy:
        "Foliva positions itself as a trusted partner in sustainable agriculture with fertilizer solutions focused on healthier ecosystems, better crop yields and long-term farming productivity.",
      image: "brochure_extract/images/page-001-04-Im3.jpg",
      chips: ["Sustainable agriculture", "Crop nutrition", "Soil health"],
      stats: [
        { value: "4", label: "Core product platforms" },
        { value: "20", label: "Products in the 2024 catalogue" },
        { value: "28", label: "Catalogue pages" }
      ],
      primaryHref: "products/index.html",
      primaryLabel: "Explore product solutions",
      secondaryHref: "#contact",
      secondaryLabel: "Connect with Foliva"
    },
    {
      title: "Four product families built around diverse farming needs.",
      copy:
        "The Foliva range spans FoliStar water soluble liquid fertilizers, FoliVita water soluble fertilizers, FoliZyme soil conditioners and FoliKit crop-specific fertilizer kits.",
      image: "brochure_extract/images/page-001-03-Im2.jpg",
      chips: ["FoliStar", "FoliVita", "FoliZyme", "FoliKit"],
      stats: [
        { value: "10", label: "Liquid and water soluble fertilizer products" },
        { value: "8", label: "Crop-specific fertilizer kits" },
        { value: "1 Acre", label: "Standard kit positioning" },
        { value: "2", label: "Granular soil conditioner products" }
      ],
      primaryHref: "Foliva-Product-Catalogue-2024.pdf",
      primaryLabel: "Download catalogue",
      secondaryHref: "#product-showcase",
      secondaryLabel: "View pack showcase"
    },
    {
      title: "Innovation, sustainability and environmental stewardship at the core.",
      copy:
        "Foliva highlights research and development, advanced fertilizer solutions, natural ingredients and beneficial microorganisms to optimize nutrient uptake and improve soil health.",
      image: "brochure_extract/images/page-001-02-Im1.jpg",
      chips: ["Innovation", "Environmental stewardship", "Nutrient uptake"],
      stats: [
        { value: "5", label: "FoliStar products" },
        { value: "5", label: "FoliVita products" },
        { value: "2", label: "FoliZyme products" }
      ],
      primaryHref: "#innovation",
      primaryLabel: "Explore Foliva principles",
      secondaryHref: "#innovation",
      secondaryLabel: "See innovation story"
    }
  ];

  const testimonials = [
    {
      quote:
        "Foliva is committed to revolutionizing the way fertilizers are produced and used to promote healthier ecosystems and enhance crop yields.",
      name: "Sustainable Agriculture",
      role: "From the Foliva catalogue"
    },
    {
      quote:
        "Founded on the principles of innovation, sustainability and environmental stewardship, Foliva offers fertilizers for diverse farming needs.",
      name: "Company Principles",
      role: "From the About Us section"
    },
    {
      quote:
        "Foliva's development approach combines research, natural ingredients, beneficial microorganisms and innovative technologies to optimize nutrient uptake and improve soil health.",
      name: "Research & Development",
      role: "From the Foliva catalogue"
    }
  ];

  const cropSolutions = [
    {
      title: "Vegetables",
      copy: "Flowering-to-fruit-fill support with kit-led and foliar nutrition pathways.",
      image: "brochure_extract/images/page-001-04-Im3.jpg"
    },
    {
      title: "Paddy",
      copy: "Zinc, reproductive stage support and kit structures for crop quality and resilience.",
      image: "brochure_extract/images/page-001-03-Im2.jpg"
    },
    {
      title: "Fruits",
      copy: "Programs positioned around fruit set, size, colour and productivity support.",
      image: "brochure_extract/images/page-001-02-Im1.jpg"
    },
    {
      title: "Pulses & Oilseeds",
      copy: "Grain fill, oil percentage and leaf development support through focused combinations.",
      image: "brochure_extract/images/page-001-03-Im2.jpg"
    }
  ];

  const featuredProducts = [
    "folistar-wonder",
    "folistar-tarzen",
    "folivita-boronated-calcium-nitrate",
    "folivita-zinc-sulphate",
    "folizyme-crop-plus",
    "folikit-vegetable"
  ]
    .map((slug) => site.products.find((product) => product.slug === slug))
    .filter(Boolean);

  function createDots(container, total, onSelect) {
    container.replaceChildren();
    return Array.from({ length: total }, (_, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.setAttribute("aria-label", `Go to slide ${index + 1}`);
      button.addEventListener("click", () => onSelect(index));
      container.append(button);
      return button;
    });
  }

  function mountHeroSlider() {
    const frame = document.querySelector("#heroSlider");
    const dotsHost = document.querySelector("#heroSliderDots");

    if (!frame || !dotsHost) {
      return;
    }

    const slides = heroSlides.map((slide, index) => {
      const article = document.createElement("article");
      article.className = "hero-slide";
      article.innerHTML = `
        <div class="hero-slide-media" style="background-image:url('${slide.image}')"></div>
        <div class="hero-slide-copy">
          <div>
            <p class="hero-kicker">Foliva corporate platform</p>
            <h1 class="hero-slide-title">${slide.title}</h1>
            <p>${slide.copy}</p>
            <div class="hero-chip-row">
              ${slide.chips.map((item) => `<span>${item}</span>`).join("")}
            </div>
          </div>
          <div>
            <div class="hero-actions">
              <a class="button button-primary" href="${slide.primaryHref}">${slide.primaryLabel}</a>
              <a class="button button-secondary" href="${slide.secondaryHref}">${slide.secondaryLabel}</a>
            </div>
            <div class="hero-slide-metrics">
              ${slide.stats
                .map(
                  (stat) => `
                    <article>
                      <strong>${stat.value}</strong>
                      <span>${stat.label}</span>
                    </article>
                  `
                )
                .join("")}
            </div>
          </div>
        </div>
      `;
      if (index === 0) {
        article.classList.add("is-active");
      }
      frame.append(article);
      return article;
    });

    let activeIndex = 0;
    const dots = createDots(dotsHost, slides.length, (index) => {
      activeIndex = index;
      render();
      restart();
    });

    function render() {
      slides.forEach((slide, index) => {
        slide.classList.toggle("is-active", index === activeIndex);
      });
      dots.forEach((dot, index) => {
        dot.classList.toggle("is-active", index === activeIndex);
      });
    }

    let timer = window.setInterval(next, 5500);

    function next() {
      activeIndex = (activeIndex + 1) % slides.length;
      render();
    }

    function restart() {
      window.clearInterval(timer);
      timer = window.setInterval(next, 5500);
    }

    frame.addEventListener("mouseenter", () => window.clearInterval(timer));
    frame.addEventListener("mouseleave", restart);
    render();
  }

  function mountProductShowcase() {
    const track = document.querySelector("#productShowcaseTrack");
    const dotsHost = document.querySelector("#productShowcaseDots");

    if (!track || !dotsHost || featuredProducts.length === 0) {
      return;
    }

    const cards = featuredProducts.map((product, index) => {
      const article = document.createElement("article");
      article.className = "showcase-card";
      article.innerHTML = `
        <div class="showcase-art" style="background:${product.palette}">
          <img src="${product.imageHome}" alt="${product.imageAlt}" loading="lazy" />
        </div>
        <div class="showcase-copy">
          <p class="eyebrow">${product.category}</p>
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <div class="product-meta">
            <span>${product.type}</span>
            <span>${product.focus}</span>
          </div>
          <ul class="detail-summary">
            ${product.specifications.slice(0, 3).map((item) => `<li>${item.label}: ${item.value}</li>`).join("")}
          </ul>
          <div class="product-actions">
            <a class="button button-secondary" href="products/${product.slug}.html">View details</a>
            <button class="button button-primary" type="button" data-product-name="${product.name}">Inquire now</button>
          </div>
        </div>
      `;
      if (index === 0) {
        article.classList.add("is-active");
      }
      track.append(article);
      return article;
    });

    let activeIndex = 0;
    const dots = createDots(dotsHost, cards.length, (index) => {
      activeIndex = index;
      render();
      restart();
    });

    function render() {
      cards.forEach((card, index) => {
        card.classList.toggle("is-active", index === activeIndex);
      });
      dots.forEach((dot, index) => {
        dot.classList.toggle("is-active", index === activeIndex);
      });
    }

    function seedInquiry(productName) {
      const form = document.querySelector(".inquiry-form");
      if (!form) {
        return;
      }

      const product = site.products.find((item) => item.name === productName);
      const select = form.querySelector('select[name="product"]');
      const messageField = form.querySelector('[name="message"]');

      if (select) {
        select.value = productName;
      }

      if (messageField && product && !messageField.value.trim()) {
        messageField.value = `I would like more details about ${product.name} for ${product.crops}`;
      }

      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    track.querySelectorAll("[data-product-name]").forEach((button) => {
      button.addEventListener("click", () => seedInquiry(button.dataset.productName || ""));
    });

    let timer = window.setInterval(next, 4800);

    function next() {
      activeIndex = (activeIndex + 1) % cards.length;
      render();
    }

    function restart() {
      window.clearInterval(timer);
      timer = window.setInterval(next, 4800);
    }

    track.addEventListener("mouseenter", () => window.clearInterval(timer));
    track.addEventListener("mouseleave", restart);
    render();
  }

  function mountTestimonials() {
    const track = document.querySelector("#testimonialTrack");
    const dotsHost = document.querySelector("#testimonialDots");

    if (!track || !dotsHost) {
      return;
    }

    const cards = testimonials.map((testimonial, index) => {
      const article = document.createElement("article");
      article.className = "testimonial-card";
      article.innerHTML = `
        <blockquote>${testimonial.quote}</blockquote>
        <div>
          <cite>${testimonial.name}</cite>
          <p>${testimonial.role}</p>
        </div>
      `;
      if (index === 0) {
        article.classList.add("is-active");
      }
      track.append(article);
      return article;
    });

    let activeIndex = 0;
    const dots = createDots(dotsHost, cards.length, (index) => {
      activeIndex = index;
      render();
      restart();
    });

    function render() {
      cards.forEach((card, index) => {
        card.classList.toggle("is-active", index === activeIndex);
      });
      dots.forEach((dot, index) => {
        dot.classList.toggle("is-active", index === activeIndex);
      });
    }

    let timer = window.setInterval(next, 6200);

    function next() {
      activeIndex = (activeIndex + 1) % cards.length;
      render();
    }

    function restart() {
      window.clearInterval(timer);
      timer = window.setInterval(next, 6200);
    }

    track.addEventListener("mouseenter", () => window.clearInterval(timer));
    track.addEventListener("mouseleave", restart);
    render();
  }

  function mountCropSolutions() {
    const track = document.querySelector("#cropSolutionsTrack");
    if (!track) {
      return;
    }

    cropSolutions.forEach((solution) => {
      const article = document.createElement("article");
      article.className = "crop-card";
      article.style.backgroundImage = `url('${solution.image}')`;
      article.innerHTML = `
        <p class="eyebrow">Featured crop</p>
        <h3>${solution.title}</h3>
        <p>${solution.copy}</p>
      `;
      track.append(article);
    });
  }

  function mountCounters() {
    const counters = document.querySelectorAll("[data-counter]");
    if (counters.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const element = entry.target;
          const target = Number(element.getAttribute("data-counter") || "0");
          const duration = 1300;
          const start = performance.now();

          function tick(now) {
            const progress = Math.min((now - start) / duration, 1);
            const value = Math.round(target * (1 - Math.pow(1 - progress, 3)));
            element.textContent = target >= 1000 ? value.toLocaleString() : String(value);
            if (progress < 1) {
              requestAnimationFrame(tick);
            }
          }

          requestAnimationFrame(tick);
          observer.unobserve(element);
        });
      },
      { threshold: 0.4 }
    );

    counters.forEach((counter) => observer.observe(counter));
  }

  mountHeroSlider();
  mountProductShowcase();
  mountTestimonials();
  mountCropSolutions();
  mountCounters();
})();
