* [Step 1](./step_1.md)
* [Step 2](./step_2.md)
* [Step 3](./step_3.md)
* [Step 4](./step_4.md)
* [Step 5](./step_5.md)
* [Step 6](./step_6.md)
* [Step 7](./step_7.md)
* **Step 8 <-**

### <a href="https://stackblitz.com/github/rnocc/blast-off-with-am/tree/step-7" target="_blank">Step 8 setup demo</a>
### <a href="https://stackblitz.com/github/rnocc/blast-off-with-am/tree/step-8" target="_blank">Step 8 completed demo</a>

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

<details><summary>Inject <code>MatDialogRef&lt;AddAstronautComponent&gt;</code> into <code>AddAstronautComponent</code> and the following method to allow the dialog to close when the user clicks away</summary>

```ts
  constructor(private dialogRef: MatDialogRef<AddAstronautComponent>) { }

  close(): void {
    this.dialogRef.close();
  }
```
</details>
