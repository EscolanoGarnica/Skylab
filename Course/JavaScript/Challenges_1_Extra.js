/**
*EXCERCISE 1:
*
*Define a function called calculator that receives an operation and two numbers and returns 
*the result of the operation applied to the values passed as parameters.
*/

function calculator(operador,a,b)
{
	if ((typeof a !== 'number') || (typeof b !== 'number'))
		throw new Error('Calculator works only with numbers');
	switch (operador.toLowerCase())
	{
		case 'suma':
			return a+b;
		case 'resta':
			return a-b;
		case 'multiplicacion':
			return a*b;
		case 'division':
			return a/b;
	}
}
//Se testea que funciona la suma:
function testCalculatorSum() 
{
	var res = calculator('suma',3,2);
	var expected = 5;

	if (res === expected)
		console.log('testCalculatorSum','OK');
	else
		console.error('testCalculatorSum'.'KO');
}
// TODO more cases

//END---------------------------------------------------------------------------------------------------

/**
*EXCERCISE 2:
*
*Define a function called calculator that receives an operation and several numbers (can be 2 or 10 or
*whatever) returns the result of the operation applied to the values passed as parameters.
*/

function calculator(operador)
{
	for(var i =1;i<arguments.length;i++)
	{
		if (typeof arguments[i] !== 'number')
			throw new Error('Calculator works only with numbers');
	}

	var result = arguments[1];

	switch (operador.toLowerCase())
	{
		case 'suma':
			for(var i=2;i<arguments.length;i++)
			{
				result +=arguments[i];
			}
			break;
		case 'resta':
			for(var i=2;i<arguments.length;i++)
			{
				result -=arguments[i];
			}
			break;
		case 'multiplicacion':
			for(var i=2;i<arguments.length;i++)
			{
				result *=arguments[i];
			}
			break;
		case 'division':
			for(var i=2;i<arguments.length;i++)
			{
				result /=arguments[i];
			}
	}
	return result;
}
//END---------------------------------------------------------------------------------------------------

/**
*EXCERCISE 3:
*
*Define a function called ​getFullName​ that receives a name and a surname and return the string 
*"Your full name is " with the name & surname concatenated.
*/

function getFullName(name,surname)
{
	return 'Your full name is ' name + ' ' + surname;
}
//END---------------------------------------------------------------------------------------------------

/**
*EXCERCISE 4:
*
*Define a function called ​isNumber​ that receives a value and return true if the value received is a number
*/

function isNumber(num)
{
	if(typeof num === 'number')
		return true;
	else
		return false;
}
//END---------------------------------------------------------------------------------------------------

/**
*EXCERCISE 5:
*
*Define a function called ​isString​ that receives a value and return true if the value received is a string
*/
function isString(str)
{
	if(typeof str === 'string')
		return true;
	else
		return false;
}
//END---------------------------------------------------------------------------------------------------

/**
*EXCERCISE 6:
*
*Define a function called ​isBoolean​ that receives a value and return true if the value received is a boolean
*/
function isBoolean(bool)
{
	if(typeof bool === 'boolean')
		return true;
	else
		return false;
}
//END---------------------------------------------------------------------------------------------------

/**
*EXCERCISE 7:
*
*Define a function called ​encodeWord​ that receives a string and return the codified version of that string 
*replacing the following characters:
*	7 instead of T
*	4 instead of A
*	5 instead of S
*	0 instead of O
*/

function encodeWord()
{

}
