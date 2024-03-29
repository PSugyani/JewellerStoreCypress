import 'cypress-xpath';


/// <reference types="cypress-xpath" />
class loginLinks{

    ShopMouseMoveXpath ()
{
    return cy.xpath("//div[@class='navContainer js-navContainer show']/ul/li[1]");
}
 WeddingRingClick(){
    return cy.xpath("//ul[@class='mainNav animate js-mainNav']/li[1]/ul[1]/li[1]");
}
textofRings(){
    return cy.xpath("//div[@class='catsListing']/div[1]/a/span");
}
clickWeddingRing(){
    return cy.xpath("//div[@class='catsListing']/div[1]/a");
}
clickStoneRing(){
    return cy.xpath("//div[@id='productListing']/div[1]/a");
}
ClickEngagementRingLink() {
    return cy.xpath("//div[@id='siteContent']/div[1]/div[1]/a"); 
}
ClickEmerlandRing() {
    return cy.xpath("//div[@id='productListing']/div[1]/a");
}
clickbuynowbutton(){
    return cy.xpath("//div[@id='productGeneral']/div[1]/div[2]/form/div/button");
}
removebuttonlink(){

    return cy.xpath("//div[@class='summaryCartItems']/div/div[3]/a");
}
AddedItemNumberField(){
    return cy.xpath("//div[@id='scCartTotalsDetails']/div/form/div/div[1]/div[3]/input[1]");
}
Updatebuttonfield(){
    return cy.xpath("//div[@id='scCartTotalsDetails']/div/form/div/div[1]/div[3]/input[2]")
}
}

export default loginLinks;