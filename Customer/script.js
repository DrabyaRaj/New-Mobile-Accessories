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