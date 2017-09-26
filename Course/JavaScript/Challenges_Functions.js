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
	if (!str) return;
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

function stringCombination(str)
{
	if (!str) return;
	var result = [];
	for (var i = 0; i<str.length; i++)
	{
		for (var j = i; j < str.length; j++)
		{
			result.push(str.substring(i,j+1));
		}
	}
	return result.join(',');
}
//END-----------------------------------------------------------------------------------

/**
*EXCERCISE 6:
*
*Sort letters
*
*Write a JavaScript function that returns a passed string with letters in alphabetical order
*Assume punctuation and numbers symbols are not included in the passed string.
*/
function sortLetters(str)
{
	if (!str) return;
	return str.split('').sort().join('');
}
//END-----------------------------------------------------------------------------------

/**
*EXCERCISE 7:
*
* Uppercase First Letter
*
*Write a JavaScript function that accepts a string as a parameter and converts the first 
*letter of each word of the string in upper case
*/

function uppercaseFirstLetter(str)
{
	if (!str) return;
	var _str = str.toLowerCase(),
		arr = str.split(' ');
		
	for(var i=0; i<arr.length;i++)
	{
		arr[i] = arr[i].replace(arr[i][0],arr[i][0].toUpperCase());
	}
	return arr.join(' ');
}
//END-----------------------------------------------------------------------------------

/**
*EXCERCISE For me:
*
*Occurrencers Letter
*
*Write a JavaScript function that accepts two arguments, a string and a letter and the 
*function will count the number of occurrences of the specified letter within the string.
*/

function occurrencersLetter(word,letter)
{
	var count = 0;
	arrWord = word.split('');

	for (var i = 0; i<arrWord.length;i++)
	{
		if (arrWord[i] === letter)
			count++;
	}
	return count;
}

