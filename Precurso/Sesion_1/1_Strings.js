// a) Puedes contar cuantas letras tiene tu nombre?
function countMyName()
{
	var name = "Miguel";
	console.log(name.length);
}

//b) Añade tu apellido e indica en que posición se encuentra

function positionOfLastname()
{
	var fullName = "Miguel Escolano";
	var positionLastname;

	for (var i = 0; i < fullName.length; i++)
	{
		if(fullName[i] === " ")
		{
			positionLastname = i+1;
		}
	}
	console.log(positionLastname);
}

function positionOfLastname() //lo mismo que el anterior pero mas sencillo
{
	var name = "Miguel Escolano";
	console.log(name.indexOf(" ")+1);
}

//c) Ahora, con tu apellido y nombre en la misma variable, muestra solo el nombre

function returnMyName ()
{
	var fullname = "Miguel Escolano";
	var arrFullname = fullname.split(" ");
	console.log(arrFullname[0]);
}

//d) Ahora, solo tu apellido

function returnMyLastname ()
{
	var fullname = "Miguel Escolano";
	var arrFullname = fullname.split(" ");
	console.log(arrFullname[1]);
}

//d1) Iguala el resultado a una variable nueva e imprímela por pantalla.
function returnMyLastname2 ()
{
	var fullName = "Miguel Escolano";
	var arrFullName = fullName.split(" ");
	var lastName = arrFullName[1];
	console.log(lastName);
}

//e) Ahora, reemplaza tu nombre por "Mr/Ms" y vuelve a mostrar la variable con los cambios.

function replaceName()
{
	var fullName = "Miguel Escolano";
	var arrFullName = fullName.split(" ");
	arrFullName[0] = "Mr";
	fullName = arrFullName.join(" ");
	console.log(fullName);
}

//f) Selecciona tu apellido y transfórmalo a MAYÚSCULAS.

function upCaseLastname()
{
	var fullName = "Miguel Escolano";
	var arrFullName = fullName.split(" ");
	arrFullName[1] = arrFullName[1].toUpperCase();
	fullName = arrFullName.join(" ");
	console.log(fullName);

}

//g) Ahora declara una variable nueva e igualala a la anterior variable sumándole, además, un mensaje.

function nameWithWord()
{
	var name = "Miguel";
	var message = "Welcome to Barcelona " + name;
	console.log(message);
}

//h) Ahora, puedes seleccionar la inicial de tu nombre y apellido y mostrarlas por pantalla?

function myFirstLastnameLetters()
{
	var fullName = "Miguel Escolano";
	var arrFullName = fullName.split(" ");
	var firstLetter = arrFullName[0].substring(0,1) + arrFullName[1].substring(0,1);
	console.log(firstLetter);
}

