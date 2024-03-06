import { ButtonDialogComponent } from "./button-dialog.component"
import { Component } from "@angular/core";

describe("Angular Material Button Dialog Test", () =>{
  beforeEach("Angular Material Button Mounts", () =>{
    cy.mount(ButtonDialogComponent, {
      autoSpyOutputs: true,
    });
  })
  it('Angular button mounts and contains the correct label', () => {
    cy.get("button").contains('Open Dialog')
  })

  it("Angular Button Clicks and displays a dialog that says hello world", () =>{

    cy.get('.big-button').click()
    cy.get("mat-dialog-content").contains('Hello World')
  })

  it('when button is clicked, should call onClick using autoSpyOutputs', () => {
    cy.get('button').click();
    cy.get('@openDialogCSpy').should('have.been.calledWith',"Dialog has been successfully displayed")
  });
})
