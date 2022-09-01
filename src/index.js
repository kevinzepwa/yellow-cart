
fetch("https://fakestoreapi.com/products/")
.then(res => res.json())
.then(data => {
  console.log(data[0])
  let cartData = ""
  data.map(value => {
    cartData += `<div class="image-container">
      <div class="image-card">
        <h2 id="card-title" class="title">${value.title}</h2>
        <img id="card-image" class="image" src="${value.image}" alt="${value.description}" />
        <div class="price-section">
          <span id="price-tag" class="price">Ksh. ${value.price}</span>
          <span id="rating" class="rating">${value.rating.rate} ⭐</span>
        </div>
        <div id="description-text" class="description">
          <p>${value.description}</p>
        </div>
          <button class="add-to-cart-button" type="submit">Add to Cart</button>
      </div>
    </div>`
    });
  const cardBody = document.getElementById("card-body")
  cardBody.innerHTML = cartData;


  }).catch((error) => {
    console.error('Error:', error);
});

