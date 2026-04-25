(function () {
  const site = window.FOLIVA_SITE;
  if (!site) {
    return;
  }

  function getProductByName(name) {
    return site.products.find((product) => product.name === name);
  }

  function buildWhatsAppText(values) {
    return [
      "Hello Foliva,",
      values.product ? `I am interested in: ${values.product}` : "I want details about your product range.",
      values.crop ? `Crop type: ${values.crop}` : "",
      values.name ? `Name: ${values.name}` : "",
      values.email ? `Email: ${values.email}` : "",
      values.phone ? `Phone: ${values.phone}` : "",
      values.message ? `Message: ${values.message}` : ""
    ]
      .filter(Boolean)
      .join("\n");
  }

  function setNote(form, message, tone) {
    const note = form.querySelector(".form-note");
    if (!note) {
      return;
    }
    note.textContent = message;
    note.classList.remove("is-success", "is-error");
    if (tone) {
      note.classList.add(tone);
    }
  }

  function collectValues(form) {
    const formData = new FormData(form);
    return {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      product: String(formData.get("product") || "").trim(),
      crop: String(formData.get("crop") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      context: form.dataset.formContext || "website"
    };
  }

  function validate(form, values) {
    if (!values.name) {
      setNote(form, "Please enter your name before sending the inquiry.", "is-error");
      form.querySelector('[name="name"]').focus();
      return false;
    }

    if (!values.email) {
      setNote(form, "Please enter your email address before sending the inquiry.", "is-error");
      form.querySelector('[name="email"]').focus();
      return false;
    }

    if (!values.message) {
      setNote(form, "Please add a short message so Foliva knows what you need.", "is-error");
      form.querySelector('[name="message"]').focus();
      return false;
    }

    setNote(form, "", "");
    return true;
  }

  function populateProductOptions(form) {
    const select = form.querySelector('select[name="product"]');
    if (!select || select.dataset.populated === "true") {
      return;
    }

    site.products.forEach((product) => {
      const option = document.createElement("option");
      option.value = product.name;
      option.textContent = `${product.name} - ${product.category}`;
      select.append(option);
    });

    select.dataset.populated = "true";
  }

  async function submitInquiry(form, values) {
    const response = await fetch("/api/inquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "Unable to send inquiry right now.");
    }

    return response.json();
  }

  document.querySelectorAll(".inquiry-form").forEach((form) => {
    populateProductOptions(form);

    const defaultProduct = form.dataset.productDefault;
    if (defaultProduct) {
      const select = form.querySelector('select[name="product"]');
      const messageField = form.querySelector('[name="message"]');
      const product = getProductByName(defaultProduct);
      if (select) {
        select.value = defaultProduct;
      }
      if (messageField && product && !messageField.value.trim()) {
        messageField.value = `I would like more details about ${product.name} for ${product.crops}`;
      }
    }

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const values = collectValues(form);
      if (!validate(form, values)) {
        return;
      }

      const submitButton = form.querySelector('button[type="submit"]');
      if (submitButton) {
        submitButton.disabled = true;
      }

      try {
        await submitInquiry(form, values);
        setNote(form, "Inquiry submitted successfully. The Foliva team can now review it.", "is-success");
        form.reset();
        populateProductOptions(form);
      } catch (error) {
        setNote(form, "The backend could not accept the inquiry right now. Please try again.", "is-error");
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
        }
      }
    });

    const whatsappButton = form.querySelector(".form-whatsapp");
    if (whatsappButton) {
      whatsappButton.addEventListener("click", () => {
        const values = collectValues(form);
        if (!validate(form, values)) {
          return;
        }

        const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
          buildWhatsAppText(values)
        )}`;
        window.open(whatsappUrl, "_blank", "noopener");
        setNote(form, "WhatsApp opened with your inquiry details.", "is-success");
      });
    }
  });
})();
