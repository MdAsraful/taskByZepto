document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const homeLink = document.getElementById('home-link');
    const wishlistLink = document.getElementById('wishlist-link');
    
    homeLink.addEventListener('click', () => {
    loadBooks();
    });
    
    wishlistLink.addEventListener('click', () => {
    loadWishlist();
    });
    
    loadBooks();
    });
    
    async function loadBooks() {
    const response = await fetch('https://gutendex.com/books');
    const data = await response.json();
    displayBooks(data.results);
    }
    
    function displayBooks(books) {
    const content = document.getElementById('content');
    content.innerHTML = '';
    books.forEach(book => {
    const bookElement = document.createElement('div');
    bookElement.className = 'book';
    bookElement.innerHTML = `
    <img src="${book.formats['image/jpeg']}" alt="${book.title}">
    <div class="book-details">
    <h3>${book.title}</h3>
    <p>Author: ${book.authors.map(author => author.name).join(', ')}</p>
    <p>Genre: ${book.subjects.join(', ')}</p>
    <p>ID: ${book.id}</p>
    <span class="wishlist-icon" onclick="toggleWishlist(${book.id})">❤️</span>
    </div>
    `;
    content.appendChild(bookElement);
    });
    }
    
    function toggleWishlist(bookId) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (wishlist.includes(bookId)) {
    wishlist = wishlist.filter(id => id !== bookId);
    } else {
    wishlist.push(bookId);
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    loadBooks();
    }
    
    function loadWishlist() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const content = document.getElementById('content');
    content.innerHTML = '';
    wishlist.forEach(bookId => {
    // Fetch and display each book in the wishlist
    });
    }