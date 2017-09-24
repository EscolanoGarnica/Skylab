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
//END-----------------------------------------------------------------------------------

/**
*EXCERCISE 4:
*
*Is Palindrome
*
*Write a JavaScript function that checks whether a passed string is palindrome or not A palindrome
* is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
*/

function checkPalindrome(str)
{
	var _str = str.split(' ').join('').toLowerCase();//quito los espacios y las mayusculas

	_str = _str.replace(/á/gi,'a');//quito los acentos
	_str = _str.replace(/é/gi,'e');
	_str = _str.replace(/í/gi,'i');
	_str = _str.replace(/ó/gi,'o');
	_str = _str.replace(/ú/gi,'u');

	var half = Math.floor((_str.length/2));

	for(var i = 0; i<half; i++)
	{
		if(_str[i]!==_str[_str.length-1-i]){
			return 'no palindre';
		}
	}
	return 'is palindre!!';
}
//END-----------------------------------------------------------------------------------

/**
*EXCERCISE 5:
*
*String combinations
*
*Write a JavaScript function that generates all combinations of a string
*/