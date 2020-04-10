$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/adactin/feature/Adactin.feature");
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
  "duration": 2231808,
  "status": "passed"
});
formatter.before({
  "duration": 828415,
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
  "duration": 7924606976,
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
  "duration": 586157568,
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
  "duration": 146991104,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 2027523073,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_confirm_the_it_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 41984,
  "status": "passed"
});
formatter.after({
  "duration": 106497,
  "status": "passed"
});
formatter.after({
  "duration": 61440,
  "status": "passed"
});
formatter.before({
  "duration": 190465,
  "status": "passed"
});
formatter.before({
  "duration": 105472,
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
  "duration": 3804296192,
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
  "duration": 156569600,
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
  "duration": 122173951,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 836999168,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_confirm_the_it_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 26113,
  "status": "passed"
});
formatter.after({
  "duration": 1757696,
  "status": "passed"
});
formatter.after({
  "duration": 135680,
  "status": "passed"
});
formatter.before({
  "duration": 125952,
  "status": "passed"
});
formatter.before({
  "duration": 106496,
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
  "duration": 3594328064,
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
  "duration": 144410624,
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
  "duration": 131581440,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 2165446656,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_confirm_the_it_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 39935,
  "status": "passed"
});
formatter.after({
  "duration": 103937,
  "status": "passed"
});
formatter.after({
  "duration": 69120,
  "status": "passed"
});
formatter.before({
  "duration": 639489,
  "status": "passed"
});
formatter.before({
  "duration": 95231,
  "status": "passed"
});
formatter.before({
  "duration": 152576,
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
  "duration": 36864,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_selects_the_location_in_the_location_field()"
});
formatter.result({
  "duration": 130306048,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_selects_the_hotel_in_the_drop_down_field()"
});
formatter.result({
  "duration": 80368128,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_selects_the_roomtype_in_the_roomtype_field()"
});
formatter.result({
  "duration": 76157951,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_selects_the_adults_room_in_the_adults_room_field()"
});
formatter.result({
  "duration": 98992641,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_selects_the_child_room_field_in_the_child_room_field()"
});
formatter.result({
  "duration": 80270335,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_clicks_on_the_submit_button()"
});
formatter.result({
  "duration": 76588032,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_Confirms_that_the_search_is_carried_out_successfully()"
});
formatter.result({
  "duration": 2108280320,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_clicks_on_radio_button_to_agree_to_terms_and_conditions()"
});
formatter.result({
  "duration": 145085440,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_clicks_on_continue_button()"
});
formatter.result({
  "duration": 1876991488,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.the_user_confirms_the_confirmation_is_successfull()"
});
formatter.result({
  "duration": 39425,
  "status": "passed"
});
formatter.after({
  "duration": 84993,
  "status": "passed"
});
formatter.after({
  "duration": 37377,
  "status": "passed"
});
formatter.after({
  "duration": 40960,
  "status": "passed"
});
formatter.before({
  "duration": 80896,
  "status": "passed"
});
formatter.before({
  "duration": 77312,
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
  "duration": 211185664,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_enters_the_lastname_in_the_lastname_field()"
});
formatter.result({
  "duration": 190112256,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_enters_the_address_in_the_address_field()"
});
formatter.result({
  "duration": 158456832,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_enterss_the_valid_Credit_card_number_field()"
});
formatter.result({
  "duration": 213898752,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_selects_the_card_type_in_the_cardtype_field()"
});
formatter.result({
  "duration": 78900736,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_selects_the_card_expiry_date_in_date_field()"
});
formatter.result({
  "duration": 86801408,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_selects_the_card_expiry_year_in_the_year_field()"
});
formatter.result({
  "duration": 80809472,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_enters_the_valid_Cvv_number_in_the_number_field()"
});
formatter.result({
  "duration": 98681343,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_clicks_on_book_now_button()"
});
formatter.result({
  "duration": 85808129,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_clicks_on_logout_button()"
});
formatter.result({
  "duration": 1497097216,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.user_is_logged_out_and_is_navigated_back_to_login_page()"
});
formatter.result({
  "duration": 32194048,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[]\u003e but was:\u003c[   ]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.adactin.stepdefenition.StepDefenition.user_is_logged_out_and_is_navigated_back_to_login_page(StepDefenition.java:185)\r\n\tat ✽.Then User is logged out and is navigated back to login page(src/test/java/com/adactin/feature/Adactin.feature:45)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 126464,
  "status": "passed"
});
formatter.after({
  "duration": 69119,
  "status": "passed"
});
});