/*Haz el juego del Pasapalabra, el programa deberá lanzar la definición de una palabra y el 
usuario deberá adivinar que palabra estamos tratando.

Tu juego debería hacer una pregunta por cada letra del alfabeto, al final del juego, y habiendo 
respondido todas las letras, deberá indicarle al usuario cuantas letras ha fallado y cuantas ha 
acertado. Si el usuario responde con "pasapalabra" el juego deberá estar preparado para entender
que en ese momento, el usuario no responderá esa pregunta, y no estará acertada ni fallada, 
la dejará para la siguiente ronda. El juego deberá, cuando finalize, mostrar un ranking de 
usuarios con el nombre y ordenados por cantidad de letras acertadas.

+El programa no debería hacer distinciones entre mayúsculas, minúsculas... Ejemplo: "animal" =
= "ANIMAL" // "Animal" // "aNiMal"...

+El programa debe estar preparado para aceptar el input "END" para terminar el juego en 
cualquier momento, si esto sucede, el programa dirá cuantas letras ha acertado pero no entrará 
en el ranking.

+Prepara tu programa para que no repita siempre las mismas preguntas, por ejemplo, de la misma 
letra, se podrían hacer tres preguntas diferentes.
*/

var questions = [ //status: 0: no preguntada, 1:preguntada y respondida
    { letter: "a", answer: "abducir", status: 0, question: ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien") },
    { letter: "a", answer: "abuelo", status: 0, question:("CON LA A. El padre de tu padre")},
    { letter: "a", answer: "abeja", status: 0, question:("CON LA A. Insecto volador fabricante de miel")},
    { letter: "b", answer: "bingo", status: 0, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso") },
    { letter: "b", answer: "bombero", status: 0, question:("CON LA B. Hombre que se dedica profesionalmente a la extinción de incendios")},
    { letter: "b", answer: "baltasar", status: 0, question:("CON LA B. Uno de los tres reyes magos")},
    { letter: "c", answer: "churumbel", status: 0, question: ("CON LA C. Niño, crío, bebé") },
	{ letter: "c", answer: "corea", status: 0, question:("CON LA C. Nación asiatica divida en sur y norte")},
	{ letter: "c", answer: "canada", status: 0, question:("CON LA C. Estado situado al norte de Estados Unidos")},
    { letter: "d", answer: "diarrea", status: 0, question: ("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida") },
    { letter: "d", answer: "diario", status: 0, question:("CON LA D. Libreta donde una persona apunta sus vivencias personales")},
    { letter: "d", answer: "dos", status: 0, question:("CON LA D. Único número primo par")},
    { letter: "e", answer: "efimero", status: 0, question:("CON LA E. Que dura poco tiempo o es pasajero")},
    { letter: "e", answer: "ectoplasma", status: 0, question: ("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación") },
    { letter: "e", answer: "estado", status: 0, question:("CON LA E. Nación de pleno derecho internacional")},
    { letter: "f", answer: "facil", status: 0, question: ("CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad") },
    { letter: "f", answer: "fuego", status: 0, question:("CON LA F. Emisión de luz y calor producida por la combustión de una materia")},
    { letter: "f", answer: "frio", status: 0, question:("CON LA F. Que tiene una temperatura baja o más baja de lo que se desea, conviene o resulta agradable")},
    { letter: "g", answer: "galaxia", status: 0, question: ("CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas") },
    { letter: "g", answer: "gas", status: 0, question:("CON LA G. Fluido sin forma ni volumen propios, cuyas moléculas tienden a separarse unas de otras y presentan mayor movilidad que las de los líquidos")},
    { letter: "g", answer: "grupo", status: 0, question:("CON LA G. Conjunto de personas, animales o cosas que están juntos o reunidos o que tienen alguna característica común")},
    { letter: "h", answer: "harakiri", status: 0, question: ("CON LA H. Suicidio ritual japonés por desentrañamiento") },
    { letter: "h", answer: "halago", status: 0, question:("CON LA H. Alabanza generalmente exagerada e interesada que se hace a una persona para satisfacer su orgullo o su vanidad")},
    { letter: "h", answer: "histeria", status: 0, question:("CON LA H. Enfermedad nerviosa que se caracteriza por frecuentes cambios psíquicos y alteraciones emocionales que pueden ir acompañados de convulsiones, parálisis y sofocaciones")},
    { letter: "i", answer: "iglesia", status: 0, question: ("CON LA I. Templo cristiano") },
    { letter: "i", answer: "idiota", status: 0, question:("CON LA I. Persona que es poco inteligente o que molesta a alguien con lo que hace o con lo que dice")},
    { letter: "i", answer: "invento", status: 0, question:("CON LA I. Creación, diseño o producción de alguna cosa nueva que antes no existía")},
    { letter: "j", answer: "jabali", status: 0, question: ("CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba") },
    { letter: "j", answer: "jota", status: 0, question:("CON LA J. Baile popular de varias regiones de España")},
    { letter: "j", answer: "juglar", status: 0, question:("CON LA J. En la Edad Media, artista itinerante que recitaba y cantaba obras de otros poetas en las cortes de los grandes señores")},
    { letter: "k", answer: "kamikaze", status: 0, question: ("CON LA K. Persona que se juega la vida realizando una acción temeraria") },
    { letter: "k", answer: "kiko", status: 0, question:("CON LA K. Grano de maíz tostado y salado")},
    { letter: "k", answer: "kayak", status: 0, question:("CON LA K. Canoa individual de remo, cubierta de pieles, que utilizan los esquimales")},
    { letter: "l", answer: "licantropo", status: 0, question: ("CON LA L. Hombre lobo") },
    { letter: "l", answer: "libertad", status: 0, question:("CON LA L. Facultad y derecho de las personas para elegir de manera responsable su propia forma de actuar dentro de una sociedad")},
    { letter: "l", answer: "loco", status: 0, question:("CON LA L. Persona que tiene trastornadas o perturbadas las facultades mentales")},
    { letter: "m", answer: "misantropo", status: 0, question: ("CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas") },
    { letter: "m", answer: "madre", status: 0, question:("CON LA M. Mujer que ha tenido uno o más hijos, o animal hembra que ha tenido una o más crías")},
    { letter: "m", answer: "meteorito", status: 0, question:("CON LA M. Fragmento de un cuerpo procedente del espacio exterior que entra en la atmósfera a gran velocidad y cae sobre la Tierra")},
    { letter: "n", answer: "necedad", status: 0, question: ("CON LA N. Demostración de poca inteligencia") },
    { letter: "n", answer: "nadie", status: 0, question:("CON LA N. Ninguna persona")},
    { letter: "n", answer: "noruego", status: 0, question:("CON LA N. Hombre original de Noruega")},
    { letter: "ñ", answer: "señal", status: 0, question: ("CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.") },
    { letter: "ñ", answer: "ñoqui", status: 0, question:("CON LA Ñ. Pasta que se elabora con puré de papas, harina, mantequilla, leche y huevo")},
    { letter: "ñ", answer: "año", status: 0, question:("CONTIENE LA Ñ. Tiempo que emplea la Tierra en dar una vuelta alrededor del Sol")},
    { letter: "o", answer: "orco", status: 0, question: ("CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien") },
    { letter: "o", answer: "oscuridad", status: 0, question:("CON LA O. Falta o escasez de luz para percibir las cosas")},
    { letter: "o", answer: "origen", status: 0, question:("CON LA O. Fenómeno o hecho que es el principio, causa o motivo de otro fenómeno o hecho o de una cosa")},
    { letter: "p", answer: "protoss", status: 0, question: ("CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft") },
    { letter: "p", answer: "pesticida", status: 0, question:("CON LA P. Sustancia química que destruye las plagas de animales y plantas")},
    { letter: "p", answer: "palangana", status: 0, question:("CON LA P. Recipiente circular, ancho y poco profundo, usado especialmente para lavarse")},
    { letter: "q", answer: "queso", status: 0, question: ("CON LA Q. Producto obtenido por la maduración de la cuajada de la leche") },
    { letter: "q", answer: "conquistar", status: 0, question:("CONTIENE LA Q. Apoderarse de un lugar, como un territorio, una ciudad, etc., por la fuerza, especialmente con armas")},
    { letter: "q", answer: "quimera", status: 0, question:("CON LA Q. Monstruo fabuloso que se representa con cabeza de león, cuerpo de cabra y cola de dragón")},
    { letter: "r", answer: "raton", status: 0, question: ("CON LA R. Roedor") },
    { letter: "r", answer: "rizo", status: 0, question:("CON LA R. Mechón de pelo que tiene forma de sortija o espiral")},
    { letter: "r", answer: "rueda", status: 0, question:("CON LA R. Objeto circular, de poco grosor respecto a su radio, que puede girar sobre un eje de múltiples aplicaciones")},
    { letter: "s", answer: "stackoverflow", status: 0, question: ("CON LA S. Comunidad salvadora de todo desarrollador informático") },
    { letter: "s", answer: "sueño", status: 0, question:("CON LA S. Deseo o necesidad de dormir")},
    { letter: "s", answer: "siervo", status: 0, question:("CON LA S. Persona vinculada y subordinada a otra, especialmente los que servían a los señores feudales en la Edad Media")},
    { letter: "t", answer: "terminator", status: 0, question: ("CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984") },
    { letter: "t", answer: "trueno", status: 0, question:("CON LA T. Ruido muy fuerte que sigue al rayo durante una tempestad, producido por la expansión del aire al paso de la descarga eléctrica")},
    { letter: "t", answer: "teoria", status: 0, question:("CON LA T. Conjunto de reglas, principios y conocimientos acerca de una ciencia, una doctrina o una actividad, prescindiendo de sus posibles aplicaciones prácticas")},
    { letter: "u", answer: "unamuno", status: 0, question: ("CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914") },
    { letter: "u", answer: "unicornio", status: 0, question:("CON LA U. Animal fabuloso con figura de caballo y con un cuerno recto en mitad de la frente")},
    { letter: "u", answer: "usual", status: 0, question:("CON LA U. Que se usa o se practica común o frecuentemente")},
    { letter: "v", answer: "vikingos", status: 0, question: ("CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa") },
    { letter: "v", answer: "voyeur", status: 0, question:("CON LA V. Persona que espía o mira a escondidas a otras personas en situaciones eróticas para excitarse sexualmente")},
    { letter: "v", answer: "valentia", status: 0, question:("CON LA V. Determinación para enfrentarse a situaciones arriesgadas o difíciles")},
    { letter: "w", answer: "sandwich", status: 0, question: ("CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso") },
    { letter: "w", answer: "web", status: 0, question:("CON LA W. Conjunto de información que se encuentra en una dirección determinada de internet")},
    { letter: "w", answer: "whisky", status: 0, question:("CON LA W. Bebida alcohólica de alta graduación que se obtiene por destilación de cebada y otros cereales.")},
    { letter: "x", answer: "botox", status: 0, question: ("CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética") },
    { letter: "x", answer: "taxi", status: 0, question:("CONTIENE LA X. Automóvil de servicio público que transporta de un lugar a otro a las personas que lo solicitan a cambio de dinero")},
    { letter: "x", answer: "maximo", status: 0, question:("CONTIENE LA X. Nombre del personaje protagonista de la película Gladiator")},
    { letter: "y", answer: "peyote", status: 0, question: ("CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos") },
    { letter: "y", answer: "yogur", status: 0, question:("CON LA Y. Alimento líquido y espeso o pastoso, de sabor agrio, que se obtiene por fermentación de la leche de vaca entera o desnatada")},
    { letter: "y", answer: "baya", status: 0, question:("CONTIENE LA Y. Fruto carnoso o pulposo con varias semillas en su interior que están envueltas directamente por la pulpa; suele tener forma redondeada o elipsoidal")},
    { letter: "z", answer: "zen", status: 0, question: ("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional") },
    { letter: "z", answer: "zoo", status: 0, question:("CON LA Z. Institución penitenciaría para animales")},
    { letter: "z", answer: "zumo", status: 0, question:("CON LA Z. Líquido contenido en el tejido de las frutas que puede extraerse por presión, cocción, etc., y beberse")},
];

var score = []; // array que contendrá objetos con las puntuaciones de los jugadores


function pasapalabra()
{
	var answers = []; //array que contendrá si el usuario ha acertado o fallado la respuesta, mediante true's y false's
	var round = 0;	//number para el numero de ronda, cuando lleve 27, se acaba el juego, los pasapalabra no cuentan como ronda
	
	var letter = "a"; //letra actual de la que tiene que hacerse la pregunta
	var arrQuestions = []; // array que contendrá una pregunta al azar por cada letra del objeto "questions"

	var user = prompt("Hi, what`s your name?").toUpperCase(); //string que contiene el nombre del jugador

	for (var i = 0; i < 27; i++)  //creo un array con las preguntas selecionadas aleatoriamente
	{
		arrQuestions.push(loadQuestions(letter));
		letter = nextLetter(letter);
	}
	
	letter = "a";

	do
	{
		if(question(arrQuestions,letter)===true)//si la pregunta no ha sido hecha la hace, si no pasa a la siguiente letra
		{
			answers.push(answer(arrQuestions, letter)); //introduzco en el array de respuestas si acierta o falla el usuario

			letter = nextLetter(letter); //cambiamos la letra

			if (answers[round] != "pasapalabra")  //si la respuesta no ha sido pasapalabra; incrementamos la ronda
			{
				round++;

			}else // si ha respondido pasapalabra no se avanza de ronda y se elimina la respuesta
			{
				answers.pop();
			}	
		}else// si la pregunta ya se ha formulado anteriormente; solo cambiamos de letra
		{
			letter = nextLetter(letter);
		}
	}while(answers[round-1]!="end" && round<27); //si se responden las 27 preguntas o el usuario responde "end" se acaba el juego

	if(answers[round-1]==="end")//si se ha precipitado el final del juego, mostramos la puntuación
	{
		console.log(user + ": " + totalPoints(answers) + " points.");
	}else//si se han respondido a todas las preguntas, guardamos la puntuación y luego mostramos todas las puntuaciones
	{
		saveScore(totalPoints(answers),user);
		showScore();
	}

	
	resetQuestions();//ponemos el status de todas las preguntas de nuevo a 0, por si el usuario quiere jugar de nuevo
	//Preguntamos si quiere volver a jugar:
	var repeat = prompt("Play Again? yes/no").toLowerCase();
	if(repeat === "yes")
	{
		pasapalabra();
	}
}

//********************************************************************************************
function loadQuestions(letter)// función para cargar una pregunta de cada letra de forma aleatoria
{
	var quest = questions.filter(function(filterQuests){
							return (filterQuests.letter == letter);
						});
	random = Math.round((Math.random() * 2));
	return quest[random];
}

//********************************************************************************************
function question(arrQuests,letter)//función que recibe el array de preguntas y la letra y muestra la pregunta por pantalla
{
	var quest = arrQuests.filter(function(filterQuests){
							return (filterQuests.letter == letter);
						});
	if (quest[0].status === 0) 
	{
		console.log(quest[0].question);
		return true;	
	}else
	{
		return false;
	}
	
}

//********************************************************************************************
function answer(arrQuests,letter)//función para comprobar la respuesta
{
	var quest = arrQuests.filter(function(filterQuests){
							return (filterQuests.letter == letter);
						});
	var answerToQuest = quest[0].answer;
	var answerToUser = prompt("Introduce tu respuesta:").toLowerCase();

	if(answerToUser === "pasapalabra")
	{
		return answerToUser;
	}else
	{
		quest[0].status = 1;
	}

	if(answerToQuest===answerToUser)
	{
		return true;
	}else if(answerToUser==="end")
	{
		return answerToUser;
	}
	return false;
}

//********************************************************************************************
function nextLetter(letter)//función que recibe una letra y devuelve la siguiente por orden alfabético
{
	switch(letter)
	{
		case "n":
			return "ñ";
			break;
		case "ñ":
			return "o";
			break;
		case "z":
			return "a";
			break;
		default:// si no es un caso especial, pasamos la letra a numero, lo incrementamos y devolvemos el caracter
		var numLetter = letter.charCodeAt(0); 
		numLetter++;
		return String.fromCharCode(numLetter);
	}
}

//********************************************************************************************
function totalPoints(arrAnswers)//función que recibe las respuestas del usuario y hace el recuento de puntos
{
	var points = 0;
	for(var i=0; i<arrAnswers.length; i++)
	{	
		if(arrAnswers[i]===true)
		{
			points++;
		}
	}
	return points;
}

//********************************************************************************************
function saveScore(pointsUser, nameUser) // función que guarda la puntuación y ordenarla
{
	var scoreUser = {name:nameUser, points:pointsUser}; // creo un objeto
	score.push(scoreUser);// y lo introduzco en el array
	score = score.sort(function(a,b) //ordeno el array
		{
			return b.points-a.points;
		});
}

//********************************************************************************************
function showScore()//función para mostrar las puntuaciones guardadas
{
	score.forEach(showPoints);
}
function showPoints(objScore)
{
	console.log(objScore.name + ": " + objScore.points + " points");
}

//********************************************************************************************
//Funciones para poner el status de las preguntas a 0
function resetQuestions()
{
	questions.forEach(resetStatus);
}

function resetStatus(quest)
{
	quest.status = 0 ;
}



