package StepDefs;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Login_Step_Definitions {
	
	WebDriver driver = Hooks.driver;

	//Launch the application
	
	@Given("I have launched the application")
	public void i_have_launched_the_application() {
	    // Write code here that turns the phrase above into concrete actions
	
		driver.get("https://www.saucedemo.com/");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(5000, TimeUnit.MICROSECONDS);
	}

	//This is happy path scenario
	
	@When("I enter the correct username {string} and password {string}")
	public void i_enter_the_correct_username_and_password(String uname, String pwd) {
	    // Write code here that turns the phrase above into concrete actions
		WebElement UserName = driver.findElement(By.xpath("//input[@id='user-name']"));		
		UserName.sendKeys(uname);
		
		WebElement Password= driver.findElement(By.xpath("//input[@id='password']"));		
		Password.sendKeys(pwd);
	}

	//Login test
	
	@When("I click on Login Button")
	public void i_click_on_Login_Button() throws InterruptedException {
	    // Write code here that turns the phrase above into concrete actions
		Thread.sleep(5000);
		WebElement Loginbtn=driver.findElement(By.name("login-button"));
		Loginbtn.click();
	}

	@Then("I should land on the home page")
	public void i_should_land_on_the_home_page() {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	//This is error path scenario
	
	@When("I enter the incorrect username {string} and password {string}")
	public void i_enter_the_incorrect_username_and_password(String UsernameVal, String PassVal) {
	    // Write code here that turns the phrase above into concrete actions
	   
		WebElement UserName=driver.findElement(By.xpath("//input[@id='user-name']"));		
		UserName.sendKeys(UsernameVal);
		
		WebElement Password=driver.findElement(By.xpath("//input[@id='password']"));		
		Password.sendKeys(PassVal);
	}

	//Error Message
	
	@Then("I should get the error message {string}")
	public void i_should_get_the_error_message(String ExpError) {
	    // Write code here that turns the phrase above into concrete actions
	    
		WebElement Error = driver.findElement(By.xpath("//h3[@data-test='error']"));
		 
		String ActError = Error.getText();
		Assert.assertEquals(ExpError, ActError);
	}

	//Add item to the cart
	
	@When("I select the product {string} and add the item into the cart")
	public void i_select_the_product_and_add_the_item_into_the_cart(String ProdName) {
	    // Write code here that turns the phrase above into concrete actions
		String xpath = "//div[text()= '"+ ProdName +"']//following::button[1]";
		WebElement item = driver.findElement(By.xpath(xpath));
		item.click();
	}

	//Validate the item number in the cart
	
	@Then("Item numbers in the cart should change to {string}")
	public void item_numbers_in_the_cart_should_change_to(String num) throws InterruptedException {
	    // Write code here that turns the phrase above into concrete actions
	  
		Thread.sleep(4000);
		String xpath = "//span[@class='shopping_cart_badge']";
		WebElement CartItems = driver.findElement(By.xpath(xpath));
				 
		Assert.assertEquals(num, CartItems.getText());
	}
}
