
/* ------------
EXCERCISE 1:

Write a function in Javascript that having two integers x1 and x2 returns all the integers between them. 
If x2 es lower than x1 it should return -1
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
// END 
//------------------------------------------------------------------------------------------------------

/*------------
EXCERCISE 2:

Write a function that writes in the console the multiplication table (from 1 to 10)
*/

function multiplicyTable()
{
	var strTable = "";
	for(var i =1; i<=10;i++)
	{
		for(var j=1; j<=10;j++)
		{
			strTable += i*j + " ";
		}
		strTable += "\n";
	}
	return strTable;
}

// END 
//------------------------------------------------------------------------------------------------------

/*------------
EXCERCISE 3:

Write a function that writes in the console the multiplication table (in one column) of any number passed 
as parameter
*/

function multiplicyTable(numberMult)
{
	var strTable = "";
	for(var i =1; i<=10;i++)
	{
		strTable += i*numberMult + " ";
		strTable += "\n";
	}
	return strTable;
}
// END 
//------------------------------------------------------------------------------------------------------

/*------------
EXCERCISE 4:

Write a program that writes in the console all the multiples of 23 less than 500 and at the end writes the 
sum of all of them.
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
// END 
//------------------------------------------------------------------------------------------------------

/*------------
EXCERCISE 5:

Define a function max() that takes two numbers as arguments and returns the largest of them. Use the 
if-then-else construct available in Javascript.
*/

function max(a,b)
{
	if(a>b)
	{
		return a;
	}else if(b>a)
	{
		return b;
	}
}
// END 
//------------------------------------------------------------------------------------------------------

/*------------
EXCERCISE 6:

Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
*/
function maxOfThree(a,b,c)
{
	if (a>b && a>c) 
	{
		return a;
	}else if(b>a && b>c)
	{
		return b;
	}else if(c>a && c>b)
	{
		return c;
	}
}
// END 
//------------------------------------------------------------------------------------------------------

/*------------
EXCERCISE 7:

Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, 
false otherwise.
*/

function isVowel(letter)
{
	letter = letter[0];

	switch (letter)
	{
		case "a":
			return true;
			break;
		case "e":
			return true;
			break;
		case "i":
			return true;
			break;
		case "o":
			return true;
			break;
		case "u":
			return true;
			break;
		default:
			return false;
			break;
	}	
}
// END 
//------------------------------------------------------------------------------------------------------

/*------------
EXCERCISE 8:

Writes a function that convert a hexadecimal color, "blue" for example "#0000FF" in its RGB representation 
rgb(0,0,255)". Give the function the name getRGB() and test it with this code
*/

function getRGB(hexColor)
{
	var color1= parseInt(hexColor.substring(1,3),16);
	var color2= parseInt(hexColor.substring(3,5),16);
	var color3= parseInt(hexColor.substring(5,7),16);
	var strRGB = "rgb("+ color1 + "," + color2 + "," + color3 +")";
	return strRGB;
}
// END 
//------------------------------------------------------------------------------------------------------

/*------------
EXCERCISE 9:
Improves the previous function so besides the conversion also identifies some basic colors:

Black: #000000
White: #FFFFFF
Red: #FF0000
Green: #00FF00
Blue: #0000FF
*/

function getRGB(hexColor)
{
	hexColor = hexColor.toUpperCase();
	var color1= parseInt(hexColor.substring(1,3),16);
	var color2= parseInt(hexColor.substring(3,5),16);
	var color3= parseInt(hexColor.substring(5,7),16);
	var strRGB = "rgb("+ color1 + "," + color2 + "," + color3 +")";

	switch(hexColor)
	{
		case "#000000":
			strRGB += " black";
			break;
		case "#FFFFFF":
			strRGB += " white";
			break;
		case "#FF0000":
			strRGB += " red";
			break;
		case "#00FF00":
			strRGB += " green";
			break;
		case "#0000FF":
			strRGB += " blue";
			break;
	}

	return strRGB;
}

