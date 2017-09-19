# JAVASCRIPT

### Callback function

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
