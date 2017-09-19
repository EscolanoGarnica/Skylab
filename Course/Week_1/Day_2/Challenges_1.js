
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
sum of all of them
*/

function calculation()
{
	var strMultiples= "Elements:";

	for(var i=0; i<500;i+=23)
	{
		strMultiples+= " " + i;
	}
	strMultiples *= "\nSum: ";

	return strMultiples;
}


