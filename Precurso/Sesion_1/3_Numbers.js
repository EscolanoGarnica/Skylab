//a) Que hora es? Declara la hora como número y devuelvela como String

function whatTimeIsIt ()
{
	var hour = 11.37;
	var stringHour = hour.toString();
	console.log("It's " + stringHour + " of morning");
}

//b) Nono, que hora exactamente? Dime la hora sin minutos
function whatTimeIsIt ()
{
	var hour = 11.37;
	var stringHour = hour.toFixed(0).toString();
	console.log("It's " + stringHour + " of morning");
}

//c) Ahora, declara tu hora y muéstrala redondeada
function whatTimeIsIt ()
{
	var hour = 11.37;
	var minutes = hour - hour.toFixed(0); //cogemos los minutos
	hour = hour.toFixed(0);
	if (minutes>=0.30)
	{
		hour++;
	}

	console.log("It's " + hour + " of morning");
}

//d) Hagamos una calculadora. Primero, la suma.

function sum(number1,number2)
{
	return (number1 + number2);
}

//d1) Añade la resta...
function rest(number1,number2)
{
	return (number1 - number2);
}

//d2) Y la multiplicación
function mult(number1,number2)
{
	return (number1 * number2);
}

//d3) Por ultimo, la división
function div(number1,number2)
{
	return (number1 / number2);
}

//d4) Ahora, intenta multiplicar un número por una string, que devuelve?
//devuelve un NaN (not a number value)

//e) Podemos controlar este error con un condicional if?
function mult(number1,number2)
{
	if(!isNaN(number1) && !isNaN(number2))
	{
		return (number1 * number2);
	}else
	{
		console.log("No se puede realizar la operacíon");
	}
}
