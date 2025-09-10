let scores = JSON.parse(localStorage.getItem('scores'));
    if (!scores){
      scores = {
        win: 0,
        lose: 0,
        tie: 0
      };
    }
    
    updateScoreElement();

    function updateScoreElement() {
      document.querySelector('.js-score').innerHTML = `wins: ${scores.win}, loses: ${scores.lose}, ties: ${scores.tie}`;
    }

   function playGame(playerMove) {
      const computerMove = pickComputerMove();
      let Result = '';

      if (playerMove === 'ROCK') {
        if (computerMove === 'ROCK') {
          Result = 'tie';
        } else if (computerMove === 'PAPER') {
          Result = 'you lose';
        } else if (computerMove === 'SCISSORS') {
          Result = 'you win';
        }
      } else if (playerMove === 'PAPER') {
        if (computerMove === 'ROCK') {
          Result = 'you win';
        } else if (computerMove === 'PAPER') {
          Result = 'tie';
        } else if (computerMove === 'SCISSORS') {
          Result = 'you lose';
        }
      } else if (playerMove === 'SCISSORS') {
        if (computerMove === 'ROCK') {
          Result = 'you lose';
        } else if (computerMove === 'PAPER') {
          Result = 'you win';
        } else if (computerMove === 'SCISSORS') {
          Result = 'tie';
        }
        document.querySelector('.js-moves').innerHTML = `you picked ${playerMove}, computer picked ${computerMove}`;
        document.querySelector('.js-result').innerHTML = Result;
      }
      
      if(Result==='you win' ) {
        scores.win= scores.win+1;
      } else if (Result==='you lose') {
        scores.lose= scores.lose+1;
      } else if (Result==='tie') {
        scores.tie= scores.tie+1;
      }

      localStorage.setItem('scores', JSON.stringify(scores));

      updateScoreElement();
    document.querySelector('.js-result').innerHTML = Result;
    document.querySelector('.js-moves').innerHTML = `
  You 
  <img src="./images/${playerMove.toLowerCase()}-emoji.png" class="move-icon">
  <img src="./images/${computerMove.toLowerCase()}-emoji.png" class="move-icon">
  Computer
`;
      
    }

    function pickComputerMove() {
      const randomNumber = Math.random();
      let computerMove = '';
      if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove= 'ROCK';
      } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove='PAPER';
      } else {
        computerMove= 'SCISSORS';
      }
      return computerMove;
    }

