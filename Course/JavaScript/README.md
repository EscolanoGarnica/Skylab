# JAVASCRIPT

## Callback function

A callback function is executed after the current effect is 100% finished.

Example:

```Javascript
function sum(a,b,callback)
{
    return callback(a+b);
}

sum(2,3, function(result) {return result*10});
```


Another example: The example below has a callback parameter that is a function that will be executed after the hide effect is completed

```Javascript
$("button").click(function(){
    $("p").hide("slow", function(){
        alert("The paragraph is now hidden");
    });
});
```

## Prototype


### Ternary operator

The ternary operator "?:" return one of the two posible expression, depending on a condition.

##### Syntax:

```Javascript
condition ? expression1 : expression2
```

##### Parameters:

* Condition: any boolean expresion.

* Expresion1: expresion returned if condition is true.

* Expresion2: expresion returned if condition is false.

### Regex
Link:https://regex101.com
## Higher order functions

### map()

### forEach()

### filter()

### reduce()



