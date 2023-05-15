// https://www.hackerrank.com/challenges/the-birthday-bar/problem?h_r=next-challenge&h_v=zen&isFullScreen=false&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

let s = [2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1];
let d = 18;
let m = 7; // Pedaços

let combinatioQtt = 0;

let getResult = s[0];

let i;
let j;
if (m == 1 && s.length == 1 && d == s[0]) {
    combinatioQtt++;
} else {
    for (i=0;i<s.length;i++) {
        for (j=i+1;j<i+7;j++) {
            getResult += s[j]
            if (getResult > d) {
                break;
            }
        }
        if (getResult == d) {
            combinatioQtt++;
        }
        getResult = s[i+1];
    }
}

console.log(combinatioQtt);