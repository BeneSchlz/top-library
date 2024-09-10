const myLibrary = [];

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".add-btn");
const closeModalBtn = document.querySelector(".close-btn");
let addBookBtn = document.querySelector(".form-add-book");

const userTitle = document.querySelector("#title");
const userAuthor = document.querySelector("#author");
const userPages = document.querySelector("#pages");
const userRead = document.querySelector("#read");

const books = document.querySelector("#books");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}


function addBookToLibrary() {
  console.log(userTitle);
  console.log(userAuthor);
  console.log(userPages);
  console.log(userRead);

  let newBook = new Book(userTitle.value, userAuthor.value, userPages.value, userRead.checked);
  myLibrary.push(newBook);
  console.log(myLibrary);
  renderLibrary();

  userTitle.value = "";
  userAuthor.value = "";
  userPages.value = "";
  userRead.checked = false;
  
  closeModal();
}

function renderLibrary() {
  books.innerHTML = ""; // Clear the previous book list

  myLibrary.forEach((book, index) => {
    const bookItem = document.createElement("div");
    bookItem.classList.add("book-item");

    Book.prototype.toggleReadStatus = function() {
      this.read = !this.read;
    };
    
    // Add the book details along with a "Toggle Read" button
    bookItem.innerHTML = `
      <p>Title: ${book.title}</p>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Read: ${book.read ? "Yes" : "No"}</p>
      <button class="toggle-read-btn" data-index="${index}">Toggle Read</button>
      <button class="remove-btn" data-index="${index}">Remove</button>
    `;

    books.appendChild(bookItem);
  });

  // Add functionality to toggle the read status
  document.querySelectorAll(".toggle-read-btn").forEach(button => {
    button.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      myLibrary[index].toggleReadStatus(); // Call the toggleReadStatus method for the specific book
      renderLibrary(); // Re-render the library to reflect the change
    });
  });

  // Add functionality to remove a book
  document.querySelectorAll(".remove-btn").forEach(button => {
    button.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      myLibrary.splice(index, 1); // Remove book from library
      renderLibrary(); // Re-render the library to reflect the change
    });
  });
}

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

addBookBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form submission
  addBookToLibrary(); // Add the book
});