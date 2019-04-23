* [Step 1](./step_1.md)
* **Step 2 <-**
* [Step 3](./step_3.md)
* [Step 4](./step_4.md)
* [Step 5](./step_5.md)
* [Step 6](./step_6.md)

### [Step 2 setup demo](https://stackblitz.com/github/rnocc/blast-off-with-am/tree/step-1)
### [Step 2 completed demo](https://stackblitz.com/github/rnocc/blast-off-with-am/tree/step-2)

## Step 2

In this step, you will add a `<mat-sidenav>` component and scaffold out the app.

<details>
<summary>Import <code>MatSidenavModule</code></summary>

`app.module.ts` Add the `MatSidenavModule`

```ts
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  ...
  imports: [
    ...
    MatSidenavModule,
  ],
  ...
})
```
</details>

<details>
<summary>Add the <code>mat-sidenav-container</code> along with its child components to <code>AppComponent</code></summary>

`app.component.html` 

```html
<mat-sidenav-container>
  <mat-sidenav mode="side" opened role="region">Sidenav content</mat-sidenav>
  <mat-sidenav-content role="region">Main content</mat-sidenav-content>
</mat-sidenav-container>
```

</details>


<details>
<summary>Add CSS to lay out the page</summary>

`app.component.css` 
```css
:host {
  height: 100vh;
  display: grid;
  grid-template: "toolbar"
                 "page-container" 1fr;
}

h1 {
  grid-area: title;
}

mat-toolbar {
  grid-area: toolbar;
  display: grid;
  grid-template:  "title menu" auto
  / 1fr 50px;
}

mat-sidenav-container {
  grid-area: page-container
}
```
</details>
