import {DashboardPage} from "../pages/dashboard_page"
import {LoginPage} from "../pages/login_page"

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const product ={
  techProduct:'apple macbook air'
}

before(function(){
  cy.fixture('credentials').then(function(testdata){
    this.testdata = testdata

  })
})

it('Successfully search and check product test', function() {

  loginPage.navigate(this.testdata.url)

  dashboardPage.clickAndSearchProduct(product.techProduct);

})