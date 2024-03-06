import { MatSelectComponent } from "./mat-select.component";
import { SharedModule } from "../shared/shared.module";
import { TestBed } from "@angular/core/testing";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import { AnimationModule } from "../shared/animation.module";
import { MountConfig, createOutputSpy } from "cypress/angular";

const config: MountConfig<MatSelectComponent> = {
  imports: [AnimationModule],
  providers: [],
  autoSpyOutputs: true,

}
describe("Angular Material Mat Select Component Test", () => {

    beforeEach("Mount Angular Material Mat Select Component",() =>{
      cy.mount(MatSelectComponent,config)
    })

    it("Mat Select Component mounts with correct title", () => {
      cy.get('mat-label').should('have.text', 'Name');
    })

    it("Mat Select Component Displays All Options", () => {
      // Checks to see if button can be clicked
      cy.get('mat-select').click();

      // Checks if mat-option is visible after clicking on the mat-selet
      cy.get('mat-option').should('be.visible');

      const expectedValues = ['Charminar', 'TacosElGordo', 'Mothership']

      // There should contain the above amount of mat-options
      cy.get('mat-option').should('have.length', expectedValues.length)

      // Loops through mat-option and checks for expected value
      cy.get('mat-option').each(($option,index) => {
        const expectedValue = expectedValues[index];
        cy.wrap($option).should('contain.text',expectedValue)
      })
    })

  
  })