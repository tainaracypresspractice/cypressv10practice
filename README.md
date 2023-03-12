
Cypress v10 Practice


### Installation

1. Install node most recent version
https://nodejs.org/en/download/?utm_source=blog

2. ```cd cypressv10practice```

3. ```npm install```



### Create your own Cypress project



1. ```cd project-name```

2. ```npm init```

3. ``` npm install --save-dev cypress@12.6.0 ```


### Run tests

* Cypress Test Runner: ```npx cypress open```
* Headless mode: ```npx cypress run```
* Non headless mode: ```npx cypress run --headed```
* Run into specific browser: ```npx cypress run --browser chrome```
* Run specific tests: ```npx cypress run --spec cypress\e2e\{...}\spec_name.cy.js```

### Tips ###

Understand CSS selectors: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors

Understand XPath selectors: https://www.w3schools.com/xml/xpath_syntax.asp

Assertions with Cypress: https://docs.cypress.io/guides/references/assertions

Assertions with Chai: https://www.chaijs.com/ 
