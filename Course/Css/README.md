# CSS

CSS is a language that describes the style of an HTML document. Describes how HTML elements should be displayed.

**Important**: CSS works in cascade, this means that the below elements has more priority than the above elements. Except:  _class_ and _id_ types, this elements has his own priority, this is: _Structure Elements_ < _Class elements_ < _Id elements_. All this is known as __specifity__. 


[Spcifity Calculator](https://specificity.keegan.st/)

## Pseudo-elements:

A CSS pseudo-element is used to style specified parts of an element. For example, it can be used to:
* Style the first letter, or line, of an element.
* Insert content before, or after, the content of an element.

#### Syntax:

```Css
selector::pseudo-element {
    property:value;
}
```

Example:

```Css
p::first-line {   /*Only affects to the first line of the <p> elements*/

    color: #ff0000;
    font-variant: small-caps;
}
```

[More Info](https://www.w3schools.com/css/css_pseudo_elements.asp)

#### Flexbox:

[Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
[Flexbox Cheat Sheet](http://apps.workflower.fi/css-cheats/?name=flexbox)
