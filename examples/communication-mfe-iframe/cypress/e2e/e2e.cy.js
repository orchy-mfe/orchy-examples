/// <reference types="cypress" />
describe('communication-mfe-iframe', () => {
  const mfeToIframeMessage = () => {
    const mfeMessageToSend = 'Hello from micro frontend'
    cy.findByPlaceholderText('Message for iframe').type(mfeMessageToSend)

    cy.findByText('Send message to iframe').click()

    cy.frameLoaded('iframe')
    cy.iframe().findByText(`Received message: ${mfeMessageToSend}`)
  }

  const iframeToMfeMessage = () => {
    const iframeMessageToSend = 'Hello from iframe'
    cy.frameLoaded('iframe')
    cy.iframe().findByPlaceholderText('Message for micro frontend').type(iframeMessageToSend)
    cy.iframe().findByText('Send message to micro frontend').click()

    cy.findByText(`Message received: ${iframeMessageToSend}`)
  }

  const bidirectionalCommunication = () => {
    const mfeMessageToSend = 'Hello from micro frontend'
    cy.findByPlaceholderText('Message for iframe').type(mfeMessageToSend)

    cy.findByText('Send message to iframe').click()

    cy.frameLoaded('iframe')
    cy.iframe().findByText(`Received message: ${mfeMessageToSend}`)

    const iframeMessageToSend = 'Hello from iframe'
    cy.frameLoaded('iframe')
    cy.iframe().findByPlaceholderText('Message for micro frontend').type(iframeMessageToSend)
    cy.iframe().findByText('Send message to micro frontend').click()

    cy.findByText(`Message received: ${iframeMessageToSend}`)
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
  
    it('mfe to iframe message', mfeToIframeMessage)
  
    it('iframe to mfe message', iframeToMfeMessage)

    it('works bidirectional communication', bidirectionalCommunication)
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
  
    it('mfe to iframe message', mfeToIframeMessage)
  
    it('iframe to mfe message', iframeToMfeMessage)

    it('works bidirectional communication', bidirectionalCommunication)
  })

  
})
