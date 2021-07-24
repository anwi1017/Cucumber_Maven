$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/FBSignUp.feature");
formatter.feature({
  "name": "FB SignUp Feature to validate the add new user functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify that user is able to create the new account",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DataTable"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has launched the FB application",
  "keyword": "Given "
});
formatter.match({
  "location": "FBSignUpSteps.user_has_launched_the_fb_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Create New Account link",
  "keyword": "When "
});
formatter.match({
  "location": "FBSignUpSteps.user_clicks_on_the_create_new_account_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User creates the new account",
  "rows": [
    {
      "cells": [
        "Field",
        "Value"
      ]
    },
    {
      "cells": [
        "FirstName",
        "John"
      ]
    },
    {
      "cells": [
        "LastName",
        "Smith"
      ]
    },
    {
      "cells": [
        "MobileNumber",
        "9999999999"
      ]
    },
    {
      "cells": [
        "Password",
        "Def456@bc"
      ]
    },
    {
      "cells": [
        "Month",
        "Oct"
      ]
    },
    {
      "cells": [
        "Day",
        "17"
      ]
    },
    {
      "cells": [
        "Year",
        "1990"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FBSignUpSteps.user_creates_the_new_account(DataTable)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@name \u003d\u0027firstname\u0027]\"}\n  (Session info: chrome\u003d83.0.4103.97)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ip-172-31-70-54\u0027, ip: \u0027172.31.70.54\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.4.0-1113-aws\u0027, java.version: \u00271.8.0_265\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.97, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: /tmp/.com.google.Chrome.AvXQft}, goog:chromeOptions: {debuggerAddress: localhost:46237}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 4f9672b082450cf32ddd2f6ea9ee4595\n*** Element info: {Using\u003dxpath, value\u003d//input[@name \u003d\u0027firstname\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat stepDefinitions.FBSignUpSteps.user_creates_the_new_account(FBSignUpSteps.java:57)\n\tat ✽.User creates the new account(file:src/test/java/features/FBSignUp.feature:7)\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks on the SignUp button",
  "keyword": "And "
});
formatter.match({
  "location": "FBSignUpSteps.user_clicks_on_the_signup_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be able to see the success message",
  "keyword": "Then "
});
formatter.match({
  "location": "FBSignUpSteps.user_should_be_able_to_see_the_success_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});