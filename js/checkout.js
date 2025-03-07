import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
// import "../data/cart-oop.js"
// import "../data/cart-class.js"
import "../data/backend-practice.js";
import { loadProducts } from "../data/products.js";

new Promise((resolve, reject) => {
  loadProducts(() => {
    resolve();
  });
}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});

// loadProducts(() => {
//   renderOrderSummary();
//   renderPaymentSummary();
// });
