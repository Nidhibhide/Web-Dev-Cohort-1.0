const ListOfItems = document.createElement("ul");
const cartitems = document.getElementById("cart-items");
const emptycart = document.querySelector(".empty-cart");
let carttotal = document.querySelector("#cart-total h3").textContent.slice(8);
const setcarttotal = document.getElementById("cart-total");
function addToCart(item, price) {
  if (emptycart) emptycart.remove();

  const ListItem = document.createElement("li");
  ListItem.classList.add("cart-item");
  ListItem.innerHTML = `<span>${item}</span>
<div class="quantity-controls">
<button class="button minus">-</button>
<span class="quantity">1</span>
<button class="button plus">+</button>
<span>${price}</span>
<button class="button remove">Remove</button>
</div>`;

  ListOfItems.appendChild(ListItem);
  const setquantity = ListItem.querySelector(".quantity");
  carttotal = Number(carttotal) + price;
  setcarttotal.innerHTML = ` <h3>Total: ${carttotal}</h3>`;
  cartitems.appendChild(ListOfItems);

  const removeBtn = ListItem.querySelector(".remove");
  removeBtn.addEventListener("click", () => {
    let quantity = Number(ListItem.querySelector(".quantity").textContent);
    carttotal = (Number(carttotal) - (price*quantity)).toFixed(2);
    setcarttotal.innerHTML = ` <h3>Total: ${carttotal}</h3>`;
    ListItem.remove();
  });

  const plusBtn = ListItem.querySelector(".plus");
  plusBtn.addEventListener("click", () => {
    let quantity = Number(ListItem.querySelector(".quantity").textContent);
    setquantity.innerText = `${quantity + 1}`;
    carttotal = (Number(carttotal) + price).toFixed(2);
    setcarttotal.innerHTML = ` <h3>Total: ${carttotal}</h3>`;
  });

  const minusBtn=ListItem.querySelector(".minus");
  minusBtn.addEventListener("click",()=>{
    let quantity = Number(ListItem.querySelector(".quantity").textContent);
    setquantity.innerText = `${quantity - 1}`;
    carttotal = (Number(carttotal) - price).toFixed(2);
    setcarttotal.innerHTML = ` <h3>Total: ${carttotal}</h3>`;
  })

  console.log(cartitems);
}

