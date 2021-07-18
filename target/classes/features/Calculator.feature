Feature: This feature will perform the calculator functionality

Background:
    Given The calculator application is open
    
  Scenario: Add two numbers
    When I add two numbers "2" and "5"
    Then I should get the result of "7"

  Scenario: Multiply two numbers
    When I multiply two numbers "2" and "5"
    Then I should get the result of "10"