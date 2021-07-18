package stepDefinitions;

import org.junit.Assert;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class CalculatorSteps {
	
	int result;
		
	@Given("^The calculator application is open$")
    public void the_calculator_application_is_open() throws Throwable {
        System.out.println("Calculator application is open");
    }

    @When("^I add two numbers \"([^\"]*)\" and \"([^\"]*)\"$")
    public void i_add_two_numbers_something_and_something(int num1, int num2) throws Throwable {
    	result = num1 + num2;
    }
    
    @When("^I multiply two numbers \"([^\"]*)\" and \"([^\"]*)\"$")
    public void i_multiply_two_numbers_something_and_something(int num1, int num2) throws Throwable {
        result = num1*num2;
    }

    @Then("^I should get the result of \"([^\"]*)\"$")
    public void i_should_get_the_result_of_something(int expresult) throws Throwable {
    	
    	Assert.assertEquals(expresult, result);

    }




}
