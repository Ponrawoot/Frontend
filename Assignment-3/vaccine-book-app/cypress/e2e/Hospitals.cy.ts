describe('App test', () => {
  it('Should have video and have right its status', () => {
    cy.visit('/')

    cy.get('video').should('exist')
    cy.get('[test-id="video-button"]').should('contain', 'Pause')
    cy.get('video').should('have.prop', 'paused', false)

    cy.wait(5000)

    cy.get('[test-id="video-button"]').click()
    cy.get('[test-id="video-button"]').should('contain', 'Play')
    cy.get('video').should('have.prop', 'paused', true)

    cy.get('[test-id="hospitals-button"]').click()
    cy.get('img').should('have.length.at.least', 3)

  })
})