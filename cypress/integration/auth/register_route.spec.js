import { baseURL } from '../..'

describe('Check the register page', () => {
  describe('Loading test', () => {
    it(`should successfully load at ${baseURL}/register`,() => {
      cy.visit(`${baseURL}/register`) // change URL to match your dev URL
      cy.url().should('eq', `${baseURL}/register`)
    })
  })
  describe('Check the header html tag', () => {
    it('should have a "Register Page" title tag ', () => {
      cy.title().should('include', 'Register Page')
    })
    it('shloud have a favicon link tag at index 0 ', () => {
      cy.get('head').find('link').eq(0).should('have.attr', 'rel').should('eq', 'icon')
      cy.get('head').find('link').eq(0).should('have.attr', 'type').should('eq', 'img/png')
      cy.get('head').find('link').eq(0).should('have.attr', 'href').should('eq', '/img/favicon.png')
    })
    it('should have a css link tag at index 1', () => {
      cy.get('head').find('link').eq(1).should('have.attr', 'rel').should('eq', 'stylesheet')
      cy.get('head').find('link').eq(1).should('have.attr', 'href').should('eq', '/css/auth.css')
    })
  })
  describe('Check form', () => {
    it('should have a form tag with a class of "form__register" and an id of #form',() => {
      cy.get('body').children('#form')
      cy.get('body').children('.form__register')
    })
    it('should have a h1 tag with a class of "form__title"',() => {
      cy.get('#form').children('.form__title')
    })
    it('should have a title of "Create your account"',() => {
      cy.get('.form__title').contains('Create your account')
    })
  })
})

// TODO
// [ ] implement next tests