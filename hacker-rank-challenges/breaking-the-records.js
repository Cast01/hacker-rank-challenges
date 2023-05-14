// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?h_r=next-challenge&h_v=zen&isFullScreen=false&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

let arr = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];

let currentMaxScore = arr[0];
let currentMinScore = arr[0];

let maxScoreNewRecord = 0;
let minScoreNewRecord = 0;

let i;
for (i=1;i<arr.length;i++) {
    if (arr[i] > currentMaxScore) {
        currentMaxScore = arr[i];
        maxScoreNewRecord++;
    } else if (arr[i] < currentMinScore) {
        currentMinScore = arr[i];
        minScoreNewRecord++;
    } else {
        maxScoreNewRecord = maxScoreNewRecord;
        minScoreNewRecord = minScoreNewRecord;
    }
}

console.log(maxScoreNewRecord);
console.log(minScoreNewRecord);