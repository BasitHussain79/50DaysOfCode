const squaresOfSorted = (arr) => {
    let squareSortedArr = [];
    for(let i = 0; i < arr.length; i++) {
        let square = arr[i]*arr[i];
        squareSortedArr.push(square);
    }
    return squareSortedArr.sort((a,b) => {
        return a-b;
    });
}

const a = squaresOfSorted([-7,-3,2,3,11]);
console.log(a);


