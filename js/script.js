$(document).ready(function() {
    // open game option and change the inner text of the button
    $("#get-started").click(function(e) {
        e.preventDefault();
        $("#game-options").slideToggle();
        
        if ($(this).text() === "Show Games") {
            $(this).text("Hide Games");
        } else {
            $(this).text("Show Games");
        }
    });    
});


// Lotto game scripts 
document.getElementById('lotto-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // prevents spamming play button to start multiple function at the same time
  let playButton = document.getElementById('play-button');
  playButton.disabled = true;

  // how many games
  let numGames = parseInt(document.getElementById('num-games').value);

  let totalSpent = 0;
  let totalWon = 0;
  let freePlays = 0;

  let resultDiv = document.getElementById('result');
  let summaryDiv = document.getElementById('summary');

  let gameCounter = 0;

  function playGame() {
      if (gameCounter >= numGames) {
          playButton.disabled=false;
          return; 
      }

      totalSpent += 2; // two pounds per play

      // input
      let userNumbers = [];
      let inputs = document.querySelectorAll('.lotto-number');
      inputs.forEach(function(input) {
          userNumbers.push(parseInt(input.value));
      });

      // duplicate check 
      let uniqueNumbers = Array.from(new Set(userNumbers));
      if (uniqueNumbers.length !== 6) {
          alert("Please enter 6 unique numbers between 1 and 59.");
          return;
      }

      // random numbers for a game
      let lotteryNumbers = [];
      while (lotteryNumbers.length < 6) {
          let randomNumber = Math.floor(Math.random() * 59) + 1;
          if (!lotteryNumbers.includes(randomNumber)) {
              lotteryNumbers.push(randomNumber);
          }
      }

      // compare 
      let matchingNumbers = uniqueNumbers.filter(function(number) {
          return lotteryNumbers.includes(number);
      });

      // check how much money the user has won
      let gameWon = 0;
      switch (matchingNumbers.length) {
          case 2:
              freePlays++;
              numGames++;
              totalSpent-=2;
              break;
          case 3:
              gameWon = 30;
              break;
          case 4:
              gameWon = 140;
              break;
          case 5:
              gameWon = 1750;
              break;
          case 6:
              gameWon = 2000000;
              break;
      }
      totalWon += gameWon;
      // twoo divs with current game and overall summary of money spent
      resultDiv.innerHTML = "Game " + (gameCounter + 1) + ":<br>";
      resultDiv.innerHTML += "Lottery Numbers: " + lotteryNumbers.join(", ") + "<br>";
      resultDiv.innerHTML += "Your Numbers: " + uniqueNumbers.join(", ") + "<br>";
      resultDiv.innerHTML += "Matching Numbers: " + matchingNumbers.length + "<br>";
      resultDiv.innerHTML += "Money Won: £" + gameWon + "<br>";

      summaryDiv.innerHTML = "Summary: "+"<br>";
      summaryDiv.innerHTML += "Number of games played: " + (gameCounter + 1) +"<br>";
      summaryDiv.innerHTML += "Total money spent: £" + totalSpent + "<br>";
      summaryDiv.innerHTML += "Total money won: £" + totalWon + "<br>";
      summaryDiv.innerHTML += "Number of free plays won: " + freePlays + "<br>";
      summaryDiv.innerHTML += "Net profit/loss: £" + (totalWon - totalSpent) +"<br>";
      
      gameCounter++;
      
      if (gameCounter < numGames) {
        setTimeout(playGame, 10); 
      } else{
        playButton.disabled=false
      }
    }
    
    playGame(); 
});

