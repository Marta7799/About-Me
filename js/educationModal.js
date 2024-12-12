('use strict');
(() => {
    const refs = {
      openModalBtn: document.querySelector('.education-modal-open'),
      closeModalBtn: document.querySelector('.education-modal-close'),
      modal: document.querySelector('.education-modal'),
    };
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    function toggleModal() {
      refs.modal.classList.toggle('modal-is-hidden');
    }
  })();

// document.addEventListener('DOMContentLoaded', () => {
 
//   const educationModalOpenButton = document.querySelector('.education-modal-open');
//   const educationModal = document.querySelector('.education-modal');
//   const educationModalCloseButton = document.querySelector('.education-modal-close');
  
//   educationModalOpenButton.addEventListener('click', () => {
//     educationModal.classList.remove('modal-is-hidden'); 
//   });
  
//   educationModalCloseButton.addEventListener('click', () => {
//     educationModal.classList.add('modal-is-hidden'); 
//   });
// });