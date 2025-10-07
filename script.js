// make sure these match the HTML element names for the ID then class.
let input = document.querySelector("#name");
let display = document.querySelector("#output"); // Changed the class to another ID

// This code should be working
input.addEventListener("input", function () {
  const name = input.value;
  display.textContent = name;
});  // Uncommented the code here

// Added the missing function simpleMath but defining what the simple math needs to do. 
function simpleMath(a, b){
    return a + b;
}


// you should see 5 in the output of your console
console.log(simpleMath(2, 3));
