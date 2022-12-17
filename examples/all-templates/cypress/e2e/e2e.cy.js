/// <reference types="cypress" />
describe('all-templates', () => {
  const renderAll = () => {
    cy.findByText('Love Angular?')
    cy.findByText('Vite + Preact')
    cy.findByText('Vite + React')
    cy.findByText('Learn Solid')
    cy.findByText('Vite + Svelte')
    cy.findByText('Vite + TypeScript')
    cy.findByText('Vite + Vue')
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

    it('loads all mfe', renderAll)
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

    it('loads all mfe', renderAll)
  })
})
