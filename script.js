// قائمة المنتجات مع إضافة الفئات
const products = [
  {
    id: 1,
    name: "منتج 1",
    description: "وصف المنتج 1",
    price: 100,
    imageUrl: "img/products/product1.jpeg",
    category: "men", // فئة المنتج
  },
  {
    id: 2,
    name: "منتج 2",
    description: "وصف المنتج 2",
    price: 150,
    imageUrl: "img/products/product2.jpeg",
    category: "women", // فئة المنتج
  },
  {
    id: 3,
    name: "منتج 3",
    description: "وصف المنتج 3",
    price: 200,
    imageUrl: "img/products/product3.jpeg",
    category: "kids", // فئة المنتج
  },
  {
    id: 4,
    name: "منتج 4",
    description: "وصف المنتج 4",
    price: 120,
    imageUrl: "img/products/product4.jpeg",
    category: "men", // فئة المنتج
  },
  {
    id: 5,
    name: "منتج 5",
    description: "وصف المنتج 5",
    price: 250,
    imageUrl: "img/products/product5.jpeg",
    category: "women", // فئة المنتج
  },
];

// عرض المنتجات في الصفحة
function displayProducts(productsToDisplay) {
  const productsGrid = document.querySelector(".products-grid");
  productsGrid.innerHTML = "";

  productsToDisplay.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
      <img src="${product.imageUrl}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <div class="price">${product.price} EGP</div>
      <button onclick="addToCart(${product.id})">إضافة إلى العربة</button>
    `;

    productsGrid.appendChild(productCard);
  });
}

// تصفية المنتجات حسب الفئة
function filterCategory(category) {
  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  displayProducts(filteredProducts);
}

// تشغيل عرض جميع المنتجات عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => displayProducts(products));
