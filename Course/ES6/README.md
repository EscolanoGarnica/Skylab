# ES 6

ECMAScript 6 (ES6) is the version 6 of Javascript. Introduces important changes, like _Arrow function_, _let_ and _const_ variables, and more.

### Arrow function

ES6 introduces the _Arrow function_ in order to write cleanest code.

##### Syntax:

Declare Arrow function:

```ES6
var suma = () => {return 1+1}     //no parameter
var suma = x => {return x+1}      //one parameter
var suma =(x,y) => {return x+y}   //two or more parameters
```

Return vars in Arrow function:

```ES6
var suma = () => 1+1           //function without 'return' but returns 1+1
var suma = () => {return 1+1}  //if i put '{' then put return too
```

How to define parameter in a function if the parameter is undefined:

```ES6
var suma = (x=1) => x+2     
suma()  //returns 3
suma(3) //returns 5
```

### Let and Const

ES6 introduces _let_ and _const_ like a new variable type. 
* Const: is a  constant, is inmutable.
* Let: his scope is local.

### Template Strings (Strings with ` `)

Template Strings use back-ticks (``) rather than the single or double quotes we're used to with regular strings.

Example:

```ES6
var string = `Hello World`
```

Concat var with _template string_:

```ES6
var name = 'Agust'
var age = 32

var string = `Hi, my name is ${name} and i has ${age} years old`
```

### Enhanced object properties

In ES6, the objects are defined in a simpler way:

```ES6
var x = 1
var y = 2

//Initialize object in ES5:
var obj1 ={
    x:x,
    y:y,
    f: function(){}
}

//Initialize object in ES6:
var obj2 ={
    x,
    y,
    f(){}
}

//obj1 and obj2 have the same properties.
```

### Rest operator

The _Rest operator_ is like _arguments_ but instead of taking all parameters, it only takes the undefined ones.

##### Syntax:

```ES6
...nameParameter
```

Example:

```ES6
example(1,2,3,4,5);

function example(a,b,...data,c){
    console.log(data)               //this print: [3,4,5]
}
```

### Spread operator

Pass the array elements to a functión, divides each element in a diferent parameter.

Example:

```ES6
var arr = [1,2,3,4];

function sum(a,b,c,d){ 
    return a+b+c+d;
}

sum(...arr)         //this return: 10
                    //in the function: a=1,b=2,c=3,d=4
```

### Destructuring assignment

The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

##### Syntax:

Simple examples:

```ES6
var list = [1,2,3,4]
var [a,b,c,d] = [1,2,3,4]
console.log(c)              //this print: 3
```

```ES6
const all = ['ax', 'why', 'zet'];
const [,,z] = all;

console.log(z)          //this print: zet
```

Rest Operator example:

```ES6
var list = [1,2,3,4]
var [a,b,...rest] = list
console.log(rest)           //this print: [3,4]
```

Define new var with object value:

```ES6
var p = {
    a:1,
    b:{
        x:2,
        y:3
    }
}
var {a:v, b:w} = p

console.log(v)      //this print: 1
console.log(w)      //this print: {x:2,y:3}

typeof v            //this print: "number"
typeof w            //this print: "object"
```

