
/**
*EXCERCISE 1:
*
*Write a JavaScript function to check whether an input is an array or not.
*/
function isArray(arr)
{
	if (arr instanceof Array)
		return true
	else
		return false
}
//END---------------------------------------------------------------------

/**
*EXCERCISE 2:
*
*Write a JavaScript function to clone an array.
*/

function cloneArray(arr)
{
	if (!isArray(arr))
		return 0;

	var arrClone = arr.map(function(element){ return element;});
	return arrClone;
}
//END---------------------------------------------------------------------

/**
*EXCERCISE 3:
*
*Write a JavaScript function to get the first element of an array. Passing 
*a parameter 'n' will return the first 'n' elements of the array.
*/
function firstElements(arr,numOfExtracts)
{
	if (!isArray(arr))
		return 0;

	var _arr = cloneArray(arr); 

	if(numOfExtracts === undefined)
		return _arr.shift();

	var arrResult = [];
	
	for(var i=0; i<numOfExtracts;i++)
	{
		if(arr.length-1<i)
			break;

		arrResult.push(_arr.shift());
	}

	return arrResult;
}
//END---------------------------------------------------------------------

/**
*EXCERCISE 4:
*
*Write a JavaScript function to get the first element of an array. Passing 
*a parameter 'n' will return the first 'n' elements of the array.
*/
function lastElements(arr,numOfExtracts)
{
	if (!isArray(arr))
		return 0;

	var _arr = cloneArray(arr); 

	if(numOfExtracts === undefined)
		return _arr.pop();

	var arrResult = [];
	
	for(var i=0; i<numOfExtracts;i++)
	{
		if(arr.length-1<i)
			break;
		
		arrResult.unshift(_arr.pop());
	}

	return arrResult;
}
//END---------------------------------------------------------------------

/**
*EXCERCISE 5:
*
*Write a simple JavaScript program to join all elements of the following array 
*into a string.
*/
function joinElements(arr)
{
	if (!isArray(arr))
		return 0;
	
	return arr.join(',');
}
//END---------------------------------------------------------------------