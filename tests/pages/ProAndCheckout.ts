import { expect, Locator, Page } from '@playwright/test';
import { LOCATORS } from "../locators/InventoryLocators";
import BaseAction from "../utils/basePage";


export default class ProAndCheckouts extends BaseAction {
  constructor(page: Page) {
    super(page);
  }


  public async ClickAddToCartInTheFirstProduct() {
    await this.clickElements(LOCATORS.product1Btn);
  }

  public async ClickAddToCartInTheSecondProduct() {
    await this.clickElements(LOCATORS.product2Btn);}
}
