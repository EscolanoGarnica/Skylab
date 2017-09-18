/*Haz una calculadora. Un único programa al que le pasarás dos parámetros y el usuario podrá 
visualizar por consola la suma, resta, multiplicación y división entre ambos números. 
El resultado debería ser mostrado con 3 decimales como mucho (En caso de que hubieran). 
El programa debe contemplar y actuar correctamente en el caso de que el usuario introduzca 
cualquier cosa que no sean números.*/

function calculator(num1, num2)
{
	if(num2 != undefined)
	{
		if(!isNaN(num1) && !isNaN(num2)) // si ambos elemento son numeros, se hacen las operaciones
		{
			var arrResults = []; //creo el array

			arrResults.push((num1 + num2)); // introduzco como 1er elemento la suma
			arrResults.push((num1 - num2)); // 2º elemento, resta	
			arrResults.push((num1 * num2)); // 3er elemento, multiplicación
			arrResults.push((num1 / num2)); // 4º elemento, división

			for(var i = 0; i < arrResults.length; i++)
			{
				if(!Number.isInteger(arrResults[i])) // en caso de que tenga decimales:
				{
					arrResults[i] = arrResults[i].toFixed(3); // que no sean más de tres
				}
			}

			console.log(num1 + "+" + num2 + "=" + arrResults[0]); //mostramos al usuario la suma
			console.log(num1 + "-" + num2 + "=" + arrResults[1]); //mostramos al usuario la resta
			console.log(num1 + "*" + num2 + "=" + arrResults[2]); //mostramos al usuario la multiplicación
			console.log(num1 + "/" + num2 + "=" + arrResults[3]); //mostramos al usuario la división
		}else // si los elementos no son número, se avisa al usuario
		{
			console.log("Make sure you've entered two numbers");
		}
	}else if(!isNaN(num1))
	{
		var result = Math.sqrt(num1);
		console.log("The square root of " + num1 + " is " + result);
	}else // si los elementos no son número, se avisa al usuario
		{
			console.log("Make sure you've entered at least one number");
		}
}