/// <reference types="cypress" />
describe('communication-parent-children', () => {
  const incrementReact = () => {
    const incrementReactButton = cy.findByText('Increment React')

    incrementReactButton.click()
    incrementReactButton.click()

    cy.findByText('Counter React: 2')
    cy.findByText('Counter Svelte: 2')
  }

  const incrementSvelte = () => {
    const incrementSvelteButton = cy.findByText('Increment Svelte')

    incrementSvelteButton.click()
    incrementSvelteButton.click()

    cy.findByText('Counter Svelte: 2')
    cy.findByText('Counter React: 2')
  }

  const incrementBoth = () => {
    cy.findByText('Increment Svelte').click()
    cy.findByText('Increment React').click()
    cy.findByText('Increment Svelte').click()
    cy.findByText('Increment React').click()

    cy.findByText('Counter Svelte: 4')
    cy.findByText('Counter React: 4')
  }

  describe('json page config', () => {
    beforeEach(() => {
      cy.fixture('orchy-config.json').then(orchyConfigJson => {
        cy.intercept('/api/v1/configuration/orchy-config.json', {
          statusCode: 200,
          body: orchyConfigJson
        })
      })

      cy.fixture('orchy-config-children.json').then(orchyConfigJson => {
        cy.intercept('/api/v1/configuration/orchy-config-children.json', {
          statusCode: 200,
          body: orchyConfigJson
        })
      })

      cy.fixture('page-config-parent.json').then(pageConfigJson => {
        cy.intercept('/api/v1/configuration/page-config-parent.json', {
          statusCode: 200,
          body: pageConfigJson
        })
      })

      cy.fixture('page-config-children.json').then(pageConfigJson => {
        cy.intercept('/api/v1/configuration/page-config-children.json', {
          statusCode: 200,
          body: pageConfigJson
        })
      })

      cy.visit('/')
    })

    it('increment react only', incrementReact)

    it('increment svelte only', incrementSvelte)

    it('increment both', incrementBoth)
  })

  describe('html page config', () => {
    beforeEach(() => {
      cy.fixture('orchy-config.json').then(orchyConfigJson => {
        orchyConfigJson.microPages['/'].pageConfiguration = 'page-config-parent.html'
        cy.intercept('/api/v1/configuration/orchy-config.json', {
          statusCode: 200,
          body: orchyConfigJson
        })
      })

      cy.fixture('orchy-config-children.json').then(orchyConfigJson => {
        orchyConfigJson.microPages['/'].pageConfiguration = 'page-config-children.html'
        cy.intercept('/api/v1/configuration/orchy-config-children.json', {
          statusCode: 200,
          body: orchyConfigJson
        })
      })

      cy.fixture('page-config-parent.html').then(pageConfigHtml => {
        cy.intercept('/api/v1/configuration/page-config-parent.html', {
          statusCode: 200,
          body: pageConfigHtml
        })
      })

      cy.fixture('page-config-children.html').then(pageConfigHtml => {
        cy.intercept('/api/v1/configuration/page-config-children.html', {
          statusCode: 200,
          body: pageConfigHtml
        })
      })

      cy.visit('/')
    })

    it('increment react only', incrementReact)

    it('increment svelte only', incrementSvelte)

    it('increment both', incrementBoth)
  })
})
