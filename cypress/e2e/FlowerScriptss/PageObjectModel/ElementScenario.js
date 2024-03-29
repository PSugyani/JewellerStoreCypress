/// <reference types="cypress-xpath" />

import loginLinks from "./LoginLocaters"

const scenario = new loginLinks()

class FlowerLoginScenario {

  async  SearchCollection() {
        await   cy.wait(2000);
        
await scenario.ShopMouseMoveXpath().trigger('mousemove').click();
await cy.wait(2000); // Waits for 2 seconds
cy.xpath('//div[@id="siteContent"]/div/div/a').each(($element) => {
  // Get the text content of each element and log it to the Cypress command log
  cy.log($element.text());
});

await scenario.clickWeddingRing().click();
await scenario.clickStoneRing().click();
    }
    async getEngagementringsdata(){
    //  await scenario.ClickEngagementRingLink().click();
    //  await scenario.ClickEmerlandRing().click();

  //  cy.xpath('//div[@id="productGeneral"]/div[1]/div[2]/h1, "The Cushion Emerald & Diamond Three Stone Ring")]')
 // .should('be.visible')
 //.should('have.text', 'The Cushion Emerald & Diamond Three Stone Ring');
// cy.xpath('//div[@id="productGeneral"]/div[1]/div[2]/h1')
// .trigger('mouseover');
try {
 cy.xpath('//div[@id="productGeneral"]/div[1]/div[2]/h1').invoke('text').then((ringtext) => {
  // Do something with the text
  console.log(ringtext);
});
}
catch (error){
  cy.log(`Error: ${error.message}`);
}
await scenario.clickbuynowbutton().click();

await scenario.removebuttonlink().click();
await scenario.AddedItemNumberField.clear();
await scenario.Updatebuttonfield.click();


    }
      
}

    

export default FlowerLoginScenario;