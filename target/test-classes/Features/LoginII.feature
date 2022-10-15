Feature: SauceDemo Application login

  Background: 
    Given I have launched the application

  Scenario: This scenario is to define the login happy path
    When I enter the correct username "standard_user" and password "secret_sauce"
    And I click on Login Button
    Then I should land on the home page

  @Sanity
  Scenario Outline: This scenario is to define the failure path
    When I enter the incorrect username "<user>" and password "<Pass>"
    And I click on Login Button
    Then I should get the error message "Epic sadface: Username and password do not match any user in this service"

    Examples: 
      | user            | Pass       |
      | locked_out_user | user1_pass |
      | problem_user    | user2_pass |
