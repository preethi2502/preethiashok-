package com.adactin.runner;

import java.io.IOException;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.adactin.baseclass.BaseclassCucumber;
import com.adactin.helper.FileReaderManager;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(features = "@Report/FailedScenario.txt", 
						glue = "com\\adactin\\stepdefenition",
                       plugin = {"com.cucumber.listener.ExtentCucumberFormatter:Report/rerunReport.html",
                    		   "json:target/cucumber.json",
                    		   "html:normal.html"
                       },
                       monochrome = true,
                     //  tags= {"~@Second"},
                       dryRun = false,
                       strict = true)

public class ReRunner {

	public static WebDriver driver;

	@BeforeClass
	public static void setup() throws IOException {
		String browserlaunch = FileReaderManager.getInstance1().crInstance1().getBrowserName1();
		driver = BaseclassCucumber.browserLaunch(browserlaunch);

	}

	@AfterClass
	public static void teardown() {
		// driver.close();
	}

}



