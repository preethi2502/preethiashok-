$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Testing login functionality on adactin application",
  "description": "",
  "id": "testing-login-functionality-on-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User checking the login function using valid username and valid password",
  "description": "",
  "id": "testing-login-functionality-on-adactin-application;user-checking-the-login-function-using-valid-username-and-valid-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter valid username \"\u003cusername\u003e\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter  valid password \"\u003cpassword\u003e\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User confirm the it navigates to the homepage",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "testing-login-functionality-on-adactin-application;user-checking-the-login-function-using-valid-username-and-valid-password;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "testing-login-functionality-on-adactin-application;user-checking-the-login-function-using-valid-username-and-valid-password;;1"
    },
    {
      "cells": [
        "preethiashok",
        "123asd"
      ],
      "line": 12,
      "id": "testing-login-functionality-on-adactin-application;user-checking-the-login-function-using-valid-username-and-valid-password;;2"
    },
    {
      "cells": [
        "preethiashok",
        "1qa2ws"
      ],
      "line": 13,
      "id": "testing-login-functionality-on-adactin-application;user-checking-the-login-function-using-valid-username-and-valid-password;;3"
    },
    {
      "cells": [
        "preethiashok",
        "123qwe"
      ],
      "line": 14,
      "id": "testing-login-functionality-on-adactin-application;user-checking-the-login-function-using-valid-username-and-valid-password;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 391680,
  "status": "passed"
});
formatter.before({
  "duration": 34845732,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User checking the login function using valid username and valid password",
  "description": "",
  "id": "testing-login-functionality-on-adactin-application;user-checking-the-login-function-using-valid-username-and-valid-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter valid username \"preethiashok\" in the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter  valid password \"123asd\" in the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User confirm the it navigates to the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefenition.user_launch_the_application()"
});
formatter.result({
  "duration": 6789484328,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "preethiashok",
      "offset": 27
    }
  ],
  "location": "StepDefenition.user_enter_valid_username_in_the_username_field(String)"
});
formatter.result({
  "duration": 526364699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123asd",
      "offset": 28
    }
  ],
  "location": "StepDefenition.user_enter_valid_password_in_the_password_field(String)"
});
formatter.result({
  "duration": 425655732,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 710794968,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_confirm_the_it_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 63488,
  "status": "passed"
});
formatter.after({
  "duration": 115200,
  "status": "passed"
});
formatter.after({
  "duration": 112640,
  "status": "passed"
});
formatter.before({
  "duration": 131584,
  "status": "passed"
});
formatter.before({
  "duration": 107520,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User checking the login function using valid username and valid password",
  "description": "",
  "id": "testing-login-functionality-on-adactin-application;user-checking-the-login-function-using-valid-username-and-valid-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter valid username \"preethiashok\" in the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter  valid password \"1qa2ws\" in the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User confirm the it navigates to the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefenition.user_launch_the_application()"
});
formatter.result({
  "duration": 3503139844,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "preethiashok",
      "offset": 27
    }
  ],
  "location": "StepDefenition.user_enter_valid_username_in_the_username_field(String)"
});
formatter.result({
  "duration": 206123219,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1qa2ws",
      "offset": 28
    }
  ],
  "location": "StepDefenition.user_enter_valid_password_in_the_password_field(String)"
});
formatter.result({
  "duration": 139665551,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 1133008008,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_confirm_the_it_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 28160,
  "status": "passed"
});
formatter.after({
  "duration": 98816,
  "status": "passed"
});
formatter.after({
  "duration": 67072,
  "status": "passed"
});
formatter.before({
  "duration": 103936,
  "status": "passed"
});
formatter.before({
  "duration": 81408,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User checking the login function using valid username and valid password",
  "description": "",
  "id": "testing-login-functionality-on-adactin-application;user-checking-the-login-function-using-valid-username-and-valid-password;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter valid username \"preethiashok\" in the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter  valid password \"123qwe\" in the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User confirm the it navigates to the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefenition.user_launch_the_application()"
});
formatter.result({
  "duration": 3466731486,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "preethiashok",
      "offset": 27
    }
  ],
  "location": "StepDefenition.user_enter_valid_username_in_the_username_field(String)"
});
formatter.result({
  "duration": 267283218,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123qwe",
      "offset": 28
    }
  ],
  "location": "StepDefenition.user_enter_valid_password_in_the_password_field(String)"
});
formatter.result({
  "duration": 144263828,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 1318988103,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_confirm_the_it_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 36864,
  "status": "passed"
});
formatter.after({
  "duration": 205312,
  "status": "passed"
});
formatter.after({
  "duration": 49664,
  "status": "passed"
});
formatter.before({
  "duration": 252416,
  "status": "passed"
});
formatter.before({
  "duration": 114177,
  "status": "passed"
});
formatter.before({
  "duration": 87552,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User checking the search function using valid credentials",
  "description": "",
  "id": "testing-login-functionality-on-adactin-application;user-checking-the-search-function-using-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@First"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "user is logged in successfully and in the search page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "user selects the location in the location field",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User selects the hotel in the drop down field",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User selects the roomtype in the roomtype field",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User selects the adults room in the adults room field",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User selects the child room field in the child room field",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User clicks on the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User Confirms that the search is carried out successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "User clicks on radio button to agree to terms and conditions",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User clicks on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "The user confirms the confirmation is successfull",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefenition.user_is_logged_in_successfully_and_in_the_search_page()"
});
formatter.result({
  "duration": 33280,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_selects_the_location_in_the_location_field()"
});
formatter.result({
  "duration": 107404910,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_selects_the_hotel_in_the_drop_down_field()"
});
formatter.result({
  "duration": 77843024,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_selects_the_roomtype_in_the_roomtype_field()"
});
formatter.result({
  "duration": 63060545,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_selects_the_adults_room_in_the_adults_room_field()"
});
formatter.result({
  "duration": 57654843,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_selects_the_child_room_field_in_the_child_room_field()"
});
formatter.result({
  "duration": 62753857,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_clicks_on_the_submit_button()"
});
formatter.result({
  "duration": 59201084,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_Confirms_that_the_search_is_carried_out_successfully()"
});
formatter.result({
  "duration": 1225019111,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_clicks_on_radio_button_to_agree_to_terms_and_conditions()"
});
formatter.result({
  "duration": 104440427,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_clicks_on_continue_button()"
});
formatter.result({
  "duration": 1065640515,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.the_user_confirms_the_confirmation_is_successfull()"
});
formatter.result({
  "duration": 39936,
  "status": "passed"
});
formatter.after({
  "duration": 61440,
  "status": "passed"
});
formatter.after({
  "duration": 42496,
  "status": "passed"
});
formatter.after({
  "duration": 45056,
  "status": "passed"
});
formatter.before({
  "duration": 72192,
  "status": "passed"
});
formatter.before({
  "duration": 79360,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "User checks the booking function using valid credentials",
  "description": "",
  "id": "testing-login-functionality-on-adactin-application;user-checks-the-booking-function-using-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@Second"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "the page is already partially autopopulated and the rest dropdown to be filled",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "User enters the firstname in the firstname field",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "User enters the lastname in the lastname field",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User enters the address in the address field",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User enterss the valid Credit card number field",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User selects the card type in the cardtype field",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User selects the card expiry date in date field",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User selects the card expiry year in the year field",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User enters the valid Cvv number in the number field",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User clicks on book now button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User clicks on logout button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User is logged out and is navigated back to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefenition.the_page_is_already_partially_autopopulated_and_the_rest_dropdown_to_be_filled()"
});
formatter.result({
  "duration": 31232,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_enters_the_firstname_in_the_firstname_field()"
});
formatter.result({
  "duration": 265160463,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_enters_the_lastname_in_the_lastname_field()"
});
formatter.result({
  "duration": 99971175,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_enters_the_address_in_the_address_field()"
});
formatter.result({
  "duration": 128782980,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_enterss_the_valid_Credit_card_number_field()"
});
formatter.result({
  "duration": 164488361,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_selects_the_card_type_in_the_cardtype_field()"
});
formatter.result({
  "duration": 70807624,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_selects_the_card_expiry_date_in_date_field()"
});
formatter.result({
  "duration": 58107451,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_selects_the_card_expiry_year_in_the_year_field()"
});
formatter.result({
  "duration": 57838652,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_enters_the_valid_Cvv_number_in_the_number_field()"
});
formatter.result({
  "duration": 92676190,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_clicks_on_book_now_button()"
});
formatter.result({
  "duration": 80959059,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_clicks_on_logout_button()"
});
formatter.result({
  "duration": 569000007,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_is_logged_out_and_is_navigated_back_to_login_page()"
});
formatter.result({
  "duration": 124928,
  "status": "passed"
});
formatter.after({
  "duration": 96768,
  "status": "passed"
});
formatter.after({
  "duration": 73728,
  "status": "passed"
});
});