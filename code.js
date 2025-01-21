/*const list = document.getElementById("list");

const enterNumber = Number(prompt("Enter a number between 1 & 10"));
if (enterNumber >= 1 && enterNumber <= 10)
  for (let i = 0; i < enterNumber; i++) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(i.toString));
    list.appendChild(li);
  }*/




const matrix = [];
for (let i = 0; i < 6; i++) {
  const numbers = [];
  for (let j = i*2 ; j < i*2 + 2; j++) {
   /*in this for loop i.e the j loop, 
   the '+5' indicates that 
   there will be 5 numbers in each array.
   The initializer must be the same as the first part of the limit, i.e 'i*5'*/
    numbers.push(j+1);
    
  }
  matrix.push(numbers);

}

console.log(matrix);

/* Let's break down the initialization of `j` in your code:

```javascript
for (let j = i * 3; j < i * 2 + 3; j++) {
  numbers.push(j + 1);
}
```

Here's what happens step by step:

1. **Outer Loop (`i` Loop)**:
   - The outer loop runs 6 times (`i` ranges from 0 to 5).
   - For each iteration of the outer loop, a new array `numbers` is created.

2. **Inner Loop (`j` Loop)**:
   - The inner loop initializes `j` with the value `i * 3`.
   - The loop continues as long as `j` is less than `i * 2 + 3`.
   - For each iteration of the inner loop, `j + 1` is pushed into the `numbers` array.

Let's see how `j` is initialized and how it changes for each iteration of the outer loop:

- **When `i = 0`**:
  - `j` starts at `0 * 3 = 0`.
  - The loop runs while `j < 0 * 2 + 3 = 3`.
  - `j` takes values 0, 1, 2.
  - `numbers` becomes `[1, 2, 3]` (since `j + 1` is pushed).

- **When `i = 1`**:
  - `j` starts at `1 * 3 = 3`.
  - The loop runs while `j < 1 * 2 + 3 = 5`.
  - `j` takes values 3, 4.
  - `numbers` becomes `[4, 5]`.

- **When `i = 2`**:
  - `j` starts at `2 * 3 = 6`.
  - The loop runs while `j < 2 * 2 + 3 = 7`.
  - `j` takes values 6.
  - `numbers` becomes `[7]`.

- **When `i = 3`**:
  - `j` starts at `3 * 3 = 9`.
  - The loop runs while `j < 3 * 2 + 3 = 9`.
  - `j` takes no values (loop doesn't run).
  - `numbers` becomes `[]`.

- **When `i = 4`**:
  - `j` starts at `4 * 3 = 12`.
  - The loop runs while `j < 4 * 2 + 3 = 11`.
  - `j` takes no values (loop doesn't run).
  - `numbers` becomes `[]`.

- **When `i = 5`**:
  - `j` starts at `5 * 3 = 15`.
  - The loop runs while `j < 5 * 2 + 3 = 13`.
  - `j` takes no values (loop doesn't run).
  - `numbers` becomes `[]`.

So, the final `matrix` will be:
```javascript
[
  [1, 2, 3],
  [4, 5],
  [7],
  [],
  [],
  []
]
```

The initialization of `j` and the condition in the inner loop determine how many elements are added to each `numbers` array and what those elements are.*/
