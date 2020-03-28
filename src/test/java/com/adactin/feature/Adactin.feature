Feature: Testing login functionality on adactin application 

Scenario Outline:  User checking the login function using valid username and valid password 
	Given user launch the application 
	When User enter valid username "<username>" in the username field 
	And User enter  valid password "<password>" in the password field 
	And User click on the login button 
	Then User confirm the it navigates to the homepage 
	
	Examples: 
	|username|password|
	|preethiashok|123asd|
	|preethiashok|1qa2ws|
	|preethiashok|123qwe|		
	
	
@First	
	Scenario: User checking the search function using valid credentials 
	Given   user is logged in successfully and in the search page 
	When    user selects the location in the location field 
	And     User selects the hotel in the drop down field 
	And     User selects the roomtype in the roomtype field 
	And     User selects the adults room in the adults room field 
	And     User selects the child room field in the child room field 
	And     User clicks on the submit button 
	Then   User Confirms that the search is carried out successfully 
	When   User clicks on radio button to agree to terms and conditions 
	And   User clicks on continue button 
	Then   The user confirms the confirmation is successfull 
	
	
@Second
	Scenario: User checks the booking function using valid credentials 
	Given    the page is already partially autopopulated and the rest dropdown to be filled 
	When   User enters the firstname in the firstname field 
	And   User enters the lastname in the lastname field 
	And   User enters the address in the address field 
	And   User enterss the valid Credit card number field 
	And   User selects the card type in the cardtype field 
	And   User selects the card expiry date in date field 
	And   User selects the card expiry year in the year field 
	And   User enters the valid Cvv number in the number field 
	And   User clicks on book now button 
	And   User clicks on logout button 
	Then   User is logged out and is navigated back to login page 
	