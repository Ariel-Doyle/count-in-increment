//Utility Logic
function isValidNumber(input) {
  if (input === 0) {
    return false;
  } else if (isNaN(input)) {
    return false;
  } else {
    return true;
  }
}
  
//Business Logic

function countBy(increment, endpoint) {
  if (!(isValidNumber(increment) && isValidNumber(endpoint))) {
    return "please enter a valid number"
  } else if (Math.sign(increment) !== Math.sign(endpoint)) {
    return "Please god, just enter a number";
  }
  let returnArray = [];
  let incrementSign = Math.sign(increment);
  if (incrementSign === Math.sign(endpoint) && (incrementSign <= Math.sign(endpoint)) && (isValidNumber)) { 
    for (i = (incrementSign * increment); i <= (incrementSign * endpoint); i += (incrementSign * increment)) {
      returnArray.push(incrementSign * i); 
    }
    return returnArray;
  }
}

//User Interface Logic
function returnResults(e) {
  e.preventDefault();

  const endpoint = parseInt(document.querySelector("input#input1").value);
  const increment = parseInt(document.querySelector("input#input2").value);
  
  //console.log(result);
  const h3 = document.querySelector("h3");
  const result = countBy(increment, endpoint);
  h3.innerText = result;
}
  
window.addEventListener("load", function() {
  document.querySelector("form#counter").addEventListener("submit", returnResults);
});
