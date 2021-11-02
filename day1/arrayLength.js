// Java Code

// // Create a new array with a capacity of 6.
// int[] array = new int[6];

// // Current length is 0, because it has 0 elements.
// int length = 0;

// // Add 3 items into it.
// for (int i = 0; i < 3; i++) {
//     array[i] = i * i;
//     // Each time we add an element, the length goes up by one.
//     length++;
// }

// System.out.println("The Array has a capacity of " + array.length);
// System.out.println("The Array has a length of " + length);

// ------------------------------------
// JavaScript Code
// ------------------------------------
const arr = new Array(6);

let length = 0;

for(let i = 0; i < 3; i++) {
    arr[i] = i * i;
    length++;
    console.log('Length', length);
    console.log(arr[i]);
}

console.log('The array has a capacity of ' + arr.length);
console.log('The array has a length of ' + length);
