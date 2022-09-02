
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

  const addItem = document.querySelectorAll(".add-item")
  const cart = document.getElementById("cart-list")
    
  let selectedItem = ""
  data.map(value => {
    selectedItem += `
    <div class="cart-item">
    <li id="cart-list" href="#">${value.title}</li>
      <li id="cart-price" href="#">${value.price}</li>
      <button id="remove-item" class="remove-from-cart"> X </button>
      </div>
    `
    cart.innerHTML = selectedItem
  })
  removePost = () => {fetch('https://fakestoreapi.com/products/1',{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(json=>console.log(json))}


      const removeItem = document.querySelector(".remove-from-cart")
      removeItem.addEventListener("click", () =>{
        console.log("clicked")
        removePost()
      })

})
.catch((error) => {
  console.error('Error:', error);
});

