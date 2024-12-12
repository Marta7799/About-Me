('use strict');
// (() => {
//     const refs = {
//       openModalBtn: document.querySelector('[career-data-modal-open]'),
//       closeModalBtn: document.querySelector('[career-data-modal-close]'),
//       modal: document.querySelector('[career-data-modal]'),
//     };
//     refs.openModalBtn.addEventListener('click', toggleModal);
//     refs.closeModalBtn.addEventListener('click', toggleModal);
//     function toggleModal() {
//       refs.modal.classList.toggle('modal-is-hidden');
//     }
//   })();

document.addEventListener('DOMContentLoaded', () => {
 
  const careerModalOpenButton = document.querySelector('.career-modal-open');
  const careerModal = document.querySelector('.career-modal');
  const careerModalCloseButton = document.querySelector('.career-modal-close');
  
  careerModalOpenButton.addEventListener('click', () => {
    careerModal.classList.remove('modal-is-hidden'); 
  });
  
  careerModalCloseButton.addEventListener('click', () => {
    careerModal.classList.add('modal-is-hidden'); 
  });
});