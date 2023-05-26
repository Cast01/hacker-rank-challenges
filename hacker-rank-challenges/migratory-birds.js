// https://www.hackerrank.com/challenges/migratory-birds/problem?h_r=next-challenge&h_v=zen&isFullScreen=false&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

let arr = [ 1, 4, 4, 4, 5, 3 ]

// let birdId    = [1, 4, 5, 3]
// let sightings = [1, 3, 1, 1]

let birdIds = []
let birdIdsightings = []

let mostSeenBirdId = []

let i;
let j;
for (i=0;i<arr.length;i++) {
    if (!birdIds.includes(arr[i])) {
        birdIds.push(arr[i])
        birdIdsightings.push(1)
    } else {
        for (j=0;j<birdIds.length;j++) {
            if (birdIds[j] === arr[i]) {
                birdIdsightings[j]++
            }
        }
    }
}

for (i=0;i<birdIdsightings.length;i++) {
    if (Math.max(...birdIdsightings) === birdIdsightings[i]) {
        mostSeenBirdId.push(birdIds[i])
    }
}

let response = null

if (mostSeenBirdId.length === 1) {
    response = mostSeenBirdId[0]
} else {
    response = Math.min(...mostSeenBirdId)
}

console.log(birdIds)
console.log(birdIdsightings)
console.log(mostSeenBirdId)
console.log(response)