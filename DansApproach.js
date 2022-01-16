//Re-implementing Dan's Approach

len = 100;
pos = Math.floor(Math.random() * 100);
won = false;
guessNum = 0;

for (let i = 0; i < len; i++) {
  if (guess(i)) {
    console.log("you won");
    won = true;
    break;
  }
  guessNum++;
}
if (!won) {
  for (let i = 1; i < len; i++) {
    if (guess(i)) {
      console.log("you won");
      break;
    }
    guessNum++;
  }
}

console.log("it took " + guessNum + " of guesses");

function guess(index) {
  if (index === pos) {
    return true;
  } else {
    rabbitHops();
    return false;
  }
}

function rabbitHops() {
  if (pos === 0) {
    pos++;
  } else if (pos === len) {
    pos--;
  } else if (Math.random() < 0.5) pos--;
  else pos++;
}
