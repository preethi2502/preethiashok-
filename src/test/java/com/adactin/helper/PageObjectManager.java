package com.adactin.helper;

import org.openqa.selenium.WebDriver;

import com.adactin.pages.ConfirmPage;
import com.adactin.pages.LoginPage;
import com.adactin.pages.SearchPage;

public class PageObjectManager {
	
	public static WebDriver driver;
	
	
	public static ConfirmPage CP1;
	public static LoginPage   LP1;
	public static SearchPage SP1;
	
	
		
	

	//public static WebDriver getDriver() {
		//return driver;
	//}


	public PageObjectManager(WebDriver driver2) {
		this.driver=driver2;
	}


	public static ConfirmPage getCP1() {
		CP1 = new ConfirmPage(driver);
		return CP1;
	}


	public static LoginPage getLP1() {
		LP1 = new LoginPage(driver);
		return LP1;
	}


	public static SearchPage getSP1() {
		SP1 = new SearchPage(driver);
		return SP1;
	}

	
}
