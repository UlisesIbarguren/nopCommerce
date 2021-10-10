class RegisterPage
{

getRegisterLink()
{
    return cy.get('.ico-register')
}
selectMaleGender()
{
    return cy.get('#gender-male')
}
getFirstName()
{
    return cy.get('#FirstName')
}
getLastName()
{
    return cy.get('#LastName')
}
selectDayOfBirth()
{
    return cy.get('[name="DateOfBirthDay"]')
}
selectMonthOfBirth()
{
    return cy.get('[name="DateOfBirthMonth"]')
}
selectYearofBirth()
{
    return cy.get('[name="DateOfBirthYear"]')
}
getemail()
{
    return cy.get('#Email')
}
getPassword()
{
    return cy.get('#Password')
}
getConfirmPassword()
{
    return cy.get('#ConfirmPassword')
}
getRegisterButton()
{
    return cy.get('#register-button')
}
getResult()
{
    return cy.get('.result')
}
}
export default RegisterPage;