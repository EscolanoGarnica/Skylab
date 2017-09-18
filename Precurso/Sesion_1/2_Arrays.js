
//a) Declara tu nombre completo en una array y muéstralo por pantalla separando cada letra por "/"

function myName()
{
	var arrMyName = ["Miguel Escolano"];
	arrMyName[0] = arrMyName[0].split(" ").join("");
	console.log(arrMyName[0].split("").join("/"));
}

//b) Ahora solo selecciona tu apellido y muestra cada letra separada por "|"

function myName()
{
	var arrMyName = ["Miguel Escolano"];
	arrMyName = arrMyName[0].split(" ");
	console.log(arrMyName[1].split("").join("|"));
}

//c) Ahora muestra cada letra de tu nombre con su posición (necesitarás un bucle for)

function myName()
{
	var arrMyName = ["Miguel"];
	for(var i = 0; i < arrMyName[0].length; i++)
	{
		console.log(i+1 + "º " + arrMyName[0].substring(i,i+1));
	}
}

//d)Como en el ejercicio anterior, pero seleccionando tu apellido

function myLastname()
{
	var arrMyName = ["Miguel Escolano"];
	for(var i = arrMyName[0].indexOf(" ") + 1; i < arrMyName[0].length; i++)
	{
		console.log(i+1 + "º " + arrMyName[0].substring(i,i+1));
	}
}

//e) Puedes indicarme las iniciales de tu nombre y apellido? Como en el ejercicio h de la sección de stri

function myInitials()
{
	var arrMyName = ["Miguel Escolano"];
	arrMyName = arrMyName[0].split(" ");
	console.log(arrMyName[0].substring(0,1) + "." + arrMyName[1].substring(0,1));
}

//f) Ahora, reformula la array, introduciendo tu nombre en primera posición, tu apellido en 
//segunda, y además añade en otra posicion tu edad. Muestra por pantalla solo tu nombre y tu 
//edad en un solo mensaje.

function myNameAndAge ()
{
	var arrMyData = ["Miguel","Escolano","32"];
	console.log("My name is " + arrMyData[0] + " and my age is " + arrMyData[2]);
}

//g) Prepara una función para añadir tu City a la array, muestra un mensaje mostrando el 
//contenido de toda la array, así aseguraremos los cambios.

function myCityAdd ()
{
	var arrMyData = ["Miguel","Escolano","32"];
	arrMyData.push("Barcelona")	;
	for (var i = 0; i < arrMyData.length ; i++)
	{
		console.log(arrMyData[i]);
	}
}

//h) Crea ahora, una funcion para eliminar la variable City y asegura los cambios.

function myCityDelete()
{
	var arrMyData = ["Miguel","Escolano","32","Barcelona"];
	arrMyData.pop();
	for (var i = 0; i < arrMyData.length ; i++)
	{
		console.log(arrMyData[i]);
	}
}

//j) Ahora, elimina el nombre y asegura los cambios 

function myNameDelete()
{
	var arrMyData = ["Miguel","Escolano","32","Barcelona"];
	arrMyData.shift();
	for (var i = 0; i < arrMyData.length ; i++)
	{
		console.log(arrMyData[i]);
	}
}

//k) Quiero volver a introducir mi nombre pero si lo introduzco utilizando push() estará en 
//la última posición, como podria hacer para introducirlo en la primera posición?

function addNameInFirstPosition()
{
	var arrMyData = ["Escolano","32","Barcelona"];
	arrMyData.splice(0,0,"Miguel");
	for (var i = 0; i < arrMyData.length ; i++)
	{
		console.log(arrMyData[i]);
	}
}

//l) Ahora, declara una array con los números del 0 a 10 y muestra cada número multiplicado por dos.

function arrayPorDos()
{
	arrNumbers = [0,1,2,3,4,5,6,7,8,9,10];
	for (var i = 0; i < arrNumbers.length ; i++)
	{
		console.log(arrNumbers[i] * 2);
	}
}

//l1) Reformula la función para que puedas especificar por cual número debería multiplicar cada elemento de la array.
function arrayPorNumero()
{
	arrNumbers = [0,1,2,3,4,5,6,7,8,9,10];
	var number = prompt ("Introduce un numero");
	for (var i = 0; i < arrNumbers.length ; i++)
	{
		console.log(arrNumbers[i] * number);
	}
}

//m) Podrías mostrarlos en el orden inverso?
function arrayReverse()
{
	arrNumbers = [0,1,2,3,4,5,6,7,8,9,10];
	arrNumbers.reverse();
	for (var i = 0; i < arrNumbers.length ; i++)
	{
		console.log(arrNumbers[i]);
	}
}
