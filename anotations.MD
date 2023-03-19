

## then
If you are going to use non cypress commands, remember that Cypress commands are promises. So you'll need to use ```then``` to guarantee the commands will run one by one (in a sequence): https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#Using-then-To-Act-On-A-Subject
Inside ```then``` use javascript commands (not cypress commands)

```javascript
it("Navigating to specific product pages", () => {
    cy.visit("https://any_url")
    cy.get("a[href*='product/category&path=']").contains("Makeup").click()

    // Following code will fail
    // const header = cy.get("h1 .maintext");
    // cy.log(header.text())

    cy.get("h1 .maintext").then(($headerText) => {
        const headerText = $headerText.text()
        cy.log("Found header text: " + headerText)
    })
});
```

Promisses são objetos, que passamos como parâmetro outra função. Esta função possui dois parâmetros: resolve e reject

![Captura de Tela 2023-03-12 às 16 14 53](https://user-images.githubusercontent.com/4117764/224567461-ad0e42da-831a-45d8-9510-0aceff339291.png)

## .invoke

Invokes JQuery functions: https://api.jquery.com/

![Captura de Tela 2023-03-13 às 16 55 46](https://user-images.githubusercontent.com/4117764/224817850-b20b112a-726c-424b-b278-cdb80c79c40f.png)

### Handling multiple tabs

```javascript
it("Navigating to specific product pages", () => {
    cy.visit("http://www.webdriveruniversity.com")
    cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
```

## .origin

Allow visiting different url origin at the same test

```javascript
cy.origin('foo.com', () => {
  cy.visit('/')
  cy.url().should('contain', 'foo.com')
})

cy.origin('bar.com', () => {
  cy.visit('/')
  cy.url().should('contain', 'bar.com')
})
```

# Browser navigation
```javascript
cy.go('back')
cy.reload()
cy.go('forward')
```

