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
@CucumberOptions(features = "src\\test\\java\\com\\adactin\\feature", 
						glue = "com\\adactin\\stepdefenition",
                       plugin = {"pretty","html:report","com.cucumber.listener.ExtentCucumberFormatter:Report\\extentReport.html"},
                       monochrome = true,
                     //  tags= {"~@Second"},
                       dryRun = false,
                       strict = true)

public class Runner {

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
