package com.adactin.stepdefenition;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hook {
	
	@Before
	public void InitializeTest()
	{
		System.out.println("opening the browser: Chrome");
	}

	
	
	@After
	public void TearDownTest()
	{
		System.out.println("closing the browser: Chrome");
	}

}
