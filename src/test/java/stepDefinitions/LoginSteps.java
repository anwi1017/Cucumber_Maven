package stepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginSteps {
	
	WebDriver driver = BaseClass.driver;
	
	@Given("^User has opened the Simplilearn application$")
    public void user_has_opened_the_simplilearn_application() throws Throwable {
		
		driver.get("https://www.simplilearn.com/");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(5000, TimeUnit.MILLISECONDS);
        
    }
	
    @When("^User clicks on the Login button$")
    public void user_clicks_on_the_login_button() throws Throwable {
        
		WebElement LoginLink = driver.findElement(By.linkText("Log in"));
		LoginLink.click();
    }



    @And("^User enters correct user name \"([^\"]*)\"$")
    public void user_enters_correct_user_name_something(String username) throws Throwable {
        
		WebElement UserName = driver.findElement(By.name("user_login"));
		WebDriverWait wait = new WebDriverWait(driver,30);
		wait.until(ExpectedConditions.elementToBeClickable(UserName));
		UserName.sendKeys(username);
		
    }
    
    @And("^User enters correct password \"([^\"]*)\"$")
    public void user_enters_correct_password_something(String password) throws Throwable {
        
		WebElement Password = driver.findElement(By.id("password"));
		Password.sendKeys(password);
		
    }

    @And("^User clicks on login button$")
    public void user_clicks_on_login_button() throws Throwable {
        
		WebElement LoginBtn = driver.findElement(By.name("btn_login"));
		LoginBtn.click();
		
    }

    @Then("^User should land on the home page$")
    public void user_should_land_on_the_home_page() throws Throwable {
       
    }
    
    @And("^User should see the welcome message$")
    public void user_should_see_the_welcome_message() throws Throwable {
        
    }
}
