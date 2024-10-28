const emojiDetails = [
  { description: "Smiling face with sunglasses", emoji: "😎" },
  { description: "Thumbs up", emoji: "👍" },
  { description: "Heart eyes", emoji: "😍" },
  { description: "Crying face", emoji: "😢" },
  { description: "Party popper", emoji: "🎉" },
  // Add more emoji descriptions here
];

  let currentEmojiIndex = 0;
  let score = 0;
  //


  //
  const guessInput = document.getElementById("guess-input");
  const resultElement = document.getElementById("result");
  const scoreElement = document.getElementById("score");
  const timerElement = document.getElementById("timer");
  const restartElement = document.getElementById("restart-button");
  let totalGameTime = 20;
let timer;

  function StartTimer(){
    timer = 
    setInterval(() => {
      totalGameTime--;
      timerElement.innerHTML = totalGameTime;
      if(totalGameTime <= 0){
        restartElement.setAttribute("style","display:inline");
        timerElement.setAttribute("style","display:none");
        guessInput.disabled = true;
        clearInterval(timer);
      }

    }, 1000);
  }

  //StartTimer(totalGameTime);
  StartTimer();


  restartElement.addEventListener("click",()=>{
    currentEmojiIndex = -1; // As next emoji function adds 1 to the index 
    score=0;
    totalGameTime =20;
    StartTimer();
    guessInput.disabled = false;
    timerElement.setAttribute("style","display:inline");
    restartElement.setAttribute("style","display:none");
    displayEmoji();

  });

  function displayEmoji() {
    const descriptionElement = document.getElementById("description");
    descriptionElement.textContent = emojiDetails[currentEmojiIndex].emoji;
  }

  function checkGuess() {
    const guess = guessInput.value.trim().toLowerCase();
    const correctEmoji = emojiDetails[currentEmojiIndex].description.trim().toLowerCase();

    if (guess === correctEmoji) {
      resultElement.textContent = "Correct!";
      score++;
    } else {
      resultElement.textContent = "Wrong!";
    }
    //console.log(score);
    scoreElement.textContent = `Score: ${score}`;
    guessInput.value = "";
    guessInput.focus();
    nextEmoji();
  }

  
  function nextEmoji() {
    currentEmojiIndex++;
    setTimeout(()=>{resultElement.innerHTML = "";},1000);
    if (currentEmojiIndex === emojiDetails.length) {
      currentEmojiIndex = 0;
      score=0;
    }

    displayEmoji();
  }

  document
    .getElementById("guess-input")
    .addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        checkGuess();
      }
    });

  document.addEventListener("DOMContentLoaded", () => {
    displayEmoji();
  });
