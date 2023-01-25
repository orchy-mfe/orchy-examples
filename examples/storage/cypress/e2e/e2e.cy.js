/// <reference types="cypress" />
describe('communication-mfe-mfe', () => {
  const saveInSessionStorage = () => {
    const key = 'storageKey'
    const value = 'storageValue'

    cy.findByPlaceholderText('key').type(key)
    cy.findByPlaceholderText('value').type(value)

    cy.findByText('Save in storage').click()

    cy.window()
      .its("sessionStorage")
      .invoke("getItem", key)
      .should("exist")
      .should('eq', value);

    cy.window()
      .its("sessionStorage")
      .invoke("clear");
  }

  describe('json page config', () => {
    beforeEach(() => {
      cy.fixture('orchy-config.json').then(orchyConfigJson => {
        cy.intercept('/api/v1/configuration/orchy-config.json', {
          statusCode: 200,
          body: orchyConfigJson
        })
      })

      cy.fixture('page-config.json').then(pageConfigJson => {
        cy.intercept('/api/v1/configuration/page-config.json', {
          statusCode: 200,
          body: pageConfigJson
        })
      })

      cy.visit('/')
    })

    it('correctly saves in session storage', saveInSessionStorage)
  })

  describe('html page config', () => {
    beforeEach(() => {
      cy.fixture('orchy-config.json').then(orchyConfigJson => {
        orchyConfigJson.microPages['/'].pageConfiguration = 'page-config.html'
        cy.intercept('/api/v1/configuration/orchy-config.json', {
          statusCode: 200,
          body: orchyConfigJson
        })
      })

      cy.fixture('page-config.html').then(pageConfigHtml => {
        cy.intercept('/api/v1/configuration/page-config.html', {
          statusCode: 200,
          body: pageConfigHtml
        })
      })

      cy.visit('/')
    })

    it('correctly saves in session storage', saveInSessionStorage)
  })
})
