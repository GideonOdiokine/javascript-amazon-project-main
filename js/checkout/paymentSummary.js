import { cart } from "../../data/cart.js";
import { deliveryOptions } from "../../data/deliveryOptions.js";
import { products } from "../../data/products.js";
import { formatCurrency } from "../utils/money.js";

export function renderPaymentSummary() {
  let productPriceCents = 0;
  let shippingPriceCents = 0;

  cart.forEach((cartItem) => {
    const matchingProduct = products.find(
      (product) => product.id === cartItem.productId
    );
    if (matchingProduct) {
      productPriceCents += matchingProduct.priceCents * cartItem.quantity;
    }

    const deliveryOption = deliveryOptions.find(
      (option) => option.id === cartItem.deliveryOptionId
    );
    if (deliveryOption) {
      shippingPriceCents += deliveryOption.deliveryPrice;
    }
  });

  const totalBeforeTaxCent = productPriceCents + shippingPriceCents;
  const taxCents = Math.round(totalBeforeTaxCent * 0.1); // Ensure integer value
  const totalCents = totalBeforeTaxCent + taxCents;

  let paymentSummaryHTML = `
    <div class="payment-summary-title">Order Summary</div>

    <div class="payment-summary-row">
      <div>Items (${cart.length}):</div>
      <div class="payment-summary-money">$${formatCurrency(
        productPriceCents
      )}</div>
    </div>

    <div class="payment-summary-row">
      <div>Shipping &amp; handling:</div>
      <div class="payment-summary-money">$${formatCurrency(
        shippingPriceCents
      )}</div>
    </div>

    <div class="payment-summary-row subtotal-row">
      <div>Total before tax:</div>
      <div class="payment-summary-money">$${formatCurrency(
        totalBeforeTaxCent
      )}</div>
    </div>

    <div class="payment-summary-row">
      <div>Estimated tax (10%):</div>
      <div class="payment-summary-money">$${formatCurrency(taxCents)}</div>
    </div>

    <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money">$${formatCurrency(totalCents)}</div>
    </div>

    <button class="place-order-button button-primary">
      Place your order
    </button>
  `;

  const paymentSummaryElement = document.querySelector(".payment-summary");
  if (paymentSummaryElement) {
    paymentSummaryElement.innerHTML = paymentSummaryHTML;
  } else {
    console.error("Element with class 'payment-summary' not found.");
  }

}
