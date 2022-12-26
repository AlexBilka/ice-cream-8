(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-read-more-open]"),
    closeModalBtn: document.querySelector("[data-modal-read-more-close]"),
    modal: document.querySelector("[data-modal-read-more]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
