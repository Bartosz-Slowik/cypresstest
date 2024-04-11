describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000)
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000)
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});
describe('Swiper Gallery chatpgpt', () => {
    it('should display images and descriptions for each swiper slide', () => {
      cy.visit('http://localhost:3000') // Replace 'path_to_your_website' with the actual path
  
      // Assert the number of swiper slides
      cy.get('.swiper-slide').should('have.length', 3)
  
      // Assert the presence of swiper navigation buttons and pagination
      cy.get('.swiper-button-next').should('be.visible')
      cy.get('.swiper-button-prev').should('be.visible')
      cy.get('.swiper-pagination').should('be.visible')
    })
  })
  