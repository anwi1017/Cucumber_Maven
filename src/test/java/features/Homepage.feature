Feature: Home Screen Feature

  Background: 
    Given User has opened the Simplilearn application
    When User enters correct user name "<Username>"
    And User enters correct password "<Password>"
    And User clicks on login button

  Scenario: Verify that user is able to see the product details
    Given user has landed on home screen
    When user do something
    Then user should see something
