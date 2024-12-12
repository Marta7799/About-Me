(() => {
    const refs = {
      openModalBtn: document.querySelector('[career-data-modal-open]'),
      closeModalBtn: document.querySelector('[career-data-modal-close]'),
      modal: document.querySelector('[career-data-modal]'),
    };
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    function toggleModal() {
      refs.modal.classList.toggle('info-is-hidden');
    }
  })();