$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/features/Login.feature");
formatter.feature({
  "name": "Login feature",
  "description": "  Description: This feature will be used to login to Simplilearn application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify that when user enters correct user name and password they will login successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PositiveLogin"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User has opened the Simplilearn application",
  "keyword": "Given "
});
formatter.step({
  "name": "User clicks on the Login button",
  "keyword": "When "
});
formatter.step({
  "name": "User enters correct user name \"\u003cUsername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User enters correct password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "name": "User should land on the home page",
  "keyword": "Then "
});
formatter.step({
  "name": "User should see the welcome message",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ]
    },
    {
      "cells": [
        "anwi1017@gmail.com",
        "M@rlfox1017"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that when user enters correct user name and password they will login successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PositiveLogin"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has opened the Simplilearn application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_has_opened_the_simplilearn_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters correct user name \"anwi1017@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_enters_correct_user_name_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters correct password \"M@rlfox1017\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_enters_correct_password_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should land on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_should_land_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see the welcome message",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_should_see_the_welcome_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});