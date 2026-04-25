const whatsappNumber = "918690063336";
const salesEmail = "info@entornogreens.com";

const products = [
  {
    id: "folistar-wonder",
    name: "FoliStar Wonder",
    category: "FoliStar",
    focus: "Calcium support",
    type: "Liquid fertilizer",
    description:
      "Calcium nitrate fortified with magnesium for foliar application, positioned for fruit set, yield improvement, and crop safety.",
    tag: "Liquid Range",
    palette: "linear-gradient(135deg, #9ed1a0, #97cc3b)",
    crops: "Cereals, legumes, fruits and vegetables, cotton, sugarcane, and similar crops.",
    usage: "Used as a foliar application according to the brochure dosage guidance for crop stage and deficiency support.",
    benefits: [
      "Allows higher calcium input with crop safety.",
      "Supports nutrient transport and fruit set.",
      "Strengthens cell walls for pest and disease resistance.",
      "Helps prevent stress linked to calcium deficiency."
    ],
    includes: [
      "Calcium nitrate fortified with magnesium.",
      "Designed for foliar application.",
      "Positioned for fruit yield and quality support."
    ]
  },
  {
    id: "folistar-booster",
    name: "FoliStar Booster 13-13-13",
    category: "FoliStar",
    focus: "Vegetative growth",
    type: "Liquid fertilizer",
    description:
      "Used for better vegetative growth with stronger root mass, greener leaf area, and improved tolerance to environmental stress.",
    tag: "Growth",
    palette: "linear-gradient(135deg, #73b84f, #d0ef9d)",
    crops: "Cereals, legumes, fruits and vegetables, cotton, sugarcane, and other field crops.",
    usage: "Recommended for initial stage sprays focused on green growth and vegetative development.",
    benefits: [
      "Promotes root mass and leaf area.",
      "Improves flower and fruit set support.",
      "Useful in early growth sprays.",
      "Helps plants tolerate abiotic stress."
    ],
    includes: [
      "Balanced NPK 13-13-13 positioning.",
      "Focused on vegetative growth stages.",
      "Suited to foliar program integration."
    ]
  },
  {
    id: "folistar-tarzen",
    name: "FoliStar Tarzen 5-0-23",
    category: "FoliStar",
    focus: "Flowering and grain filling",
    type: "Liquid fertilizer",
    description:
      "Supports flowering, fruit formation, grain filling, fruit size, and better tolerance to abiotic stress.",
    tag: "Flowering",
    palette: "linear-gradient(135deg, #4e8c2d, #a9d44f)",
    crops: "Cereals, legumes, fruits and vegetables, cotton, sugarcane, and other multi-crop programs.",
    usage: "Applied around flowering, fruit formation, and grain fill periods based on crop need.",
    benefits: [
      "Supports flowering and fruit formation.",
      "Helps increase fruit size and weight.",
      "Contributes to grain filling programs.",
      "Builds tolerance toward stress conditions."
    ],
    includes: [
      "5-0-23 positioning from brochure.",
      "Focused on reproductive crop stages.",
      "Useful in crop quality improvement programs."
    ]
  },
  {
    id: "folistar-power-plus",
    name: "FoliStar Power+",
    category: "FoliStar",
    focus: "Micronutrient mix",
    type: "Liquid fertilizer",
    description:
      "Mix micronutrient fertilizer for foliar application to improve photosynthesis, fruit quality, and leaf health.",
    tag: "Micronutrient",
    palette: "linear-gradient(135deg, #4f7042, #a9c77c)",
    crops: "Broadly referenced for cereals, legumes, fruits and vegetables, cotton, and sugarcane.",
    usage: "Used as a foliar micronutrient support product where yield quality and leaf health are priorities.",
    benefits: [
      "Improves flowers and fruits with quality yield.",
      "Supports photosynthesis and early resistance.",
      "Helps reduce white marks on leaves.",
      "Supports greener, healthier plant growth."
    ],
    includes: [
      "Micronutrient blend positioning.",
      "Targeted to foliar application.",
      "Used for quality and greenness support."
    ]
  },
  {
    id: "folistar-zinc-oxide",
    name: "FoliStar Zinc Oxide Suspension 39.5%",
    category: "FoliStar",
    focus: "Zinc correction",
    type: "Liquid fertilizer",
    description:
      "High-zinc suspension formulated for deficiency correction, crop quality, enzyme activity, and organic farming suitability.",
    tag: "Zinc",
    palette: "linear-gradient(135deg, #587246, #bfdc89)",
    crops: "Recommended across cereals, legumes, fruits and vegetables, cotton, sugarcane, and related crops.",
    usage: "Used where quick zinc deficiency correction and zinc nutrition are required.",
    benefits: [
      "Contains 39.5 percent minimum zinc.",
      "Supports enzymes that regulate plant life.",
      "Helps address zinc deficiency quickly.",
      "Recommended in brochure for organic farming."
    ],
    includes: [
      "Dense suspension concentrate of liquid zinc.",
      "Zinc-focused deficiency correction.",
      "Quality and yield support positioning."
    ]
  },
  {
    id: "folivita-boronated-calcium-nitrate",
    name: "FoliVita Boronated Calcium Nitrate",
    category: "FoliVita",
    focus: "Crop development",
    type: "Water soluble",
    description:
      "Supports flowering, fruit set, nutrient uptake, plant strength, quality improvement, and tolerance to stress.",
    tag: "Development",
    palette: "linear-gradient(135deg, #95cf58, #edf7d7)",
    crops: "Used for crop development with strong relevance to fruits and vegetables.",
    usage: "Brochure references both soil application and foliar use depending on crop and acreage.",
    benefits: [
      "Vital for flowering, fertilization, and fruit set.",
      "Provides calcium and boron together.",
      "Improves product luster and storage longevity.",
      "Increases tolerance to pests, diseases, and environmental stress."
    ],
    includes: [
      "Dual nutrient calcium and boron positioning.",
      "Suitable for soil and foliar programs.",
      "Quality and yield oriented application."
    ]
  },
  {
    id: "folivita-magnesium-sulphate",
    name: "FoliVita Magnesium Sulphate 9.5%",
    category: "FoliVita",
    focus: "Metabolism and respiration",
    type: "Water soluble",
    description:
      "Helps maintain chlorophyll levels, supports plant greenness, and contributes magnesium and sulphur in balanced ratio.",
    tag: "Respiration",
    palette: "linear-gradient(135deg, #8db36f, #d5eebf)",
    crops: "Cereals, legumes, fruits and vegetables, cotton, sugarcane, and similar crops.",
    usage: "Integrated into foliar nutrition programs except where calcium fertilizer mixing is restricted.",
    benefits: [
      "Supports metabolism and plant respiration.",
      "Maintains chlorophyll and leaf greenness.",
      "Provides magnesium and sulphur together.",
      "Dissolves quickly and completely in water."
    ],
    includes: [
      "Free-flowing crystalline formulation.",
      "Secondary nutrient support.",
      "Useful for chlorophyll-related plant performance."
    ]
  },
  {
    id: "folivita-zinc-sulphate",
    name: "FoliVita Zinc Sulphate Monohydrate 33%",
    category: "FoliVita",
    focus: "Enzyme function",
    type: "Water soluble",
    description:
      "Provides zinc and sulphur nutrition, improves urea efficiency, and is readily soluble for plant availability.",
    tag: "Metabolism",
    palette: "linear-gradient(135deg, #7aa55b, #c4e1a5)",
    crops: "Broadly positioned for cereals, legumes, fruits and vegetables, cotton, and sugarcane.",
    usage: "Applied where zinc and sulphur nutrition or urea efficiency support is needed.",
    benefits: [
      "Provides zinc and sulphur to soil and crop.",
      "Compatible with urea and other fertilizers.",
      "Improves urea efficiency as a coating agent.",
      "Readily soluble and available to crops."
    ],
    includes: [
      "Free-flowing powder positioning.",
      "Enzyme and metabolism support.",
      "Useful in zinc nutrition programs."
    ]
  },
  {
    id: "folivita-power-plus",
    name: "FoliVita Power+",
    category: "FoliVita",
    focus: "Yield and quality",
    type: "Water soluble",
    description:
      "Micronutrient mix to improve flower and fruit quality, green leaf health, and production performance.",
    tag: "Yield",
    palette: "linear-gradient(135deg, #66944e, #bfe08a)",
    crops: "Broad multi-crop application across cereals, legumes, fruits and vegetables, cotton, and sugarcane.",
    usage: "Used in water soluble nutrition programs for yield quality and balanced micronutrient support.",
    benefits: [
      "Improves flowers and fruits with quality yield.",
      "Supports photosynthesis and disease resistance.",
      "Helps reduce upper leaf white marks.",
      "Improves greenness and plant process support."
    ],
    includes: [
      "Micronutrient mix positioning.",
      "Water soluble format.",
      "Yield and crop quality use case."
    ]
  },
  {
    id: "folivita-calcium-nitrate",
    name: "FoliVita Calcium Nitrate",
    category: "FoliVita",
    focus: "Cell wall strength",
    type: "Water soluble",
    description:
      "Supports plant structure, flowering, fruit development, quick nitrogen uptake, and soil balance.",
    tag: "Calcium",
    palette: "linear-gradient(135deg, #8fbf54, #dff0ba)",
    crops: "Used in crop development and flowering programs with soil and foliar references in brochure.",
    usage: "Applied based on acreage and crop stage for structural strength, flowering, and fruit support.",
    benefits: [
      "Helps form strong cell walls and durable fruit.",
      "Supports new branches, flowering, and fruit development.",
      "Provides readily available nitrogen.",
      "Helps reduce sodium-related soil issues."
    ],
    includes: [
      "Calcium plus nitrogen positioning.",
      "Soil and crop structural support.",
      "Useful in growth and flowering stages."
    ]
  },
  {
    id: "folizyme-crop-plus",
    name: "FoliZyme Crop+",
    category: "FoliZyme",
    focus: "Soil conditioner",
    type: "Granular",
    description:
      "Organic soil conditioner formulated to improve plant vigour, disease resistance, soil structure, and root architecture.",
    tag: "Soil Health",
    palette: "linear-gradient(135deg, #51713e, #aac483)",
    crops: "Crop-focused soil conditioner with broad applicability based on field condition and soil need.",
    usage: "Brochure references soil application per acre as basal application or irrigation-stage support.",
    benefits: [
      "Improves immunity against disease and pests.",
      "Provides macro and micronutrients in absorbable form.",
      "Supports soil ecology and structure.",
      "Helps root architecture and water-stress tolerance."
    ],
    includes: [
      "Granular soil conditioner positioning.",
      "Supports seed germination and seedling growth.",
      "Focused on plant vigour and yield."
    ]
  },
  {
    id: "folizyme-vegetable-plus",
    name: "FoliZyme Vegetable+",
    category: "FoliZyme",
    focus: "Vegetable and fruit support",
    type: "Granular",
    description:
      "Supports vegetable and fruit development, pigmentation, size, and resilience under stress conditions.",
    tag: "Vegetable",
    palette: "linear-gradient(135deg, #456b38, #9fca73)",
    crops: "Vegetable and fruit-oriented soil conditioner based on crop-specific development needs.",
    usage: "Brochure references acreage-based soil application during basal or irrigation timing.",
    benefits: [
      "Formulated for better vegetable and fruit development.",
      "Enhances fruit weight, pigmentation, and size.",
      "Improves soil structure and ecology.",
      "Supports stress tolerance and root architecture."
    ],
    includes: [
      "Granular soil conditioner positioning.",
      "Vegetable and fruit focus.",
      "Supports vigour and yield programs."
    ]
  },
  {
    id: "folikit-groundnut",
    name: "FoliKit Groundnut",
    category: "FoliKit",
    focus: "Groundnut crop kit",
    type: "Crop-specific kit",
    description:
      "Supports oil percentage, fibrous root development, soil health, crop quality, and balanced nutrition.",
    tag: "Kit",
    palette: "linear-gradient(135deg, #8fbe44, #dbeea0)",
    crops: "Groundnut.",
    usage: "Brochure suggests 2 to 3 applications around flowering stage and grain fill time.",
    benefits: [
      "Helps increase oil percentage.",
      "Supports fibrous root development.",
      "Improves crop quality, weight, and luster.",
      "Maintains soil pH and moisture support."
    ],
    includes: [
      "FoliStar Tarzen 250 ml.",
      "FoliStar Wonder 250 ml.",
      "User manual, gloves, and measuring cap."
    ]
  },
  {
    id: "folikit-pulses",
    name: "FoliKit Pulses",
    category: "FoliKit",
    focus: "Pulses crop kit",
    type: "Crop-specific kit",
    description:
      "Focused on yield parameters, leaf size, grain quality, immune support, and dry weight improvement.",
    tag: "Kit",
    palette: "linear-gradient(135deg, #7aa050, #d4e7ab)",
    crops: "Pulses.",
    usage: "Brochure suggests 2 to 3 applications around flowering and grain fill stages.",
    benefits: [
      "Increases dry weight and yield parameters.",
      "Improves leaf size and thickness.",
      "Supports grain size, formation, and quality.",
      "Boosts plant immune support."
    ],
    includes: [
      "FoliStar Tarzen 250 ml.",
      "FoliStar Power+ 250 ml.",
      "User manual, gloves, and measuring cap."
    ]
  },
  {
    id: "folikit-paddy",
    name: "FoliKit Paddy",
    category: "FoliKit",
    focus: "Paddy crop kit",
    type: "Crop-specific kit",
    description:
      "Built around immunity, soil ecology, root architecture, and better crop quality for paddy cultivation.",
    tag: "Kit",
    palette: "linear-gradient(135deg, #66953d, #bde286)",
    crops: "Paddy.",
    usage: "Brochure suggests 2 to 3 applications around flowering stage and grain fill time.",
    benefits: [
      "Supports disease and pest resistance.",
      "Provides macro and micronutrients in absorbable form.",
      "Helps sustain soil ecology and structure.",
      "Supports root architecture and crop quality."
    ],
    includes: [
      "FoliStar Tarzen 250 ml.",
      "FoliStar Zinc Oxide 250 ml.",
      "User manual, gloves, and measuring cap."
    ]
  },
  {
    id: "folikit-vegetable",
    name: "FoliKit Vegetable",
    category: "FoliKit",
    focus: "Vegetable crop kit",
    type: "Crop-specific kit",
    description:
      "Supports fruit quantity, fruit size, pigmentation, root development, and reduced flower drop.",
    tag: "Kit",
    palette: "linear-gradient(135deg, #5b8432, #abd85d)",
    crops: "Vegetables.",
    usage: "Brochure references 4 to 5 applications between flowering and fruit fill with 10 to 15 day intervals.",
    benefits: [
      "Improves quantity, size, and weight of fruit.",
      "Supports vigorous root development.",
      "Reduces flower and immature fruit drop.",
      "Improves color pigmentation and setting."
    ],
    includes: [
      "FoliStar Wonder 250 ml.",
      "FoliStar Booster 250 ml.",
      "FoliStar Power+ 250 ml."
    ]
  },
  {
    id: "folikit-mustard",
    name: "FoliKit Mustard",
    category: "FoliKit",
    focus: "Mustard crop kit",
    type: "Crop-specific kit",
    description:
      "Focused on oil content, plant health, drought resistance, and grain boldness in mustard crops.",
    tag: "Kit",
    palette: "linear-gradient(135deg, #86af42, #ecf2b0)",
    crops: "Mustard.",
    usage: "Brochure suggests 2 to 3 applications around flowering stage and grain fill time.",
    benefits: [
      "Supports oil content improvement.",
      "Promotes healthy plant blossoming.",
      "Builds drought and disease resistance.",
      "Helps pod size and grain boldness."
    ],
    includes: [
      "FoliStar Tarzen 250 ml.",
      "FoliStar Zinc Oxide 250 ml.",
      "User manual, gloves, and measuring cap."
    ]
  },
  {
    id: "folikit-soyabean",
    name: "FoliKit Soyabean",
    category: "FoliKit",
    focus: "Soyabean crop kit",
    type: "Crop-specific kit",
    description:
      "Created to improve soyabean yield, reduce pod drop, strengthen roots, and improve nutrient uptake.",
    tag: "Kit",
    palette: "linear-gradient(135deg, #72994f, #cfebac)",
    crops: "Soyabean.",
    usage: "Brochure suggests 2 to 3 applications around flowering stage and grain fill time.",
    benefits: [
      "Enhances crop yield and farmer benefit.",
      "Reduces immature flower and pod drop.",
      "Improves disease resistance power.",
      "Supports water holding capacity and roots."
    ],
    includes: [
      "FoliStar Wonder 250 ml.",
      "FoliStar Power+ 250 ml.",
      "User manual, gloves, and measuring cap."
    ]
  },
  {
    id: "folikit-fruits",
    name: "FoliKit Fruits",
    category: "FoliKit",
    focus: "Fruit crop kit",
    type: "Crop-specific kit",
    description:
      "Promotes fruit colour, fruit size, flowering, photosynthesis, productivity, and branching support.",
    tag: "Kit",
    palette: "linear-gradient(135deg, #6b9149, #bfe18e)",
    crops: "Fruits.",
    usage: "Positioned for fruit color, size, and yield improvement according to brochure guidance.",
    benefits: [
      "Improves quality and productivity of crops.",
      "Supports sugar transportation and photosynthesis.",
      "Promotes growth, branching, and flowering.",
      "Built around fruit colour and size improvement."
    ],
    includes: [
      "FoliStar Tarzen 250 ml.",
      "FoliStar Power+ 250 ml.",
      "User manual, gloves, and measuring cap."
    ]
  },
  {
    id: "folikit-grains",
    name: "FoliKit Grains",
    category: "FoliKit",
    focus: "Grain crop kit",
    type: "Crop-specific kit",
    description:
      "Built to improve grain formation, grain filling, nutrient availability, and root development.",
    tag: "Kit",
    palette: "linear-gradient(135deg, #698a36, #cde57a)",
    crops: "Grains.",
    usage: "Positioned for grain formation and grain filling support under brochure kit guidance.",
    benefits: [
      "Increases dry weight and yield parameters.",
      "Improves nutrient availability.",
      "Helps root development.",
      "Supports beneficial soil microbial activity."
    ],
    includes: [
      "FoliStar Tarzen 250 ml.",
      "FoliStar Zinc Oxide 250 ml.",
      "User manual, gloves, and measuring cap."
    ]
  }
];

const categoryFilter = document.querySelector("#categoryFilter");
const searchInput = document.querySelector("#searchInput");
const catalogueGrid = document.querySelector("#catalogueGrid");
const cardTemplate = document.querySelector("#productCardTemplate");
const navToggle = document.querySelector("#navToggle");
const navMenu = document.querySelector("#navMenu");
const yearNode = document.querySelector("#year");
const inquiryForm = document.querySelector("#inquiryForm");
const inquiryName = document.querySelector("#inquiryName");
const inquiryEmail = document.querySelector("#inquiryEmail");
const inquiryPhone = document.querySelector("#inquiryPhone");
const inquiryProduct = document.querySelector("#inquiryProduct");
const inquiryCrop = document.querySelector("#inquiryCrop");
const inquiryMessage = document.querySelector("#inquiryMessage");
const whatsAppInquiryButton = document.querySelector("#whatsAppInquiry");
const formNote = document.querySelector("#formNote");
const productModal = document.querySelector("#productModal");
const modalClose = document.querySelector("#modalClose");
const productModalHero = document.querySelector("#productModalHero");
const productModalCategory = document.querySelector("#productModalCategory");
const productModalTitle = document.querySelector("#productModalTitle");
const productModalDescription = document.querySelector("#productModalDescription");
const productModalType = document.querySelector("#productModalType");
const productModalFocus = document.querySelector("#productModalFocus");
const productModalCrops = document.querySelector("#productModalCrops");
const productModalUsage = document.querySelector("#productModalUsage");
const productModalBenefits = document.querySelector("#productModalBenefits");
const productModalIncludes = document.querySelector("#productModalIncludes");
const productModalWhatsApp = document.querySelector("#productModalWhatsApp");
const productModalInquiry = document.querySelector("#productModalInquiry");

let activeProductId = "";

const categories = ["all", ...new Set(products.map((product) => product.category))];

function getProductById(productId) {
  return products.find((product) => product.id === productId);
}

function getInquiryPayload(product) {
  const payload = {
    name: inquiryName.value.trim(),
    email: inquiryEmail.value.trim(),
    phone: inquiryPhone.value.trim(),
    crop: inquiryCrop.value.trim(),
    product: product?.name || inquiryProduct.value || "",
    message: inquiryMessage.value.trim()
  };

  return payload;
}

function buildInquiryText(product) {
  const payload = getInquiryPayload(product);
  return [
    "Hello Foliva,",
    payload.product ? `I am interested in: ${payload.product}` : "I want details about your product range.",
    payload.crop ? `Crop type: ${payload.crop}` : "",
    payload.name ? `Name: ${payload.name}` : "",
    payload.email ? `Email: ${payload.email}` : "",
    payload.phone ? `Phone: ${payload.phone}` : "",
    payload.message ? `Message: ${payload.message}` : ""
  ]
    .filter(Boolean)
    .join("\n");
}

function setFormNote(message, tone = "") {
  formNote.textContent = message;
  formNote.classList.remove("is-success", "is-error");
  if (tone) {
    formNote.classList.add(tone);
  }
}

function validateInquiryForm() {
  if (!inquiryName.value.trim()) {
    setFormNote("Please enter your name before sending the inquiry.", "is-error");
    inquiryName.focus();
    return false;
  }

  if (!inquiryEmail.value.trim()) {
    setFormNote("Please enter your email address before sending the inquiry.", "is-error");
    inquiryEmail.focus();
    return false;
  }

  if (!inquiryMessage.value.trim()) {
    setFormNote("Please add a short message so Foliva knows what you need.", "is-error");
    inquiryMessage.focus();
    return false;
  }

  setFormNote("");
  return true;
}

function populateInquiryOptions() {
  products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = `${product.name} - ${product.category}`;
    inquiryProduct.append(option);
  });
}

function renderProducts() {
  const selectedCategory = categoryFilter.value;
  const query = searchInput.value.trim().toLowerCase();

  const visibleProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesQuery =
      !query ||
      product.name.toLowerCase().includes(query) ||
      product.focus.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.crops.toLowerCase().includes(query);

    return matchesCategory && matchesQuery;
  });

  catalogueGrid.replaceChildren();

  if (visibleProducts.length === 0) {
    const emptyState = document.createElement("div");
    emptyState.className = "empty-state";
    emptyState.innerHTML =
      "<h3>No products found</h3><p>Try another crop type, category, or product keyword.</p>";
    catalogueGrid.append(emptyState);
    return;
  }

  visibleProducts.forEach((product, index) => {
    const card = cardTemplate.content.cloneNode(true);
    const article = card.querySelector(".product-card");
    const visual = card.querySelector(".product-visual");
    const detailsButton = card.querySelector(".product-details-button");
    const inquiryButton = card.querySelector(".product-inquiry-button");

    visual.style.background = product.palette;
    article.style.animationDelay = `${index * 65}ms`;
    card.querySelector(".product-badge").textContent = product.tag;
    card.querySelector("h3").textContent = product.name;
    card.querySelector(".price").textContent = product.type;
    card.querySelector(".description").textContent = product.description;
    card.querySelector(".category").textContent = product.category;
    card.querySelector(".material").textContent = product.focus;

    detailsButton.addEventListener("click", () => openProductModal(product.id));
    inquiryButton.addEventListener("click", () => focusInquiryForm(product.id));

    catalogueGrid.append(card);
  });
}

function populateCategoryFilter() {
  categories.forEach((category) => {
    if (category === "all") {
      return;
    }

    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.append(option);
  });
}

function focusInquiryForm(productId) {
  const product = getProductById(productId);
  if (!product) {
    return;
  }

  inquiryProduct.value = product.name;
  inquiryMessage.value =
    inquiryMessage.value.trim() ||
    `I would like more details about ${product.name} for ${product.crops}`;
  setFormNote(`Inquiry form updated for ${product.name}.`, "is-success");
  document.querySelector("#contact").scrollIntoView({ behavior: "smooth", block: "start" });
}

function openProductModal(productId) {
  const product = getProductById(productId);
  if (!product) {
    return;
  }

  activeProductId = product.id;
  productModalHero.style.background = product.palette;
  productModalCategory.textContent = product.category;
  productModalTitle.textContent = product.name;
  productModalDescription.textContent = product.description;
  productModalType.textContent = product.type;
  productModalFocus.textContent = product.focus;
  productModalCrops.textContent = product.crops;
  productModalUsage.textContent = product.usage;

  productModalBenefits.replaceChildren();
  product.benefits.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    productModalBenefits.append(li);
  });

  productModalIncludes.replaceChildren();
  product.includes.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    productModalIncludes.append(li);
  });

  productModalWhatsApp.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hello Foliva,\nI want more details about ${product.name}.`
  )}`;

  productModal.hidden = false;
  document.body.classList.add("modal-open");
}

function closeProductModal() {
  productModal.hidden = true;
  document.body.classList.remove("modal-open");
  activeProductId = "";
}

function toggleMenu() {
  const nextState = !navMenu.classList.contains("is-open");
  navMenu.classList.toggle("is-open", nextState);
  document.body.classList.toggle("menu-open", nextState);
  navToggle.setAttribute("aria-expanded", String(nextState));
}

function sendMailInquiry(event) {
  event.preventDefault();
  if (!validateInquiryForm()) {
    return;
  }

  const selectedProduct = products.find((product) => product.name === inquiryProduct.value);
  const subject = selectedProduct
    ? `Foliva inquiry - ${selectedProduct.name}`
    : "Foliva product inquiry";
  const body = buildInquiryText(selectedProduct);

  window.location.href = `mailto:${salesEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  setFormNote("Your email app is opening with the inquiry details.", "is-success");
}

function sendWhatsAppInquiry() {
  if (!validateInquiryForm()) {
    return;
  }

  const selectedProduct = products.find((product) => product.name === inquiryProduct.value);
  const text = buildInquiryText(selectedProduct);
  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  setFormNote("WhatsApp is opening with your inquiry details.", "is-success");
}

populateCategoryFilter();
populateInquiryOptions();
renderProducts();

navToggle.addEventListener("click", toggleMenu);
navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

categoryFilter.addEventListener("change", renderProducts);
searchInput.addEventListener("input", renderProducts);

productModal.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) {
    return;
  }

  if (target.dataset.closeModal === "true") {
    closeProductModal();
  }
});

modalClose.addEventListener("click", closeProductModal);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !productModal.hidden) {
    closeProductModal();
  }
});

productModalInquiry.addEventListener("click", () => {
  const selectedProductId = activeProductId;
  closeProductModal();
  if (selectedProductId) {
    focusInquiryForm(selectedProductId);
  }
});

inquiryForm.addEventListener("submit", sendMailInquiry);
whatsAppInquiryButton.addEventListener("click", sendWhatsAppInquiry);

yearNode.textContent = new Date().getFullYear();
