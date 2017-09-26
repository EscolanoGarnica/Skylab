describe('OccurrencersLetter',function(){

	it('should return number of times repeat letter',function(){
		var word = 'calabaza';
		var letter ='a';
		var result = occurrencersLetter(word,letter);
		var expected = 4;

		expect(result).toEqual(expected);
	});

	
});