import { Given, Then, When } from "@cucumber/cucumber";
import { CustomWorld } from "../utils/Custom-world";
import ProAndCheckouts from "../pages/ProAndCheckout";




When('I click add to cart in the first product', async function (this: CustomWorld) {
  const page = this.page!;
  const proAndCheckouts = new ProAndCheckouts(page);
  await proAndCheckouts.ClickAddToCartInTheFirstProduct();
});

When('I click add to cart in the second product', async function (this: CustomWorld) {
  const page = this.page!;
  const productPage = new ProAndCheckouts(page);
  await productPage.ClickAddToCartInTheSecondProduct();
});

/* // Cart UI verification
When('I open the shopping cart', async function (this: CustomWorld) {
  const page = this.page!;
  const proAndCheckouts = new ProAndCheckouts(page);
  await proAndCheckouts.openShoppingCart();
});
When('I click on the shopping cart icon', async function (this: CustomWorld) {
  const page = this.page!;
  const productPage = new ProductPage(page);
  await productPage.clickShoppingCartIcon();
});

Then('I verify that the shopping cart icon shows the number 2', async function (this: CustomWorld) {
  const page = this.page!;
  const productPage = new ProductPage(page);
  expect(await productPage.getCartIconCount()).toBe(2);
});
Then("I verify that the shopping cart icon displays '2' in red", async function (this: CustomWorld) {
  const page = this.page!;
  const productPage = new ProductPage(page);
  expect(await productPage.isCartIconRedWithCount(2)).toBeTruthy();
});

Then('I verify that two products are shown in the cart', async function (this: CustomWorld) {
  const page = this.page!;
  const productPage = new ProductPage(page);
  expect(await productPage.getCartProductCount()).toBe(2);
});
When('I hover the mouse over the first product name', async function (this: CustomWorld) {
  const page = this.page!;
  const productPage = new ProductPage(page);
  await productPage.hoverFirstProductName();
});

Then('I verify that the product name color changed to Green', async function (this: CustomWorld) {
  const page = this.page!;
  const productPage = new ProductPage(page);
  expect(await productPage.isFirstProductNameGreen()).toBeTruthy();
});

When('I hover the mouse over the remove button to check that remove word is in Red', async function (this: CustomWorld) {
  const page = this.page!;
  const productPage = new ProductPage(page);
  await productPage.hoverRemoveButton();
});

Then('I verify that the checkout button background is Green', async function (this: CustomWorld) {
  const page = this.page!;
  const productPage = new ProductPage(page);
  expect(await productPage.isCheckoutButtonGreen()).toBeTruthy();
});

// Checkout process
When('I click on the checkout button', async function (this: CustomWorld) {
  const page = this.page!;
  const productPage = new ProductPage(page);
  await productPage.clickCheckoutButton();
});

Then('I verify that I am in the checkout page', async function (this: CustomWorld) {
  const page = this.page!;
  const productPage = new ProductPage(page);
  expect(await productPage.isOnCheckoutPage()).toBeTruthy();
});
Then('I verify that the checkout button background is Green', async function (this: CustomWorld) {
  const page = this.page!;
  const productPage = new ProductPage(page);
  expect(await productPage.isCheckoutButtonGreen()).toBeTruthy();
});

// Checkout process
When('I click on the checkout button', async function (this: CustomWorld) {
  const page = this.page!;
  const productPage = new ProductPage(page);
  await productPage.clickCheckoutButton();
});

Then('I verify that I am in the checkout page', async function (this: CustomWorld) {
  const page = this.page!;
  const productPage = new ProductPage(page);
  expect(await productPage.isOnCheckoutPage()).toBeTruthy();
});

When('I click on the finish button', async function (this: CustomWorld) {
  const page = this.page!;
  const productPage = new ProductPage(page);
  await productPage.clickFinishButton();
});

Then('I verify that the order is complete and I see the message "THANK YOU FOR YOUR ORDER"', async function (this: CustomWorld) {
  const page = this.page!;
  const productPage = new ProductPage(page);
  expect(await productPage.isOrderCompleteWithMessage("THANK YOU FOR YOUR ORDER")).toBeTruthy();
});

// Navigation
When('I click on the back home button', async function (this: CustomWorld) {
  const page = this.page!;
  const productPage = new ProductPage(page);
  await productPage.clickBackHomeButton();
});

Then('I verify that I am back to the products page', async function (this: CustomWorld) {
  const page = this.page!;
  const productPage = new ProductPage(page);
  expect(await productPage.isOnProductsPage()).toBeTruthy();
}); */