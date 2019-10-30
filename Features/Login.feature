Feature: Validation of login functionality

Scenario: Login functionality validation
When I login into StockAccounting Url on Chrome Browser
When I Click Reset Button on login page
And  I enter admin and master in UserNameField and PasswordField
When I click on Login Button
When I wait for LogoutLink
Then I validate the title of the home Page and close the Browser

