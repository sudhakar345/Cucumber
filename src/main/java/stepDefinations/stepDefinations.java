package stepDefinations;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class stepDefinations {
	
	WebDriver driver;
	@When("^I login into StockAccounting Url on Chrome Browser$")
	public void i_login_into_StockAccounting_Url_on_Chrome_Browser() throws Throwable {
		System.setProperty("webdriver.chrome.driver","D:\\chromedriver.exe");
		 driver=new ChromeDriver();
		driver=new ChromeDriver();
			driver.get("http://webapp.qedge.com");
			driver.manage().window().maximize();
	}

	@When("^I Click Reset Button on login page$")
	public void i_Click_Reset_Button_on_login_page() throws Throwable {
		driver.findElement(By.id("btnreset")).click();
	}

	@When("^I enter admin and master in UserNameField and PasswordField$")
	public void i_enter_admin_and_master_in_UserNameField_and_PasswordField() throws Throwable {
		driver.findElement(By.id("username")).sendKeys("admin");
		driver.findElement(By.id("password")).sendKeys("master");
	}

	@When("^I click on Login Button$")
	public void i_click_on_Login_Button() throws Throwable {
	    driver.findElement(By.id("btnsubmit")).click();
	}

	@When("^I wait for LogoutLink$")
	public void i_wait_for_LogoutLink() throws Throwable {
	    Thread.sleep(3000);
	}

	@Then("^I validate the title of the home Page and close the Browser$")
	public void i_validate_the_title_of_the_home_Page_and_close_the_Browser() throws Throwable {
	    String expTitle="Dashboard « Stock Accounting ";
	    String actTitle=driver.getTitle();
	    if (expTitle.equalsIgnoreCase(actTitle)) {
			System.out.println("Title validation passed");
		}else
		{
			System.out.println("Title validation failed");
	   	
	    }driver.close();
	    		
	}



}
