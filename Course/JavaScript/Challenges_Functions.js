/**
*EXCERCISE 1:
*
*## Fibonacci Challenge
*
*Define a function called fibonacci with a single argument n The function should 
*return the nth number of the fibonacci sequence.
*/
function fibonacci(numLong)
{
	if (numLong<=1)
		return [0];

	var res = [0,1];

	for(var i=1; i<numLong;i++)
	{
		res.push(res[i-1] + res[i]);
	}
	return res;
}
//END-----------------------------------------------------------------------------------


/**
*EXCERCISE 2:
*
*## String Calculator
*
*Define a function called add with a single argument input. The input to the function 
*will be a string containing a comma-separated list of numbers. The function must return
*the sum of the numbers. e.g.
*/

function add(input)
{
	var arr = input.split(',');
	return arr.reduce(function(accum,elem){return accum + parseInt(elem);},0);
}
//END-----------------------------------------------------------------------------------

/**
*EXCERCISE 3:
*
*## Reverse number
*
*Write a JavaScript function that reverse a number
*/

function reverseNumber(num)
{
	return parseInt(num.toString().split('').reverse().join(''));
}


