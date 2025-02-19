// fetch("https://fakestoreapi.com/products")
//   .then((res) => {
//     console.log(res);
//     return res.json();
//   })
//   .then((data) => console.log(data[0]));

// const fetchData = async () => {
//   try {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const finalData = await response.json();
//     console.log(finalData);
//   } catch (error) {
//     console.log(error);
//   }
// };
// fetchData();

async function fetchProducts() {
  const container = document.getElementById("product-container");

  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();

    products.forEach((product) => {
      const card = document.createElement("div");
      card.className = "product-card";

      card.innerHTML = `
                <img src="${product.image}" alt="Product">
                <h3 class="product-title">${product.title.substring(
                  0,
                  30
                )}...</h3>
                <p class="product-price">$${product.price}</p>
                <button>Add to Cart</button>
            `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading products:", error);
  }
}
