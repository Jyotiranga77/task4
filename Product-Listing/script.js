const products = [
  {
    name: "Smartphone",
    category: "Electronics",
    price: 11499,
    rating: 4.2,
    image: "https://images.indianexpress.com/2023/12/redmi-a2.jpg"
  },
  {
    name: "Headphones",
    category: "Electronics",
    price: 1299,
    rating: 4.0,
    image: "http://hammeronline.in/cdn/shop/files/Bash_2.0_Bluetooth_Headphones.webp?v=1726899059"
  },
  {
    name: "Backpack",
    category: "Accessories",
    price: 999,
    rating: 4.3,
    image: "http://icon.in/cdn/shop/files/1_8cc399f2-f971-4660-bb24-5f7ab691c87e.jpg?v=1735287049"
  },
  {
    name: "Wrist Watch",
    category: "Accessories",
    price: 1799,
    rating: 4.6,
    image: "https://images-cdn.ubuy.co.in/67e6749b9610d0a8560cf048-poedagar-men-watch-luxury-business.jpg"
  },
  {
    name: "Laptop",
    category: "Electronics",
    price: 42999,
    rating: 4.8,
    image: "https://saudewala.in/cdn/shop/collections/Laptop.jpg?v=1732216115&width=1296"
  }
];

const container = document.getElementById("product-list");
const categoryFilter = document.getElementById("categoryFilter");
const sortOption = document.getElementById("sortOption");
const searchInput = document.getElementById("searchInput");

function renderProducts(filteredProducts) {
  container.innerHTML = "";
  filteredProducts.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p class="price">₹${product.price}</p>
      <p class="category">${product.category}</p>
      <p class="rating">⭐ ${product.rating}</p>
      <button>Buy Now</button>
    `;
    container.appendChild(card);
  });
}

function applyFilters() {
  let filtered = [...products];

  const selectedCategory = categoryFilter.value;
  const sortBy = sortOption.value;
  const searchTerm = searchInput.value.toLowerCase();

  if (selectedCategory !== "all") {
    filtered = filtered.filter(p => p.category === selectedCategory);
  }

  if (searchTerm) {
    filtered = filtered.filter(p => p.name.toLowerCase().includes(searchTerm));
  }

  if (sortBy === "priceLowHigh") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === "priceHighLow") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === "ratingHighLow") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  renderProducts(filtered);
}

// Initial render
renderProducts(products);

// Event Listeners
categoryFilter.addEventListener("change", applyFilters);
sortOption.addEventListener("change", applyFilters);
searchInput.addEventListener("input", applyFilters);
