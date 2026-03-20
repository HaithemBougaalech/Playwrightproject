import { Given, Then, When } from '@cucumber/cucumber';
import { CustomWorld } from '../utils/Custom-world';
import { expect } from '@playwright/test';
import LandingPage from '../pages/LandingPage';
import * as path from 'path';

const getLandingPageUrl = () => {
  const htmlPath = path.resolve(__dirname, '../../landing-page/index.html');
  return `file://${htmlPath}`;
};

Given('I am on the senior engineer landing page', async function (this: CustomWorld) {
  const page = this.page!;
  await page.goto(getLandingPageUrl());
});

Then('the page title should be {string}', async function (this: CustomWorld, expectedTitle: string) {
  const page = this.page!;
  const landingPage = new LandingPage(page);
  const title = await landingPage.getPageTitle();
  expect(title).toEqual(expectedTitle);
});

Then('the navigation bar should be visible', async function (this: CustomWorld) {
  const page = this.page!;
  const landingPage = new LandingPage(page);
  const isVisible = await landingPage.isNavVisible();
  expect(isVisible).toBe(true);
});

Then('the hero section should display the role {string}', async function (this: CustomWorld, expectedRole: string) {
  const page = this.page!;
  const landingPage = new LandingPage(page);
  const roleText = await landingPage.getHeroRoleText();
  expect(roleText?.trim()).toContain(expectedRole);
});

When('I navigate to the skills section', async function (this: CustomWorld) {
  const page = this.page!;
  await page.evaluate(() => {
    document.querySelector('#skills')?.scrollIntoView();
  });
});

Then('there should be at least {int} skill categories displayed', async function (this: CustomWorld, minCount: number) {
  const page = this.page!;
  const landingPage = new LandingPage(page);
  const count = await landingPage.countSkillCategories();
  expect(count).toBeGreaterThanOrEqual(minCount);
});

When('I navigate to the projects section', async function (this: CustomWorld) {
  const page = this.page!;
  await page.evaluate(() => {
    document.querySelector('#projects')?.scrollIntoView();
  });
});

Then('there should be at least {int} project cards displayed', async function (this: CustomWorld, minCount: number) {
  const page = this.page!;
  const landingPage = new LandingPage(page);
  const count = await landingPage.countProjectCards();
  expect(count).toBeGreaterThanOrEqual(minCount);
});

When('I navigate to the contact section', async function (this: CustomWorld) {
  const page = this.page!;
  await page.evaluate(() => {
    document.querySelector('#contact')?.scrollIntoView();
  });
});

Then('the contact form should be visible', async function (this: CustomWorld) {
  const page = this.page!;
  const landingPage = new LandingPage(page);
  const isVisible = await landingPage.isContactFormVisible();
  expect(isVisible).toBe(true);
});

Then('I can fill in the contact form with name {string} email {string} and message {string}',
  async function (this: CustomWorld, name: string, email: string, message: string) {
    const page = this.page!;
    const landingPage = new LandingPage(page);
    await landingPage.fillContactForm(name, email, message);
    const nameValue = await page.inputValue('#name');
    expect(nameValue).toEqual(name);
    const emailValue = await page.inputValue('#email');
    expect(emailValue).toEqual(email);
    const messageValue = await page.inputValue('#message');
    expect(messageValue).toEqual(message);
  }
);
