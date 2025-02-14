class Cart {
  constructor(localStorageKey) {
    this.cartItems = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    this.localStorageKey = localStorageKey;
  }

  saveToStorage() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItems));
  }
  addToCart(productId, productName) {
    let matchingItem;

    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    if (matchingItem) {
      matchingItem.quantity++;
    } else {
      this.cartItems.push({
        productId,
        productName,
        quantity: 1,
        deliveryOptionId: "1",
      });
    }
    this.saveToStorage();
  }
  removeFromCart(productId) {
    let newArray = [];

    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId !== productId) {
        newArray.push(cartItem);
      }
    });
    this.cartItems = newArray;
    this.saveToStorage();
  }
  updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;
    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    if (matchingItem) {
      matchingItem.deliveryOptionId = deliveryOptionId;
    }
    this.saveToStorage();
  }
}

const cart = new Cart('business-cart');
const normalCart = new Cart('normal-cart');

cart.addToCart(
  "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
  "Adults Plain Cotton T-Shirt - 2 Pack"
);

normalCart.addToCart(
  "54e0eccd-8f36-462b-b68a-8182611d9add",
  "2 Slot Toaster - Black"
);
console.log(cart)
console.log(normalCart)


