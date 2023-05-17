// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?h_r=next-challenge&h_v=zen&isFullScreen=false&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

let ar = [ 29, 97, 52, 86, 27, 89, 77, 19, 99, 96 ];

let k = 3; // module == 0

let n = ar.length;

let moduleOf3 = 0;

let i;
let j;
for (i=0;i<ar.length-1;i++) {
    for (j=i+1;j<ar.length;j++) {
        if ((ar[i] + ar[j]) % 3 == 0) {
            moduleOf3++;
        }
    }
}

console.log(moduleOf3);