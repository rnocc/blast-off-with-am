* [Step 1](./step_1.md)
* [Step 2](./step_2.md)
* [Step 3](./step_3.md)
* **Step 4 <-**
* [Step 5](./step_5.md)
* [Step 6](./step_6.md)
* [Step 7](./step_7.md)
* [Step 8](./step_8.md)

### [Step 4 setup demo](https://stackblitz.com/github/rnocc/blast-off-with-am/tree/step-3)
### [Step 4 completed demo](https://stackblitz.com/github/rnocc/blast-off-with-am/tree/step-4)

## Step 4

In this step, you will add a search box and filter options

<details><summary>Add the needed NgModules</summary>
`app.module.ts` 

```ts
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  ...
  imports: [
    ...
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
  ],
  ...
})
```
</details>

<details><summary>Take out the sidenav placeholder text.</summary>

`app.component.html` 

```html
  <mat-sidenav mode="side" opened role="region">
  </mat-sidenav>
```
</details>
<details><summary>Add a search box to the <code>mat-sidenav</code>. Give it a placeholder called "Search astronauts" and add a <code>mat-divider</code> underneath</summary>

`app.component.html` 

```html
  <mat-sidenav mode="side" opened role="region">
    <mat-form-field class="search">
      <input matInput placeholder="Search astronauts">
    </mat-form-field>
    <mat-divider></mat-divider>
  </mat-sidenav>
```
</details>
<details><summary>Under the divider, use an <code>*ngFor</code> to add a <code>mat-list</code> for each filter</summary>

`app.component.html` 

```html
  <mat-sidenav mode="side" opened role="region">
    <mat-form-field class="search">
      <input matInput placeholder="Search astronauts">
    </mat-form-field>
    <mat-divider></mat-divider>
    <ng-container *ngFor="let filter of filters | async; last as last">
      <mat-list>
        <h3 matSubheader>{{ filter.displayName }}</h3>

        <mat-list-item *ngFor="let val of filter.options">
          <button mat-button class="list-button" (click)="changeFilter(filter.category, val)">
            {{ val }}
          </button>
        </mat-list-item>

      </mat-list>
      <mat-divider *ngIf="!last"></mat-divider>
    </ng-container>
  </mat-sidenav>
```
</details>

<details><summary>Add some layout styles</summary>

`app.component.css` 

```css
  mat-sidenav {
    width: 310px;
  }

  .search {
    padding: 0 16px;
  }

  .list-button {
    width: 100%;
    text-align: left;
  }

  mat-chip.mat-chip {
    margin: 0 16px 16px;
  }

  ::ng-deep .mat-chip-list-wrapper {
    margin: 0 !important;
  }
```
</details>
