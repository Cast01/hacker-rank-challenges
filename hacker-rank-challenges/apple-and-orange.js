// https://www.hackerrank.com/challenges/apple-and-orange/problem

// starting point of Sam's house location = 7 = s
// ending location of Sam's house location = 11 = t
// location of the Apple tree = 5 = a
// location of the Orange tree = 15 = b
// INTEGER_ARRAY apples = -2,2,1
// INTEGER_ARRAY oranges = 5,-6

startLocation = 7;
endLocation = 11;

let apples = [-2, 2, 1];
let a = 5;

let oranges = [5, -6];
let b = 15;

let i;

let applesPosition = [];
let orangesPosition = [];

for (i = 0; i < apples.length; i++) {
    applesPosition.push(a + apples[i]);
}

for (i = 0; i < oranges.length; i++) {
    orangesPosition.push(b + oranges[i]);
}

let applesInArea = 0;

for (i=0;i<applesPosition.length;i++) {
    if (applesPosition[i] >= startLocation && applesPosition[i] <= endLocation) {
        applesInArea++;
    }
}

let orangesInArea = 0;

for (i=0;i<orangesPosition.length;i++) {
    if (orangesPosition[i] >= startLocation && orangesPosition[i] <= endLocation) {
        orangesInArea++;
    }
}

console.log(applesPosition)
console.log(applesInArea, orangesInArea);