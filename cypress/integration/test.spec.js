// <reference types="cypress" />

describe('Login tests', () => {
    // it('should successfully log into our app', () => {
    //   cy.login()
    //     .then((resp) => {
    //       return resp.body;
    //     })
    //     .then((body) => {
    //       const {access_token, expires_in, id_token} = body;
    //       const auth0State = {
    //         nonce: '',
    //         state: 'some-random-state'
    //       };
    //       const callbackUrl = `/callback#access_token=${access_token}&scope=openid&id_token=${id_token}&expires_in=${expires_in}&token_type=Bearer&state=${auth0State.state}`;
    //       cy.visit(callbackUrl, {
    //         onBeforeLoad(win) {
    //           win.document.cookie = 'com.auth0.auth.some-random-state=' + JSON.stringify(auth0State);
    //         }
    //       });
    //     })
    // });
  });
describe('external api tests', () => {

    it(('public message test'), () => {
        // mock data
        const publicMessage = "The API doesn't require an access token to share this message.";
        
        // stub server request
        cy.intercept('GET', Cypress.env("react_app_server_url") + '/api/messages/public-message',
        {
            statusCode: 200,
            body: {
                message: publicMessage
            }
            
        }).as('public');
        
        // visit page
        cy.visit('http://localhost:3000/');


        // navigate to the page using the menu
        cy.get('[aria-label=menu]').click();
        cy.get('[href=external-api]').click();

        //trigger the request
        cy.get('[type=button]').contains('Get Public Message').click();

        // waiting for a response
        cy.wait('@public').then(() => {
            // asserting the content of the div for a message
            cy.get('[data-testid=api-message]').should('contain', publicMessage);
        });
    });

    // it(('protected message test'), () => {
    //     // mock data
    //     const protectedMessage = "Login required";

    //     // stub server request
    //     cy.intercept('GET', Cypress.env("react_app_server_url") + '/api/messages/protected-message',
    //     {
    //         statusCode: 200,
    //         body: {
    //             message: protectedMessage
    //         }
            
    //     }).as('protected');

    //     // visit page
    //     cy.visit('http://localhost:3000/');


    //     // navigate to the page using the menu
    //     cy.get('[aria-label=menu]').click();
    //     cy.get('[href=external-api]').click();

    //     //trigger the request
    //     cy.get('[type=button]').contains('Get Protected Message').click();

    //     // waiting for a response
    //     cy.wait('@protected', 1500).then((inter) => {
    //         console.log('ss');
    //         // asserting the content of the div for a message
    //         cy.get('.mt-5').children().get('.container-fluid').get('.row').get('code').contains(protectedMessage);
    //     });
    // });
});