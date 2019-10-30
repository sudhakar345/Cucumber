package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import gherkin.formatter.MonochromeFormats;

@RunWith(Cucumber.class)
@CucumberOptions(features="Features",glue="stepDefinations",plugin={"com.cucumber.listener.ExtentCucumberFormatter:Reports/report.html","pretty",monochrome=true,"html:target/cucumber-reports"})
public class Runner {
	

}
