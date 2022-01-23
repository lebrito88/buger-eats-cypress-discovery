
describe('home page',()=>{
    it('app deve estar online', ()=> {
       // cy.viewport(1440,900)  - já definido no cypress.json
       // cy.visit('https://buger-eats.vercel.app') cy.visit('https://buger-eats.vercel.app')
        cy.visit('/')
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')

    })

})