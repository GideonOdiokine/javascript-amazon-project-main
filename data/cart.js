export let cart = [
  {
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    productName: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    quantity: 2,
  },
  {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    productName: "Intermediate Size Basketball",
    quantity: 1,
  },
];

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
    });
  }
}

export function removeFromCart(productId) {
  let newArray = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newArray.push(cartItem);
    }
  });
  cart = newArray;
}
