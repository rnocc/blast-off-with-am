* [Step 1](./step_1.md)
* [Step 2](./step_2.md)
* [Step 3](./step_3.md)
* [Step 4](./step_4.md)
* [Step 5](./step_5.md)
* [Step 6](./step_6.md)
* [Step 7](./step_7.md)
* **Step 8 <-**

### [Step 8 setup demo](https://stackblitz.com/github/rnocc/blast-off-with-am/tree/step-7)
### [Step 8 completed demo](https://stackblitz.com/github/rnocc/blast-off-with-am/tree/step-8)

## Step 8

In this step, you will add a floating action button (FAB) that will open a dialog to add a new astronaut

<details><summary>8a) Add a fab to the bottom right of the page</summary>

`app.component.html`

```html
<mat-sidenav-content>
...
</mat-sidenav-content>
<button mat-fab aria-label="Add an astronaut"><mat-icon>add</mat-icon></button>
```
`app.component.css`

```css
[mat-fab] {
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 10;
}
```
</details>
<br/>
<details><summary>8b) Generate a new component called <code>AddAstronautComponent</code> and add the <code>MatDialogModule</code> to the app</summary>

```ts
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  ...
  imports: [
    ...
    MatDialogModule
  ],
  ...
})
```
</details>

<details><summary>8b) Add the <code>AddAstronautComponent</code> to the <code>entryComponents</code> property of the module. This is needed because this component is added programmatically rather than being part of another component's template.</summary>

```ts
@NgModule({
  ...
  entryComponents: [AddAstronautComponent]
  ...
})
```
</details>

<details><summary>8b) Add a click event to the FAB and call a method on the component to open the dialog
</summary>

`app.component.html`
```html
<button mat-fab (click)="addAstronaut()"><mat-icon>add</mat-icon></button>
```
`app.component.ts`
```ts
import { MatDialog } from '@angular/material/dialog';
import { AddAstronautComponent } from './add-astronaut/add-astronaut.component';

constructor(astronautService: AstronautService, private dialog: MatDialog) {

addAstronaut() {
  this.dialog.open(AddAstronautComponent, {
    width: '500px',
    ariaLabel: 'Add an astronaut'
  });
}
```
</details>

<details><summary>8b) Inject <code>MatDialogRef&lt;AddAstronautComponent&gt;</code> into <code>AddAstronautComponent</code> and the following method to allow the dialog to close when the user clicks away</summary>

```ts
  constructor(private dialogRef: MatDialogRef<AddAstronautComponent>) { }

  close(): void {
    this.dialogRef.close();
  }
```
</details>
<br/>
<details><summary>8c) Add a form that includes a few different Angular Material components. This is open-ended, but you can see the code that I wrote below.</summary>

`app.module.ts`
```ts
  import { MatRadioModule } from '@angular/material/radio';
  import { MatDatepickerModule } from '@angular/material/datepicker';
  import { MatNativeDateModule } from '@angular/material';
  import { MatSelectModule  } from '@angular/material/select';

  import { ReactiveFormsModule } from '@angular/forms';

  @NgModule({
    ...
    imports: [
      ...
      MatRadioModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatSelectModule,

      ReactiveFormsModule,
    ],
    ...
  })
```
`add-astronaut.component.ts`
```ts 

import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AstronautService } from '../astronaut.service';
import { Observable } from 'rxjs';
import { Option } from '../types';
import { map } from 'rxjs/operators';

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

  saveAstronaut() {
    // Save to backend
    // Display new astronaut
    console.log(this.astronaut.value);
    this.close();
  }

}
```

`add-astronaut.component.html`
```html 
<h2>Add astronaut</h2>
<form [formGroup]="astronaut" (ngSubmit)="saveAstronaut()">
  <mat-form-field>
    <input matInput required placeholder="First name" type="text" formControlName="firstName">
  </mat-form-field>
  <mat-form-field>
    <input matInput required placeholder="Last name" type="text" formControlName="lastName">
  </mat-form-field>
  <mat-form-field>
    <input maxLength="1" matInput placeholder="Middle initial" type="text" formControlName="middleInitial">
  </mat-form-field>
  <mat-radio-group formControlName="active">
    <mat-radio-button [value]="true" name="active">
      Active
    </mat-radio-button>
    <mat-radio-button [value]="false" name="active">
      Inactive
    </mat-radio-button>
  </mat-radio-group>
  <mat-form-field>
    <input matInput required [matDatepicker]="picker" placeholder="Birthdate" formControlName="birthdate">
    <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
    <mat-datepicker #picker></mat-datepicker>
  </mat-form-field>
  <mat-form-field>
    <mat-label>Undergraduate major</mat-label>
    <select matNativeControl required formControlName="undergraduateMajor">
      <option *ngFor="let major of (undergraduateMajors | async)" [value]="major">
        {{ major }}
      </option>
    </select>
  </mat-form-field>
  <button mat-raised-button [disabled]="!astronaut.valid" [class.disabled]="!astronaut.valid">Save</button>
  <button mat-button type="button" (click)="close()">Cancel</button>
</form>
```

`add-astronaut.component.css`
```css
mat-form-field {
  width: 100%;
}

mat-radio-button {
  margin-right: 1.25em;
}

mat-radio-button {
  padding-bottom: .75em;
}

mat-select {
  padding-bottom: 1.25em;
}
```

</details>
