* **Step 1 <-**
* [Step 2](./step_2.md)
* [Step 3](./step_3.md)
* [Step 4](./step_4.md)
* [Step 5](./step_5.md)
* [Step 6](./step_6.md)
* [Step 7](./step_7.md)

### [Full Demo](https://stackblitz.com/github/rnocc/blast-off-with-am/tree/final)

### [Open this StackBlitz to get started](https://stackblitz.com/github/rnocc/blast-off-with-am/tree/start)
### [Step 1 completed demo](https://stackblitz.com/github/rnocc/blast-off-with-am/tree/step-1)

## Step 1

We already have a StackBlitz instance with some data, a service, and some types. `ng add @angular/material` has already been run, so Angular Material is ready to be used in the project. The pre-built theme is "deeppurple-amber."

In this step, you will add a `<mat-toolbar>` component.

<details>
<summary>Import the <code>MatToolbarModule</code> into AppModule</summary>

`app.module.ts` 

```ts
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  ...
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
  ],
  ...
})
```
</details>

<details>
<summary>Replace the welcome message with the toolbar. Make it deeppurple.</summary>

`app.component.html` 

```html
<mat-toolbar color="primary">
  <h1>Astronaut Directory</h1>
</mat-toolbar>
```
</details>
