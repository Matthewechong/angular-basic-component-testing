import { MatSelectComponent } from '../../src/app/mat-select/mat-select.component'
import { ButtonDialogComponent } from '../../src/app/button-dialog/button-dialog.component'
// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

import { MountConfig, mount } from 'cypress/angular'
import { Type } from '@angular/core'

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
    }
  }
}

const declarations = [MatSelectComponent, ButtonDialogComponent]

function customMount<T>(component: string | Type<T>, config?: MountConfig<T>) {
  if (!config) {
    config = { declarations }
  } else {
    config.declarations = [...(config?.declarations || []), ...declarations]
  }
  return mount<T>(component, config)
}

Cypress.Commands.add('mount', mount)

// Example use:
// cy.mount(MyComponent)