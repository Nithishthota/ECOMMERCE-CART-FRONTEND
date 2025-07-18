const products = [
  { id: 1, name: "Wireless Headphones", price: 1499, image: "https://via.placeholder.com/200x150?text=Headphones" },
  { id: 2, name: "Bluetooth Speaker", price: 999, image: "https://via.placeholder.com/200x150?text=Speaker" },
  { id: 3, name: "Smart Watch", price: 1999, image: "https://via.placeholder.com/200x150?text=Smart+Watch" },
  { id: 4, name: "Laptop Stand", price: 799, image: "https://via.placeholder.com/200x150?text=Laptop+Stand" },
  { id: 5, name: "Gaming Mouse", price: 1299, image: "https://via.placeholder.com/200x150?text=Gaming+Mouse" },
  { id: 6, name: "USB Hub", price: 499, image: "https://via.placeholder.com/200x150?text=USB+Hub" }
];

let cart = [];

function renderProducts() {
  const grid = document.getElementById("product-grid");
  grid.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    grid.appendChild(card);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <span>${item.name}</span>
      <span>₹${item.price}</span>
      <button onclick="removeFromCart(${index})">❌</button>
    `;
    cartItems.appendChild(div);
    total += item.price;
  });

  cartCount.textContent = cart.length;
  cartTotal.textContent = total;
}

function toggleCart() {
  document.getElementById("cart").classList.toggle("hidden");
}

renderProducts();

