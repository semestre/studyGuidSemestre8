// Shared flashcard rendering — no framework, no build step.

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function renderFlashcards(containerEl, items) {
  containerEl.innerHTML = "";

  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "flashcard";

    const hasDescription = !!item.description;

    card.innerHTML = `
      <div class="fc-id">#${item.id}</div>
      <h3 class="fc-title">${escapeHtml(item.title)}</h3>
      <p class="fc-subtitle">${escapeHtml(item.subtitle)}</p>
      <button type="button" class="fc-toggle" ${hasDescription ? "" : "disabled"}>
        ${hasDescription ? "Ver más" : "Sin descripción ampliada"}
      </button>
      <div class="fc-description">${hasDescription ? escapeHtml(item.description) : ""}</div>
    `;

    if (hasDescription) {
      const toggle = card.querySelector(".fc-toggle");
      toggle.addEventListener("click", () => {
        const expanded = card.classList.toggle("expanded");
        toggle.textContent = expanded ? "Ver menos" : "Ver más";
      });
    }

    containerEl.appendChild(card);
  });
}

function filterFlashcards(items, query) {
  const q = query.trim().toLowerCase();
  if (!q) return items;
  return items.filter(
    (item) =>
      item.title.toLowerCase().includes(q) ||
      item.subtitle.toLowerCase().includes(q) ||
      (item.description && item.description.toLowerCase().includes(q))
  );
}

function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}
