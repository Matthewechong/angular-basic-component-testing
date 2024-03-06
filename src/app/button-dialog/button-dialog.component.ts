import { Component, EventEmitter, Inject, Output } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  templateUrl: './button-dialog.component.html',
  styleUrls: ['./button-dialog.component.css'],
  standalone: true,
  imports: [SharedModule],
})

export class ButtonDialogComponent {
  @Output() openDialogC = new EventEmitter();
  constructor(private dialog: MatDialog){}

  openDialog(): void{
    this.openDialogC.emit("Dialog has been successfully displayed")
    this.dialog.open(DialogOverviewExampleDialog,{
      width: '250px',
      data: {message: "Hello World"}
    });
  }
}


@Component({
  selector: './button-dialog.component.css',
  templateUrl: './dialog.component.html',
  standalone: true,
  imports: [SharedModule]
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
