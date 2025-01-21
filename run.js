const names = [];
const name1 = prompt("Enter your name:");
const age = Number(prompt("Enter your age"));
const dream_job = prompt("Enter your job aspiration");

if (name1 !== "") names.push(name1);
if (age !== "") names.push(" " + " aged " + age);
if (dream_job !== "") names.push(" " + "aspires to be a " + dream_job + ".");
alert(names);
const del = prompt("Would you like to delete the last entry?");
if (del === "yes") {
  names.pop();
}
alert(names);
