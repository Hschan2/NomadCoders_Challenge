/**
 * Make a number guessing game using Javascript!
 * 0에서 사용자가 지정한 숫자까지의 범위에서 랜덤 한 숫자를 찾으세요. (범위는 0 이상 입력값 이하가 됩니다.)
 * 범위에는 음수가 포함될 수 없습니다.
 * 실시간으로 범위 값을 업데이트해야 합니다.
 * 유저가 숫자를 선택한 후에 게임을 플레이할 수 있습니다.
 * 유저에게 게임의 승패를 알려야 합니다.
 * 
 * Hint: To learn how to find random numbers watch this lecture
 */

/** HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Vanilla Challenge</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <h1>Random Number Game</h1>

    <h3>
      <label for="range">Generate a number between 0 and</label>
      <input type="number" id="range" min="1" max="100" />
    </h3>

    <p>
      <label for="guess">Guess the number:</label>
      <input type="number" id="guess" min="0" max="100" />

      <button id="play">Play</button>
    </p>

    <div id="result"></div>
    <div id="winLost"></div>

    <script src="src/index.js"></script>
  </body>
</html>
*/

// 내가 작성한 코드
const rangeInput = document.getElementById("range");
const guessInput = document.getElementById("guess");
const playButton = document.getElementById("play");
const result = document.getElementById("result");
const winLost = document.getElementById("winLost");
let Attempt = 0;

playButton.addEventListener("click", () => {
  const range = parseInt(rangeInput.value);
  const guess = parseInt(guessInput.value);
  const randomNumber = Math.floor(Math.random() * range);
  Attempt++;

  if (isNaN(range) || range < 0 || isNaN(guess) || guess < 0) {
    Attempt = 0;
    alert("0 이상의 숫자를 입력해주세요.");
    return;
  }

  if (guess === randomNumber) {
    result.innerText = `You chose: ${guess}, the machine chose: ${randomNumber}`;
    winLost.innerText = `You won! Attempt: ${Attempt}`;
    rangeInput.value = "";
    guessInput.value = "";
    Attempt = 0;
  } else {
    result.innerText = `You chose: ${guess}, the machine chose: ${randomNumber}`;
    winLost.innerText = `You lost! Attempt: ${Attempt}`;
    winLost.style.fontWeight = "bold";
  }
});


// NomadCoder Solution Code
const guessForm = document.getElementById("js-guess");
const results = document.getElementById("js-result");
const maxNumber = document.getElementById("maxNumber");

function handleGuessSubmit(e) {
  e.preventDefault();
  const guessInput = guessForm.querySelector("input");
  if (guessInput.value === "" && maxNumber === "") {
    return;
  }
  const max = maxNumber.value;
  const random = Math.ceil(Math.random() * max);
  const userGuess = parseInt(guessInput.value, 10);
  const resultSpan = results.querySelector("span");
  resultSpan.innerHTML = `
  You chose: ${userGuess},
  the machine chose: ${random}.<br />
  <strong>${userGuess === random ? "You won!" : "You lost!"}</strong>
  `;
}

guessForm.addEventListener("submit", handleGuessSubmit);
