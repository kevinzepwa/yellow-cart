
const cartItem = document.getElementsByClassName("cart-item")

fetch("https://fakestoreapi.com/products/")
.then(res => res.json())
.then(data => {
  // console.log(data[0])
  let cartData = ""
  data.map(value => {
    cartData += `<div class="image-container">
      <div class="image-card">
        <h2 id="card-title" class="title">${value.title}</h2>
        <div>
        <img id="card-image" class="image" src="${value.image}" alt="${value.description}" />
        </div>
        <div class="price-section">
        <span id="price-tag" class="price">Ksh. ${value.price}</span>
        <span id="rating" class="rating">${value.rating.rate} ⭐</span>
        </div>
        <div id="description-text" class="description">
          <p>${value.description}</p>
          </div>
          <button id="add-item" class="add-to-cart-button" type="submit">Add to Cart</button>
      </div>
    </div>`
    });
  const cardBody = document.getElementById("card-body")
  cardBody.innerHTML = cartData;
  
  
const priceForm = document.getElementById("price-form")
const input = document.getElementById("price")
const inputValue = () => parseInt(input.value)


priceForm.addEventListener("submit", function(event){
  event.preventDefault()
    let selectedItem = ""
    data.map(value => {
      const passedItems = (Math.floor(value.price) < inputValue()) ? 
      (selectedItem += `
      <div class="cart-item">
        <li>
          <img class="cart-list" src="${value.image}" />
          <p id="cart-list" href="#">${value.title}</p>
          <p id="cart-price" href="#">Ksh. ${value.price}</p>
        </li>
        <button id="remove-item" class="remove-from-cart"> X </button>
        </div>
        <hr>
      `) : 
      "No item found"

    document.getElementById("cart-list").innerHTML = selectedItem
    })
});
}).catch((error) => {
  console.error('Error:', error);
});

