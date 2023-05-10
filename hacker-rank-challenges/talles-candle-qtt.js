let arr = [1, 4, 3, 4, 4];

let tallestCandel = Math.max(...arr);
let tallestCandelQtt = 0;

for (i = 0; i < arr.length; i++) {
    if (tallestCandel === arr[i]) {
        tallestCandelQtt++;
    }
}

console.log(tallestCandelQtt);