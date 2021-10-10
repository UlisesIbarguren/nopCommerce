class LoginPage
{

getLoginLink()
{
    return cy.get('.ico-login')
}
getEmail()
{
    return cy.get('#Email')
}
getPassword()
{
    return cy.get('#Password')
}
getLoginButton()
{
    return cy.get('.login-button')
}
getTitle()
{
    return cy.title()
}

}
export default LoginPage;