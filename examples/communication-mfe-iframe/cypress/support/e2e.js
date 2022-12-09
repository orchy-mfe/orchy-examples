import fs from 'fs'
import path from 'path'
import './commands'

Cypress.Commands.add('orchyConfigJson', () => cy.fixture('orchy-config.json'))
Cypress.Commands.add('orchyConfigHtml', () => {
    const fixtureContent = cy.fixture('orchy-config.json')
    return fixtureContent.replace('.json', '.html')
})
Cypress.Commands.add('pageConfigJson', () => cy.fixture('page-config.json'))
Cypress.Commands.add('pageConfigHtml', () => cy.fixture('page-config.html'))