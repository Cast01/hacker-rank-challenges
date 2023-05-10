let arr = [1, 4, 3, 4, 4, 5];

let removeOneIndex = 0;

let sum = 0;

let values = [];

for (i = 0; i < arr.length; i++) {
    for (j=0;j<arr.length;j++) {
        sum += arr[j];
    }
    values.push(sum - arr[removeOneIndex]);
    sum = 0;
    removeOneIndex++;
}

console.log(Math.min(...values), Math.max(...values));