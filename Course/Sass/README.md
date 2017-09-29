# Sass

Sass (syntactically awesome stylesheets) is a style sheet language. Helps to developer to work with CSS. CSS on its own can be fun, but stylesheets are getting larger, more complex, and harder to maintain. This is where a preprocessor can help. Sass lets you use features that don't exist in CSS yet like variables, nesting, mixins, inheritance and other nifty goodies that make writing CSS fun again.

## Install Sass:

Sass is a Gem from Ruby, this means that it's necesary install Ruby before install Sass. After install Ruby, go to the terminal and write:

```bash
$sudo gem install sass
```


##Use Sass:

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

## Use Scss:

#### @extend

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

Result:

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

