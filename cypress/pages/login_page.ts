
export class LoginPage{

    loginPage_userMail = '#ap_email'
    loginPage_userPassword = '#ap_password'
    loginPage_clickLoginLink = '#nav-link-accountList-nav-line-1'
    loginPage_clickContinueButton = '.a-button-inner > #continue'
    loginPage_clickLoginButton = '#signInSubmit'


    navigate(url : string){
        cy.log('Navigate to Amazon Website : ' + url)
        cy.visit(url)
        cy.url().should('contain', 'amazon')
    }

    clickLoginLink(){
        cy.get(this.loginPage_clickLoginLink).click()
        cy.log('Click Login Link')
        cy.url().should('contain', 'signin')
    }

    enterUserMail(userMail : string){
        cy.get(this.loginPage_userMail).type(userMail) 
        cy.get(this.loginPage_clickContinueButton).click()
        cy.log('Enter User Email : ' + userMail)
    }

    enterUserPassword(userPassword : string){
        cy.get(this.loginPage_userPassword).type(userPassword)
        cy.log('Enter User Password : ' + userPassword)
    }

    clickLoginButton(){
        cy.get(this.loginPage_clickLoginButton).click()
        cy.log('Click Login Button')

    }}