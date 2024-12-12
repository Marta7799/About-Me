(() => {
    const refs = {
      openModalBtn: document.querySelector('[education-data-modal-open]'),
      closeModalBtn: document.querySelector('[education-data-modal-close]'),
      modal: document.querySelector('[education-data-modal]'),
    };
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    function toggleModal() {
      refs.modal.classList.toggle('info-is-hidden');
    }
  })();