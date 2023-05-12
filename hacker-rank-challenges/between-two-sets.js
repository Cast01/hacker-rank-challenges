// let mdcListOfB = [
//     [1,2,3,8,...],
//     [1,2,4,8,...],
//     [1,2,4,8,...]
// ]

// let mdcListOfBCommonNumbers = [1,2,8];

// let someItemIn_MdcListOfBCommonNumbers_IsMultipleOfAllItemsInListA = [8] //Return 1

let i;

let a = [2, 4];
let b = [32, 16, 96].sort();

let mdcListOfB = [];
let insertInMdcListOfB = [];

let mdcListOfBCommonNumbers = [];

let someItemIn_MdcListOfBCommonNumbers_IsMultipleOfAllItemsInListA = [8]; //Return 1

// Generate MDC of b list items
for (i = 0; i < b.length; i++) {
    // Exemplo:
    /*
        16/1 = 16
        16/2 = 8
        16/3
        16/4 = 4
        16/5
        16/6
        16/7
        16/8 = 2
        // Se o divisor for maior que a metade do numero o último resultado aceitavel é ele dividido por ele mesmo.
        16/16 = 1

    */

    let j;
    for (j = 1; j <= b[i] / 2; j++) {
        if (b[i] % j == 0) {
            insertInMdcListOfB.push(b[i] / j);
        }
    }
    insertInMdcListOfB.push(1);
    mdcListOfB.push(insertInMdcListOfB);
    insertInMdcListOfB = [];
}

// Get common numbers of MDC list
let haveInAll = true;
for (i=0;i<mdcListOfB[0].length;i++) {
    for (j=1;j<mdcListOfB.length;j++) {
        if (mdcListOfB[j].includes(mdcListOfB[0][i])) {
            haveInAll = true;
        } else {
            haveInAll = false;
            return;
        }
    }
    if (haveInAll) {
        mdcListOfBCommonNumbers.push(mdcListOfB[0][i]);
    }
}

console.log(mdcListOfB);
console.log(mdcListOfBCommonNumbers);

// console.log(Array.from({length: 5}, () => 1))
