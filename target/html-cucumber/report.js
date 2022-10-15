$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Features/HomePage.feature");
formatter.feature({
  "name": "Feature to add item into cart",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter the correct username \"standard_user\" and password \"secret_sauce\"",
  "keyword": "When "
});
formatter.step({
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "I should land on the home page",
  "keyword": "Then "
});
formatter.step({
  "name": "I select the product \"\u003citem\u003e\" and add the item into the cart",
  "keyword": "When "
});
formatter.step({
  "name": "Item numbers in the cart should change to \"1\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "item"
      ]
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ]
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs.Login_Step_Definitions.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the correct username \"standard_user\" and password \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefs.Login_Step_Definitions.i_enter_the_correct_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.Login_Step_Definitions.i_click_on_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.Login_Step_Definitions.i_should_land_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the product \"Sauce Labs Backpack\" and add the item into the cart",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefs.Login_Step_Definitions.i_select_the_product_and_add_the_item_into_the_cart(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Item numbers in the cart should change to \"1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.Login_Step_Definitions.item_numbers_in_the_cart_should_change_to(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/Features/LoginII.feature");
formatter.feature({
  "name": "SauceDemo Application login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "This scenario is to define the failure path",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I enter the incorrect username \"\u003cuser\u003e\" and password \"\u003cPass\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "I should get the error message \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "user",
        "Pass"
      ]
    },
    {
      "cells": [
        "locked_out_user",
        "user1_pass"
      ]
    },
    {
      "cells": [
        "problem_user",
        "user2_pass"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs.Login_Step_Definitions.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "This scenario is to define the failure path",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I enter the incorrect username \"locked_out_user\" and password \"user1_pass\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefs.Login_Step_Definitions.i_enter_the_incorrect_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.Login_Step_Definitions.i_click_on_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.Login_Step_Definitions.i_should_get_the_error_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs.Login_Step_Definitions.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "This scenario is to define the failure path",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I enter the incorrect username \"problem_user\" and password \"user2_pass\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefs.Login_Step_Definitions.i_enter_the_incorrect_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.Login_Step_Definitions.i_click_on_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.Login_Step_Definitions.i_should_get_the_error_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});