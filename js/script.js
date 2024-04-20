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

