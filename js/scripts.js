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