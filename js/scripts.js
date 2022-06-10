// Utility logic


function noInputtedWord() {
  for (let i=0; i < arguments.length; i++) {
    if (arguments[i].trim().length === 0) {
      return true;
    }
  }
  return false;
}


// Business logic

function robogerSays(text) {
  let numbersArray = [];
  for (let i=0; i <= text; i++) {
    numbersArray.push(i);
    numbersArray.forEach(function(element) {
      if (element === 1) {
        numbersArray.splice(numbersArray.indexOf(element), 1, "Beep!")
      }
    });
  }
  return numbersArray;
}






















// UI logic

$(document).ready(function() {
  $("form#survey").submit(function(event) {
  event.preventDefault();
  const numbers = $("#numbers").val();
  $("#response").html();
  });
});