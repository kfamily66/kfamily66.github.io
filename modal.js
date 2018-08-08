var openModalButton = document.querySelector("#modal-btn-open");
var closeModalButton = document.querySelector(".btn--close");
var content = document.querySelector(".content-wrapper");
var modal = document.querySelector(".modal");
var modalBody = document.querySelector(".modal__content");

openModalButton.addEventListener("click", function() {
  content.classList.add("blurred");
  modal.classList.add("open");
  closeModalButton.addEventListener("click", function() {
    content.classList.remove("blurred");
    modal.classList.remove("open");
  });
});
