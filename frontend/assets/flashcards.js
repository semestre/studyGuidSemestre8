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

function shuffleArray(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Fullscreen flashcard game: shuffled deck, click/tap to flip, next/prev to move through it.
function startFlashcardGame(items) {
  if (!items || items.length === 0) return;

  const deck = shuffleArray(items);
  let index = 0;
  let flipped = false;

  const overlay = document.createElement("div");
  overlay.className = "fc-game-overlay";
  document.body.appendChild(overlay);
  document.body.style.overflow = "hidden";

  function renderCard() {
    const item = deck[index];
    const isLast = index === deck.length - 1;

    overlay.innerHTML = `
      <div class="fc-game-top">
        <span class="fc-game-progress">${index + 1} / ${deck.length}</span>
        <button type="button" class="fc-game-close" aria-label="Cerrar">&times;</button>
      </div>
      <div class="fc-game-card ${flipped ? "flipped" : ""}" tabindex="0">
        <div class="fc-game-face fc-game-front">
          <div class="fc-game-id">#${item.id}</div>
          <div class="fc-game-term">${escapeHtml(item.title)}</div>
          <div class="fc-game-hint">Toca para revelar</div>
        </div>
        <div class="fc-game-face fc-game-back">
          <div class="fc-game-subtitle">${escapeHtml(item.subtitle)}</div>
          ${item.description ? `<div class="fc-game-description">${escapeHtml(item.description)}</div>` : ""}
        </div>
      </div>
      <div class="fc-game-controls">
        <button type="button" class="fc-game-btn" id="fc-game-prev" ${index === 0 ? "disabled" : ""}>&larr; Anterior</button>
        <button type="button" class="fc-game-btn fc-game-btn-primary" id="fc-game-next">${isLast ? "Terminar" : "Siguiente →"}</button>
      </div>
    `;

    overlay.querySelector(".fc-game-card").addEventListener("click", () => {
      flipped = !flipped;
      renderCard();
    });
    overlay.querySelector(".fc-game-close").addEventListener("click", close);
    overlay.querySelector("#fc-game-prev").addEventListener("click", (e) => {
      e.stopPropagation();
      if (index > 0) {
        index--;
        flipped = false;
        renderCard();
      }
    });
    overlay.querySelector("#fc-game-next").addEventListener("click", (e) => {
      e.stopPropagation();
      if (isLast) {
        renderDone();
        return;
      }
      index++;
      flipped = false;
      renderCard();
    });
  }

  function renderDone() {
    overlay.innerHTML = `
      <div class="fc-game-top">
        <span class="fc-game-progress">${deck.length} / ${deck.length}</span>
        <button type="button" class="fc-game-close" aria-label="Cerrar">&times;</button>
      </div>
      <div class="fc-game-done">
        <div class="fc-game-done-title">¡Completado!</div>
        <p class="fc-game-done-text">Repasaste ${deck.length} tarjeta${deck.length === 1 ? "" : "s"}.</p>
        <div class="fc-game-controls">
          <button type="button" class="fc-game-btn" id="fc-game-restart">Jugar de nuevo</button>
          <button type="button" class="fc-game-btn fc-game-btn-primary" id="fc-game-exit">Cerrar</button>
        </div>
      </div>
    `;
    overlay.querySelector(".fc-game-close").addEventListener("click", close);
    overlay.querySelector("#fc-game-exit").addEventListener("click", close);
    overlay.querySelector("#fc-game-restart").addEventListener("click", () => {
      deck.splice(0, deck.length, ...shuffleArray(items));
      index = 0;
      flipped = false;
      renderCard();
    });
  }

  function onKeydown(e) {
    if (e.key === "Escape") {
      close();
      return;
    }
    if (e.key === " " || e.key === "Enter") {
      const card = overlay.querySelector(".fc-game-card");
      if (card) {
        e.preventDefault();
        flipped = !flipped;
        renderCard();
      }
      return;
    }
    if (e.key === "ArrowRight") {
      const nextBtn = overlay.querySelector("#fc-game-next");
      if (nextBtn) nextBtn.click();
    }
    if (e.key === "ArrowLeft") {
      const prevBtn = overlay.querySelector("#fc-game-prev");
      if (prevBtn) prevBtn.click();
    }
  }

  function close() {
    document.removeEventListener("keydown", onKeydown);
    document.body.style.overflow = "";
    overlay.remove();
  }

  document.addEventListener("keydown", onKeydown);
  renderCard();
}
