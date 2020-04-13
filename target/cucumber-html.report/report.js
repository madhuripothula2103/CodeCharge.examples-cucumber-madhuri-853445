$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "http://examples.codecharge.com/TaskManager/Default.php",
  "description": "",
  "id": "http://examples.codecharge.com/taskmanager/default.php",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login_Page"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Data Driven Login to examples.codecharge.com/TaskManager/Default.php",
  "description": "",
  "id": "http://examples.codecharge.com/taskmanager/default.php;data-driven-login-to-examples.codecharge.com/taskmanager/default.php",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Open chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter valid \"\u003cusernameNumber\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user should be able to login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "selecting the employees",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "appplication should be closed",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "http://examples.codecharge.com/taskmanager/default.php;data-driven-login-to-examples.codecharge.com/taskmanager/default.php;",
  "rows": [
    {
      "cells": [
        "usernameNumber"
      ],
      "line": 14,
      "id": "http://examples.codecharge.com/taskmanager/default.php;data-driven-login-to-examples.codecharge.com/taskmanager/default.php;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 15,
      "id": "http://examples.codecharge.com/taskmanager/default.php;data-driven-login-to-examples.codecharge.com/taskmanager/default.php;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Data Driven Login to examples.codecharge.com/TaskManager/Default.php",
  "description": "",
  "id": "http://examples.codecharge.com/taskmanager/default.php;data-driven-login-to-examples.codecharge.com/taskmanager/default.php;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login_Page"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter valid \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user should be able to login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "selecting the employees",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "appplication should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidLogin.open_chrome_and_start_application()"
});
formatter.result({
  "duration": 24446087,
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\Users\\chan\\Desktop\\CodeCharge-Cucumber\\UserschanDesktopCodeCharge-Cucumbersrc\test\resourcesBinarieschromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.Codecharge.utility.Browserfactory.startBrowser(Browserfactory.java:25)\r\n\tat codeCharge.stepDefination.ValidLogin.open_chrome_and_start_application(ValidLogin.java:63)\r\n\tat ✽.Given Open chrome and start application(Login.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 15
    }
  ],
  "location": "ValidLogin.i_enter_valid(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ValidLogin.user_should_be_able_to_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ValidLogin.selecting_the_employees()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ValidLogin.appplication_should_be_closed()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("page.feature");
formatter.feature({
  "line": 2,
  "name": "Employee",
  "description": "",
  "id": "employee",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@p1_enter"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "adding employee details",
  "description": "",
  "id": "employee;adding-employee-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "selecting the tasklist",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "it\u0027s time to logouot",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "appplication should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidLogin.open_chrome_and_start_application()"
});
formatter.result({
  "duration": 22573754,
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\Users\\chan\\Desktop\\CodeCharge-Cucumber\\UserschanDesktopCodeCharge-Cucumbersrc\test\resourcesBinarieschromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.Codecharge.utility.Browserfactory.startBrowser(Browserfactory.java:25)\r\n\tat codeCharge.stepDefination.ValidLogin.open_chrome_and_start_application(ValidLogin.java:63)\r\n\tat ✽.Given Open chrome and start application(page.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ValidLogin.selecting_the_tasklist()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ValidLogin.it_s_time_to_logouot()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ValidLogin.appplication_should_be_closed()"
});
formatter.result({
  "status": "skipped"
});
});