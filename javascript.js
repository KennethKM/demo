const age = Number(prompt("Enter your age: "));

if (age >= 23 && Number(age)) {
  alert("Welcome to the website");
  const color = prompt("Please enter your favourite colour");
  const text = document.getElementById("color");
  text.innerHTML = color;
  text.style = "color: " + color;
} else if (age < 23) {
  alert("You must be 23 or older to visit this site");
} else if (typeof age !== Number) {
  alert("Oops! Try again. Your age must be a number.");
}
