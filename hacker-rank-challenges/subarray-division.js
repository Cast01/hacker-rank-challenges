// https://www.hackerrank.com/challenges/the-birthday-bar/problem?h_r=next-challenge&h_v=zen&isFullScreen=false&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

let s = [1, 2, 1, 3, 2];
let d = 3;
let m = 2; // Pedaços

let combinatioQtt = 0;

let getResult = s[0];

let i;
let j;
if (m == 1 && s.length == 1 && d == s[0]) {
    combinatioQtt++;
} else {
    for (i=0;i<s.length;i++) {
        if (i <= (s.length - m)) {
            for (j=i+1;j<i+m;j++) {
                getResult += s[j]
                if (getResult > d) {
                    break;
                }
            }
            if (getResult == d) {
                combinatioQtt++;
            }
            getResult = s[i+1];
        } else {
            break;
        }
    }
}

console.log(combinatioQtt);