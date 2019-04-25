import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-astronaut',
  templateUrl: './add-astronaut.component.html',
  styleUrls: ['./add-astronaut.component.css']
})
export class AddAstronautComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddAstronautComponent>) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
