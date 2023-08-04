const product = [
  {
    id: 0,
    image: "image/1.png",
    title: "Vivo Y35 (8GB RAM,128GB Storage, Y358128GB)",
    price: 120,
  },
  {
    id: 1,
    image: "image/2.png",
    title: "Iphon (4GB RAM,128GB Storage, I358128GB)",
    price: 350,
  },
  {
    id: 2,
    image: "image/3.png",
    title: "SAMSUNG (8GB RAM,128GB Storage, Y358128GB)",
    price: 120,
  },
  {
    id: 3,
    image: "image/4.png",
    title: "OPPO A57 (8GB RAM,128GB Storage, Y358128GB)",
    price: 120,
  },
  {
    id: 4,
    image: "image/5.png",
    title: "Vivo Y21G (8GB RAM,128GB Storage, Y358128GB)",
    price: 120,
  },
  {
    id: 5,
    image: "image/6.png",
    title: "OPPO F21 (8GB RAM,128GB Storage, Y358128GB)",
    price: 120,
  },
];
const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];
let i = 0;
document.getElementById("root").innerHTML = categories
  .map((item) => {
    var { image, title, price } = item;
    return (
      `<div class='box'>
              <div class='img-box'>
              <img class='images' src=${image}></img>
              </div>
              <div class='bottom'>
              <p>${title}</p>
              <h2>$ ${price}.00</h2>` +
      "<button onclick='addtocart(" +
      i++ +
      ")'>Add to cart</button>" +
      `</div>
              </div>`
    );
  })
  .join("");

var cart = [];

function addtocart(a) {
  cart.push({ ...categories[a] });
  displaycart();
}
function delElement(a) {
  cart.splice(a, 1);
  displaycart();
}

function displaycart(a) {
  let j = 0,
    total = 0;
  document.getElementById("count").innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById("cartItem").innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML = "$" + 0 + ".00";
  } else {
    document.getElementById("cartItem").innerHTML = cart
      .map((item) => {
        var { image, title, price } = item;
        total = total + price;
        document.getElementById("total").innerHTML = "$" + total + ".00";
        return (
          `<div class='cart-item'>
                  <div class='row-img'>
                  <img class='rowing' src=${image}>
                  </div>
                  <p style='font-size:12px;'>${title}<p>
                  <h2 style='font-size: 15px;'>$ ${price}.00</h2>` +
          "<i class='fa-solid fa-trash' onclick='delElement(" +
          j++ +
          ")'></i></div>"
        );
      })
      .join("");
  }
}
