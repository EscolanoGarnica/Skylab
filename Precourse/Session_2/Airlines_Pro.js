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

/*PRO!:

Después de ver toda la información el programa pedirá al usuario si es ADMIN/USER, dependiendo 
la elección, el programa se comportará de la siguiente manera:

-Si eres ADMIN, la función debería permitir:
	-Poder crear, más vuelos, pidiendo la información por prompt(), sin poder pasar de 15 
		vuelos, si se intenta introducir uno más, saltará un alert().
	-Poder eliminar vuelos mediante el ID.

-Si eres USER la función debería permitir:
	-Buscar por precio ( más alto, más bajo o igual), el usuario debería mostrar los datos de 
		los vuelos encontrados y, indicando el ID, el programa responderá: "Gracias por su 
		compra, vuelva pronto."
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
	var nameUser = prompt("¿Como te llamas?");
	
	console.log("Bienvenido " + nameUser +"!!");
	
	flights.forEach(showFlights);//muestro los vuelos de forma amigable
	averageCost(flights);//muestro el coste medio de los vuelos

	var arrFlightsWithScale = flights.filter(flightsWhithScale);//creo un nuevo array filtrado para saber cuantos vuelos hacen escala.
	console.log("Hay " + arrFlightsWithScale.length + " vuelos que realizan escala.");

	showDestinyLastFive(flights);//muestro el destino de los 5 últimos vuelos.

	var user = prompt("Escribe si eres ADMIN o USER:").toUpperCase();

	switch(user)
	{
		case "ADMIN":
			do{
				var chooseAdmin = Number(prompt("Selecciona una opcion:\n" +
					"1.Crear un nuevo vuelo.\n" +
					"2.Eliminar un vuelo.\n"+
					"3.Mostrar vuelos.\n"+
					"4.Salir."));
				
				switch(chooseAdmin)
				{
					case 1:
						createNewFlight();
						break;
					case 2:
						deleteFlight();
						break;
					case 3:
						flights.forEach(showFlights);
						break;
					case 4:
						break;
					default:
						console.log("La opción introducida no es valida, escribe un número del 1 al 4.");
						break;
				}

			}while(chooseAdmin!=4);
			console.log("Adiós");
			break;

		case "USER":
			var costeFlights = 0; // almacena el coste introducido por el usuario
			var arrFlightsPrices = []; // array para filtrar por coste
			do{
				var chooseUser = Number(prompt("Selecciona una opcion:\n" +
					"1.Buscar vuelos de un precio mayor al indicado.\n" +
					"2.Buscar vuelos de un precio menor al indicado.\n"+
					"3.Buscar vuelos de un precio igual al indicado.\n"+
					"4.Salir."));
							
				switch(chooseUser)
				{
					case 1:
						costeFlights = Number(prompt("Introduce el coste:"));
						arrFlightsPrices = flights.filter(function(arrflights){
							return (arrflights.cost > costeFlights);
						});

						console.log("longitud: " + arrFlightsPrices.length);
						arrFlightsPrices.forEach(showIdFlights);

						break;

					case 2:
						costeFlights = Number(prompt("Introduce el coste:"));
						arrFlightsPrices = flights.filter(function(arrflights){
							return (arrflights.cost < costeFlights);
						});

						arrFlightsPrices.forEach(showIdFlights);
						break;

					case 3:
						costeFlights = Number(prompt("Introduce el coste:"));
						arrFlightsPrices = flights.filter(function(arrflights){
							return (arrflights.cost == costeFlights);
						});

						arrFlightsPrices.forEach(showIdFlights);
						break;
					case 4:
						break;
					default:
						console.log("La opción introducida no es valida, escribe un número del 1 al 4.");
						break;
				}

			}while(chooseUser!=4);
			console.log("Gracias por su compra, vuelva pronto.");
			break;

		default:
			console.log("Lo siento pero " + user + " no es valido.");
			break;
	}


}

//***************************************************************************
// FUNCIÓN para mostrar los vuelos de forma amigable:    ********************
//***************************************************************************
function showFlights(item) 
{
	var escala = "no realiza ninguna escala.";
	
	if(item.scale)
	{
		escala = "hace escala.";
	}

	console.log("El vuelo con origen: " + item.from + ", y destino: " + item.to + 
		" tiene un coste de " + item.cost + "€ y " + escala);
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
	console.log("El coste medio de los vuelos es: " + (countAverage[0]/countAverage[1]) +
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
function showDestinyLastFive(array)
{
	console.log ("El destino de los últimos 5 vuelos: ");
	for (let i = 5; i < array.length; i++)
	{
		console.log(array[i].to);
	}
}

//***************************************************************************
// FUNCIÓN para crear un vuelo nuevo:    ************************************
//***************************************************************************
function createNewFlight()
{
	if(flights.length<15)
	{
		var id = flights.length;
		var destino = prompt("Introduce el detino:");
		var origen = prompt("Introduce el origen:");
		var coste = Number(prompt("Introduce el coste:"));
		var strEscala = prompt("El vuelo tiene escalas? responde si o no").toLowerCase();
		var escala = false;
		if(strEscala == "si")
		{
			escala = true;
		}


		flights.push({id: id, to: destino, from: origen, cost: coste,scale: escala});

	}else
	{
		console.log("Lo siento, no puedes crear más de 15 vuelos");
	}
}

//***************************************************************************
// FUNCIÓN para eliminar un vuelo existente:   ******************************
//***************************************************************************
function deleteFlight()
{
	console.log("Estos son los vuelos existentes:");
	flights.forEach(showIdFlights);
	var idDelete = Number(prompt("Escribe el ID del vuelo que desees eliminar:"));
	while(idDelete<0 || idDelete>flights.length-1) //compruebo que el numero introducido es correcto
	{
		console.log("Por favor, introduce un ID de vuelo valido.");
		idDelete = Number(prompt("Escribe el ID del vuelo que desees eliminar:"));
	}
	flights.splice(idDelete, 1);
	console.log("Vuelo eliminado");
	updateFlights(); //esto actualiza los id's de los vuelos restantes
}

//***************************************************************************
// FUNCIÓN para actualizars ID's después de eliminar un vuelo:   ************
//***************************************************************************
function updateFlights()
{
	for(let i = 0; i < flights.length; i++)
	{
		flights[i].id = i;
	}
}

//***************************************************************************
// FUNCIÓN para mostrar los vuelos con ID:    *******************************
//***************************************************************************
function showIdFlights(item) 
{
	console.log("ID: " + item.id + " | Origeen: " + item.from + " | Destino: " + item.to + 
		" | Coste: " + item.cost + "€ | Escala: " + item.scale);
}

