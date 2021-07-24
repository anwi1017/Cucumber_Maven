package stepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class FBSignUpSteps {

	WebDriver driver = BaseClass.driver;
	
	@Given("^User has launched the FB application$")
    public void user_has_launched_the_fb_application() throws Throwable {
        
		driver.get("https://en-gb.facebook.com//");
		
		driver.manage().window().maximize();
		
		driver.manage().timeouts().implicitlyWait(5000, TimeUnit.MILLISECONDS);

    }

    @When("^User clicks on the Create New Account link$")
    public void user_clicks_on_the_create_new_account_link() throws Throwable {
        
		WebElement CreateAccount = driver.findElement(By.xpath("//a[contains(@data-testid,'open')]"));
        CreateAccount.click();
    }

    @Then("^User should be able to see the success message$")
    public void user_should_be_able_to_see_the_success_message() throws Throwable {
        
        
    }

    
    @And("^User creates the new account$")
    public void user_creates_the_new_account(DataTable table) throws Throwable {
    	
    	String FirstName = table.cell(1, 1);
    	String LastName = table.cell(2, 1);
    	String MobileNumber = table.cell(3, 1);
    	String Password = table.cell(4, 1);
    	String Month = table.cell(5, 1);
    	String Day = table.cell(6, 1);
    	String Year = table.cell(7, 1);
    	
     
        WebElement tbfirstName = driver.findElement(By.xpath("//input[@name ='firstname']"));
        tbfirstName.sendKeys(FirstName);
        
        WebElement tblastName = driver.findElement(By.xpath("//input[@name ='firstname'] //following::input[1]"));
        tblastName.sendKeys(LastName);
        
        WebElement tbMobileNo = driver.findElement(By.xpath("//input[@name ='firstname'] //following::input[2]"));
        tbMobileNo.sendKeys(MobileNumber);
        
        WebElement tbpassword = driver.findElement(By.xpath("//input[@name ='reg_passwd__'] "));
        tbpassword.sendKeys(Password);
        
        WebElement tbmonth = driver.findElement(By.xpath("//select[@id ='month' ] "));
        Select DOBmonth = new Select(tbmonth);
        DOBmonth.selectByVisibleText(Month);
        
        WebElement birthday = driver.findElement(By.xpath("//select[@name='birthday_day' ] "));
        Select DOBbirthday = new Select(birthday);
        DOBbirthday.selectByVisibleText(Day);
        
        WebElement year = driver.findElement(By.xpath("//select[@name='birthday_year' ] "));
        Select DOByear = new Select(year);
        DOByear.selectByValue(Year);
               
        WebElement radio2 = driver.findElement(By.xpath("(//*[@data-name='gender_wrapper']/span/input)[2]"));
        radio2.click();
    }


    @And("^User clicks on the SignUp button$")
    public void user_clicks_on_the_signup_button() throws Throwable {
        
        WebElement SignUp= driver.findElement(By.xpath("//button[@name='websubmit' ] "));
        SignUp.click();
        
    }

}
