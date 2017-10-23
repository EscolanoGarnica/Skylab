
/**
*EXCERCISE 1:
*
*Write a function in Javascript that having two integers x1 and x2 returns all the integers between them. 
*If x2 es lower than x1 it should return -1
*/

function differenceX1X2(x1,x2)
{
	if(x2<x1)
	{
		return -1;
	}else
	{
		var arrNumbers=[];
		for(var i = x1+1; i<x2;i++)
		{
			arrNumbers.push(i);
		}
		return arrNumbers;
	}
}
//END---------------------------------------------------------------------------------------------------

/**
*EXCERCISE 2:
*
*Write a function that writes in the console the multiplication table (from 1 to 10)
*/

function multiplicyTable()
{
	var strTable = "\n";
	for(var i =1; i<=10;i++)
	{
		for(var j=1; j<=10;j++)
		{
			strTable += i*j + "\t";
		}
		strTable += "\n";
	}
	return strTable;
}
//END---------------------------------------------------------------------------------------------------

/**
*EXCERCISE 3:
*
*Write a function that writes in the console the multiplication table (in one column) of any number passed 
*as parameter
*/

function multiplicyTable(numberMult)
{
	var strTable = "\n";
	for(var i =1; i<=10;i++)
	{
		strTable += i*numberMult + "\n";
	}
	return strTable;
}
//END---------------------------------------------------------------------------------------------------

/**
*EXCERCISE 4:
*
*Write a program that writes in the console all the multiples of 23 less than 500 and at the end writes the 
*sum of all of them.
*/

function calculation()
{
	var strMultiples= "Elements:";

	var sumMultiples = 0;

	for(var i=0; i<500;i+=23)
	{
		strMultiples+= " " + i;
		sumMultiples += i;
	}
	strMultiples += "\nSum: " + sumMultiples;

	return strMultiples;
}
//END---------------------------------------------------------------------------------------------------

/**
*EXCERCISE 5:
*
*Define a function max() that takes two numbers as arguments and returns the largest of them. Use the 
*if-then-else construct available in Javascript.
*/

function max(a,b)
{
	if(a>b)
	{
		return a;
	}else
	{
		return b;
	}
}
//Otra forma:
function max(a,b)
{
	return (a>=b ? a : b; // ? operador ternario, si a es mayor que b, devuelve a si no devuelve b
}
//END---------------------------------------------------------------------------------------------------

/**
*EXCERCISE 6:
*
*Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
*/
function maxOfThree(a,b,c)
{
	if (a>b && a>c) 
	{
		return a;
	}else if(b>c)
	{
		return b;
	}else
	{
		return c;
	}
}
//END---------------------------------------------------------------------------------------------------

/**
*EXCERCISE 7:
*
*Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, 
*false otherwise.
*/

function isVowel(letter)
{
	switch (letter.toLowerCase())
	{
		case "a":
			break;
		case "e":
			break;
		case "i":
			break;
		case "o":
			break;
		case "u":
			break;
		default:
			return false;
	}	
	return true;
}
//END---------------------------------------------------------------------------------------------------

/**
*EXCERCISE 8:
*
*Writes a function that convert a hexadecimal color, "blue" for example "#0000FF" in its RGB representation 
*rgb(0,0,255)". Give the function the name getRGB() and test it with this code
*/

function getRGB(hexColor)
{
	if (/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.test(hexColor) === false)
        return;
    
	var color1 = parseInt(hexColor.substring(1,3),16);
	var color2 = parseInt(hexColor.substring(3,5),16);
	var color3 = parseInt(hexColor.substring(5,7),16);
	var strRGB = 'rgb('+ color1 + ',' + color2 + ',' + color3 +')';
	return strRGB;
}
//END---------------------------------------------------------------------------------------------------

/**
*EXCERCISE 9:
*Improves the previous function so besides the conversion also identifies some basic colors:
*
*Black: #000000
*White: #FFFFFF
*Red: #FF0000
*Green: #00FF00
*Blue: #0000FF
*/

function getRGB(hexColor)
{
	var _hexColor = hexColor.toUpperCase();
	var color1= parseInt(hexColor.substring(1,3),16);
	var color2= parseInt(hexColor.substring(3,5),16);
	var color3= parseInt(hexColor.substring(5,7),16);
	var strRGB = 'rgb('+ color1 + ',' + color2 + ',' + color3 +')';

	switch(_hexColor)
	{
		case '#000000':
			strRGB += ' black';
			break;
		case '#FFFFFF':
			strRGB += ' white';
			break;
		case '#FF0000':
			strRGB += ' red';
			break;
		case '#00FF00':
			strRGB += ' green';
			break;
		case '#0000FF':
			strRGB += ' blue';
			break;
	}

	return strRGB;
}
//ALL-END----------------------------------------------------------------------------------------------
