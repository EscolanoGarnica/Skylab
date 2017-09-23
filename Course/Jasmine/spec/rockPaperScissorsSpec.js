describe('RockPaperScissors',function(){
	var rockPaperScissors;

	beforeEach(function(){
		rockPaperScissors = new RockPaperScissors();
	});


	it('try 2 players rockPaperScissors',function(){
		var hands = ['PAPER','SCISSORS','ROCK'];
		var posibilites = { 
			ROCK_PAPER: 'ROCK vs PAPER => PAPER wins!',
			PAPER_ROCK: 'PAPER vs ROCK => PAPER wins!',
			ROCK_ROCK: 'ROCK vs ROCK => tie!',
			SCISSORS_PAPER: 'SCISSORS vs PAPER => SCISSORS wins!',
      		PAPER_SCISSORS: 'PAPER vs SCISSORS => SCISSORS wins!',
       		SCISSORS_SCISSORS: 'SCISSORS vs SCISSORS => tie!',
       		SCISSORS_ROCK: 'SCISSORS vs ROCK => ROCK wins!',
       		ROCK_SCISSORS: 'ROCK vs SCISSORS => ROCK wins!',
       		PAPER_PAPER: 'PAPER vs PAPER => tie!'
       		};

		var hand1 = hands[getRandomInt(0,2)];
		var hand2 = hands[getRandomInt(0,2)];
		var result = rockPaperScissors.play(hand1,hand2);

		expect(result).toBe(posibilites[hand1 + '_' + hand2]);

	});
})