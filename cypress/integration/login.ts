import {LoginPage} from "../pages/login_page"

const loginPage = new LoginPage()

before(function(){
  cy.fixture('credentials').then(function(testdata){
    this.testdata = testdata

  })
})

it('amazon login test', function() {

  loginPage.navigate(this.testdata.url)
  loginPage.clickLoginLink();
  loginPage.enterUserMail(this.testdata.userEmail);
  loginPage.enterUserPassword(this.testdata.userPassword);

}) 