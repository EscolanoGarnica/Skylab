/**
*Dates
*
*Write a JavaScript function to check whether an input is a date object or not
*/
function is_date(input)
{
	if(input instanceof Date)
	{
		return true;
	}else{
		return false;
	}
}
/**
*Current Date
*
*Write a JavaScript function to get the current date Hint: Pass a separator as an argument.
*/
function currentDate(separator)
{
	var date =new Date();
	return (date.getDate() + separator + (date.getMonth()+1) + separator + date.getFullYear());
}

/**
*Get Days
*
*Write a JavaScript function to get the number of days in a month.
*/

function getDaysInMonth(month,year)
{
	return new Date(year, month, 0).getDate();
}

