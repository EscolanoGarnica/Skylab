
//{ letter: "", answer: "", status: 0, question:("")},
var questions = [ //status: 0: no preguntada, 1:preguntada y respondida
    { letter: "a", answer: "abducir", status: 0, question: ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien") },
    { letter: "a", answer: "abuelo", status: 0, question:("CON LA A. El padre de tu padre")},
    { letter: "a", answer: "abeja", status: 0, question:("CON LA A. Insecto volador fabricante de miel")},
    { letter: "a", answer: "animal", status: 0, question:("CON LA A. Ser orgánico que vive, siente y se mueve por propio impulso")},
    { letter: "a", answer: "arrestar", status: 0, question:("CON LA A. Retener a alguien y privarlo de su libertad")},
    { letter: "a", answer: "asociacion", status: 0, question:("CON LA A. Conjunto de los asociados para un mismo fin y, en su caso, persona jurídica por ellos formada")},
    { letter: "b", answer: "bingo", status: 0, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso") },
    { letter: "b", answer: "bombero", status: 0, question:("CON LA B. Hombre que se dedica profesionalmente a la extinción de incendios")},
    { letter: "b", answer: "baltasar", status: 0, question:("CON LA B. Uno de los tres reyes magos")},
    { letter: "b", answer: "bohemio", status: 0, question:("CON LA B. Dicho de un modo de vida: Que se aparta de las normas y convenciones sociales, como el atribuido a los artistas")},
    { letter: "b", answer: "bocadillo", status: 0, question:("CON LA B. Pieza de pan abierta, o conjunto de dos rebanadas, en cuyo interior se coloca o se unta algún alimento")},
    { letter: "b", answer: "ballena", status: 0, question:("CON LA B. Cetáceo, el mayor de todos los animales conocidos, que llega a crecer hasta más de 30 m de longitud")},
    { letter: "c", answer: "churumbel", status: 0, question: ("CON LA C. Niño, crío, bebé") },
	{ letter: "c", answer: "corea", status: 0, question:("CON LA C. Nación asiatica divida en sur y norte")},
	{ letter: "c", answer: "canada", status: 0, question:("CON LA C. Estado situado al norte de Estados Unidos")},
    { letter: "c", answer: "cacahuete", status: 0, question:("CON LA C. Fruto seco que le encanta a los elefantes")},
    { letter: "c", answer: "cara", status: 0, question:("CON LA C. Parte anterior de la cabeza humana desde el principio de la frente hasta la punta de la barbilla")},
    { letter: "c", answer: "chiste", status: 0, question:("CON LA C. Dicho u ocurrencia agudos y graciosos")},
    { letter: "d", answer: "diarrea", status: 0, question: ("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida") },
    { letter: "d", answer: "diario", status: 0, question:("CON LA D. Libreta donde una persona apunta sus vivencias personales")},
    { letter: "d", answer: "dos", status: 0, question:("CON LA D. Único número primo par")},
    { letter: "d", answer: "diesel", status: 0, question:("CON LA D. Combustible obtenido del petroleo")},
    { letter: "d", answer: "dinosaurios", status: 0, question:("CON LA D. Animales extintos hace millones de años")},
    { letter: "d", answer: "dedal", status: 0, question:("Utensilio pequeño, ligeramente cónico y hueco, con la superficie llena de hoyuelos y cerrado a veces por un casquete esférico para proteger el dedo al coser")},
    { letter: "e", answer: "efimero", status: 0, question:("CON LA E. Que dura poco tiempo o es pasajero")},
    { letter: "e", answer: "ectoplasma", status: 0, question: ("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación") },
    { letter: "e", answer: "estado", status: 0, question:("CON LA E. Nación de pleno derecho internacional")},
    { letter: "e", answer: "enano", status: 0, question:("CON LA E. Personaje de figura humana y muy baja estatura, que aparece en cuentos infantiles o leyendas de tradición popular")},
    { letter: "e", answer: "etnia", status: 0, question:("CON LA E. Comunidad humana definida por afinidades raciales, lingüísticas, culturales, etc")},
    { letter: "e", answer: "estadio", status: 0, question:("CON LA E. Recinto con grandes dimensiones con graderías para los espectadores, destinado a competiciones deportivas")},
    { letter: "f", answer: "facil", status: 0, question: ("CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad") },
    { letter: "f", answer: "fuego", status: 0, question:("CON LA F. Emisión de luz y calor producida por la combustión de una materia")},
    { letter: "f", answer: "frio", status: 0, question:("CON LA F. Que tiene una temperatura baja o más baja de lo que se desea, conviene o resulta agradable")},
    { letter: "f", answer: "frenar", status: 0, question:("CON LA F. Moderar o parar con el freno el movimiento de una máquina o de un carruaje")},
    { letter: "f", answer: "flaco", status: 0, question:("CON LA F. Lo contrario de gordo")},
    { letter: "f", answer: "fiera", status: 0, question:("CON LA F. Dicho de un animal salvaje o agresivo")},
    { letter: "g", answer: "galaxia", status: 0, question: ("CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas") },
    { letter: "g", answer: "gas", status: 0, question:("CON LA G. Fluido sin forma ni volumen propios, cuyas moléculas tienden a separarse unas de otras y presentan mayor movilidad que las de los líquidos")},
    { letter: "g", answer: "grupo", status: 0, question:("CON LA G. Conjunto de personas, animales o cosas que están juntos o reunidos o que tienen alguna característica común")},
    { letter: "g", answer: "genocidio", status: 0, question:("CON LA G. Exterminio o eliminación sistemática de un grupo humano por motivo de raza, etnia, religión, política o nacionalidad")},
    { letter: "g", answer: "grande", status: 0, question:("CON LA G. Que supera en tamaño a lo común y regular")},
    { letter: "g", answer: "gentil", status: 0, question:("CON LA G. Amable o cortés")},
    { letter: "h", answer: "harakiri", status: 0, question: ("CON LA H. Suicidio ritual japonés por desentrañamiento") },
    { letter: "h", answer: "halago", status: 0, question:("CON LA H. Alabanza generalmente exagerada e interesada que se hace a una persona para satisfacer su orgullo o su vanidad")},
    { letter: "h", answer: "histeria", status: 0, question:("CON LA H. Enfermedad nerviosa que se caracteriza por frecuentes cambios psíquicos y alteraciones emocionales que pueden ir acompañados de convulsiones, parálisis y sofocaciones")},
    { letter: "h", answer: "historia", status: 0, question:("CON LA H. Narración y exposición de los acontecimientos pasados y dignos de memoria, sean públicos o privados")},
    { letter: "h", answer: "hijo", status: 0, question:("CON LA H. Persona o animal respecto de sus padres")},
    { letter: "h", answer: "hexadecimal", status: 0, question:("CON LA H. Dicho de un sistema de numeración que tiene como base el número dieciséis")},
    { letter: "i", answer: "iglesia", status: 0, question: ("CON LA I. Templo cristiano") },
    { letter: "i", answer: "idiota", status: 0, question:("CON LA I. Persona que es poco inteligente o que molesta a alguien con lo que hace o con lo que dice")},
    { letter: "i", answer: "invento", status: 0, question:("CON LA I. Creación, diseño o producción de alguna cosa nueva que antes no existía")},
    { letter: "i", answer: "internar", status: 0, question:("CON LA I. Trasladar o mandar trasladar tierra adentro a alguien o algo")},
    { letter: "i", answer: "insomnio", status: 0, question:("CON LA I. Vigilia, falta de sueño a la hora de dormir")},
    { letter: "i", answer: "iniciar", status: 0, question:("CON LA I. Proporcionar a alguien los primeros conocimientos o experiencias sobre algo")},
    { letter: "j", answer: "jabali", status: 0, question: ("CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba") },
    { letter: "j", answer: "jota", status: 0, question:("CON LA J. Baile popular de varias regiones de España")},
    { letter: "j", answer: "juglar", status: 0, question:("CON LA J. En la Edad Media, artista itinerante que recitaba y cantaba obras de otros poetas en las cortes de los grandes señores")},
    { letter: "j", answer: "joroba", status: 0, question:("CON LA J. Giba, corcova, chepa")},
    { letter: "j", answer: "jaen", status: 0, question:("CON LA J. Provincia de Andalucía")},
    { letter: "j", answer: "judio", status: 0, question:("CON LA J. Que profesa la ley de Moisés")},
    { letter: "k", answer: "kamikaze", status: 0, question: ("CON LA K. Persona que se juega la vida realizando una acción temeraria") },
    { letter: "k", answer: "kiko", status: 0, question:("CON LA K. Grano de maíz tostado y salado")},
    { letter: "k", answer: "kayak", status: 0, question:("CON LA K. Canoa individual de remo, cubierta de pieles, que utilizan los esquimales")},
    { letter: "k", answer: "kilometro", status: 0, question:("CON LA K. Unidad de medida que comprende mil metros")},
    { letter: "k", answer: "karaoke", status: 0, question:("CON LA K. Diversión consistente en interpretar una canción sobre un fondo musical grabado, mientras se sigue la letra que aparece en una pantalla")},
    { letter: "k", answer: "kit", status: 0, question:("CON LA K. Conjunto de productos y utensilios suficientes para conseguir un determinado fin, que se comercializan como una unidad")},
    { letter: "l", answer: "licantropo", status: 0, question: ("CON LA L. Hombre lobo") },
    { letter: "l", answer: "libertad", status: 0, question:("CON LA L. Facultad y derecho de las personas para elegir de manera responsable su propia forma de actuar dentro de una sociedad")},
    { letter: "l", answer: "loco", status: 0, question:("CON LA L. Persona que tiene trastornadas o perturbadas las facultades mentales")},
    { letter: "l", answer: "litro", status: 0, question:("CON LA L. Unidad de medida para medir liquidos")},
    { letter: "l", answer: "loteria", status: 0, question:("CON LA L. Rifa o sorteo que se hace con objetos, dinero y otras cosas, con autorización pública")},
    { letter: "l", answer: "lejano", status: 0, question:("CON LA L. Que está lejos en el espacio o en el tiempo")},
    { letter: "m", answer: "misantropo", status: 0, question: ("CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas") },
    { letter: "m", answer: "madre", status: 0, question:("CON LA M. Mujer que ha tenido uno o más hijos, o animal hembra que ha tenido una o más crías")},
    { letter: "m", answer: "meteorito", status: 0, question:("CON LA M. Fragmento de un cuerpo procedente del espacio exterior que entra en la atmósfera a gran velocidad y cae sobre la Tierra")},
    { letter: "m", answer: "miope", status: 0, question:("CON LA M. Dicho de una persona o de un ojo afectado por miopía")},
    { letter: "m", answer: "muerto", status: 0, question:("CON LA M. Que carece de vida")},
    { letter: "m", answer: "mendigo", status: 0, question:("CON LA M. Persona que habitualmente pide limosna")},
    { letter: "n", answer: "necedad", status: 0, question: ("CON LA N. Demostración de poca inteligencia") },
    { letter: "n", answer: "nadie", status: 0, question:("CON LA N. Ninguna persona")},
    { letter: "n", answer: "noruego", status: 0, question:("CON LA N. Hombre original de Noruega")},
    { letter: "n", answer: "navarro", status: 0, question:("CON LA N. Hombre original de Navarra")},
    { letter: "n", answer: "novato", status: 0, question:("CON LA N. Nuevo o principiante en cualquier facultad o materia")},
    { letter: "n", answer: "naranja", status: 0, question:("CON LA N. Fruta del mismo color que su nombre")},
    { letter: "ñ", answer: "señal", status: 0, question: ("CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.") },
    { letter: "ñ", answer: "ñoqui", status: 0, question:("CON LA Ñ. Pasta que se elabora con puré de papas, harina, mantequilla, leche y huevo")},
    { letter: "ñ", answer: "año", status: 0, question:("CONTIENE LA Ñ. Tiempo que emplea la Tierra en dar una vuelta alrededor del Sol")},
    { letter: "ñ", answer: "pañal", status: 0, question:("CONTIENE LA Ñ. Tira de tela o celulosa absorbente que se pone a los niños pequeños o a las personas que sufren incontinencia de orina")},
    { letter: "ñ", answer: "piña", status: 0, question:("CONTIENE LA Ñ. Fruto del pino y de otros árboles, de forma aovada")},
    { letter: "ñ", answer: "cañon", status: 0, question:("CONTIEN LA Ñ. Pieza de artillería, de gran longitud respecto a su calibre, destinada a lanzar balas, metralla o proyectiles huecos")},
    { letter: "o", answer: "orco", status: 0, question: ("CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien") },
    { letter: "o", answer: "oscuridad", status: 0, question:("CON LA O. Falta o escasez de luz para percibir las cosas")},
    { letter: "o", answer: "origen", status: 0, question:("CON LA O. Fenómeno o hecho que es el principio, causa o motivo de otro fenómeno o hecho o de una cosa")},
    { letter: "o", answer: "oviedo", status: 0, question:("CON LA O. Capital de Asturias")},
    { letter: "o", answer: "oblicuo", status: 0, question:("CON LA O. Que se desvía de la línea horizontal o vertical")},
    { letter: "o", answer: "oro", status: 0, question:("CON LA O. El más dúctil y maleable de los metales, muy buen conductor del calor y la electricidad, escaso en la corteza terrestre")},
    { letter: "p", answer: "protoss", status: 0, question: ("CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft") },
    { letter: "p", answer: "pesticida", status: 0, question:("CON LA P. Sustancia química que destruye las plagas de animales y plantas")},
    { letter: "p", answer: "palangana", status: 0, question:("CON LA P. Recipiente circular, ancho y poco profundo, usado especialmente para lavarse")},
    { letter: "p", answer: "pamplona", status: 0, question:("CON LA P. Capital de Navarra")},
    { letter: "p", answer: "peregrinar", status: 0, question:("CON LA P. Ir en romería a un santuario por devoción o por voto")},
    { letter: "p", answer: "pelo", status: 0, question:("CON LA P. Filamento cilíndrico, delgado, de naturaleza córnea, que nace y crece en la piel de algunos animales, especialmente los mamíferos")},
    { letter: "q", answer: "queso", status: 0, question: ("CON LA Q. Producto obtenido por la maduración de la cuajada de la leche") },
    { letter: "q", answer: "conquistar", status: 0, question:("CONTIENE LA Q. Apoderarse de un lugar, como un territorio, una ciudad, etc., por la fuerza, especialmente con armas")},
    { letter: "q", answer: "quimera", status: 0, question:("CON LA Q. Monstruo fabuloso que se representa con cabeza de león, cuerpo de cabra y cola de dragón")},
    { letter: "q", answer: "querer", status: 0, question:("CON LA Q. Amar, tener cariño, voluntad o inclinación a alguien o algo")},
    { letter: "q", answer: "quinto", status: 0, question:("CON LA Q. Que sigue inmediatamente en orden al o a lo cuarto")},
    { letter: "q", answer: "quincena", status: 0, question:("CON LA Q. Espacio de quince días")},
    { letter: "r", answer: "raton", status: 0, question: ("CON LA R. Roedor") },
    { letter: "r", answer: "rizo", status: 0, question:("CON LA R. Mechón de pelo que tiene forma de sortija o espiral")},
    { letter: "r", answer: "rueda", status: 0, question:("CON LA R. Objeto circular, de poco grosor respecto a su radio, que puede girar sobre un eje de múltiples aplicaciones")},
    { letter: "r", answer: "resultado", status: 0, question:("CON LA R. Efecto y consecuencia de un hecho, operación o deliberación")},
    { letter: "r", answer: "raro", status: 0, question:("CON LA R. Escaso en su clase o especie")},
    { letter: "r", answer: "ruso", status: 0, question:("CON LA R. Hombre origianl de Rusia")},
    { letter: "s", answer: "stackoverflow", status: 0, question: ("CON LA S. Comunidad salvadora de todo desarrollador informático") },
    { letter: "s", answer: "sueño", status: 0, question:("CON LA S. Deseo o necesidad de dormir")},
    { letter: "s", answer: "siervo", status: 0, question:("CON LA S. Persona vinculada y subordinada a otra, especialmente los que servían a los señores feudales en la Edad Media")},
    { letter: "s", answer: "senda", status: 0, question:("CON LA S. Camino más estrecho que la vereda, abierto principalmente por el tránsito de peatones y del ganado menor")},
    { letter: "s", answer: "suerte", status: 0, question:("CON LA S. Encadenamiento de los sucesos, considerado como fortuito o casual")},
    { letter: "s", answer: "suero", status: 0, question:("CON LA S. Disolución de sales u otras sustancias en agua, que se inyecta con fin curativo")},
    { letter: "t", answer: "terminator", status: 0, question: ("CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984") },
    { letter: "t", answer: "trueno", status: 0, question:("CON LA T. Ruido muy fuerte que sigue al rayo durante una tempestad, producido por la expansión del aire al paso de la descarga eléctrica")},
    { letter: "t", answer: "teoria", status: 0, question:("CON LA T. Conjunto de reglas, principios y conocimientos acerca de una ciencia, una doctrina o una actividad, prescindiendo de sus posibles aplicaciones prácticas")},
    { letter: "t", answer: "trastorno", status: 0, question:("CON LA T. En el derecho penal, una de las circunstancias eximentes o atenuantes de la responsabilidad criminal")},
    { letter: "t", answer: "tarragona", status: 0, question:("CON LA T. Provcincia de Cataluña")},
    { letter: "t", answer: "tren", status: 0, question:("CON LA T. Medio de transporte que circula sobre raíles, compuesto por uno o más vagones arrastrados por una locomotora")},
    { letter: "u", answer: "unamuno", status: 0, question: ("CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914") },
    { letter: "u", answer: "unicornio", status: 0, question:("CON LA U. Animal fabuloso con figura de caballo y con un cuerno recto en mitad de la frente")},
    { letter: "u", answer: "usual", status: 0, question:("CON LA U. Que se usa o se practica común o frecuentemente")},
    { letter: "u", answer: "uno", status: 0, question:("CON LA U. Número que antecede al dos")},
    { letter: "u", answer: "universal", status: 0, question:("CON LA U. Perteneciente o relativo al universo")},
    { letter: "u", answer: "unidad", status: 0, question:("CON LA U. Singularidad en número o calidad.")},
    { letter: "v", answer: "vikingos", status: 0, question: ("CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa") },
    { letter: "v", answer: "voyeur", status: 0, question:("CON LA V. Persona que espía o mira a escondidas a otras personas en situaciones eróticas para excitarse sexualmente")},
    { letter: "v", answer: "valentia", status: 0, question:("CON LA V. Determinación para enfrentarse a situaciones arriesgadas o difíciles")},
    { letter: "v", answer: "valenciana", status: 0, question:("CON LA V. Mujer original de Valencia")},
    { letter: "v", answer: "vaticano", status: 0, question:("CON LA V. Estado donde reside su santidad el Papa")},
    { letter: "v", answer: "vitoria", status: 0, question:("CON LA V. Capital de Álava")},
    { letter: "w", answer: "sandwich", status: 0, question: ("CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso") },
    { letter: "w", answer: "web", status: 0, question:("CON LA W. Conjunto de información que se encuentra en una dirección determinada de internet")},
    { letter: "w", answer: "whisky", status: 0, question:("CON LA W. Bebida alcohólica de alta graduación que se obtiene por destilación de cebada y otros cereales.")},
    { letter: "w", answer: "windows", status: 0, question:("CON LA W. Sistema operativo perteneciente a Microsoft y nombre de mi perro")},
    { letter: "w", answer: "windows", status: 0, question:("CON LA W. Sistema operativo perteneciente a Microsoft y nombre de mi perro")},
    { letter: "w", answer: "windows", status: 0, question:("CON LA W. Sistema operativo perteneciente a Microsoft y nombre de mi perro")},
    { letter: "x", answer: "botox", status: 0, question: ("CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética") },
    { letter: "x", answer: "taxi", status: 0, question:("CONTIENE LA X. Automóvil de servicio público que transporta de un lugar a otro a las personas que lo solicitan a cambio de dinero")},
    { letter: "x", answer: "maximo", status: 0, question:("CONTIENE LA X. Nombre del personaje protagonista de la película Gladiator")},
    { letter: "x", answer: "botox", status: 0, question: ("CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética") },
    { letter: "x", answer: "taxi", status: 0, question:("CONTIENE LA X. Automóvil de servicio público que transporta de un lugar a otro a las personas que lo solicitan a cambio de dinero")},
    { letter: "x", answer: "maximo", status: 0, question:("CONTIENE LA X. Nombre del personaje protagonista de la película Gladiator")},
    { letter: "y", answer: "peyote", status: 0, question: ("CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos") },
    { letter: "y", answer: "yogur", status: 0, question:("CON LA Y. Alimento líquido y espeso o pastoso, de sabor agrio, que se obtiene por fermentación de la leche de vaca entera o desnatada")},
    { letter: "y", answer: "baya", status: 0, question:("CONTIENE LA Y. Fruto carnoso o pulposo con varias semillas en su interior que están envueltas directamente por la pulpa; suele tener forma redondeada o elipsoidal")},
    { letter: "y", answer: "peyote", status: 0, question: ("CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos") },
    { letter: "y", answer: "yogur", status: 0, question:("CON LA Y. Alimento líquido y espeso o pastoso, de sabor agrio, que se obtiene por fermentación de la leche de vaca entera o desnatada")},
    { letter: "y", answer: "baya", status: 0, question:("CONTIENE LA Y. Fruto carnoso o pulposo con varias semillas en su interior que están envueltas directamente por la pulpa; suele tener forma redondeada o elipsoidal")},
    { letter: "z", answer: "zen", status: 0, question: ("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional") },
    { letter: "z", answer: "zoo", status: 0, question:("CON LA Z. Institución penitenciaría para animales")},
    { letter: "z", answer: "zumo", status: 0, question:("CON LA Z. Líquido contenido en el tejido de las frutas que puede extraerse por presión, cocción, etc., y beberse")},
    { letter: "z", answer: "zen", status: 0, question: ("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional") },
    { letter: "z", answer: "zoo", status: 0, question:("CON LA Z. Institución penitenciaría para animales")},
    { letter: "z", answer: "zumo", status: 0, question:("CON LA Z. Líquido contenido en el tejido de las frutas que puede extraerse por presión, cocción, etc., y beberse")},
];


//*******************************************************************************************
//VARIABLES GLOBALES:

var score = []; // array que contendrá objetos con las puntuaciones de los jugadores
var answers = []; //array que contendrá si el usuario ha acertado o fallado la respuesta, mediante true's y false's
var round = 0;	//number para el numero de ronda, cuando lleve 27, se acaba el juego, los pasapalabra no cuentan como ronda
	
var letter = "a"; //letra actual de la que tiene que hacerse la pregunta
var arrQuestions = []; // array que contendrá una pregunta al azar por cada letra del objeto "questions"

var user = ""; //string que contiene el nombre del jugador
var time = 180; //segundos del tiempo límite
var timeInterval;  //variable para el tiempo
var timeTimeout;    //variable para cada segundo del tiempo

//*******************************************************************************************
//función que se ejecuta al cargar la pagina
function initialize()
{
	textTitleHtml = document.getElementById('textTitle');
	menuHtml=document.getElementById('mainMenu');
	newUserHtml=document.getElementById('newUserMenu');
	inputNewUserHtml=document.getElementById('inputNewUser');
	textNewUserHtml = document.getElementById("textNewUser");
	divTutorialHtml =document.getElementById("divTutorial");
	divClasificacionHtml = document.getElementById("divClasificacion");
	gameHtml=document.getElementById('game');
	questHtml=document.getElementById('question');
	answerHtml=document.getElementById('answer');
	divNoClasificacionHtml=document.getElementById('divNoClasificacion');
	textNoClasificacionHtml=document.getElementById('textNoClasificacion');
	textTimeHtml = document.getElementById('textTime');
	optionsMenuHtml=document.getElementById('optionsMenu');
}

//*******************************************************************************************
//función para mostrar el panel de nuevo usuario:
function showNewUser()
{
	
	textNewUserHtml.innerHTML="Introduce tu nombre y pulsa intro";
	textNewUserHtml.style.color="white";
	textNewUserHtml.style.textDecoration="none";
	inputNewUserHtml.value="";

	menuHtml.style.display="none"; //oculto el menu
	newUserHtml.style.display="block"; //muestro el div donde el usuario introduce su nombre

	inputNewUserHtml.focus();
}

function back()
{
	newUserHtml.style.display="none"; //oculto el div donde el usuario introduce su nombre
	divClasificacionHtml.style.display="none";
	divNoClasificacionHtml.style.display="none";
	menuHtml.style.display="block"; //muestro el menu
}
//*******************************************************************************************
//función para mostrar el panel de opciones:
function showOptions()
{

	menuHtml.style.display="none"; //oculto el menu
	optionsMenuHtml.style.display="inline-block"; //muestro el div opciones

    if(divTutorialHtml.style.display==="none"){
        document.getElementById('optionNo').selected=true;
    }else {
        document.getElementById('optionYes').selected=true;
    }
}

function saveOptions()
{
	optionsMenuHtml.style.display="none"; //oculto el div donde el usuario introduce su nombre
	menuHtml.style.display="block"; //muestro el menu
}

function changeTime()//función para cambiar el tiempo desde las opciones
{
	time = document.getElementById('timeOption').value;
}
function changeColor()//función para cambiar el color desde las opciones
{
	var color=document.getElementById('colorOption').value.toLowerCase();
	switch (color)
	{
		case "red":
			color="#e20429";
			break;
		case "blue":
			color="#0947a3";
			break;
		case "green":
			color="#03aa27";
			break;
		case "black":
			color="#000000";
			break;
		case "lila":
			color="#890489";
			break;
	}
    optionsMenuHtml.style.backgroundColor= color;
	textTitleHtml.style.color=color;
	menuHtml.style.backgroundColor= color;
	newUserHtml.style.backgroundColor= color;
	divClasificacionHtml.style.backgroundColor= color;
	divNoClasificacionHtml.style.backgroundColor= color;
	textTimeHtml.style.color=color;
	document.getElementById('colorOption').style.color=color;
	document.getElementById('timeOption').style.color=color;
    document.getElementById('tutorialOption').style.color=color;
}

function changeTutorial(){//función para mostrar y ocultar el tutorial desde las opciones
    if(document.getElementById('optionNo').selected===true){
        divTutorialHtml.style.display="none";
    }else {
        divTutorialHtml.style.display="block";
    }
}
//*******************************************************************************************
//función para mostrar el panel de clasificacion:
function showClasificacion()
{
	menuHtml.style.display="none"; //oculto el menu
	divClasificacionHtml.style.display="block";
	showScore();
}
//*******************************************************************************************
//función para mostrar y empezar el juego:
function startGame()
{
	if(event.keyCode === 13 && inputNewUserHtml.value!="" )//compruebo si se pulsa el enter
	{
		if(inputNewUserHtml.value.length>10){
			user = inputNewUserHtml.value.toUpperCase();
			user = user.substring(0, 10);
		}else
		{
			user = inputNewUserHtml.value.toUpperCase();
		}
		
		inputNewUserHtml.value="";
		
		newUserHtml.style.display="none"; //oculto el div donde el usuario introduce su nombre
		divTutorialHtml.style.display="none";
		gameHtml.style.display="block" //muestro el juego

		for (var i = 0; i < 27; i++)  //creo un array con las preguntas selecionadas aleatoriamente
		{
			arrQuestions.push(loadQuestions(letter));
			letter = nextLetter(letter);
		}
		letter = "a";
		round=0;
		
		checkQuestion();//hago la pregunta

		textTimeHtml.innerHTML = time;
		timeTimeout= setTimeout(timeRun,((time+1)*1000));//pongo en marcha el temporizador
		timeInterval = setInterval(updateTime, 1000);//pongo en marcha el actualizador del tiempo que queda
		
		answerHtml.focus();//activo el campo para la respuesta

	}else if(event.keyCode === 13 && inputNewUserHtml.value==="")// si ha dejado el campo vacio:
	{
		textNewUserHtml.innerHTML="Introduce un nombre y pulsa intro";
		textNewUserHtml.style.color="#f2e209";
		textNewUserHtml.style.textDecoration="underline";
	}
}
//********************************************************************************************
// función para cargar una pregunta de cada letra de forma aleatoria
function loadQuestions(letter)
{
    var quest = questions.filter(function(filterQuests){
                            return (filterQuests.letter == letter);
                        });
    random = Math.round((Math.random() * 5));
    return quest[random];
}

//*******************************************************************************************
//Función para comprobar si la pregunta se ha realizado ya anteriormente:
function checkQuestion()
{
	if(question(arrQuestions,letter)===false)//// si la pregunta ya se ha formulado anteriormente; cambiamos de letra y llamamos a la función de nuevo
		{
			letter = nextLetter(letter);
			checkQuestion();
		}
}

//*******************************************************************************************
//función para comprobar si el jugador responde a la pregunta, pasapalabra o finaliza el juego:
function checkAnswer(event){
	if(event.keyCode === 13)//compruebo si se pulsa el enter
	{
		answers.push(answer(arrQuestions,letter));//introduzco en el array de respuestas si acierta o falla el usuario

		if (answers[round]===true) 
		{
			document.getElementById("letter"+letter.toUpperCase()).className="letterGreen";
		}else if(answers[round]===false)
		{
			document.getElementById("letter"+letter.toUpperCase()).className="letterRed";
		}

		document.getElementById("letter"+letter.toUpperCase()).style.transform="scale(1)";
		letter = nextLetter(letter); //cambiamos la letra

		if (answers[round] != "pasapalabra")  //si la respuesta no ha sido pasapalabra; incrementamos la ronda
		{
			round++;

		}else // si ha respondido pasapalabra no se avanza de ronda y se elimina la respuesta
		{
			answers.pop();
		}

		if(answers[round-1] != "end" && round<27) 
		{
			checkQuestion();
		}else{
			quitGame();
		}
	}
}

//********************************************************************************************
//función que recibe el array de preguntas y la letra y muestra la pregunta por pantalla
function question(arrQuests,letter)
{
	var quest = arrQuests.filter(function(filterQuests){
							return (filterQuests.letter == letter);
						});
	if (quest[0].status === 0) 
	{
		questHtml.innerHTML = quest[0].question;
		document.getElementById("letter"+letter.toUpperCase()).style.transform="scale(1.2)";
		return true;	
	}else
	{
		return false;
	}
	
}

//********************************************************************************************
//función para comprobar la respuesta
function answer(arrQuests,letter)
{
	var quest = arrQuests.filter(function(filterQuests){
							return (filterQuests.letter == letter);
						});
	var answerToQuest = quest[0].answer;
	var answerToUser = answerHtml.value.toLowerCase();
	answerHtml.value = "";

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
//función que recibe una letra y devuelve la siguiente por orden alfabético
function nextLetter(letter)
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
//función que recibe las respuestas del usuario y hace el recuento de puntos
function totalPoints(arrAnswers)
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
// función que guarda la puntuación y ordenarla
function saveScore(pointsUser, nameUser) 
{
	var scoreUser = {name:nameUser, points:pointsUser,time:time}; // creo un objeto
	score.push(scoreUser);// y lo introduzco en el array
	score = score.sort(function(a,b) //ordeno el array
		{
			return b.points-a.points;
		});
	if(score.length>10){
		score.pop();
	}
}

//********************************************************************************************
//función para mostrar las puntuaciones guardadas
function showScore()
{
	score.forEach(showPoints);
}
function showPoints(objScore,i)
{
	i++;
	document.getElementById("nameRow"+i).innerHTML = i+". "+objScore.name;
	document.getElementById("pointsRow"+i).innerHTML = objScore.points +" ("+objScore.time+"seg.)";
}

//********************************************************************************************
//Funciones para poner el status de las preguntas a 0
function resetQuestions()
{
	questions.forEach(resetStatus);

	letter="a";
	for(var i=0;i<27;i++)
	{ 
		document.getElementById("letter"+letter.toUpperCase()).className="letterBlue";
		document.getElementById("letter"+letter.toUpperCase()).style.transform="scale(1)";
		letter = nextLetter(letter);
	}
}

function resetStatus(quest)
{
	quest.status = 0 ;
}
//********************************************************************************************
//Funciones para el temporizador
function timeRun()//cuando pasa todo el tiempo:
{
	quitGame();//se sale del juego
}
function updateTime()
{
	textTimeHtml.innerHTML = (Number(textTimeHtml.innerHTML)-1);
    if(Number(textTimeHtml.innerHTML)===10)
    {   
        textTimeHtml.style.transform="scale(1.2)";
    }else if(Number(textTimeHtml.innerHTML)===9)
    {
        textTimeHtml.style.transform="scale(1.3)";
    }else if(Number(textTimeHtml.innerHTML)===8)
    {
        textTimeHtml.style.transform="scale(1.4)";
    }else if(Number(textTimeHtml.innerHTML)===7)
    {
        textTimeHtml.style.transform="scale(1.5)";
    }else if(Number(textTimeHtml.innerHTML)===6)
    {
        textTimeHtml.style.transform="scale(1.6)";
    }else if(Number(textTimeHtml.innerHTML)===5)
    {
        textTimeHtml.style.transform="scale(1.7)";
    }else if(Number(textTimeHtml.innerHTML)===4)
    {
        textTimeHtml.style.transform="scale(1.8)";
    }else if(Number(textTimeHtml.innerHTML)===3)
    {
        textTimeHtml.style.transform="scale(2)";
    }else if(Number(textTimeHtml.innerHTML)===2)
    {
        textTimeHtml.style.transform="scale(2.2)";
    }else if(Number(textTimeHtml.innerHTML)===1)
    {
        textTimeHtml.style.transform="scale(2.4)";
    }else if(Number(textTimeHtml.innerHTML)===0)
    {
        textTimeHtml.innerHTML = textTimeHtml.innerHTML + "!";
    }

}
//*******************************************************************************************
//función para salir del juego:
function quitGame()
{
    clearInterval(timeInterval);
    clearTimeout(timeTimeout);
    if(answers[round-1]!="end")
    {
        saveScore(totalPoints(answers),user);
        showClasificacion();
    }else{
        textNoClasificacionHtml.innerHTML= (user + ": " + totalPoints(answers) + " aciertos");
        divNoClasificacionHtml.style.display = "block";
    }
    resetQuestions();//ponemos el status de todas las preguntas de nuevo a 0, por si el usuario quiere jugar de nuevo
    arrQuestions = []; //elimino los elementos del array
    answers =[];
    gameHtml.style.display="none" //oculto el juego
}
//********************************************************************************************
//listeners:
window.addEventListener('load',initialize,false);

