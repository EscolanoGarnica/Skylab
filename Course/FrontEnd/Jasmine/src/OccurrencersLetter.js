function occurrencersLetter(word,letter)
{
	if(word === undefined || letter === undefined)
			return;

	var count = 0;
	arrWord = word.split('');

	for (var i = 0; i<arrWord.length;i++)
	{
		if (arrWord[i] === letter)
			count++;
	}
	return count;
}