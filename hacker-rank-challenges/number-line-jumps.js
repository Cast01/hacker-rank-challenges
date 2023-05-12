//https://www.hackerrank.com/challenges/kangaroo/problem?h_r=next-challenge&h_v=zen

// Test values
{
    // CORRECT
    // k1StartPosition K1 = x1 = 0
    // k1JumpDistance  K1 = v1 = multiple = 3
    // k2StartPosition K2 = x2 = 4
    // k2JumpDistance  K2 = v2 = multiple = 2

    // PROPOSITAL ERROR: INFINITY LOOP
    // k1StartPosition K1 = x1 = 0
    // k1JumpDistance  K1 = v1 = multiple = 2
    // k2StartPosition K2 = x2 = 5
    // k2JumpDistance  K2 = v2 = multiple = 3 

    // PROPOSITAL ERROR: INFINITY LOOP
    // k1StartPosition K1 = x1 = 43
    // k1JumpDistance  K1 = v1 = multiple = 2
    // k2StartPosition K2 = x2 = 70
    // k2JumpDistance  K2 = v2 = multiple = 2
}

// Se o canguru que tem o pulo menor pular a frente do que tem o pulo maior. RETORNAR: "NO"
// Se o canguru que tem o pulo menor pular a mesma distancia do que tem o pulo maior mas um começa na frente do outro. RETORNAR: "NO"
// Se o canguru que tem o pulo menor pular no mesmo lugar do que tem o pulo maior. RETORNAR: "YES"

let boolean = true;
let increment = 0;

let k1StartPosition = [43];
let k1JumpDistance = 2;

let k2StartPosition = [70];
let k2JumpDistance = 2;

let response = "";

if (
    k2JumpDistance > k1JumpDistance &&
    k2StartPosition[0] > k1StartPosition[0]
) {
    response = "NO";
} else if (k1JumpDistance === k2JumpDistance) {
    response = "NO";
} else {
    while (boolean) {
        if (k1StartPosition[increment] > k2StartPosition[increment] || k1StartPosition[increment] === k2StartPosition[increment]) {
            boolean = false;
        } else {
            k1StartPosition.push(k1StartPosition[increment] + k1JumpDistance);
            k2StartPosition.push(k2StartPosition[increment] + k2JumpDistance);

            increment++;
        }
    }

    if (k1StartPosition.slice(-1)[0] === k2StartPosition.slice(-1)[0]) {
        response = "YES";
    } else {
        response = "NOO";
    }
}

console.log(response);
// console.log(kangLongerJump, kangShortestJump);
