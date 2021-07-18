@LoginFeature
Feature: Login feature
  Description: This feature will be used to login to Simplilearn application

  @PositiveLogin @Sanity
  Scenario Outline: Verify that when user enters correct user name and password they will login successfully
    Given User has opened the Simplilearn application
    When User clicks on the Login button
    And User enters correct user name "<Username>"
    And User enters correct password "<Password>"
    And User clicks on login button
    Then User should land on the home page
    And User should see the welcome message

    Examples: 
      | Username    | Password |
      |anwi1017@gmail.com|M@rlfox1017|

  @NegativeLogin @Sanity
  Scenario Outline: Verify that when user enters correct user name and password they will login successfully
    Given User has opened the Simplilearn application
    When User clicks on the Login button
    And User enters correct user name "<Username>"
    And User enters correct password "<Password>"
    And User clicks on login button
    Then User should land on the home page
    And User should see the welcome message

    Examples: 
      | Username    | Password |
      | pqr@xyz.com | def456ab |