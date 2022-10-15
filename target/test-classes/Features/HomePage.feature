Feature: Feature to add item into cart

	@Regression
  Scenario Outline: 
    Given I have launched the application
    When I enter the correct username "standard_user" and password "secret_sauce"
    And I click on Login Button
    Then I should land on the home page
    When I select the product "<item>" and add the item into the cart
    Then Item numbers in the cart should change to "1"

    Examples: 
      | item                |
      | Sauce Labs Backpack |