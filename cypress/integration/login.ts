import {LoginPage} from "../pages/login_page"

const loginPage = new LoginPage()
const user ={
  url:'https://www.amazon.com/',
  userEmail:'berkyilmazer@hotmail.com',
  userPassword:'1'
}


it('amazon login test', function() {

  loginPage.navigate(user.url)
  loginPage.clickLoginLink();
  loginPage.enterUserMail(user.userEmail);
  loginPage.enterUserPassword(user.userPassword);

}) 