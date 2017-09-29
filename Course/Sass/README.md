# Sass

Sass (syntactically awesome stylesheets) is a style sheet language. Helps to developer to work with CSS. CSS on its own can be fun, but stylesheets are getting larger, more complex, and harder to maintain. This is where a preprocessor can help. Sass lets you use features that don't exist in CSS yet like variables, nesting, mixins, inheritance and other nifty goodies that make writing CSS fun again.

## Install Sass

Sass is a Gem from Ruby, this means that it's necesary install Ruby before install Sass. After install Ruby, go to the terminal and write:

```bash
$sudo gem install sass
```


## Use Sass

First, creates a _.scss_ file:

```bash
$touch nameFile.scss
```

Then, creates _.css_ & _.map.css_ files with:

```bash
$sass input.scss output.css
```

For to link _.scss_ file with the _.css_  file, and thus when saves changes in _.scss_ file this changes is applied to the other file:

```bash
$sass --watch <.scss file>:<.css file>
```

## Use Scss

### Variables:

In Sass we can create variable for store things like colors, fonts, etc and use it later in one or more components. 

Example:

```Scss
$primary-color: red; /* If i change the value of this var, then change the 
                        value of color in h1 and h2*/

h1 {
    color: $primary-color;
}

h2{
    color: $primary-color;   
}

```

Result css:

```css
h1 {
  color: red; 
}

h2 {
  color: red; 
}
```

### Nesting:

Sass will let you nest your CSS selectors in a way that follows the same visual hierarchy of your HTML. 

Example:

```scss
nav {
  ul {
    margin: 0;
    padding: 0;
  }

  li { display: inline-block; }

  a {
    display: block;
    text-decoration: none;
  }
}
```

Result css:

```css
nav ul {
  margin: 0;
  padding: 0;
}

nav li {
  display: inline-block;
}

nav a {
  display: block;
  text-decoration: none;
}
```

### @extend:

How to extend a class with the same properties and include news properties for the new class:

```scss
.message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.error{
    @extend .message;
    color: green;
}
```

Result css:

```css
.message, .error {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333; 
}

.error {
  color: green; 
}
```

