* [Step 1](./step_1.md)
* [Step 2](./step_2.md)
* [Step 3](./step_3.md)
* [Step 4](./step_4.md)
* [Step 5](./step_5.md)
* [Step 6](./step_6.md)
* **Step 7 <-**
* [Step 8](./step_8.md)

### [Step 7 setup demo](https://stackblitz.com/github/rnocc/blast-off-with-am/tree/step-6)
### [Step 7 completed demo](https://stackblitz.com/github/rnocc/blast-off-with-am/tree/step-7)

## Step 7

In this step, you will add a custom theme with NASA's colors

<summary>First, go to <a href="https://materialtheme.arcsine.dev">this Material theme generator</a> and generate a theme with NASA's primary (#105bd8) and secondary (#02bfe7) colors. Click the <strong>Copy Angular SCSS</strong> button. </summary>

<br/>

<details><summary>Create a file called <code>theme.scss</code> in the root of the <code>src</code> folder and paste in the generated code.</summary>

`theme.scss`
```scss
/**
* Generated theme by Material Theme Generator
* https://material-theme-generator.travetto.io
*/

@import '~@angular/material/theming';
// Include the common styles for Angular Material. We include this here so that you only
// have to load a single css file for Angular Material in your app.

// Fonts
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');

$fontConfig: (
  display-4: mat-typography-level(112px, 112px, 300, 'Roboto', -0.0134em),
  display-3: mat-typography-level(56px, 56px, 400, 'Roboto', -0.0089em),
  display-2: mat-typography-level(45px, 48px, 400, 'Roboto', 0.0000em),
  display-1: mat-typography-level(34px, 40px, 400, 'Roboto', 0.0074em),
  headline: mat-typography-level(24px, 32px, 400, 'Roboto', 0.0000em),
  title: mat-typography-level(20px, 32px, 500, 'Roboto', 0.0075em),
  subheading-2: mat-typography-level(16px, 28px, 400, 'Roboto', 0.0094em),
  subheading-1: mat-typography-level(15px, 24px, 500, 'Roboto', 0.0067em),
  body-2: mat-typography-level(14px, 24px, 500, 'Roboto', 0.0179em),
  body-1: mat-typography-level(14px, 20px, 400, 'Roboto', 0.0179em),
  button: mat-typography-level(14px, 14px, 500, 'Roboto', 0.0893em),
  caption: mat-typography-level(12px, 20px, 400, 'Roboto', 0.0333em),
  input: mat-typography-level(inherits, 1.125, 400, 'Roboto', 1.5px)
);

// Foreground Elements

// Light Theme Text
$dark-text: #000000;
$dark-primary-text: rgba($dark-text, 0.87);
$dark-accent-text: rgba($dark-primary-text, 0.54);
$dark-disabled-text: rgba($dark-primary-text, 0.38);
$dark-dividers: rgba($dark-primary-text, 0.12);
$dark-focused: rgba($dark-primary-text, 0.12);

$mat-light-theme-foreground: (
  base:              black,
  divider:           $dark-dividers,
  dividers:          $dark-dividers,
  disabled:          $dark-disabled-text,
  disabled-button:   rgba($dark-text, 0.26),
  disabled-text:     $dark-disabled-text,
  elevation:         black,
  secondary-text:    $dark-accent-text,
  hint-text:         $dark-disabled-text,
  accent-text:       $dark-accent-text,
  icon:              $dark-accent-text,
  icons:             $dark-accent-text,
  text:              $dark-primary-text,
  slider-min:        $dark-primary-text,
  slider-off:        rgba($dark-text, 0.26),
  slider-off-active: $dark-disabled-text,
);

// Dark Theme text
$light-text: #ffffff;
$light-primary-text: $light-text;
$light-accent-text: rgba($light-primary-text, 0.7);
$light-disabled-text: rgba($light-primary-text, 0.5);
$light-dividers: rgba($light-primary-text, 0.12);
$light-focused: rgba($light-primary-text, 0.12);

$mat-dark-theme-foreground: (
  base:              $light-text,
  divider:           $light-dividers,
  dividers:          $light-dividers,
  disabled:          $light-disabled-text,
  disabled-button:   rgba($light-text, 0.3),
  disabled-text:     $light-disabled-text,
  elevation:         black,
  hint-text:         $light-disabled-text,
  secondary-text:    $light-accent-text,
  accent-text:       $light-accent-text,
  icon:              $light-text,
  icons:             $light-text,
  text:              $light-text,
  slider-min:        $light-text,
  slider-off:        rgba($light-text, 0.3),
  slider-off-active: rgba($light-text, 0.3),
);

// Background config
// Light bg
$light-background:    #fafafa;
$light-bg-darker-5:   darken($light-background, 5%);
$light-bg-darker-10:  darken($light-background, 10%);
$light-bg-darker-20:  darken($light-background, 20%);
$light-bg-darker-30:  darken($light-background, 30%);
$light-bg-lighter-5:  lighten($light-background, 5%);
$dark-bg-alpha-4:     rgba(#2c2c2c, 0.04);
$dark-bg-alpha-12:    rgba(#2c2c2c, 0.12);

$mat-light-theme-background: (
  background:               $light-background,
  status-bar:               $light-bg-darker-20,
  app-bar:                  $light-bg-darker-5,
  hover:                    $dark-bg-alpha-4,
  card:                     $light-bg-lighter-5,
  dialog:                   $light-bg-lighter-5,
  disabled-button:          $dark-bg-alpha-12,
  raised-button:            $light-bg-lighter-5,
  focused-button:           $dark-focused,
  selected-button:          $light-bg-darker-20,
  selected-disabled-button: $light-bg-darker-30,
  disabled-button-toggle:   $light-bg-darker-10,
  unselected-chip:          $light-bg-darker-10,
  disabled-list-option:     $light-bg-darker-10,
);

// Dark bg
$dark-background:     #2c2c2c;
$dark-bg-lighter-5:   lighten($dark-background, 5%);
$dark-bg-lighter-10:  lighten($dark-background, 10%);
$dark-bg-lighter-20:  lighten($dark-background, 20%);
$dark-bg-lighter-30:  lighten($dark-background, 30%);
$light-bg-alpha-4:    rgba(#fafafa, 0.04);
$light-bg-alpha-12:   rgba(#fafafa, 0.12);

// Background palette for dark themes.
$mat-dark-theme-background: (
  background:               $dark-background,
  status-bar:               $dark-bg-lighter-20,
  app-bar:                  $dark-bg-lighter-5,
  hover:                    $light-bg-alpha-4,
  card:                     $dark-bg-lighter-5,
  dialog:                   $dark-bg-lighter-5,
  disabled-button:          $light-bg-alpha-12,
  raised-button:            $dark-bg-lighter-5,
  focused-button:           $light-focused,
  selected-button:          $dark-bg-lighter-20,
  selected-disabled-button: $dark-bg-lighter-30,
  disabled-button-toggle:   $dark-bg-lighter-10,
  unselected-chip:          $dark-bg-lighter-20,
  disabled-list-option:     $dark-bg-lighter-10,
);

// Compute font config
@include mat-core($fontConfig);

// Theme Config

$mat-primary: (
  main: #105bd8,
  lighter: #b7cef3,
  darker: #0940c8,
  200: #105bd8, // For slide toggle,
  contrast : (
    main: $light-primary-text,
    lighter: $dark-primary-text,
    darker: $light-primary-text,
  )
);
$theme-primary: mat-palette($mat-primary, main, lighter, darker);

$mat-accent: (
  main: #02bfe7,
  lighter: #b3ecf8,
  darker: #01a9dd,
  200: #02bfe7, // For slide toggle,
  contrast : (
    main: $dark-primary-text,
    lighter: $dark-primary-text,
    darker: $light-primary-text,
  )
);
$theme-accent: mat-palette($mat-accent, main, lighter, darker);

$mat-warn: (
  main: #ff0000,
  lighter: #ffb3b3,
  darker: #ff0000,
  200: #ff0000, // For slide toggle,
  contrast : (
    main: $light-primary-text,
    lighter: $dark-primary-text,
    darker: $light-primary-text,
  )
);
$theme-warn: mat-palette($mat-warn, main, lighter, darker);;

$theme: mat-light-theme($theme-primary, $theme-accent, $theme-warn);
$altTheme: mat-dark-theme($theme-primary, $theme-accent, $theme-warn);

// Theme Init
@include angular-material-theme($theme);

.theme-alternate {
  @include angular-material-theme($altTheme);
}


// Specific component overrides, pieces that are not in line with the general theming

// Handle buttons appropriately, with respect to line-height
.mat-raised-button, .mat-stroked-button, .mat-flat-button {
  padding: 0 1.15em;
  margin: 0 .65em;
  min-width: 3em;
  line-height: 36.4px
}

.mat-standard-chip {
  padding: .5em .85em;
  min-height: 2.5em;
}
```
</details>

<details><summary>Update the <code>angular.json</code> file to include <code>src/theme.scss</code> instead of the <code>deeppurple-amber.css</code> file (there are two references to the theme file, so update both).</summary>

```json
  "styles": [
    "src/theme.scss",
    "src/styles.css"
  ],
```
