/*PRO.
-Podrías hacer que le calculadora relizara operaciones sean cuales sean el numero de argumentos 
	asados a la funcion?
-Después de hacer todas las operaciones, el programa deberá preguntar al usuario si desea volver
	a realizar otra operación, volviendo a almacenar más resultados y mostrándolos.
*/



function startCalculatorPro()
{
	do
	{
		var userString = prompt("Enter the numbers to calculate, separated by spaces:");
		var arrUserNumbers = userString.split(" "); //separo en un array los diferentes números

		for (var i = 0; i < arrUserNumbers.length; i++) {
			arrUserNumbers[i] = Number(arrUserNumbers[i]); //paso cada string a number
		}
		calculatorPro(arrUserNumbers); // llamo a la calculadora pasandole el array 
		
		var choose = prompt("Do you want to do more operations? y/n").toLowerCase();
	}while(choose == "y");
}

function calculatorPro(arrNums)
{
		//var arrNums = Array.from(arguments); //deprecated
		
		for (var i = 0; i < arrNums.length; i++)
		{
			if(isNaN(arrNums[i])) // compruebo si todos los elementos son numeros
			{
				console.log("Make sure you've entered numbers only");
				return;//si algun elemento no es un numero, salgo de la función;
			}
		}
		

		var arrResults = []; //creo el array para almacenar los resultados
		var arrStrOperations = [];//creo el array para almacenar las operaciones
			
		for (var i = 0; i < 4; i++)  // inicializamos los arrays nuevos
		{
			arrResults.push(arrNums[0]);
			arrStrOperations.push(arrNums[0].toString());
		}


		for (var i = 1; i < arrNums.length; i++) // suma:
		{
			arrResults[0] = arrResults[0] + arrNums[i];
			arrStrOperations[0] = arrStrOperations[0] + " + " + arrNums[i].toString();
		}


		for (var i = 1; i < arrNums.length; i++) // resta:
		{
			arrResults[1] = arrResults[1] - arrNums[i];
			arrStrOperations[1] = arrStrOperations[1] + " - " + arrNums[i].toString();
		}

		for (var i = 1; i < arrNums.length; i++) // Multiplicación:
		{
			arrResults[2] = arrResults[2] * arrNums[i];
			arrStrOperations[2] = arrStrOperations[2] + " * " + arrNums[i].toString();
		}

		for (var i = 1; i < arrNums.length; i++) // División:
		{
			arrResults[3] = arrResults[3] / arrNums[i];
			arrStrOperations[3] = arrStrOperations[3] + " / " + arrNums[i].toString();
		}


		console.log(arrStrOperations[0] + " = " + arrResults[0]);
		console.log(arrStrOperations[1] + " = " + arrResults[1]);
		console.log(arrStrOperations[2] + " = " + arrResults[2]);
		console.log(arrStrOperations[3] + " = " + arrResults[3]);
}
