import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import {FormsModule} from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';

@NgModule({
    exports: [
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    ],
  })

  export class SharedModule{}