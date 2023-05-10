let arr = [73, 67, 38, 33];

let i;

let nextMultiple5 = 0;

let response = [];

for (i=0;i<arr.length;i++) {
    if (Math.ceil(arr[i]/5)*5 < 40) {
        response.push(arr[i]);
    } else if (Math.ceil(arr[i]/5)*5 - arr[i] < 3) {
        nextMultiple5 = Math.ceil(arr[i]/5)*5;
        response.push(nextMultiple5);
        nextMultiple5= 0;
    } else {
        response.push(arr[i]);
    }
}
console.log(response)
