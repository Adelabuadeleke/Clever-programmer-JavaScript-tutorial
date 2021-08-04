// Challenge 1
function ageInDays() {
  var birthYear = prompt("What year were you born?");
  var ageInDayss = 2021 - birthYear;
  var h1 = document.createElement("h1");
  var textAnswer = document.createTextNode(
    "You are " + ageInDayss + " years old"
  );
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
}

function Reset() {
  document.getElementById("ageInDays").remove();
}

// Challenge 2
function generatecat() {
  var image = document.createElement("img");
  image.setAttribute("id", "images");
  var div = document.getElementById("flex-cat-gen");
  image.src =
    "https://images.unsplash.com/photo-1496284427489-f59461d8a8e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=60";
  div.appendChild(image);
}


// Challenge 3
function rpsGame(yourChoice) {
  console.log(yourChoice);
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;
  botChoice = numberToChoice(randToRpsInt());
  console.log('Computer choice:', botChoice);
  results = decideWinner(humanChoice, botChoice);
  console.log(results);
  // message = finalMessage(results); // {'message': 'you won', 'colour': 'green'}
  // rpsFrontEnd = (yourChoice.id, botChoice, message);
}

function randToRpsInt() {
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
  return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
  var rpsDatabase = {
    'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
    'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
    'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
  };
  var yourScore = rpsDatabase[yourChoice][computerChoice];
  var computerScore = rpsDatabase[computerChoice][yourChoice];

  return [yourScore, computerScore];
}
