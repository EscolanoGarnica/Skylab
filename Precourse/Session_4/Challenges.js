/*a) Escribe una funcion en la que, declarando una array con los numeros del 1 al 9, muestres 
por pantalla los numeros unidos por parejas (1-2, 2-3, 3-4...), además, cada elemento de la 
pareja deberá estar multiplicada por 2.

a1) La funcion debería aceptar la array a tratar como argumento.

a2) Pasa también el numero a multiplicar a la función como argumento

a3) La función debería ser capaz de recibir el numero de parejas que queremos devolver del total.

*/

function pairs(arrNumbers, numMultiplicate, numPairs)
{
	for (var i = 0; i < numPairs; i++)
	{
		console.log((arrNumbers[i]*numMultiplicate) + "-" + (arrNumbers[i+1]*numMultiplicate));
	}
}

pairs([1,2,3,4,5,6,7,8,9],2,8);

//b) Volvemos a la numeros... Podrias hacer una funcion que mostrara por pantalla la serie 
//Fibonacci?

function fibonacci(numLong)
{
	arrResults = [0,1];
	numAux = 0;

	for(var i=0; i<numLong; i++)
	{
		console.log(arrResults[0]);
		numAux = arrResults[0];
		arrResults[0]=arrResults[1];
		arrResults[1]=arrResults[1] + numAux;
	}
}

fibonacci(10);

/*
b2) Puedes añadir además, la posición de cada resultado?
b3) Ahora, inserta los resultados en una array y muestralos todos juntos de una manera amigable.
b4) Ahora, el usuario debería ser capaz de especificar la posición de la serie hasta donde 
queremos llegar.
*/

function fibonacci(numLong)
{
	arrResults = [0,1];
	numAux = 0;

	for(var i=0; i<=numLong; i++)
	{
		console.log("Positión " + i + ":" + arrResults[0]);
		numAux = arrResults[0];
		arrResults[0]=arrResults[1];
		arrResults[1]=arrResults[1] + numAux;
	}
}

fibonacci(10);

//b5) Ahora, muestra los resultados en forma piramidal:

function fiboPyramid(numLong)
{
	var arrFibo = [];
	var arrResults = [0,1];
	var numAux = 0;
	var strAux = "";

	for(var i=0; i<=numLong; i++)//primero introduzco la cadena fibonacci en un arrai
	{
		arrFibo[i] = arrResults[0];
		numAux = arrResults[0];
		arrResults[0]=arrResults[1];
		arrResults[1]=arrResults[1] + numAux;
	}

	for(var i=0; i<arrFibo.length; i++ ) // Ahora muestro la primera mitad de la pirámide:
	{
		for (var j = 0; j <= i; j++) { 
			strAux = strAux + arrFibo[j]; //como el console.log añade saltos de linea automáticamente, lo paso todo en una string
			strAux = strAux + " ";

		}
		console.log(strAux);
		strAux = "";
	}

	for(var i=arrFibo.length-1; i>0; i-- ) // y ahora la segunda mitad:
	{
		for (var j = 0; j < i; j++) {
			strAux = strAux + arrFibo[j];
			strAux = strAux + " ";

		}
		console.log(strAux);
		strAux = "";
	}

}

fiboPyramid(6);

//c) Simple Scripting program. Crea un programa que transforme un número de 4 dígitos en otro
//diferente con las posiciones de los dígitos cambiadas, creando un nuevo código.
//-El primer numero se traslada a la última posicion. El segundo, el tercero y el cuarto suben 
//una posición.

function codeNumbers(code)
{
	var strCode = code.toString();
	var strAux = "";
	strAux = strCode.substring(1,4);
	strAux = strAux + strCode.substring(0,1);
	return Number(strAux)
}
var num = 1234;
num = codeNumbers(num);
num = codeNumbers(num);
num = codeNumbers(num);

//c2) Ahora, el usuario debería poder introducir como parámetro dos códigos a la vez y devolver 
//los dos códigos encriptados (Los dos códigos se deberían encriptar en la misma función)
function codeNumbers(code1,code2)
{
	var arrAux = [];
	var strCode = code1.toString();

	arrAux.push(strCode.substring(1,4));
	arrAux[0] = Number(arrAux[0] + strCode.substring(0,1));

	strCode = code2.toString();

	arrAux.push(strCode.substring(1,4));
	arrAux[1] = Number(arrAux[1] + strCode.substring(0,1));

	return arrAux;
}
var array = codeNumbers(1234,5678);
console.log(array[0] + " " +  array[1]);

//c3) Ahora, vamos a añadir un nivel más de seguridad. Despues de cambiar la posición de los 
//dígitos, multiplicaremos a cada miembro por un numero cuya multiplicación no sea superior a 10.
//(Si es superior a 10, conseguiremos una multplicación de dos digitos y el código ya no sería 
//de 4 valores)

POR HACER!!!!

/*d) Crea un programa que use la encriptacion Romana, como es? Si tenemos la palabra SKYLAB,
la palabra encriptada será SLKAYB. Si divides la palabra original en 2 grupos obtienes:

SKY
LAB 

Entonces, uniendo las primeras letras de cada grupo, las segundas y las terceras obtienes SLKAYB.
Entonces, el programa deberá recibir SKYLAB y retornar SLKAYB. */

function encrypt(word)
{
	var half = (word.length/2); //variable para saber la mitad

	var firstWord = word.substring(0,half).split(""); //cogemos la primera mitad y separamos cada letra en un array

	var secondWord = word.substring(half,word.length).split("");

	var encryptWord = "";

	for (var i = 0; i < firstWord.length; i++)
	{
		encryptWord = encryptWord + firstWord[i] + secondWord[i];
	}

	return encryptWord;
}

console.log(encrypt("SKYLAB"));
SLKAYB

//d2) Programa el desencriptador, pasa como parámetro SLKAYB y que devuelva SKYLAB.

function decrypt(word)
{
	var arrWord = word.split("");
	var decryptWord = "";
	
	for (var i = 0; i < arrWord.length; i = i+2)
	{
		decryptWord = decryptWord + arrWord[i];
	}
	for (var i = 1; i < arrWord.length; i = i+2)
	{
		decryptWord = decryptWord + arrWord[i];
	}
	return decryptWord;
}

console.log(decrypt("SLKAYB"));

//d3) Agrupa la función Encrypt y decrypt en una unica función, de forma que introduzcas como 
//parámetro SKYLAB y devuelva SKYLAB (con todas las transformaciones internas hechas y 
//mostrando, entre medias, la transformación)
//d4) Lo tienes? Prueba ahora con SKYLABCODERS. Cambia la función para que pueda aceptar
// palabras más largas.

function encryptAndDecrypt(word)
{

		var half = (word.length/2); //variable para saber la mitad

		var firstWord = word.substring(0,half).split(""); //cogemos la primera mitad y separamos cada letra en un array

		var secondWord = word.substring(half,word.length).split("");

		var encryptWord = "";

		for (var i = 0; i < firstWord.length; i++)
		{
			encryptWord = encryptWord + firstWord[i] + secondWord[i];
		}

		console.log(encryptWord);

		var arrWord = encryptWord.split("");
		var decryptWord = "";
		
		for (var i = 0; i < arrWord.length; i = i+2)
		{
			decryptWord = decryptWord + arrWord[i];
		}
		for (var i = 1; i < arrWord.length; i = i+2)
		{
			decryptWord = decryptWord + arrWord[i];
		}
		return decryptWord;
}
encryptAndDecrypt("SKYLAB");
// devuelve palabras de cualquier tamaño siempre que sean pares


//e) Crea un programa al que le introduces un número como parámetro del 0 al 100 y devuelve 
//el número transformado a alfabeto normal, es decir:



//INACABADO
function numberToWord(number)
{
	var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

	var size = number.toString().length;

	var strNumber = number.toString();
	var strResult = "";
	var strTens = "";
	var strUnits = "";

	switch (size)
	{
		case 3:
			strTens = strNumber.substring(1,2);
			strUnits =strNumber.substring(2,3);
			break;
		case 2:
			strTens = strNumber.substring(0,1);
			strUnits =strNumber.substring(1,2);
			break;
		case 1;
			strUnits =strNumber.substring(0,1);
			break;
	}


	console.log(size);
	switch (size)
	{
		case 3:
			strResult = "hundred-";
		case 2:



	}
	console.log(strResult);
}
numberToWord(102);
numberToWord(70);


