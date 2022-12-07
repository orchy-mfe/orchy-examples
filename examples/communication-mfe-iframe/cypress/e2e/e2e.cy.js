/// <reference types="cypress" />

describe('communication-mfe-iframe', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('mfe to iframe message', () => {
    const mfeMessageToSend = 'Hello from micro frontend'
    cy.findByPlaceholderText('Message for iframe').type(mfeMessageToSend)

    cy.findByText('Send message to iframe').click()

    cy.frameLoaded('iframe')
    cy.iframe().findByText(`Received message: ${mfeMessageToSend}`)
  })

  it('iframe to mfe message', () => {
    const iframeMessageToSend = 'Hello from iframe'
    cy.frameLoaded('iframe')
    cy.iframe().findByPlaceholderText('Message for micro frontend').type(iframeMessageToSend)
    cy.iframe().findByText('Send message to micro frontend').click()

    cy.findByText(`Message received: ${iframeMessageToSend}`)
  })
})
