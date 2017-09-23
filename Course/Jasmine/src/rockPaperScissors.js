
function RockPaperScissors()
{
  this.player1 = 0;
  this.player2 = 0;
}

RockPaperScissors.prototype.play = function(hand1,hand2){
  switch(true)
  {
    case (hand1 === 'ROCK' && hand2 === 'PAPER'): 
      this.player2++;
      return 'ROCK vs PAPER => PAPER wins!';
    case (hand1 === 'PAPER' && hand2 === 'ROCK'): 
      this.player1++;
      return 'PAPER vs ROCK => PAPER wins!';
    case (hand1 === 'SCISSORS' && hand2 === 'PAPER'): 
      this.player1++;
      return 'SCISSORS vs PAPER => SCISSORS wins!';
    case (hand1 === 'PAPER' && hand2 === 'SCISSORS'): 
       this.player2++;
       return 'PAPER vs SCISSORS => SCISSORS wins!';
    case (hand1 === 'SCISSORS' && hand2 === 'ROCK'): 
      this.player2++;
      return 'SCISSORS vs ROCK => ROCK wins!';
    case (hand1 === 'ROCK' && hand2 === 'SCISSORS'): 
      this.player1++;
      return 'ROCK vs SCISSORS => ROCK wins!';
    case (hand1 === 'ROCK' && hand2 === 'ROCK'): 
      return 'ROCK vs ROCK => tie!';
    case (hand1 === 'PAPER' && hand2 === 'PAPER'):
      return 'PAPER vs PAPER => tie!';
    case (hand1 === 'SCISSORS' && hand2 === 'SCISSORS'): 
      return 'SCISSORS vs SCISSORS => tie!';
  }
};

RockPaperScissors.prototype.winner = function(){
  if(this.player1 === this.player2)
    return 'Players tie!';
  return this.player1>this.player2 ? 'player1 is winning!':'player2 is winning!';
};
