@buyingProducts
Feature: Check that the products are added to the cart
  Background:
    Given I am a user on login page
    When I fill all informations in the form
      | Login    | standard_user |
      | Password | secret_sauce  |
    When I submit the credtial
    # Then I m redirected to the home page

  @AddProducts
  Scenario: Add products to cart
    When I click add to cart in the first product
    And I click add to cart in the second product
    #Then I verify that two products are added to the cart
