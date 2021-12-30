
export class DashboardPage{


    dashboardPage_searchProduct = '#twotabsearchtextbox'
    dashboardPage_clickSearchButton = '#nav-search-submit-button'
    
    clickAndSearchProduct(techProduct : string){
        cy.get(this.dashboardPage_searchProduct).type(techProduct)
        cy.get(this.dashboardPage_clickSearchButton).click()
        cy.log('Search Product' + techProduct)
        cy.url().should('contain', 'macbook')

    }
    }