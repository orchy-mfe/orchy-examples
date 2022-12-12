/// <reference types="cypress" />
describe('routing-mfe', () => {
  const routingReact = () => {
    cy.findByText('React: Foo path loaded')
    cy.findByText('Svelte: Foo path loaded')
    cy.url().should('include', '#/root/foo')
    
    cy.findByText('Navigate React').click()
    cy.findByText('React: Bar path loaded')
    cy.findByText('Svelte: Bar path loaded')
    cy.url().should('include', '#/root/bar')
  }

  const routingSvelte = () => {
    cy.findByText('React: Foo path loaded')
    cy.findByText('Svelte: Foo path loaded')
    cy.url().should('include', '#/root/foo')
    
    cy.findByText('Navigate Svelte').click()
    cy.findByText('React: Bar path loaded')
    cy.findByText('Svelte: Bar path loaded')
    cy.url().should('include', '#/root/bar')
  }

  const routingBoth = () => {
    cy.findByText('React: Foo path loaded')
    cy.findByText('Svelte: Foo path loaded')
    cy.url().should('include', '#/root/foo')

    cy.findByText('Navigate Svelte').click()
    cy.findByText('React: Bar path loaded')
    cy.findByText('Svelte: Bar path loaded')
    cy.url().should('include', '#/root/bar')
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

      cy.visit('/root')
    })
  
    it('routing react', routingReact)

    it('routing svelte', routingSvelte)

    it('routing both', routingBoth)
  })

  describe('html page config', () => {
    beforeEach(() => {
      cy.fixture('orchy-config.json').then(orchyConfigJson => {
        orchyConfigJson.microPages['/root'].pageConfiguration = 'page-config.html'
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

      cy.visit('/root')
    })
  
    it('routing react', routingReact)

    it('routing svelte', routingSvelte)

    it('routing both', routingBoth)
  })
})
