// https://www.hackerrank.com/challenges/bon-appetit

const bill = [ 3, 10, 2, 9 ]
const k = 1
const b = 12

let sum = 0

bill.forEach(element => {
  sum += element
});

let sumMinusK = sum - bill[k]
let sumItemsAna = sumMinusK / 2
let refoundToAna = b - sumItemsAna

const response = sumItemsAna >= b ? 'Bon Appetit' : refoundToAna

console.log(response)