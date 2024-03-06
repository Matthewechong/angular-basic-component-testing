import { Component, EventEmitter, Output } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from '../shared/shared.module';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NgFor } from '@angular/common';
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  templateUrl: './mat-select.component.html',
  styleUrl: './mat-select.component.css',
  standalone: true,
  imports: [SharedModule],
})
export class MatSelectComponent {
  
  foods: Food[] = [
    {value: 'charminar-0', viewValue: 'Charminar'},
    {value: 'tacosElGordo-1', viewValue: 'TacosElGordo'},
    {value: 'mothership-2', viewValue: 'Mothership'},
  ];

}
