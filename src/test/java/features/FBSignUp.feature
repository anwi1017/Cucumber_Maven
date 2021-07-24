Feature: FB SignUp Feature to validate the add new user functionality
	
	@DataTable
  Scenario: Verify that user is able to create the new account
    Given User has launched the FB application
    When User clicks on the Create New Account link
    And User creates the new account
      | Field        | Value      |
      | FirstName    | John       |
      | LastName     | Smith      |
      | MobileNumber | 9999999999 |
      | Password     | Def456@bc  |
      | Month        | Oct        |
      | Day          |         17 |
      | Year         |       1990 |
    And User clicks on the SignUp button
    Then User should be able to see the success message
