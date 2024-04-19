$(document).ready(function() {
    // Slide down the game options and change button text when the call-to-action button is clicked
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

    // user input
    let userNumbers = [];
    let inputs = document.querySelectorAll('.lotto-number');
    inputs.forEach(function(input) {
        userNumbers.push(parseInt(input.value));
    });

    // check for duplicates
    let uniqueNumbers = Array.from(new Set(userNumbers));
    if (uniqueNumbers.length !== 6) {
        alert("Please enter 6 unique numbers between 1 and 59.");
        return;
    }
    // random numbers for lotto
    let lotteryNumbers = [];
    while (lotteryNumbers.length < 6) {
        let randomNumber = Math.floor(Math.random() * 59) + 1;
        if (!lotteryNumbers.includes(randomNumber)) {
            lotteryNumbers.push(randomNumber);
        }
    }

    // compare numbers
    let matchingNumbers = uniqueNumbers.filter(function(number) {
        return lotteryNumbers.includes(number);
    });

    // Display the result
    let resultDiv = document.getElementById('result');
    resultDiv.textContent = "Lottery Numbers: " + lotteryNumbers.join(", ") + "\n";
    resultDiv.textContent += "Your Numbers: " + uniqueNumbers.join(", ") + "\n";
    resultDiv.textContent += "Matching Numbers: " + matchingNumbers.length;
});

// EuroMillions game scripts
document.getElementById('euromillions-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // User input
    let userNumbers = [];
    let userLuckyStars = [];
    let numberInputs = document.querySelectorAll('.euromillions-number');
    let luckyStarInputs = document.querySelectorAll('.euromillions-lucky-star');
  
    numberInputs.forEach(function(input) {
      userNumbers.push(parseInt(input.value));
    });
  
    luckyStarInputs.forEach(function(input) {
      userLuckyStars.push(parseInt(input.value));
    });
  
    // Check for duplicates
    let uniqueNumbers = Array.from(new Set(userNumbers));
    let uniqueLuckyStars = Array.from(new Set(userLuckyStars));
  
    if (uniqueNumbers.length !== 5 || uniqueLuckyStars.length !== 2) {
      alert("Please enter 5 unique numbers between 1 and 50, and 2 unique lucky stars between 1 and 12.");
      return;
    }
  
    // Random numbers for EuroMillions
    let euromillionsNumbers = [];
    let euromillionsLuckyStars = [];
  
    while (euromillionsNumbers.length < 5) {
      let randomNumber = Math.floor(Math.random() * 50) + 1;
      if (!euromillionsNumbers.includes(randomNumber)) {
        euromillionsNumbers.push(randomNumber);
      }
    }
  
    while (euromillionsLuckyStars.length < 2) {
      let randomLuckyStar = Math.floor(Math.random() * 12) + 1;
      if (!euromillionsLuckyStars.includes(randomLuckyStar)) {
        euromillionsLuckyStars.push(randomLuckyStar);
      }
    }
  
    // compare
    let matchingNumbers = uniqueNumbers.filter(function(number) {
      return euromillionsNumbers.includes(number);
    });
  
    let matchingLuckyStars = uniqueLuckyStars.filter(function(luckyStar) {
      return euromillionsLuckyStars.includes(luckyStar);
    });
  
    // result
    let resultDiv = document.getElementById('result');
    resultDiv.textContent = "EuroMillions Numbers: " + euromillionsNumbers.join(", ") + " | Lucky Stars: " + euromillionsLuckyStars.join(", ") + "\n";
    resultDiv.textContent += "Your Numbers: " + uniqueNumbers.join(", ") + " | Your Lucky Stars: " + uniqueLuckyStars.join(", ") + "\n";
    resultDiv.textContent += "Matching Numbers: " + matchingNumbers.length + " | Matching Lucky Stars: " + matchingLuckyStars.length;
  });
