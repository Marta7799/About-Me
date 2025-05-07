"use strict";

(() => {
  const refs = {
    openModalBtn: document.querySelector(".career-modal-open"),
    closeModalBtn: document.querySelector(".career-modal-close"),
    modal: document.querySelector(".career-modal"),
  };

  if (refs.openModalBtn && refs.closeModalBtn && refs.modal) {
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  }

  function toggleModal() {
    refs.modal.classList.toggle("modal-is-hidden");
  }
})();
