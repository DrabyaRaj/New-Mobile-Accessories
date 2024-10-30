const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle");
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if(getMode && getMode ==="dark"){
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if(getStatus && getStatus ==="close"){
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        localStorage.setItem("mode", "dark");
    }else{
        localStorage.setItem("mode", "light");
    }
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status", "close");
    }else{
        localStorage.setItem("status", "open");
    }
})
// Function to generate a random code for each product
function generateRandomCode() {
    return 'CODE-' + Math.random().toString(36).substring(2, 8).toUpperCase();
}

// Function to add a product to the cart
function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Create a new cart item with a unique code
    const cartItem = {
        name: product.name,
        price: product.price,
        quantity: product.quantity,
        code: generateRandomCode() // Generate a random code
    };

    cart.push(cartItem); // Add to the cart
    localStorage.setItem('cart', JSON.stringify(cart)); // Save to local storage
}

// Function to load checkout items from local storage
function loadCheckedOutItems() {
    const purchases = JSON.parse(localStorage.getItem('cart')) || [];
    const checkoutBody = document.getElementById('checkoutBody');
    let totalAmount = 0;

    // Clear previous entries
    checkoutBody.innerHTML = '';

    purchases.forEach((item, index) => {
        const totalPrice = item.price * item.quantity;
        totalAmount += totalPrice;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.code}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>$${totalPrice.toFixed(2)}</td>
            <td><button onclick="removeItem(${index})">Remove</button></td>
        `;
        checkoutBody.appendChild(row);
    });

    document.getElementById('totalAmount').innerText = `Total Amount: $${totalAmount.toFixed(2)}`;
}

// Function to remove an item from the checkout list
function removeItem(index) {
    const purchases = JSON.parse(localStorage.getItem('cart')) || [];
    purchases.splice(index, 1); // Remove the item from the array
    localStorage.setItem('cart', JSON.stringify(purchases)); // Update local storage
    loadCheckedOutItems(); // Reload the checkout items
}

// Load items when the page loads
window.onload = loadCheckedOutItems;

// Function to generate a random code for each product
function generateRandomCode() {
    return 'CODE-' + Math.random().toString(36).substring(2, 8).toUpperCase();
}

// Function to generate a unique purchase code
function generatePurchaseCode() {
    return 'PURCHASE-' + Math.random().toString(36).substring(2, 10).toUpperCase();
}

// Function to add a product to the cart
function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Create a new cart item with a unique code
    const cartItem = {
        name: product.name,
        price: product.price,
        quantity: product.quantity,
        code: generateRandomCode() // Generate a random code
    };

    cart.push(cartItem); // Add to the cart
    localStorage.setItem('cart', JSON.stringify(cart)); // Save to local storage
}

// Function to load checkout items from local storage
function loadCheckedOutItems() {
    const purchases = JSON.parse(localStorage.getItem('cart')) || [];
    const checkoutBody = document.getElementById('checkoutBody');
    let totalAmount = 0;

    // Clear previous entries
    checkoutBody.innerHTML = '';

    purchases.forEach((item, index) => {
        const totalPrice = item.price * item.quantity;
        totalAmount += totalPrice;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.code}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>$${totalPrice.toFixed(2)}</td>
            <td><button onclick="removeItem(${index})">Remove</button></td>
        `;
        checkoutBody.appendChild(row);
    });

    document.getElementById('totalAmount').innerText = `Total Amount: $${totalAmount.toFixed(2)}`;

    // Generate and display a unique purchase code
    const purchaseCode = generatePurchaseCode();
    document.getElementById('purchaseCode').innerText = `Purchase Code: ${purchaseCode}`;
}

// Function to remove an item from the checkout list
function removeItem(index) {
    const purchases = JSON.parse(localStorage.getItem('cart')) || [];
    purchases.splice(index, 1); // Remove the item from the array
    localStorage.setItem('cart', JSON.stringify(purchases)); // Update local storage
    loadCheckedOutItems(); // Reload the checkout items
}

// Load items when the page loads
window.onload = loadCheckedOutItems;
// cart.js - Example code for cart functionality

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add to cart with quantity check
function addToCart(productId, quantity) {
    const product = inventory.find(p => p.id === productId);
    if (!product) return console.error("Product not found!");

    if (quantity > product.quantity) {
        alert("Quantity exceeds available stock");
        return;
    }
    
    cart.push({ ...product, quantity });
    saveCart();
}

// Save cart to local storage
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Calculate total price
function calculateTotal() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}
