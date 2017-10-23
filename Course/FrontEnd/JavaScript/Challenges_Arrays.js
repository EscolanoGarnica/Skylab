
/**
*EXCERCISE 1:
*
*Write a JavaScript function to check whether an input is an array or not.
*/
function isArray(input)
{
	return input instanceof Array;
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

	var arrClone = arr.map(function(element){ 
		if (element instanceof Array)
			cloneArray(element);
	
		return element;
		});

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

//Another and better way:
function firstElements(arr, numOfExtracts)
{
	if(!numOfExtracts)
		return arr[0];
	else if(n<0)
		return [];

	return arr.slice(0, numOfExtracts);
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

/**
*EXCERCISE 6:
*
*Write a JavaScript program which accept a number as input and insert dashes (-) 
*between each two even numbers. For example if you accept 025468 the output should 
*be 0-254-6-8.
*/
function separateEven(num)
{
	var arr = num.toString().split('');
	
	for (var i=1;i<arr.length;i++)
	{
		if( (arr[i-1] % 2) === 0 && (arr[i] % 2) === 0)
		{
			arr.splice(i,0,'-');
			i++;
		}
	}
	return arr.join('');
}
//END---------------------------------------------------------------------

/**
*EXCERCISE 8:
*
*Write a JavaScript program to sort the items of an array.
*/
function sortArrayNumbers(arr)
{
	var _arr = cloneArray(arr);
	return _arr.sort(function(a,b){return a - b});
}


//END---------------------------------------------------------------------

/**
*EXCERCISE 8:
*
*Write a JavaScript program to find the most frequent item of an array.
*/

function findMostFrequent(arr)
{
	var _arr = cloneArray(arr);
	_arr.sort();
	
	console.log(_arr);

	var count = countElemMostFreq = 1;
	var elemMostFreq = '';
	
	for(var i = 1; i < _arr.length;i++)
	{
		if(_arr[i-1] === _arr[i])
		{
			count++;
		}else{
			if(count>countElemMostFreq){
				countElemMostFreq = count;
				elemMostFreq = _arr[i-1];
			}
			count = 1;
		}

		if (i === _arr.length-1)
		{
			if(count>countElemMostFreq){
				countElemMostFreq = count;
				elemMostFreq = _arr[i-1];
			}
		}
	}
	return elemMostFreq + ' ( ' + countElemMostFreq + ' times )';
}
//END---------------------------------------------------------------------

/**
*EXCERCISE 9:
*
*Write a JavaScript program which accept a string as input and swap the case of each character.
*For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
*/

