const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".add-btn");
const closeModalBtn = document.querySelector(".close-btn");


const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  openModalBtn.addEventListener("click", openModal);

  const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden")
  };

  closeModalBtn.addEventListener("click", closeModal);

  overlay.addEventListener("click", closeModal);