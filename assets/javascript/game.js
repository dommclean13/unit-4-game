var compGuess = Math.floor(Math.random() * (120 - 19) + 19);
var total = 0;
var num1 = 0;
var num2 = 0;
var num3 = 0;
var num4 = 0;
var num5 = 12;
var win = 0;
var loss = 0;
var newRnd = 0;// not in use

// functions to generate 4 different random numbers
var num1Val = function() {
  do {
    num1 = Math.floor(Math.random() * 12 + 1);
  } while (num1 === num5);
  return num1;
};
var num2Val = function() {
  do {
    num2 = Math.floor(Math.random() * 12 + 1);
  } while (num2 === num5 || num2 === num1);
  return num2;
};
var num3Val = function() {
  do {
    num3 = Math.floor(Math.random() * 12 + 1);
  } while (num3 === num5 || num3 === num1 || num3 === num2);
  return num3;
};
var num4Val = function() {
  do {
    num4 = Math.floor(Math.random() * 12 + 1);
  } while (num4 === num5 || num4 === num1 || num4 === num2 || num4 === num3);
  return num4;
};

// assigning random numbers to temp vars
var tempNum1 = num1Val();
var tempNum2 = num2Val();
var tempNum3 = num3Val();
var tempNum4 = num4Val();
// checking numbers on console window
var numValuesOnConsole = function() {
  console.log(compGuess);
  console.log(`crystal 1: " ${tempNum1}`);
  console.log(`crystal 2: " ${tempNum2}`);
  console.log(`crystal 3: " ${tempNum3}`);
  console.log(`crystal 4: " ${tempNum4}`);
};
numValuesOnConsole();

// reset function
var reset = function() {
  tempNum1 = num1Val();
  tempNum2 = num2Val();
  tempNum3 = num3Val();
  tempNum4 = num4Val();
  compGuess = Math.floor(Math.random() * (120 - 19) + 19);
  total = 0;
  $("#guessedNumber").text(compGuess);
  $("#userScore").text(total);
  $("#status").text("");
  numValuesOnConsole();
};

// master reset function
var masterReset = function() {
  reset();
  win = 0;
  loss = 0;
  $("#totalWin").text(win);
  $("#totalLoss").text(loss);
};

// adding logic to html
$(document).ready(function() {
  // initial page setup
  $("body").css("background-color", "#51d0de");
  $("#rules").css("display", "none");
  $("#rules").css("position", "relative");
  $("#guessedNumber").addClass("bg-light");
  $("#showRules").click(function(e) {
    e.preventDefault();
    $("#rules").toggle(1000);
    $("rules").css("z-index", 1);
    $("rules").css("top", 0);
  });
  // assigning values
  $("#guessedNumber").text(compGuess);
  $("#userScore").text(total);
  $("#totalWin").text(win);
  $("#totalLoss").text(loss);

  // crystal counting
  $("#crystal1").click(function(e) {
    e.preventDefault();
    total = tempNum1 + total;
    $("#userScore").text(total);
    endresult();
  });
  $("#crystal2").click(function(e) {
    e.preventDefault();
    total = tempNum2 + total;
    $("#userScore").text(total);
    endresult();
  });
  $("#crystal3").click(function(e) {
    e.preventDefault();
    total = tempNum3 + total;
    $("#userScore").text(total);
    endresult();
  });
  $("#crystal4").click(function(e) {
    e.preventDefault();
    total = tempNum4 + total;
    $("#userScore").text(total);
    endresult();
  });
  
  // result function (win/loss)
  function endresult() {
    if (total === compGuess) {
      win++;
      $("#totalWin").text(win);
      $("#status").text("YOU WON!");
      setTimeout(reset, 500);
      //old set time out fn
     /* setTimeout(function() {
        reset();
      }, 500);*/
      // newRnd = 1;
      // return newRnd;
    } else if (total > compGuess) {
      loss++;
      $("#totalLoss").text(loss);
      $("#status").text("YOU LOST!");
      setTimeout(reset, 500);
        //old set time out fn
     /* setTimeout(function() {
        reset();
      }, 500);*/
      // newRnd = 0;
      // return newRnd;
    }
  }
  
  // master reset upon clicking on reset all button
  $("#resetAll").click(function(e) {
    e.preventDefault();
    masterReset();
  });
});