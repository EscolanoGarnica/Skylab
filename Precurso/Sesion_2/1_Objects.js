//a) Escribe una función que liste los nombres de propiedad del objeto 
//(Puedes usar el objeto creado más arriba)

function propiertiesNames()
{
	var avenger = { 
    	name : "Tony", 
    	class : "VII", 
    	id : 1 
		};

	console.log(Object.getOwnPropertyNames(avenger));
}

//b) Ahora, crea una función que liste solo los valores de las propiedades.

function propiertiesValues()
{
	var avenger = { 
    	name : "Tony", 
    	class : "VII", 
    	id : 1 
		};

	console.log(avenger.name + ", " + avenger.class + ", " + avenger.id);
}

//c) Cambia el valor de la propiedad class por "XI" y asegurate de que los cambios se han efectuado.

function changeClass()
{
	var avenger = { 
    	name : "Tony", 
    	class : "VII", 
    	id : 1 
		};

	console.log(avenger.name + ", " + avenger.class + ", " + avenger.id);
	avenger.class = "XI";
	console.log(avenger.name + ", " + avenger.class + ", " + avenger.id);
}

//d) Ahora, elimina la propiedad ID y asegura los cambios.

function deleteId()
{
	var avenger = { 
    	name : "Tony", 
    	class : "VII", 
    	id : 1 
		};

	console.log(Object.getOwnPropertyNames(avenger));
	delete avenger.id;
	console.log(Object.getOwnPropertyNames(avenger));
}

//e) Añade una nueva propiedad, por ejemplo city y dale un valor.
function addPropiertie()
{
	var avenger = { 
    	name : "Tony", 
    	class : "VII", 
    	id : 1 
		};

	console.log(Object.getOwnPropertyNames(avenger));
	avenger.lastname = "Stark";
	console.log(Object.getOwnPropertyNames(avenger));
}

//e1) Asegura los cambios solo imprimiendo esa nueva propiedad.
function addPropiertie()
{
	var avenger = { 
    	name : "Tony", 
    	class : "VII", 
    	id : 1 
		};

	console.log(Object.getOwnPropertyNames(avenger));
	avenger.lastname = "Stark";
	console.log(avenger.lastname);
}

//f) Lista el numero de propiedades que contiene el objeto.

function propiertiesNumber()
{
	var avenger = { 
    	name : "Tony", 
    	class : "VII", 
    	id : 1 
		};

	console.log(Object.keys(avenger).length);
}

//g) Cambia la propiedad name por fullName.
//g1) Asegura los cambios.

function propiertiesNames()
{
	var avenger = { 
    	fullName : "Tony Stark", 
    	class : "VII", 
    	id : 1 
		};

	console.log(avenger.fullName);
}

//h) Lista todas las propiedades del objeto a través de un console.log()
function propiertiesNames()
{
	var avenger = { 
    	fullName : "Tony Stark", 
    	class : "VII", 
    	id : 1 
		};

	console.log(Object.getOwnPropertyNames(avenger));
}

//h1) Añade más propiedades al objeto, como... markAverage, country, job, studies...
//h2) Asegura los cambios volviendo a listar los valores del objeto
function propiertiesValues()
{
	var avenger = { 
    	name : "Tony", 
    	class : "VII", 
    	id : 1,
    	markAverage: 8,
    	country: "EEUU",
    	job: "Super Hero"
		};

	console.log(avenger.name + ", " + avenger.class + ", " + avenger.id + ", " + 
		avenger.markAverage + ", " + avenger.country + ", " + avenger.job);
}

//i) Crea un constructor de objetos llamado "Avenger", al cual le pasarás ciertos parametros, 
//creando una instancia del objeto con las propiedades de nuestro objeto creado.
function createObject()
{
	function Avenger(fullName, power, age, city, job)
	{
		this.fullName = fullName;
		this.power = power;
		this.age = age;
		this.city = city;
		this.job = job;
	}
	var ironMan = new Avenger ("Tony Stark", "Armor", 35,"New York","Engineer");
	console.log(ironMan);
	//j) Crea otro objeto y imprime sus propiedades por pantalla.
	var captainAmerica = new Avenger("Steve Rogers","Super Strengh",31,"New York","Soldier");
	console.log(captainAmerica);
}

//k) Crea una propiedad del objeto que liste automáticamente los valores de la instancia
function createObject()
{
	function Avenger(fullName, power, age, city, job)
	{
		this.fullName = fullName;
		this.power = power;
		this.age = age;
		this.city = city;
		this.job = job;
		this.getPropierties = function()
		{
			console.log(this.fullName + ", " + this.power + ", " + this.age + ", " + 
				this.city + ", " + this.job);
		};
	}
	
	var ironMan = new Avenger ("Tony Stark", "Armor", 35,"New York","Engineer");

	var captainAmerica = new Avenger("Steve Rogers","Super Strengh",31,"New York","Soldier");

	ironMan.getPropierties();
	captainAmerica.getPropierties();
}

//l) Ahora, crea una función que solo liste los nombres de los objetos instanciados
function createObject()
{
	function Avenger(fullName, power, age, city, job)
	{
		this.fullName = fullName;
		this.power = power;
		this.age = age;
		this.city = city;
		this.job = job;
		this.getPropierties = function()
		{
			console.log(this.fullName + ", " + this.power + ", " + this.age + ", " + 
				this.city + ", " + this.job);
		};
	}
	
	var ironMan = new Avenger ("Tony Stark", "Armor", 35,"New York","Engineer");

	var captainAmerica = new Avenger("Steve Rogers","Super Strengh",31,"New York","Soldier");

	function listNamesAvengers()
	{
		var arrAvenger = Array.from(arguments);
		for(let i = 0 ; i < arrAvenger.length;i++)
		{
			console.log(arrAvenger[i].fullName);
		}	
	}

	listNamesAvengers(ironMan,captainAmerica);
}

//m) Crea varios objetos con las mismas propiedades, como por ejemplo la ciudad, crea una 
//función para que solo liste los nombres de los Avengers que sean de la misma ciudad y 
//cuantos hay.
function createObject()
{
	function Avenger(fullName, power, markAv, age, city, job)
	{
		this.fullName = fullName;
		this.power = power;
		this.markAv = markAv
		this.age = age;
		this.city = city;
		this.job = job;
		this.getPropierties = function()
		{
			console.log(this.fullName + ", " + this.power + ", " + this.age + ", " + 
				this.city + ", " + this.job);
		};
	}
	
	var arrAvenger = [new Avenger ("Tony Stark", "Armor", 8.5, 35,"New York","Engineer")];

	arrAvenger.push(new Avenger("Steve Rogers","Super Strengh", 8,31,"New York","Soldier"));

	arrAvenger.push(new Avenger("Hulk","Is green",9.4,33,"Orlando","Cientific"));

	arrAvenger.push(new Avenger("Spiderman","Aracnic Powers", 8.3,18,"New York","Photograph"));

	arrAvenger.push(new Avenger("Thor","Is a Good",9.1,35,"Asgard","Good"));

	function listAvengersSameCity(array) // esta función lista los avengers de New york
	{
		var namesAvengers = "";

		function sameCities(item) // esta función es para el filtro
		{
			return item.city === "New York";
		}
		var arrAvengersSameCity = array.filter(sameCities); //filtramos por ciudad(NY)

		function showAvengers(item) //esta funcion es para el forEach, recoge los datos
		{
			namesAvengers = namesAvengers + item.fullName + ", ";
		}
		
		arrAvengersSameCity.forEach(showAvengers); // mostramos datos
		console.log("Are " + arrAvengersSameCity.length + " avengers living in NYC: " + 
			namesAvengers);

	}

	listAvengersSameCity(arrAvenger);
}

//n) Para acabar, créate a ti mismo y crea una función que recoja todas las markAv y muestre 
//la media.

function createObject()
{
	function Avenger(fullName, power, markAv, age, city, job)
	{
		this.fullName = fullName;
		this.power = power;
		this.markAv = markAv
		this.age = age;
		this.city = city;
		this.job = job;
		this.getPropierties = function()
		{
			console.log(this.fullName + ", " + this.power + ", " + this.age + ", " + 
				this.city + ", " + this.job);
		};
	}
	
	var arrAvenger = [new Avenger ("Tony Stark", "Armor", 8.5, 35,"New York","Engineer")];
	arrAvenger.push(new Avenger("Steve Rogers","Super Strengh", 8,31,"New York","Soldier"));
	arrAvenger.push(new Avenger("Hulk","Is green",9.4,33,"Orlando","Cientific"));
	arrAvenger.push(new Avenger("Spiderman","Aracnic Powers", 8.3,18,"New York","Photograph"));
	arrAvenger.push(new Avenger("Thor","Is a Good",9.1,35,"Asgard","Good"));
	arrAvenger.push(new Avenger("Miguel","None",6,31,"Barcelona","Informatic"));

	function average(array)
	{
		var countAverage = [0,0];
		function sumAverage(item)
		{
			countAverage[0] = countAverage[0] + item.markAv;
			countAverage[1]++;
		}
		array.forEach(sumAverage);
		console.log("La media es: " + (countAverage[0]/countAverage[1]));
	}
	average(arrAvenger);
}

//ñ) Ahora, crea una funcion que recoja los avengers en parejas (será necesario que tengan un 
//id, por comodidad al aparejarlos), es decir, de dos en dos, compare sus markAv y que muestre
//el mayor de ambos.

function createObject()
{
	function Avenger(id,fullName, power, markAv, age, city, job)
	{
		this.id = id;
		this.fullName = fullName;
		this.power = power;
		this.markAv = markAv
		this.age = age;
		this.city = city;
		this.job = job;
		this.getPropierties = function()
		{
			console.log(this.fullName + ", " + this.power + ", " + this.age + ", " + 
				this.city + ", " + this.job);
		};
	}
	
	var arrAvenger = [new Avenger (0,"Tony Stark", "Armor", 8.5, 35,"New York","Engineer")];
	arrAvenger.push(new Avenger(1,"Steve Rogers","Super Strengh", 8,31,"New York","Soldier"));
	arrAvenger.push(new Avenger(2,"Hulk","Is green",9.4,33,"Orlando","Cientific"));
	arrAvenger.push(new Avenger(3,"Spiderman","Aracnic Powers", 8.3,18,"New York","Photograph"));
	arrAvenger.push(new Avenger(4,"Thor","Is a Good",9.1,35,"Asgard","Good"));
	arrAvenger.push(new Avenger(5,"Miguel","None",6,31,"Barcelona","Informatic"));

	function compareAvengers(avenger1,avenger2)
	{
		if(avenger1.markAv > avenger2.markAv)
		{
			console.log(avenger1.fullName + " VS " + avenger2.fullName + ": " +
				avenger1.fullName + " is better!");
		}else if(avenger1.markAv < avenger2.markAv)
		{
			console.log(avenger1.fullName + " VS " + avenger2.fullName + ": " +
				avenger2.fullName + " is better!");
		}else
		{
			console.log(avenger1.fullName + " VS " + avenger2.fullName + ": " +
				"Same power!!");
		}
	}

	for (let i = 0; i < arrAvenger.length - 1; i=i+2) //hacemos los emparejamientos
	{
		compareAvengers(arrAvenger[i],arrAvenger[i+1]);
	}
}

//ñ1) Intenta crear las parejas de forma aleatoria.

function createObject()
{
	function Avenger(id,fullName, power, markAv, age, city, job)
	{
		this.id = id;
		this.fullName = fullName;
		this.power = power;
		this.markAv = markAv
		this.age = age;
		this.city = city;
		this.job = job;
		this.getPropierties = function()
		{
			console.log(this.fullName + ", " + this.power + ", " + this.age + ", " + 
				this.city + ", " + this.job);
		};
	}
	
	var arrAvenger = [new Avenger (0,"Tony Stark", "Armor", 8.5, 35,"New York","Engineer")];
	arrAvenger.push(new Avenger(1,"Steve Rogers","Super Strengh", 8,31,"New York","Soldier"));
	arrAvenger.push(new Avenger(2,"Hulk","Is green",9.4,33,"Orlando","Cientific"));
	arrAvenger.push(new Avenger(3,"Spiderman","Aracnic Powers", 8.3,18,"New York","Photograph"));
	arrAvenger.push(new Avenger(4,"Thor","Is a Good",9.1,35,"Asgard","Good"));
	arrAvenger.push(new Avenger(5,"Miguel","None",6,31,"Barcelona","Informatic"));

	function compareAvengers(avenger1,avenger2)
	{
		if(avenger1.markAv > avenger2.markAv)
		{
			console.log(avenger1.fullName + " VS " + avenger2.fullName + ": " +
				avenger1.fullName + " is better!");
		}else if(avenger1.markAv < avenger2.markAv)
		{
			console.log(avenger1.fullName + " VS " + avenger2.fullName + ": " +
				avenger2.fullName + " is better!");
		}else
		{
			console.log(avenger1.fullName + " VS " + avenger2.fullName + ": " +
				"Same power!!");
		}
	}

	for (let i = 0; i < arrAvenger.length - 1; i=i+2) //hacemos los emparejamientos aleatorios
	{
		compareAvengers(arrAvenger[ ((Math.random()* (arrAvenger.length-1)).toFixed(0)) ] , 
			arrAvenger[((Math.random()* (arrAvenger.length-1)).toFixed(0))]);

	}
}



