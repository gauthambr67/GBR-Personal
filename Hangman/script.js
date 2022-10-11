const words = [
  "taken",
  "bolt",
  "argo",
  "goodfellas",
  "alien",
  "interstellar",
  "frozen",
  "brave",
  "up",
  "ratatouille",
  "gladiator",
  "inception",
  "tangled",
  "wanted",
  "aladdin",
  "speed",
  "turbo",
];

const wordEl = document.getElementById("word");
const wrongLettersEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-button");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");
const figureParts = document.querySelectorAll(".figure-part");
const correctLetters = [];
const wrongLetters = [];

let selectedWord = words[Math.floor(Math.random() * words.length)];

//revealing the selectedWord
function displayWord() {
  wordEl.innerHTML = `
    ${selectedWord
      .split("")
      .map(
        (letter) => `
        <span class="letter">
        ${correctLetters.includes(letter) ? letter : ""}
        </span>
        `
      )
      .join("")}
    `;

  const innerWord = wordEl.innerText.replace(/\n/g, "");

  if (innerWord === selectedWord) {
    finalMessage.innerText = "Congratulations! You got that right! 😃";
    popup.style.display = "flex";
  }
}

// Update the wrong letters
function updateWrongLetterEl() {
  //Display wrong letters
  wrongLettersEl.innerHTML = `
    ${wrongLetters.length > 0 ? "Incorrect Entries:  \n " : ""}
    ${wrongLetters.map((letter) => `<span>${letter}</span>`)}
    `;

  //Display parts
  figureParts.forEach((part, index) => {
    const errors = wrongLetters.length;

    if (index < errors) {
      part.style.display = "block";
    } else {
      part.style.display = "none";
    }
  });

  //Check if lost
  if (wrongLetters.length === figureParts.length) {
    finalMessage.innerText = "Sorry, you didn't get that right.. 😕";
    popup.style.display = "flex";
  }
}

//Show notification
function showNotification() {
  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 2000);
}

//Keydown letter press
window.addEventListener("keydown", (e) => {
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const letter = e.key;

    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);

        displayWord();
      } else {
        showNotification();
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);

        updateWrongLetterEl();
      } else {
        showNotification();
      }
    }
  }
});

//Restart game and play again
playAgainBtn.addEventListener("click", () => {
  //Empty arrays
  correctLetters.splice(0);
  wrongLetters.splice(0);

  selectedWord = words[Math.floor(Math.random() * words.length)];

  displayWord();

  updateWrongLetterEl();

  popup.style.display = "none";
});

displayWord();
