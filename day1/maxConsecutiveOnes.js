const maxConsecutiveOnes = (arr) => {
    let count = 0;
    let maxConsecutiveOne = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 1) {
            count++;
            maxConsecutiveOne = Math.max(count, maxConsecutiveOne);
        } else {
            count = 0
        }
    }
    return maxConsecutiveOne;
}

const arrE1 = [1,1,0,1,1,1];
const arrE2 = [1,0,1,1,0,1];

const maxOnes1 = maxConsecutiveOnes(arrE1);
console.log(maxOnes1);

const maxOnes2 = maxConsecutiveOnes(arrE2);
console.log(maxOnes2);
