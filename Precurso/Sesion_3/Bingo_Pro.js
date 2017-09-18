/*Realiza un programa que simule un Bingo. Cuando se ejecute, pedirá el nombre del jugador y 
deberá guardarse. Durante el primer turno se mostrará un cartón con 15 números (excluyendo el 0 
siempre), y cada turno, otro número se visualizará, si coincide con alguno de los existentes en 
l cartón, cambiará por una "X" o un 0. El cartón se mostrará, al final de cada turno, con los 
cambios efectuados, indicándole al usuario qué número se ha encontrado. El programa deberá 
preguntar al usuario al inicio de cada turno si desea continuar, en caso de que se continúe, 
seguirá el mismo patrón que hasta el momento.

Por supuesto, cuando todos los números de una misma linea estén en "X", mostrará un mensaje 
"LINEA!", pero la ejecución seguirá, el juego solo acabará cuando todos los números estén a "X".

Cuando el juego concluya, deberá decirle al usuario en cuantos turnos se ha completado el cartón. 
Por último, deberá preguntar si desea volver a jugar.

PRO:

+Cuando se muestre la carta, se preguntará al usuario si realmente quiere ese cartón o generar 
otro, si realmente quiere ese cartón, deberá responder "yes" para proceder.

+Establece un sistema de puntos, en cuantos más turnos se complete el cartón, menos puntos 
(el sistema de puntos intégralo como quieras), por el contrario, a menos turnos, más puntos.

-Antes de empezar el juego, muestra el sistema de puntos al usuario.

-Ranking de usuarios (ordenado por puntos). */

const totalBalls = 50; //el número más alto que puede aparecer en el cartón y por ende el número de turnos máximo

function bingo()
{
	var card = createCard(); //array con los números del cartón
	var drum = []; //drum=bombo: array para acumular los números que van saliendo
	var round = 0;//contador de turnos
	var strContinue = "No";//variable donde guardaremos si el usuario quiere continuar jugando
	var points = totalBalls; //variable para la puntuación
	var boolBingo = false; //variable para saber si se acaba el juego por bingo

	var user = prompt("What's your name?");

	console.log("\nThis is your card " + user + ":");
	showCard(card);
	if(prompt("\nDo you want this card?").toUpperCase() != "YES")
	{
		card = createCard();
		console.log("\nThis is your new card:");
		showCard(card);
	}

	do
	{
		round++;//incrementamos el turno

		ball = extractNumber(drum);//extraigo un número que no haya salido, pasandole el bombo
		drum.push(ball);//metemos el número en el bombo para que no salga de nuevo
		console.log("\nThe "+ball+"!!");//muestro el número que ha salido por consola

		card = checkCard(card, ball);//chequeamos si el número está en el cartón
		card = checkLine(card, 1); //chequeamos cada una de las lineas
		card = checkLine(card, 2);
		card = checkLine(card, 3);

		showCard(card);//muestro el cartón
		
		if(!checkBingo(card))// si no hay bingo preguntamos si se quiere continuar
		{
			strContinue = prompt("Do you want continue?").toUpperCase();
		}else 
		{
			strContinue = "NO";//si hay bingo no continuamos
			boolBingo = true;
		}
		
		
	}while(round<totalBalls && strContinue == "YES");

	console.log("\nYou play " + round + " rounds");

	if(boolBingo)//si se ha conseguido bingo, se muestra la puntuación
	{
		points = (points-round)*2;
		console.log("\n" + user + "you've got "+ points +" points in total!");
	}
	
	
	if(prompt("Do you want play again?").toUpperCase() === "YES")
	{
		bingo();
	}
}
/****************************************************************************************/

function createCard() //función para crear los cartones del bingo
{
	var arrayCard=[]; 
	var randomNum=0;

	for(var i =0; i<15;i++) //el cartón tendrá 15 números
	{
		randomNum = extractNumber(arrayCard); 
		arrayCard.push(randomNum);
	}

	arrayCard.sort(function(a,b){return a-b}); 

	return arrayCard;
}
/****************************************************************************************/

function randomNumber() //función para crear números aleatorios del 1 al 50
{
	return (Math.round((Math.random() * (totalBalls-1))+1));
}
/****************************************************************************************/

function extractNumber(arrNumber) //esta función recibe un array y devuelve un número random que no esté dentro de ese array
{
	var randomNum;
	do
	{
		randomNum = randomNumber();
	}while(arrNumber.indexOf(randomNum)!= -1);
	return randomNum;
}
/****************************************************************************************/

function checkCard(arrCard, numBall) //esta función recibe un array y un número, si el número está en el array; sustituye dicho número por una "X" y se devuelve el array modificada
{
	var i = arrCard.indexOf(numBall);
	if(i != -1)
	{
		arrCard[i]="X";
		console.log("It's in your card!");
	}
	return arrCard; 
}
/****************************************************************************************/

function showCard(arrCard) //mostramos el cartón en tres lineas
{
	console.log("["+arrCard[0]+"]["+arrCard[1]+"]["+arrCard[2]+"]["+arrCard[3]+"]["+arrCard[4]+"]");

	console.log("["+arrCard[5]+"]["+arrCard[6]+"]["+arrCard[7]+"]["+arrCard[8]+"]["+arrCard[9]+"]");

	console.log("["+arrCard[10]+"]["+arrCard[11]+"]["+arrCard[12]+"]["+arrCard[13]+"]["+arrCard[14]+"]");
}
/****************************************************************************************/

function checkLine(arrCard, line)//función para comprobar si se ha hecho linea
{
	line = (line * 5)-1; //multiplico la linea por el número de elementos de una linea
	var boolLine = true;
	var copyArrCard = arrCard.slice(); //copio el array, si se hace sin slice; al cambiar el valor de la copia se cambia el origian y viceversa

	for(var i = line-4; i<=line;i++)
	{
		if(arrCard[i]!="X") //si encuentra en la linea un valor que no valga X, devuelve el array sin modificar
		{	
			return arrCard;
		}	
		copyArrCard[i] = "-"; //si el elemento es X se sustituye por -
	}
	
	console.log("Line!!");	//si todos los elementos de la linea son x deveulve la copia que contiene la linea modificada
	return copyArrCard;
}
/****************************************************************************************/

function checkBingo(arrCard)//función para comprobar si se ha hecho bingo, la función recibo el array del cartón
{
	for(var i=0;i<arrCard.length;i++)
	{
		if(arrCard[i]!="-"){ // si algún lemento no es "-" quiere decir que no hay bingo y sale de la función
			return false;
		}
	}// si sale del for quiere decir que todos los elementos del array valen "-", así que hay bingo
	console.log("Bingo!!");
	return true;
}
