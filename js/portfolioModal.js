document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const refs = {
      openModalBtn: document.querySelector(".portfolio-modal-open"),
      closeModalBtn: document.querySelector(".portfolio-modal-close"),
      modal: document.querySelector(".portfolio-modal"),
    };

    if (refs.openModalBtn && refs.closeModalBtn && refs.modal) {
      console.log("Modal elements found in DOM");

      refs.openModalBtn.addEventListener("click", () => {
        console.log("Open modal button clicked");
        refs.modal.classList.remove("modal-is-hidden");
      });

      refs.closeModalBtn.addEventListener("click", () => {
        console.log("Close modal button clicked");
        refs.modal.classList.add("modal-is-hidden");
      });
    } else {
      console.warn("Modal elements not found in DOM");
    }
  }, 100);
});
