// Sample book data (in a real scenario, this would come from a server or database)
const books = [
  { id: 1, title: 'Book Title 1', author: 'Author 1', price: 212.90},
  { id: 2, title: 'Book Title 2', author: 'Author 2', price: 230.99 },
  { id: 3, title: 'Book Title 3', author: 'Author 3', price: 176.98 },
];

// Function to display books
function displayBooks() {
  const bookList = document.getElementById('bookList');
  bookList.innerHTML = '';

  books.forEach(book =>
     {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    bookDiv.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Price: $${book.price}</p>
      <button onclick="addToCart(${book.id})">Add to Cart</button>
    `;
    bookList.appendChild(bookDiv);
  });
}

// Function to add items to the cart
function addToCart(bookId) {
  const selectedBook = books.find(book => book.id === bookId);
  const cartItems = document.getElementById('cartItems');
  const cartDiv = document.createElement('div');
  cartDiv.innerHTML = `
    <p>${selectedBook.title} - $${selectedBook.price}</p>
  `;
  cartItems.appendChild(cartDiv);
}

// Function to handle navigation
document.getElementById('home').addEventListener('click', () => {
  document.querySelector('.books').style.display = 'block';
  document.querySelector('.cart').style.display = 'none';
});

document.getElementById('books').addEventListener('click', () => {
  document.querySelector('.books').style.display = 'block';
  document.querySelector('.cart').style.display = 'none';
});

document.getElementById('cart').addEventListener('click', () => {
  document.querySelector('.books').style.display = 'none';
  document.querySelector('.cart').style.display = 'block';
});

// Initial setup
displayBooks();
