package com.adactin.helper;

import java.io.IOException;

import com.adactin.properties.ConfigurationReader;

public class FileReaderManager {
	
	
	private FileReaderManager() {
	}
		public static FileReaderManager getInstance1() {
			FileReaderManager fr = new FileReaderManager();
			return fr;
		}
		
	    public ConfigurationReader crInstance1() throws IOException {
	    	ConfigurationReader cr = new ConfigurationReader();
	    	return cr;
	    	
	    }
	
	
	}
