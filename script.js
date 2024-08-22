startTime();
validateGreeting();
var input = document.getElementById(
 "userInput");
var ans = document.getElementById("result");
function AT_add(v) {
 input.innerHTML += v;
}


function cls() {
 input.innerText = "";
 ans.innerText = "";
}

function exe() {
 ans.value = "= " + eval(val.value);
}


function cancel() {
 input.innerText = input.innerText.substr(0, input.innerText.length - 1);
}

function sqr() {
  ans.value = "= " + Math.pow(val.value, 2);
  input.value = val.value + "²";
}
function inv() {
  ans.value = "= " + val.value **-1;
  val.value = val.value + "⁻¹"
}
function cube() {
  ans.value = "= " + Math.pow(val.value, 3);
  val.value = val.value + "³";
}

function percent() {
  ans.value = "= " + val.value/100;
  val.value = val.value + "%";
}
function root() {
  ans.value = "= " + Math.sqrt(val.value);
  val.value = "√" + val.value;
}
function cbroot() {
  ans.value = "= " + Math.cbrt(val.value);
  val.value = "³√" + val.value;
}
//time//
function startTime() {
 const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clk').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
  
const d = new Date();
let dy = d.getDay() + 1;
let dt = d.getDate();
let mt = d.getMonth() +1;
if (dy == 7) {
document.getElementById("date").innerHTML =  "Sat~" + dt + "/" + mt;
}
else if (dy == 1) {
document.getElementById("date").innerHTML =  "Sun~" + dt + "/" + mt;
}
else if (dy == 2) {
document.getElementById("date").innerHTML =  "Mon~" + dt + "/" + mt;
}
else if (dy == 3) {
document.getElementById("date").innerHTML =  "Tue~" + dt + "/" + mt;
}
else if (dy == 4) {
document.getElementById("date").innerHTML =  "Wed~" + dt + "/" + mt;
}
else if (dy == 5) {
document.getElementById("date").innerHTML =  "Thur~" + dt + "/" + mt;
}
else {
document.getElementById("date").innerHTML =  "Fri~" + dt + "/" + mt;
}

}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  
  // add zero in front of numbers < 10
  return i;
}
function validateGreeting() {
var time = new Date().getHours();
  let greeting;
  if (time < 12) {
    greeting = "Good Morning... Have a wonderful day!";
  }
  else if (time < 16) {
    greeting= "Good Afternoon... How is your day going?";
  }
  else if (time < 20) {
    greeting = "Good Evening... How was your day?";
  }
    else {
    greeting = "Good Night... Sleep well!";
    }
    document.getElementById("grt").innerHTML = greeting;
}

// Function to evaluate user input
function evaluateInput() {
  // Get the user's input
  let input = document.getElementById("userInput").innerText.trim();
  let result = 0;

  try {
    // Replace caret (^) with Math.pow() for power calculations
    input = input.replace(/(\d+)\s*\^\s*(\d+)/g, 'Math.pow($1, $2)');
    
    // Replace π with Math.PI
    input = input.replace(/π/g, 'Math.PI');
    
    // Replace square and cube symbols with Math.pow
    input = input.replace(/(\d+)²/g, 'Math.pow($1, 2)');
    input = input.replace(/(\d+)³/g, 'Math.pow($1, 3)');
    
    // Replace square root and cube root symbols with Math.sqrt and Math.cbrt
    input = input.replace(/√(\d+(\.\d+)?)/g, 'Math.sqrt($1)');
    input = input.replace(/∛(\d+(\.\d+)?)/g, 'Math.cbrt($1)');

    // Replace trigonometric and logarithmic functions
    input = input.replace(/\bsin\s+(\d+(\.\d+)?)\b/g, 'Math.sin(toRadians($1))');
    input = input.replace(/\bcos\s+(\d+(\.\d+)?)\b/g, 'Math.cos(toRadians($1))');
    input = input.replace(/\btan\s+(\d+(\.\d+)?)\b/g, 'Math.tan(toRadians($1))');
    input = input.replace(/\blog\s+(\d+(\.\d+)?)\b/g, 'Math.log10($1)');
    input = input.replace(/\bantilog\s+(\d+(\.\d+)?)\b/g, 'Math.pow(10, $1)');
    
    // Replace percentages with the respective calculation
    input = input.replace(/(\d+(\.\d+)?)%/g, '($1 / 100)');

    // Handle inverse trigonometric functions in arithmetic expressions
    input = input.replace(/\bsin⁻¹\s+(\d+(\.\d+)?)\b/g, 'toDegrees(Math.asin($1))');
    input = input.replace(/\bcos⁻¹\s+(\d+(\.\d+)?)\b/g, 'toDegrees(Math.acos($1))');
    input = input.replace(/\btan⁻¹\s+(\d+(\.\d+)?)\b/g, 'toDegrees(Math.atan($1))');

    // Handle inverse (x⁻¹) calculations
    input = input.replace(/(\d+)⁻¹/g, '(1/$1)');

    // Evaluate the input string
    result = eval(input);

    // Display the result
    document.getElementById("result").innerText = `= ${result}`;
  } catch (e) {
    // Handle any errors
    document.getElementById("result").innerText = "Error";
  }
}

// Helper function to convert degrees to radians
function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

// Helper function to convert radians to degrees
function toDegrees(radians) {
  return radians * (180 / Math.PI);
}
