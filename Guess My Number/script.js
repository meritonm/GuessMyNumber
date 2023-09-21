"use strict";

/* 70. Gues my Number project  

// to select
// class with: "."
//  id with: "#"

console.log(document.querySelector(".message").textContent);
*/
//////////////////
/* 71. What's the DOM and DOM manipulation */
//////////////////////

/* 72. Selecting and Manipulating Elements 

document.querySelector(".message").textContent = "🥳 Correct Number";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/
//////////////////////////////////////////////////////////////////
// Now with project //

/* 73. Handling Click Events */

let Secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess, guess);

  // Where there is no input
  if (!guess) {
    // document.querySelector(".message").textContent = "No number";
    displayMessage("No number");

    // When player wins
  } else if (guess === Secretnumber) {
    // document.querySelector(".message").textContent = "🥳 Correct Number";
    displayMessage("🥳 Correct Number");
    document.querySelector(".number").textContent = Secretnumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    // when the guess is wrong (duplicat / clean code better
  } else if (guess !== Secretnumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      // guess > Secretnumber ? "📈 Too high!" : "📉 Too low!";
      displayMessage(guess > Secretnumber ? "📈 Too high!" : "📉 Too low!");

      // score = score - 1;
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🛑 You lost the game ";
      displayMessage("🛑 You lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }

  //   // When guess is to high
  // } else if (guess > Secretnumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📈 Too high!";
  //     // score = score - 1;
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "🛑 You lost the game ";
  //     document.querySelector(".score").textContent = 0;
  //   }

  //   // When geuss is to low
  // } else if (guess < Secretnumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📉 Too low!";
  //     // score = score - 1;
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "🛑 You lost the game ";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  Secretnumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");

  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
