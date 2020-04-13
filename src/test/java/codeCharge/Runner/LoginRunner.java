package codeCharge.Runner;

import org.junit.runner.RunWith;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;

@RunWith(Cucumber.class)
@CucumberOptions(features="features",
glue= {"codeCharge.stepDefination"},
tags= "@Login_Page,@p1_enter",
plugin= {"html:target/cucumber-html.report"})
/**
 * @author Madhuri
 * class created to run login page 
 */

public class LoginRunner {
	private TestNGCucumberRunner testRunner;
 
	@BeforeClass
	public void setUP()
      /**
	 * method to method for Initializing the Objects
	 */
	{
		testRunner = new TestNGCucumberRunner(LoginRunner.class);			
	}
  
	@Test(description="login",dataProvider="features")
	public void login(CucumberFeatureWrapper cFeature)
	{
		testRunner.runCucumber(cFeature.getCucumberFeature());
	}
  
	@DataProvider(name="features")
	public Object[][] getFeatures()
	{
		return testRunner.provideFeatures();
	}
      /**
	 * method to read the test data from features
	 * @return data
	 */
 
	@AfterClass
/**
	 * method to close the page
	 * @throws InterruptedException
	 */
	public void tearDown() throws InterruptedException
	{		
		testRunner.finish();
		

	}

}
