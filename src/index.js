
fetch("https://fakestoreapi.com/products/")
.then(res => res.json())
.then(data => {
  console.log(data[0])
  }).catch((error) => {
    console.error('Error:', error);
});

