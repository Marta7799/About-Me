"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // Obsługuje kliknięcia w przyciski otwierające i zamykające modal
  document.body.addEventListener("click", (event) => {
    const openBtn = event.target.closest("[data-modal-open]");
    const closeBtn = event.target.closest("[data-modal-close]");

    if (openBtn) {
      const modalSelector = openBtn.getAttribute("data-modal-open");
      const modal = document.querySelector(modalSelector);
      if (modal) {
        modal.classList.remove("modal-is-hidden");
      }
    }

    if (closeBtn) {
      const modalSelector = closeBtn.getAttribute("data-modal-close");
      const modal = document.querySelector(modalSelector);
      if (modal) {
        modal.classList.add("modal-is-hidden");
      }
    }
  });
});
