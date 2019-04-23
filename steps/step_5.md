* [Step 1](./step_1.md)
* [Step 2](./step_2.md)
* [Step 3](./step_3.md)
* [Step 4](./step_4.md)
* **Step 5 <-**
* [Step 6](./step_6.md)

### [Step 5 setup demo](https://stackblitz.com/github/rnocc/blast-off-with-am/tree/step-4)
### [Step 5 completed demo](https://stackblitz.com/github/rnocc/blast-off-with-am/tree/step-5)

## Step 5

In this step, you will turn the selected filter option into a chip
<details><summary>Add the NgModules for chips and icons </summary>

`app.module.ts` 

```ts


import { MatChipsModule } from '@angular/material/chips'; 
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  ...
  imports: [
    ...
    MatChipsModule,
    MatIconModule
  ],
  ...
})
```
</details>
<details><summary>Add an <code>ng-container</code> around the <code>mat-list-item</code> to only show if a filter for the category isn't selected (i.e. <code>filterState[filter.category] === ''</code>)</summary>

`app\app.component.html` 

```html
  <ng-container *ngIf="filterState[filter.category] === ''; else chip">
    <mat-list-item>
      ...
    </mat-list-item>
  </ng-container>
```
</details>

<details><summary>Add a <code>mat-chip</code> for the selected filter option. This can go right below the <code>ng-container</code> added above.</summary>

`app\app.component.html` 

```html
  <ng-template #chip>
    <mat-chip-list>
      <ng-container *ngFor="let val of filter.options">
        <mat-chip *ngIf="filterState[filter.category] === val" (removed)="changeFilter(filter.category, '')">
          {{val}}
          <mat-icon matChipRemove>cancel</mat-icon>
        </mat-chip>
      </ng-container>
    </mat-chip-list>
  </ng-template>
```
</details>
