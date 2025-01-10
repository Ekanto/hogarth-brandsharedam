# QA Automation task for Hogarth Dhaka.

This project covers an End-to-end(e2e) automation task for Hogarth Dhaka. We have used a Playwright to automate all the scenarios. Please read below for installation and usage guidelines 

## Table of Contents

- [Project Title](#project-title)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contact](#contact)

## Features
* Clean code principles followed
* Used Page Object Model to avoid redundant work and hard coding
* Mailserver automation
* Single command run
* Reporting tool integrated for better visualization of test result

## Installation
1. Clone the repo:
   ```sh
   https://github.com/Ekanto/transmedia_qa-automation-home-assignment.git

2. Navigate to the project directory:
   ```sh
   cd hogarth-brandsharedam
   
3. Now run `npm install` to install the node dev dependencies. Also run `npx install playwright` to install playwright dependencies 

## Usage
In the project root directory - 
  
**Using the command line -**
- Type `npm run test:custom`
- It will run all the tests in the command line
- You should be able to see the following information when all the tests are successfully passed
![My Image](README-RESOURCES/cmd1.png)

**Using the command line with test report -**

This project includes a reporting tool **Allure Report** which helps visualize the test result better. To run all the tests generating a report - 
- Type `npm run e2e-regression-allure`
- It should run all the tests as before but it will generate some results in the `./allure-results` folder
- After completion of this command, now run `npm run e2e-regression-allure-report`
- It will invoke a browser and you should see all the tests result in your browser better!
![My Image](README-RESOURCES/allure.png)

## Contact 

For any queries, reach me at - **umarekanto@gmail.com**


   



