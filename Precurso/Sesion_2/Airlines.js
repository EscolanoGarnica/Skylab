/*Programa una inferfaz de usuario para una aerolinea (por terminal...). Esta aerolinea 
dispondrá de 10 vuelos para el dia de hoy, para empezar, estos vuelos estarán declarados de 
manera global, cuando se llame a la función:

-Se preguntará por el nombre de usuario y dará la bienvenida.
-El usuario visualizará todos los vuelos disponibles de una forma amigable: El vuelo con 
	origen: Barcelona, y destino: Madrid tiene un coste de XXXX€ y no realiza ninguna escala.
-A continuación, el usuario verá el coste medio de los vuelos.
-También podrá ver cuantos vuelos efectúan escalas.
-Y, sabiendo que los ultimos 5 vuelos (los últimos 5 ID's) son los últimos del día, 
	muestra al usuario sus destinos.
*/

var flights = [
{id: 00, to: "New York", from: "Barcelona", cost: 700,scale: false},
{id: 01, to: "Los Angeles", from: "Madrid", cost: 1100,scale: true},
{id: 02, to: "Paris", from: "Barcelona", cost: 210,scale: false},
{id: 03, to: "Roma", from: "Barcelona", cost: 150,scale: false},
{id: 04, to: "London", from: "Madrid", cost: 200,scale: false},
{id: 05, to: "Madrid", from: "Barcelona", cost: 90,scale: false},
{id: 06, to: "Tokyo", from: "Madrid", cost: 1500,scale: true},
{id: 07, to: "Shangai", from: "Barcelona", cost: 800,scale: true},
{id: 08, to: "Sydney", from: "Barcelona", cost: 150,scale: true},
{id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150,scale: false}
]

function airlines()
{
	var nameUser = prompt("What is your name?");
	
	console.log("Welcome " + nameUser +"!!");
	
	flights.forEach(showFlights);//muestro los vuelos de forma amigable
	averageCost(flights);//muestro el coste medio de los vuelos

	var arrFlightsWithScale = flights.filter(flightsWhithScale);//creo un nuevo array filtrado para saber cuantos vuelos hacen escala.
	console.log("There are " + arrFlightsWithScale.length + " flights that make a scale.");

	showDestinationLastFive(flights); //muestro el destino de los 5 últimos vuelos.
}

//***************************************************************************
// FUNCIÓN para mostrar los vuelos de forma amigable:    ********************
//***************************************************************************
function showFlights(item) 
{
	var strScale = "does not perform any scale.";
	
	if(item.scale)
	{
		strScale = "makes scale";
	}

	console.log("The flight with origin: " + item.from + ", and destination: " + item.to + 
		" has a cost of " + item.cost + "€ and " + strScale);
}

//***************************************************************************
// FUNCIÓN para mostrar el coste medio de los vuelos:   *********************
//***************************************************************************
function averageCost(array)
{
	var countAverage = [0,0];
	
	function sumAverage(item)
	{
		countAverage[0] = countAverage[0] + item.cost;
		countAverage[1]++;
	}
	
	array.forEach(sumAverage);
	console.log("The average cost of flights is: " + (countAverage[0]/countAverage[1]) +
		"€.");
}

//***************************************************************************
// FUNCIÓN para filtrar los vuelos que hacen escala:   **********************
//***************************************************************************
function flightsWhithScale(item) 
{
	return item.scale;
}

//***************************************************************************
// FUNCIÓN para mostrar los últimos 5 vuelos:    ****************************
//***************************************************************************
function showDestinationLastFive(array)
{
	console.log ("The destination of the last 5 flights: ");
	for (let i = 5; i < array.length; i++)
	{
		console.log(array[i].to);
	}
}

