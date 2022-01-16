// Source: Ben Awad interviewing Dan Abramov YouTube video
// URL:https://www.youtube.com/watch?v=XEt09iK8IXs&ab_channel=BenAwad

// The Puzzle goes like this:
// We have 100 holes. You have to guess which hole is the rabbit is in.
// Every time you make an incorrect guess the rabbit hops to adjacent hole.
// The rabbit randomly hops into another neighbours hole. It could be left,
// or it could be right.
// Find the rabbit using an algorithm that has an efficent Big O notation

// Here is my first take after being aware of the hints:

let arr = [];
let rabbitHole = Math.floor(Math.random() * 100);

console.log("rabbit is in:", rabbitHole);

for (let i = 0; i < 100; i++) {
  if (rabbitHole === i) arr[i] = "G";
  else arr[i] = ".";
}

let guessNum = 0;

(function guess() {
  //if rabbit starts on an even hole we can squeeze the rabbit to the end
  for (let i = 0; i < arr.length; i++) {
    if (checkHole(i)) return;
  }

  //if rabbit starts on an odd hole we can squeeze the rabbit to the end
  for (let i = 1; i < arr.length; i++) {
    if (checkHole(i)) return;
  }
})();

console.log("it took " + guessNum + " guesses");

function checkHole(index) {
  guessNum++;
  if (arr[index] === "G") {
    console.log("You won");
    return true;
  } else {
    arr[rabbitHole] = ".";
    if (Math.random() < 0.5) {
      changeRabbit("left");
    } else {
      changeRabbit("right");
    }
    return false;
  }
}

function changeRabbit(direction) {
  if (direction === "right") {
    if (rabbitHole === arr.length - 1) {
      arr[rabbitHole - 1] = "G";
      rabbitHole--;
    } else {
      arr[rabbitHole + 1] = "G";
      rabbitHole++;
    }
  }
  if (direction === "left") {
    if (rabbitHole === 0) {
      arr[rabbitHole + 1] = "G";
      rabbitHole++;
    } else {
      arr[rabbitHole - 1] = "G";
      rabbitHole--;
    }
  }
}
