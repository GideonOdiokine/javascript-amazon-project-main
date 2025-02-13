function Cart() {
  const cart = {
    cartItems: JSON.parse(localStorage.getItem("cart-oop")) || [],
    saveToStorage() {
      localStorage.setItem("cart-oop", JSON.stringify(this.cartItems));
    },
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
    },
    removeFromCart(productId) {
      let newArray = [];

      this.cartItems.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
          newArray.push(cartItem);
        }
      });
      this.cartItems = newArray;
      this.saveToStorage();
    },
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
    },
  };
}
