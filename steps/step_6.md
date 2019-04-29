* [Step 1](./step_1.md)
* [Step 2](./step_2.md)
* [Step 3](./step_3.md)
* [Step 4](./step_4.md)
* [Step 5](./step_5.md)
* **Step 6 <-**
* [Step 7](./step_7.md)

### <a href="https://stackblitz.com/github/rnocc/blast-off-with-am/tree/step-5" target="_blank">Step 6 setup demo</a>
### <a href="https://stackblitz.com/github/rnocc/blast-off-with-am/tree/step-6" target="_blank">Step 6 completed demo</a>

## Step 6

In this step, you will add a menu to the toolbar with a button to log out.

<details><summary>Look at the docs and try this on your own! Get the menu working before you work on the icon. </summary>

You need to add the `MatMenuModule` to `AppModule`.

Here's the code for the menu:
```html
  <button mat-button [matMenuTriggerFor]="menu">
    <mat-icon>account_circle</mat-icon>
  </button>
  <mat-menu #menu="matMenu">
    <button mat-menu-item class="menu-button">Log out</button>
  </mat-menu>
```

And a little bit of CSS:
```css
.menu-button {
  grid-area: menu;
}

mat-menu {
  display: none
}
```
</details>
