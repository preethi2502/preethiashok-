package com.adactin.stepdefenition;

import org.openqa.selenium.WebDriver;

import com.adactin.baseclass.BaseclassCucumber;
import com.adactin.helper.FileReaderManager;
import com.adactin.helper.PageObjectManager;
import com.adactin.runner.Runner;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefenition extends BaseclassCucumber {
	public static WebDriver driver = Runner.driver;
	public static PageObjectManager pom = new PageObjectManager(driver);

	@Before
	public void InitializeTest()
	{
		System.out.println("opening the browser:chrome");
		
	}
	@After
	public void TearDownTest()
	{
		System.out.println("closing the browser:chrome");
		
	}
	
	@Before("@First")
	public void beforefirst()
	{
		System.out.println("before only first scenario");
	}
	
	@After("@First")
	public void afterfirst()
	{
		System.out.println("after only first scenario");
	}
	
	@Given("^user launch the application$")
	public void user_launch_the_application() throws Throwable {
		String url = FileReaderManager.getInstance1().crInstance1().getUrl();
		getUrl(url);
		Thread.sleep(3000);

	}

	@When("^User enter valid username \"([^\"]*)\" in the username field$")
	public void user_enter_valid_username_in_the_username_field(String arg1) throws Throwable {
		inputText(pom.getLP1().getUsername(), arg1);
	}

	@When("^User enter  valid password \"([^\"]*)\" in the password field$")
	public void user_enter_valid_password_in_the_password_field(String arg1) throws Throwable {
		inputText(pom.getLP1().getPassword(), arg1);
	}

	@When("^User click on the login button$")
	public void user_click_on_the_login_button() throws Throwable {
		clickOnElement(pom.getLP1().getLogin());
	}

	@Then("^User confirm the it navigates to the homepage$")
	public void user_confirm_the_it_navigates_to_the_homepage() throws Throwable {

	}

	@Given("^user is logged in successfully and in the search page$")
	public void user_is_logged_in_successfully_and_in_the_search_page() throws Throwable {

	}

	@When("^user selects the location in the location field$")
	public void user_selects_the_location_in_the_location_field() throws Throwable {
		clickOnElement(pom.getSP1().getLocation());
	}

	@When("^User selects the hotel in the drop down field$")
	public void user_selects_the_hotel_in_the_drop_down_field() throws Throwable {
		clickOnElement(pom.getSP1().getHotel());
	}

	@When("^User selects the roomtype in the roomtype field$")
	public void user_selects_the_roomtype_in_the_roomtype_field() throws Throwable {
		clickOnElement(pom.getSP1().getRoomty());
	}

	@When("^User selects the adults room in the adults room field$")
	public void user_selects_the_adults_room_in_the_adults_room_field() throws Throwable {
		clickOnElement(pom.getSP1().getRoomno());
	}

	@When("^User selects the child room field in the child room field$")
	public void user_selects_the_child_room_field_in_the_child_room_field() throws Throwable {
		clickOnElement(pom.getSP1().getAdroom());
	}

	@When("^User clicks on the submit button$")
	public void user_clicks_on_the_submit_button() throws Throwable {
		clickOnElement(pom.getSP1().getChroom());
	}

	@Then("^User Confirms that the search is carried out successfully$")
	public void user_Confirms_that_the_search_is_carried_out_successfully() throws Throwable {
		clickOnElement(pom.getSP1().getSearch());
	}

	@When("^User clicks on radio button to agree to terms and conditions$")
	public void user_clicks_on_radio_button_to_agree_to_terms_and_conditions() throws Throwable {
		clickOnElement(pom.getSP1().getRbutton());

	}

	@When("^User clicks on continue button$")
	public void user_clicks_on_continue_button() throws Throwable {
		clickOnElement(pom.getSP1().getContinueb());
	}

	@Then("^The user confirms the confirmation is successfull$")
	public void the_user_confirms_the_confirmation_is_successfull() throws Throwable {
	}

	@Given("^the page is already partially autopopulated and the rest dropdown to be filled$")
	public void the_page_is_already_partially_autopopulated_and_the_rest_dropdown_to_be_filled() throws Throwable {
	}

	@When("^User enters the firstname in the firstname field$")
	public void user_enters_the_firstname_in_the_firstname_field() throws Throwable {
		inputText(pom.getCP1().getFname(), "preethijessy");
	}

	@When("^User enters the lastname in the lastname field$")
	public void user_enters_the_lastname_in_the_lastname_field() throws Throwable {
		inputText(pom.getCP1().getLname(), "jessy");
	}

	@When("^User enters the address in the address field$")
	public void user_enters_the_address_in_the_address_field() throws Throwable {
		inputText(pom.getCP1().getBadd(), "testcanada");
	}

	@When("^User enterss the valid Credit card number field$")
	public void user_enterss_the_valid_Credit_card_number_field() throws Throwable {
		inputText(pom.getCP1().getCcnum(), "8745214587452145");
	}

	@When("^User selects the card type in the cardtype field$")
	public void user_selects_the_card_type_in_the_cardtype_field() throws Throwable {
		clickOnElement(pom.getCP1().getCctype());
	}

	@When("^User selects the card expiry date in date field$")
	public void user_selects_the_card_expiry_date_in_date_field() throws Throwable {
		clickOnElement(pom.getCP1().getExpdate());
	}

	@When("^User selects the card expiry year in the year field$")
	public void user_selects_the_card_expiry_year_in_the_year_field() throws Throwable {
		clickOnElement(pom.getCP1().getExpyr());
	}

	@When("^User enters the valid Cvv number in the number field$")
	public void user_enters_the_valid_Cvv_number_in_the_number_field() throws Throwable {
		inputText(pom.getCP1().getCcv(), "005");
	}

	@When("^User clicks on book now button$")
	public void user_clicks_on_book_now_button() throws Throwable {
		clickOnElement(pom.getCP1().getBknow());
	}

	@When("^User clicks on logout button$")
	public void user_clicks_on_logout_button() throws Throwable {
		clickOnElement(pom.getCP1().getLogout());
	}

	@Then("^User is logged out and is navigated back to login page$")
	public void user_is_logged_out_and_is_navigated_back_to_login_page() throws Throwable {

	}

}
