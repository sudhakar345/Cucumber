$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Validation of login functionality",
  "description": "",
  "id": "validation-of-login-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login functionality validation",
  "description": "",
  "id": "validation-of-login-functionality;login-functionality-validation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I login into StockAccounting Url on Chrome Browser",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I Click Reset Button on login page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I enter admin and master in UserNameField and PasswordField",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on Login Button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I wait for LogoutLink",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I validate the title of the home Page and close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.i_login_into_StockAccounting_Url_on_Chrome_Browser()"
});
formatter.result({
  "duration": 9191149407,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinations.i_Click_Reset_Button_on_login_page()"
});
formatter.result({
  "duration": 89543201,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinations.i_enter_admin_and_master_in_UserNameField_and_PasswordField()"
});
formatter.result({
  "duration": 1174231615,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinations.i_click_on_Login_Button()"
});
formatter.result({
  "duration": 908990594,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinations.i_wait_for_LogoutLink()"
});
formatter.result({
  "duration": 2999887106,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinations.i_validate_the_title_of_the_home_Page_and_close_the_Browser()"
});
formatter.result({
  "duration": 562755869,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "validate with multiple data",
  "description": "",
  "id": "validation-of-login-functionality;validate-with-multiple-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
});