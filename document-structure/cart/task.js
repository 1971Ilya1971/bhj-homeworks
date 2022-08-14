let product = document.querySelectorAll('.product');
let cart = document.querySelector('.cart__products');



let addToCard = function(elem_id, elem_img, elem_count) {
  let cartProduct = Array.from(cart.querySelectorAll('.cart__product'));
  let cartIndex = cartProduct.findIndex(elem => elem_id == elem.getAttribute('data-id'))

  if (cartIndex == -1) {
    cart.innerHTML += `
    <div class="cart__product" data-id = ${elem_id}>
    <img class="cart__product-image" src = "${elem_img}">
    <div class="cart__product-count">${elem_count}</div>
    </div>
    `;
    } else {
      cartProduct[cartIndex].querySelector('.cart__product-count').innerText = Number(cartProduct[cartIndex].querySelector('.cart__product-count').innerText) + elem_count
    }
};

product.forEach((elem) => {
  // elem.addEventListener('click', function() {

  let productAdd = elem.querySelector('.product__quantity-control_inc');
  let productRemove = elem.querySelector('.product__quantity-control_dec');
  let productQuantity = elem.querySelector('.product__quantity-value');
  let addButton = elem.querySelector('.product__add');
  let quantity = Number(productQuantity.innerText);
  let productId = elem.getAttribute('data-id');
  let productImg = elem.querySelector('.product__image').getAttribute('src');

    
  productAdd.onclick = function() {
    quantity += 1;
    productQuantity.innerText = quantity;
  }

    productRemove.onclick = function() {
      if (quantity == 1) {
        console.log('Меньше нельзя')
        } else {
          quantity -=1
        }
          productQuantity.innerText = quantity;
    }  

      addButton.onclick = function() {
        addToCard(productId, productImg, quantity);
    }
});
