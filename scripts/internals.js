const deadline = new Date("2024-04-22T20:30:00+02:00");
const testSuite = {};

const timerEl = document.querySelector("#timer");
const headerEl = document.querySelector("header");
const inspectorEl = document.querySelector("#inspector>code");
const runTestsBtn = document.querySelector("#test-btn");
const introductionEl = document.querySelector("#introduction");
const storyEl = document.querySelector("#story");
const mainEl = document.querySelector("main");
const testsEl = document.querySelector("#tests");

runTestsBtn.addEventListener("click", () => {
  if (!localStorage.gameStarted) {
    localStorage.gameStarted = true;
  }

  if (testSuite.runTests()) {
    showFinalScreen();
  }
});

const timerIterval = setInterval(updateTimer, 1000);

if (localStorage.gameStarted) {
  introductionEl.style.display = "none";
  mainEl.style.display = "block";
}

function showFinalScreen() {
  const finalMessage = [];
  const allTestsArePassing = testSuite.runTests(true);

  if (allTestsArePassing) {
    finalMessage.push(
      "Congratulations! You fixed all the bugs! Your company is saved! 🎉",
      "Time to network and mingle 🥂👥"
    );
  } else {
    finalMessage.push(
      "Oh no! The buggy code went live! Your company's stock is plumeting! 📉 😱",
      "Oh well, might as well go network and mingle 🥂👥. You can always fix it later 😏"
    );
  }

  storyEl.innerHTML = null;
  storyEl.append(
    ...finalMessage.map((msg) => {
      const p = document.createElement("p");
      p.textContent = msg;
      return p;
    })
  );
  storyEl.style.display = "block";
  runTestsBtn.style.display = "none";
}

function updateTimer() {
  const secondsLeft = Math.floor(
    (Date.parse(deadline) - Date.parse(new Date())) / 1000
  );

  timerEl.textContent = formatTimeLeft(secondsLeft > 0 ? secondsLeft : 0);

  if (secondsLeft < 0) {
    clearInterval(timerIterval);
    headerEl.textContent = "Time is up!";
    showFinalScreen();
  }
}

function formatTimeLeft(secondsLeft) {
  const hours = Math.floor(secondsLeft / 3600)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((secondsLeft % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (secondsLeft % 60).toString().padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}

function inspect(...args) {
  inspectorEl.textContent += `${args
    .map((arg) => JSON.stringify(arg, null, 2))
    .join(" ")}\n\n====================\n\n`;
}
