* [Step 1](./step_1.md)
* [Step 2](./step_2.md)
* [Step 3](./step_3.md)
* [Step 4](./step_4.md)
* [Step 5](./step_5.md)
* [Step 6](./step_6.md)
* **Step 7 <-**

### [Step 7 setup demo]()
### [Step 7 completed demo]()

## Step 7

In this step, you will give the user the ability to view the astronaut information as a table rather than cards

<details><summary>Add a toolbar to the <code>mat-sidenav-content</code></summary>

```html
<mat-sidenav-content>
  <mat-toolbar>
    <button mat-raised-button [color]="viewTable ? 'primary' : 'default'" (click)="viewTable = !viewTable">
      <mat-icon>grid_on</mat-icon>
      Table view
    </button>
    <button mat-raised-button [color]="!viewTable ? 'primary' : 'default'" (click)="viewTable = !viewTable">
      <mat-icon>view_list</mat-icon>
      Card view
    </button>
  </mat-toolbar>
...
</mat-sidenav-content>
```
