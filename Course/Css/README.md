# CSS

CSS is a language that describes the style of an HTML document. Describes how HTML elements should be displayed.

**Important**: CSS works in cascade, this means that the below elements has more priority than the above elements. Except:  _class_ and _id_ types, this elements has his own priority, this is: _Structure Elements_ < _Class elements_ < _Id elements_. All this is known as __specifity__. 


[Spcifity Calculator](https://specificity.keegan.st/)

## Pseudo-elements

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

## Flexbox

Flexbox is a new layout mode in CSS3. Flexbox consists of flex containers and flex items.

A flex container is declared by setting the display property of an element to either flex (rendered as a block) or inline-flex (rendered as inline).

Inside a flex container there is one or more flex items.

[Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
[Flexbox Cheat Sheet](http://apps.workflower.fi/css-cheats/?name=flexbox)

[More Info](https://www.w3schools.com/css/css3_flexbox.asp)

## MediaQuery (for resposive web design)

Media queries in CSS3 extend the CSS2 media types idea: Instead of looking for a type of device, they look at the capability of the device.

Media queries can be used to check many things, such as:

* width and height of the viewport.
* width and height of the device.
* orientation (is the tablet/phone in landscape or portrait mode?).
* resolution.

Using media queries are a popular technique for delivering a tailored style sheet to tablets, iPhone, and Androids.

[__List of all MediaQuery rules__](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp)

[More Info](https://learn.shayhowe.com/advanced-html-css/responsive-web-design/) [Example](https://css-tricks.com/css-media-queries/)
