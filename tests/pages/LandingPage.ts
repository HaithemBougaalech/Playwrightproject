import { Page, expect } from '@playwright/test';
import { LANDING_LOCATORS } from '../locators/LandingLocators';
import BaseAction from '../utils/basePage';

export default class LandingPage extends BaseAction {

  constructor(page: Page) {
    super(page);
  }

  public async getPageTitle() {
    return await this.getPageTitel();
  }

  public async isNavVisible() {
    await this.waitFor(LANDING_LOCATORS.nav);
    return await this.page.isVisible(LANDING_LOCATORS.nav);
  }

  public async getHeroHeadingText() {
    await this.waitFor(LANDING_LOCATORS.heroHeading);
    return await this.page.textContent(LANDING_LOCATORS.heroHeading);
  }

  public async getHeroRoleText() {
    await this.waitFor(LANDING_LOCATORS.heroRole);
    return await this.page.textContent(LANDING_LOCATORS.heroRole);
  }

  public async countSkillCategories() {
    await this.waitFor(LANDING_LOCATORS.skillCategories);
    return await this.page.locator(LANDING_LOCATORS.skillCategories).count();
  }

  public async countProjectCards() {
    await this.waitFor(LANDING_LOCATORS.projectCards);
    return await this.page.locator(LANDING_LOCATORS.projectCards).count();
  }

  public async isContactFormVisible() {
    await this.waitFor(LANDING_LOCATORS.contactForm);
    return await this.page.isVisible(LANDING_LOCATORS.contactForm);
  }

  public async fillContactForm(name: string, email: string, message: string) {
    await this.fillText(LANDING_LOCATORS.nameInput, name);
    await this.fillText(LANDING_LOCATORS.emailInput, email);
    await this.fillText(LANDING_LOCATORS.messageInput, message);
  }

  public async submitContactForm() {
    await this.clickElements(LANDING_LOCATORS.submitButton);
  }

  public async getSubmitButtonText() {
    await this.waitFor(LANDING_LOCATORS.submitButton);
    return await this.page.textContent(LANDING_LOCATORS.submitButton);
  }

  public async isFooterVisible() {
    await this.waitFor(LANDING_LOCATORS.footer);
    return await this.page.isVisible(LANDING_LOCATORS.footer);
  }
}
