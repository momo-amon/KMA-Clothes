// قائمة المنتجات
const products = [
  {
    id: 1,
    name: "منتج 1",
    description: "وصف المنتج 1",
    price: "100 EGP",
    imageUrl:
      "img/products/Men's Short-Sleeve Sweater Polo _ Men's Clearance _ HollisterCo_com.jpeg",
  },
  {
    id: 2,
    name: "منتج 2",
    description: "وصف المنتج 2",
    price: "150 EGP",
    imageUrl:
      "img/products/Men's Short-Sleeve Sweater Polo _ Men's Clearance _ HollisterCo_com.jpeg",
  },
  {
    id: 3,
    name: "منتج 3",
    description: "وصف المنتج 3",
    price: "200 EGP",
    imageUrl:
      "img/products/Men's Short-Sleeve Sweater Polo _ Men's Clearance _ HollisterCo_com.jpeg",
  },
  {
    id: 4,
    name: "منتج 4",
    description: "وصف المنتج 4",
    price: "120 EGP",
    imageUrl:
      "img/products/Men's Short-Sleeve Sweater Polo _ Men's Clearance _ HollisterCo_com.jpeg",
  },
  {
    id: 5,
    name: "منتج 5",
    description: "وصف المنتج 5",
    price: "250 EGP",
    imageUrl:
      "img/products/Men's Short-Sleeve Sweater Polo _ Men's Clearance _ HollisterCo_com.jpeg",
  },
];

// عرض المنتجات في الـ HTML
function displayProducts() {
  const productsGrid = document.querySelector(".products-grid");
  productsGrid.innerHTML = "";

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
      <img src="${product.imageUrl}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <div class="price">${product.price}</div>
      <button onclick="addToCart(${product.id})">إضافة إلى العربة</button>
    `;

    productsGrid.appendChild(productCard);
  });
}

// إضافة المنتج إلى العربة
let cart = [];

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  cart.push(product);
  updateCartDisplay(); // تحديث عرض العربة بعد إضافة المنتج
}

// تحديث عرض العربة
function updateCartDisplay() {
  const cartItemsContainer = document.querySelector("#cartItems");
  cartItemsContainer.innerHTML = ""; // مسح محتوى العربة السابقة

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>لا توجد منتجات في العربة.</p>";
  } else {
    cart.forEach((product, index) => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");

      cartItem.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.name}" class="cart-item-img">
        <h4>${product.name}</h4>
        <p>${product.price}</p>
        <button onclick="removeFromCart(${index})">إزالة</button>
      `;
      cartItemsContainer.appendChild(cartItem);
    });
  }
}

// إزالة المنتج من العربة
function removeFromCart(index) {
  cart.splice(index, 1); // إزالة المنتج المحدد بناءً على الـ index
  updateCartDisplay(); // تحديث عرض العربة بعد إزالة المنتج
}

// تفعيل عرض العربة عند الضغط على زر العربة
function toggleCart() {
  const cartSidebar = document.getElementById("cartSidebar");
  cartSidebar.style.right =
    cartSidebar.style.right === "0px" ? "-300px" : "0px";
}

// استدعاء الدالة لعرض المنتجات عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", displayProducts);
// دالة لتفعيل عرض العربة أو إخفائها
function toggleCart() {
  const cartSidebar = document.getElementById("cartSidebar");
  // تغيير مكان العرض (إظهار/إخفاء)
  if (cartSidebar.style.right === "0px") {
    cartSidebar.style.right = "-300px"; // إخفاء القائمة
  } else {
    cartSidebar.style.right = "0px"; // إظهار القائمة
  }
}

// دالة لإغلاق قائمة الطلبات
function closeOrder() {
  const cartSidebar = document.getElementById("cartSidebar");
  // إخفاء قائمة الطلبات
  cartSidebar.style.right = "-300px";
}
