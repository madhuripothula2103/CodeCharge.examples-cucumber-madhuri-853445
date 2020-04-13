@emp_details
Feature: selecting employee

  Scenario Outline: employee adding
     Given user is in first page
    When user clicks employee 
    When user clicks add employee
    When user enter full name and mail
    When user enter name and password
    When user select the type
    When user clicks the add the details will be added
    Then application should be closed
