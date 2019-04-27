* [Step 1](./step_1.md)
* [Step 2](./step_2.md)
* **Step 3 <-**
* [Step 4](./step_4.md)
* [Step 5](./step_5.md)
* [Step 6](./step_6.md)
* [Step 7](./step_7.md)

### [Step 3 setup demo](https://stackblitz.com/github/rnocc/blast-off-with-am/tree/step-2)
### [Step 3 completed demo](https://stackblitz.com/github/rnocc/blast-off-with-am/tree/step-3)

## Step 3

In this step, you will add a card for each astronaut with an image and some biographical details. The astronaut data is available in the component as astronauts (it's an observable, so remember to use <code>astronauts | async</code>)

<details><summary>Add the <code>MatCardModule</code></summary>

`app.module.ts`

```ts
import { MatCardModule } from '@angular/material/card';

@NgModule({
  ...
  imports: [
    ...
    MatCardModule,
  ],
  ...
})
```
</details>

<details><summary>Replace the placeholder word "Main content" with the <code>mat-card</code>s (using <code>*ngFor</code>) in <code>mat-sidenav-content</code>. Give each card a title, image, and some content.</summary>

`app.component.html` 

```html
  <mat-sidenav-content role="region">
    <mat-card *ngFor="let astronaut of astronauts | async">
      <mat-card-title>{{astronaut.name}}</mat-card-title>
      <img mat-card-image [src]="astronaut.photo">
      <mat-card-content>
        <dl>
          <dt class="mat-small">Name</dt>
          <dd class="mat-body-2">{{ astronaut.name }}</dd>
          <dt class="mat-small">Space walks</dt>
          <dd class="mat-body-2">{{ astronaut.spaceWalks }}</dd>
          <dt class="mat-small">Undergraduate major</dt>
          <dd class="mat-body-2">{{ astronaut.undergraduateMajor }}</dd>
        </dl>
      </mat-card-content>
    </mat-card>
  </mat-sidenav-content>
```
</details>

<details><summary>Add some layout styles</summary>

`app.component.css` 

```css
mat-sidenav-content {
  padding: 16px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, 280px);
}

mat-card {
  width: 232px;
}

[mat-card-image] {
  height: 330px;
}

dl {
  display: grid;
  grid-template-columns: 2fr 3fr;
}

dd {
  margin-inline-start: 0;
}
```
</details>
