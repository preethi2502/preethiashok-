
package com.adactin.pom;


import org.openqa.selenium.WebDriver;

import com.adactin.baseclass.BaseclassCucumber;
import com.adactin.pages.ConfirmPage;
import com.adactin.pages.LoginPage;
import com.adactin.pages.SearchPage;

public class SeleniumAdactin extends BaseclassCucumber{
	
	public static WebDriver driver;
    	

       	public static void main( ) throws InterruptedException {
		driver =browserLaunch("chrome");
		getUrl("https://adactin.com/HotelApp/");
		implicitwait();
		
		
		LoginPage lp = new LoginPage(driver);
        inputText(lp.getUsername(), "preethiashok");
		inputText(lp.getPassword(), "123qwe");
		clickOnElement(lp.getLogin());
		
		
		SearchPage sp = new SearchPage(driver);
		clickOnElement(sp.getLocation());
		clickOnElement(sp.getHotel());
		clickOnElement(sp.getRoomty());
		clickOnElement(sp.getRoomno());
		clickOnElement(sp.getAdroom());
		clickOnElement(sp.getChroom());
		clickOnElement(sp.getSearch());
		clickOnElement(sp.getRbutton());
		clickOnElement(sp.getContinueb());
		
		ConfirmPage cp = new ConfirmPage(driver);
		inputText(cp.getFname(), "preethijessy");
		inputText(cp.getLname(), "jessy");
		inputText(cp.getBadd(), "testcanada");
		inputText(cp.getCcnum(), "8745214587452145");
		clickOnElement(cp.getCctype());
		clickOnElement(cp.getExpdate());
		clickOnElement(cp.getExpyr());
		inputText(cp.getCcv(), "005");
		clickOnElement(cp.getBknow());
		clickOnElement(cp.getLogout());
		
		

	}

}
