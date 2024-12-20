

describe('página principal',() =>{
  it('entrar',() =>{
    //Visite a página de principal do adopet e clique no botão 'Ver pets disponiveis para adoção'
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('.button').click();

    //Visite a página de principal do adopet e teste os botões header
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('.header__home').click();
    cy.get('.header__message').click();

    //visite a página de /login do adopet
    cy.visit('  https://adopet-frontend-cypress.vercel.app/');
    //Visite a página de /home do adopet
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    cy.get(':nth-child(1) > .card__contact').click();
    //fazer o login
    cy.get('[data-test="input-loginEmail"]').type('brunoguerreiro.campos@hotmail.com');
    cy.get('[data-test="input-loginPassword"]').type('Senha123');
    //Visite a página de /home do adopet e clique no botão 'falar com o responsavel 
    cy.get('[data-test="submit-button"]').click();
    cy.get(':nth-child(1) > .card__contact').click()

    

  
    

  })

  })
