/*const arr = [];
for (let i = 0; i <=100; i++) {
 if ( i % 3 ===0 && i !==0)   {continue}

if (i % 2 === 0 && i !==0) {
    arr.push(i);
}
   
}
console.log(arr);*/
/*const str = ["yes how are you"]
console.log(str.length);*/
/*const arr = [1,3,4,5,2,1,31,2];
 const numbers = new Set();
   for (const value of arr) {
    if (numbers.has(value)) {
        console.log("Found duplicate of ", value);
    }
    numbers.add(value);
   }*/
/*function getName() {
  return this.firstName + " " + this.lastName;
}
const person = {
  firstName: "Kenneth Kaunda",
  lastName: "Musonda",
  getName: getName,
};
const personName = person.getName();
console.log(personName);*/
/*const arr = [1,2,3,5];
const squares = arr.map((x) => x**2);
console.log(squares);*/
/*let x = [1,2,3,4];
let y = x;
y[0] = 20;
x[0] = 15;
y = [...x];
x[0] = 123;
y[0] = 432;
console.log(x,y);*/

const num = 2.5;
const roundedNum = Math.round(num);
console.log(roundedNum);
