//  import './support/commands.js';

/// <reference types="cypress-xpath" />

import FlowerLoginScenario from "../FlowerScriptss/PageObjectModel/ElementScenario"

describe('Login to Flower', () => {
  const  scenario = new FlowerLoginScenario();
  
     beforeEach(() => {
      
     cy.viewport(1280, 720)
    })


    it('Lunch url',async function ()  {
    

 await cy.visit('https://www.birkbecksjewellers.com.au/') // change URL to match your dev URLcy.viewport(1920, 1080) 
    //  cy.viewport(1920, 1080)
    cy.wait(2000);
    await  scenario.SearchCollection();

    cy.wait(2000);
    await scenario.getEngagementringsdata();
      });

      

    });

