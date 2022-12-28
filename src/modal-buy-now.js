
    (() => {
        const refs = {
            openModalBtn: document.querySelector("[data-modal-buy-now-header-open]"),
            openModalBtnMob: document.querySelector("[data-modal-buy-now-mobile-open]"),
            closeModalBtn: document.querySelector("[data-modal-buy-now-close]"),
            modal: document.querySelector("[data-modal-buy-now]"),
            body: document.querySelector("body"),
        };

        refs.openModalBtn.addEventListener("click", toggleModal);
        refs.openModalBtnMob.addEventListener("click", toggleModal);
        refs.closeModalBtn.addEventListener("click", toggleModal);

        refs.modal.addEventListener('click', e => { 
      if (e.target === refs.modal) refs.modal.classList.toggle('is-hidden'); 
      if (e.target === refs.modal) refs.body.classList.toggle('no-scroll'); 
    });

        function toggleModal() {
            refs.modal.classList.toggle("is-hidden");
            refs.body.classList.toggle("no-scroll");
        }
    })();


// <!-- SCRIPT FOR ENABLED||DISABLED BUTTON -->


    const buttonBN = document.querySelector('[data-modal-buy-now-btn]'); 
    const checkboxBN1 = document.querySelector('[data-modal-buy-now-check-1]'); 
    const checkboxBN2 = document.querySelector('[data-modal-buy-now-check-2]'); 
    const checkboxBN3 = document.querySelector('[data-modal-buy-now-check-3]'); 
    buttonBN.disabled = true; 
   
    addEventListener('click', () => { 
      if (checkboxBN1.checked || checkboxBN2.checked || checkboxBN3.checked) { 
        buttonBN.disabled = false; 
      } else { 
        buttonBN.disabled = true; 
      } 
    }); 
