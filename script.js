(() => {
  "use strict";
  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  function closeMenu() {
    document.body.classList.remove("menu-open");
    menu?.setAttribute("aria-expanded", "false");
    menu?.setAttribute("aria-label", "Abrir menu");
  }

  menu?.addEventListener("click", () => {
    const opened = !document.body.classList.contains("menu-open");
    document.body.classList.toggle("menu-open", opened);
    menu.setAttribute("aria-expanded", String(opened));
    menu.setAttribute("aria-label", opened ? "Fechar menu" : "Abrir menu");
  });

  nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMenu();
  });

  const match = window.matchMedia("(prefers-reduced-motion: reduce)");
  const reveals = document.querySelectorAll("[data-reveal]");
  if (!match.matches && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.09, rootMargin: "0px 0px -30px 0px" });
    reveals.forEach(item => observer.observe(item));
  } else {
    reveals.forEach(item => item.classList.add("revealed"));
  }

  document.getElementById("year").textContent = String(new Date().getFullYear());

  const select = document.getElementById("form-topic");
  document.querySelectorAll("[data-treatment]").forEach(link => {
    link.addEventListener("click", () => {
      if (select) select.value = link.dataset.treatment ?? "";
    });
  });

  const form = document.getElementById("enquiry-form");
  const result = document.getElementById("form-result");
  const prepared = document.getElementById("prepared-message");
  const status = document.getElementById("copy-status");
  const copy = document.getElementById("copy-message");

  form?.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    if (!name) return;
    const topic = String(data.get("topic") || "").trim() || "Informações gerais";
    const message = String(data.get("message") || "").trim();
    const parts = [
      "Olá, Ana! O meu nome é " + name + ".",
      "Gostaria de obter informações sobre: " + topic + "."
    ];
    if (message) parts.push(message);
    parts.push("Obrigada!");
    prepared.textContent = parts.join("\n\n");
    result.hidden = false;
    status.textContent = "";
    result.scrollIntoView({ behavior: match.matches ? "auto" : "smooth", block: "nearest" });
  });

  copy?.addEventListener("click", async () => {
    const message = prepared?.textContent || "";
    if (!message) return;
    try {
      await navigator.clipboard.writeText(message);
      status.textContent = "Mensagem copiada!";
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(prepared);
      selection?.removeAllRanges();
      selection?.addRange(range);
      status.textContent = "Selecione o texto acima e copie-o.";
    }
  });

  // Fotografias opcionais: preserva o retrato atual até serem colocados
  // assets/ana-natural.webp e assets/ana-diploma.webp no repositório.
  document.querySelectorAll("img[data-optional-src]").forEach(target => {
    const next = target.getAttribute("data-optional-src");
    if (!next) return;
    const candidate = new Image();
    candidate.onload = () => {
      target.src = next;
      target.removeAttribute("hidden");
      const placeholder = target.id === "diploma-photo"
        ? document.getElementById("diploma-placeholder")
        : null;
      if (placeholder) placeholder.hidden = true;
    };
    candidate.onerror = () => {};
    candidate.src = next;
  });

})();