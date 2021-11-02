const findNumberEven = (arr) => {
    let count = 0;
    let evenArray = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].toString().length % 2 === 0) {
            count++;
            evenArray.push(arr[i]);
        } else {
            count;
        }
    }
    return count;
}

const array = [12, 345, 2, 6, 7896];
const evenNumbers = findNumberEven(array);
console.log(evenNumbers);


function findNumbers(number) {
    let counter= 0;
    number.forEach((num) => {
      num.toString().length % 2 === 0 ? (counter += 1) : counter;
    });
    console.log({ counter });
    return counter;
  }
  
  const answer = findNumbers([12, 345, 2, 6, 7896]);
