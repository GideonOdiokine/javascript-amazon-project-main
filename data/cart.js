export let cart = JSON.parse(localStorage.getItem("cart")) || [];

export function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(productId, productName) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity++;
  } else {
    cart.push({
      productId,
      productName,
      quantity: 1,
      deliveryOptionId: "1",
    });
  }
  saveToStorage();
}

export function removeFromCart(productId) {
  let newArray = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newArray.push(cartItem);
    }
  });
  cart = newArray;
  saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId) {
  let matchingItem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.deliveryOptionId = deliveryOptionId;
  }
  saveToStorage();
}
