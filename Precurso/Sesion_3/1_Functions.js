//a) Primero, creamos una función que nos cree un saludo, pasa tu nombre como parámetro y 
//devuélvelo por la consola.

function sayHello(name) {
	console.log('Hello my name is ' + name);
}
sayHello('Nacho');

//b) Intenta retornar los valores en lugar de usar console.log
function sayHello(name) {
	return ('Hello my name is ' + name);
}
console.log (sayHello('Nacho'));

//c) Ahora, añade tu edad y concaténala al return
function sayHello(name, age) {
	return ('Hello my name is ' + name + ' and i have ' + age + ' years old');
}
console.log (sayHello('Nacho', 39));

//d) Iguala tu función a una variable y ejecútala
function sayHello(name, age) {
	return ('Hello my name is ' + name + ' and i have ' + age + ' years old');
}
var strHello =  sayHello('Nacho', 39);
console.log(strHello);

//e) Ahora declara otra funcion que devuelva tu edad y asigna su resultado a otra variable, 
//intenta imprimir sus dos resultados concatenados
function myName(name) {
	return ('Hello my name is' + name);
}
function myAge(age) {
	return (' and i have ' + age + ' years old');
}
var strName = myName("Nacho");
var strAge = myAge("39");
console.log(strName + strAge);

//e1) Intenta sumarle al resultado de tu segunda funcion, un numero random del 0-10 y 
//conviertelo todo a un solo string.
function myName() {
	return 'Nacho';
}
function myAge() {
	return 39;
}
var strName = myName();
var age = myAge();
var strAge = (age + Math.round(Math.random() * 10)).toString();

console.log(strName + ' ' + strAge);

//f) Ahora, todas las variables deberían ser pasadas como parámetro a las funciones.
function myName(name) {
	return name;
}
function myAge(age) {
	return	 age;
}
var strName = myName("Nacho");
var strAge = myAge("39");
console.log(strName + strAge);

//g) Intenta englobar todas las funciones en una sola funcion padre, el return de dicha función
//padre deberá ser la llamada a las funciones hijas
function global() {
	function myName(name) {
		return name;
	}
	function myAge(age) {
		return	 age;
	}
	var strName = myName("Nacho");
	var strAge = myAge("39");
	return (strName + ' ' + strAge);
}
global();

//h) Haz otra función hija que solo devuelva un número random, ese número random será el 
//argumento que se pasará como parámetro a la función age()
function global() {
	function myName(name) {
		return name;
	}
	function myAge(age) {
		return	 age;
	}
	function randomAge() {
		return Math.round(Math.random() * 100);
	}
	var strName = myName("Nacho");
	var strAge = myAge(randomAge());
	return (strName + ' ' + strAge);
}
global();

//i) Ahora, limita el random de 0 a 50, Muestra un mensaje si el output age es < 20 y otro si 
//es de 21 - 50
function global() {
	function myName(name) {
		return name;
	}
	function myAge(age) {
		return	 age;
	}
	function randomAge() {
		return Math.round(Math.random() * 50);
	}
	var strName = myName("Nacho");
	var strAge = myAge(randomAge());
	if (strAge < 20) {
		console.log('Eres joven');
	} else if (strAge > 20 && strAge <= 50) {
		console.log('viejales');
	}
	return (strName + ' ' + strAge);
}
global();

//j) Al return de la función name(), concaténale otro mensaje
function global() {
	function myName(name) {
		return name + ' Torrella';
	}
	function myAge(age) {
		return	 age;
	}
	function randomAge() {
		return Math.round(Math.random() * 50);
	}
	var strName = myName("Nacho");
	var strAge = myAge(randomAge());
	if (strAge < 20) {
		console.log('Eres joven');
	} else if (strAge > 20 && strAge <= 50) {
		console.log('viejales');
	}
	return (strName + ' ' + strAge);
}
global();

//k) Ahora, modifica el return de la función padre para que devuelva sus datos en un mensaje 
//amigable
function global() {
	function myName(name) {
		return name + ' Torrella';
	}
	function myAge(age) {
		return	 age;
	}
	function randomAge() {
		return Math.round(Math.random() * 50);
	}
	var strName = myName("Nacho");
	var strAge = myAge(randomAge());
	if (strAge < 20) {
		console.log('Eres joven');
	} else if (strAge > 20 && strAge <= 50) {
		console.log('viejales');
	}
	return ('Hola ' + strName + ', voy a divinar tu edad: ' + strAge + '!!!!');
}
global();

//l) Modifica la primera función y la función padre para, si el parámetro introducido no es tu 
//nombre, no siga con la segunda llamada
function global() {
	function myName(name) {
		if (name === 'Nacho') {
			return name + ' Torrella';
		} else { return false;}
	}
	function myAge(age) {
		return	 age;
	}
	function randomAge() {
		return Math.round(Math.random() * 50);
	}
	var strName = myName("Toni");
	if (strName === false) {
		return
	}
	var strAge = myAge(randomAge());
	if (strAge < 20) {
		console.log('Eres joven');
	} else if (strAge > 20 && strAge <= 50) {
		console.log('viejales');
	}
	return ('Hola ' + strName + ', voy a divinar tu edad: ' + strAge + '!!!!');
}
global();

//m) Vamos a complicarlo un poco... El número random debería generarse en otra función separada 
//del padre. Retorna a la funcion padre y concaténalo en el return padre.
function randomAge() {
	return Math.round(Math.random() * 50);
}
function global() {
	function myName(name) {
		if (name === 'Nacho') {
			return name + ' Torrella';
		} else { 
			return false;
		}
	}
	function myAge(age) {
		return	age;
	}	
	var strName = myName("Nacho");
	if (strName === false) {
		return
	}
	var strAge = myAge(randomAge());
	if (strAge < 20) {
		console.log('Eres joven');
	} else if (strAge > 20 && strAge <= 50) {
		console.log('viejales');
	}
	return ('Hola ' + strName + ', voy a divinar tu edad: ' + strAge + '!!!!');
}
global();

//n) Refactorizemos nuestro código dejando todas las funciones separadas del padre, éste último
// se encargará de llamarlas todas y mostrar sus resultados.

function randomAge() {
	return Math.round(Math.random() * 50);
}
function myName(name) {
	if (name === 'Nacho') {
		return name + ' Torrella';
	} else { 
		return false;
	}
}
function myAge(age) {
	return	age;
}
function global() {
	var strName = myName("Nacho");
	if (strName === false) {
		return
	}
	var strAge = myAge(randomAge());
	if (strAge < 20) {
		console.log('Eres joven');
	} else if (strAge > 20 && strAge <= 50) {
		console.log('viejales');
	}
	return ('Hola ' + strName + ', voy a divinar tu edad: ' + strAge + '!!!!');
}
global()

//ñ) Intenta hacer push de todos los resultados de las funciones a una array declarada en el 
//padre, muestra los resultados de esta array como siempre.
function randomAge() {
	return Math.round(Math.random() * 50);
}
function myName(name) {
	if (name === 'Nacho') {
		return name + ' Torrella';
	} else { 
		return false;
	}
}
function myAge(age) {
	return	age;
}
function global() {
	var globalArray = [];
	globalArray.push(myName("Nacho"));
	if (globalArray[0] === false) {
		return
	}
	globalArray.push(myAge(randomAge()));
	if (globalArray[1] < 20) {
		console.log('Eres joven');
	} else if (globalArray[1] > 20 && globalArray[1] <= 50) {
		console.log('viejales');
	}
	return ('Hola ' + globalArray[0] + ', voy a divinar tu edad: ' + globalArray[1] + '!!!!');
}
global()

//o) Crea una funcion que llame a nuestra funcion father(), ésta, a parte de llamarla, 
//deberá hacer otro push "hello from the dark side..." a la array que crea father(). 
//Muestra toda la array completa.

function randomAge() 
{
	return Math.round(Math.random() * 50);
}
function myName(name) 
{
	if (name === 'Nacho') {
		return name + ' Torrella';
	} else { 
		return false;
	}
}
function myAge(age) 
{
	return	age;
}
function global(message) 
{
	var globalArray = [];

	globalArray.push(myName("Nacho"));
	
	if (globalArray[0] === false) {
		return
	}

	globalArray.push(myAge(randomAge()));
	globalArray.push(message);

	if (globalArray[1] < 20) {
		console.log('Eres joven');
	} else if (globalArray[1] > 20 && globalArray[1] <= 50) {
		console.log('viejales');
	}

	return ('Hola ' + globalArray[0] + ', voy a divinar tu edad: ' + globalArray[1] + '!!!! ' + 
		globalArray[2]);
}
function fatherGlobal()
{
	console.log(global("hello from the dark side..."));
}

fatherGlobal();

/*p) 🔞 👊🏼 Llama a ésta nueva función dos veces, muestra sus resultados por pantalla y 
compara sus randomNums, mostrando un mensaje indicando cual es mayor. El nombre pasado por
 parámetro también deberá ser random entre una array de nombres, con lo cual, también deberás 
 refactorizar las funciones hijas */

function randomAge() 
{
	return Math.round(Math.random() * 50);
}

function randomName() 
{
	var arrayNames = ["Michel","Nacho","Toni","Juan","George","Jose","Andreu","Alex"];

	var randomIndex = Math.round(Math.random() * (arrayNames.length-1));

	return arrayNames[randomIndex];
}

function myName(name) 
{
	return name;
}
function myAge(age) 
{
	return	age;
}
function father() 
{
	var fatherArray = [];

	fatherArray.push(myName(randomName()));
	fatherArray.push(myAge(randomAge()));



	return fatherArray;
}
function fatherGlobal()
{
	var father1 = father();
	var father2 = father();

	console.log(father1[0] + " tiene " + father1[1] + " años.");
	console.log(father2[0] + " tiene " + father2[1] + " años.");

	if(father1[1] > father2[1])
	{
		console.log(father1[0] + " es mayor que " + father2[0]);
	}else if(father1[1] < father2[1])
	{
		console.log(father2[0] + " es mayor que " + father1[0]);
	}else	
	{
		console.log(father1[0] + " y " + father2[0] + " son iguales.");
	}
}

fatherGlobal();

//p1) En lugar de retornar los valores como una array, prepara tus funciones para que devuelvan 
//los resultados como OBJECTS. Muestra por pantalla los objetos sin estilizar el output.

function randomAge() 
{
	return Math.round(Math.random() * 50);
}

function randomName() 
{
	var arrayNames = ["Michel","Nacho","Toni","Juan","George","Jose","Andreu","Alex"];

	var randomIndex = Math.round(Math.random() * (arrayNames.length-1));

	return arrayNames[randomIndex];
}

function myName(name) 
{
	return name;
}
function myAge(age) 
{
	return	age;
}
function father() 
{
	var person = {};

	person.name = myName(randomName());
	person.age = myAge(randomAge());

	return person;
}
function fatherGlobal()
{
	var father1 = father();
	var father2 = father();

	console.log(father1);
	console.log(father2);

	if(father1.age > father2.age)
	{
		console.log(father1.name + " es mayor que " + father2.name);
	}else if(father1.age < father2.age)
	{
		console.log(father2.name + " es mayor que " + father1.name);
	}else	
	{
		console.log(father1.name + " y " + father2.name + " son iguales.");
	}

}

fatherGlobal();



















