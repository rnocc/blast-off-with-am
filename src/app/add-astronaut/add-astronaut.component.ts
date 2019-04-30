import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AstronautService } from '../astronaut.service';
import { Observable } from 'rxjs';
import { Option } from '../types';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-add-astronaut',
  templateUrl: './add-astronaut.component.html',
  styleUrls: ['./add-astronaut.component.css']
})
export class AddAstronautComponent {
  astronaut: FormGroup;
  undergraduateMajors: Observable<Option[]>;

  constructor(
    private dialogRef: MatDialogRef<AddAstronautComponent>,
    fb: FormBuilder,
    astronautService: AstronautService
  ) {
    this.astronaut = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleInitial: ['', Validators.maxLength(1)],
      active: [true],
      birthdate: ['', Validators.required],
      undergraduateMajor: ['', Validators.required]
    });
    this.undergraduateMajors = astronautService.filters.pipe(
      map(filters => filters.find(f => f.category === 'undergraduateMajor')),
      map(filter => filter.options),
    );
  }

  close(): void {
    this.dialogRef.close();
  }

  saveAstronaut() {
    // Save to backend
    // Display new astronaut
    console.log(this.astronaut.value);
    this.close();
  }

}
