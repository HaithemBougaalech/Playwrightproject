@LandingPage
Feature: Senior Software Engineer Landing Page

  @LandingPageContent
  Scenario: Landing page loads with correct title and hero section
    Given I am on the senior engineer landing page
    Then the page title should be "Senior Software Engineer — Portfolio"
    And the navigation bar should be visible
    And the hero section should display the role "Senior Software Engineer"

  @LandingPageSkills
  Scenario: Skills section displays all technology categories
    Given I am on the senior engineer landing page
    When I navigate to the skills section
    Then there should be at least 6 skill categories displayed

  @LandingPageProjects
  Scenario: Projects section displays featured projects
    Given I am on the senior engineer landing page
    When I navigate to the projects section
    Then there should be at least 4 project cards displayed

  @LandingPageContact
  Scenario: Contact form is visible and can be filled
    Given I am on the senior engineer landing page
    When I navigate to the contact section
    Then the contact form should be visible
    And I can fill in the contact form with name "Jane Smith" email "jane@example.com" and message "I would like to discuss a project"
