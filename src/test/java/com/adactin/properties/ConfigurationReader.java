package com.adactin.properties;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class ConfigurationReader {
	public static Properties P;
	
	public ConfigurationReader() throws IOException {
		File f = new File("C:\\Users\\HARI\\eclipse-workspace\\AdactinCucumber\\src\\test\\java\\com\\adactin\\properties\\configuration.properties");
		FileInputStream fis = new FileInputStream(f);
		P = new Properties();
		P.load(fis);
	}
	
	
	public String getBrowserName1() {
		String browserlaunch = P.getProperty("browserlaunch");
        return browserlaunch;
        
   
	}

   public String getUrl() {
	   String url = P.getProperty("url");
	   return url;
	   
   }
	 
   
	
	
}
