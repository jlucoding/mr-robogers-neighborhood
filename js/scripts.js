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
  for (let i=0; i <= parseInt(text); i++) {
    numbersArray.push(i.toString());
    numbersArray.forEach(function(element) {
      if (element.includes("3")) {
        numbersArray.splice(numbersArray.indexOf(element), 1, "Won't you be my neighbor?");
      } else if (element.includes("2")) {
        numbersArray.splice(numbersArray.indexOf(element), 1, "Boop!");
      } else if (element.includes("1")) {
        numbersArray.splice(numbersArray.indexOf(element), 1, "Beep!");
      }
    });
  }
  return numbersArray;
}



// UI logic

$(document).ready(function() {
  $("form#main").submit(function(event) {
  event.preventDefault();
  const text = $("#numbers").val();
  $("#response").html();
  });
});