let arr = Array.from({ length: 10 });

let i = 0;
let a = 0;
let arrLength = arr.length;
let arrLengthDecrement = arrLength - 1;

let voidSpace = "_";
let hashtag = "#";

let output = "";

// while (a < arr.length) {
//   output += voidSpace;
//   a++;
// }
// output += `${hashtag}\n`;
// while (b < arr.length - 1) {
//   output += voidSpace;
//   b++;
// }
// output += `${hashtag}${hashtag}\n`;

// =======================================================================

// while (i < arrLength) {
//   while (a < arrLength) {
//     if (a >= arrLengthDecrement) {
//         output += hashtag;
//         a++;
//     } else {
//         output += voidSpace;
//         a++
//     }
//   }
//   output += '\n';
//   a=0;
//   arrLengthDecrement--;

//   i++;
// }

// =======================================================================

// while (i < arrLength) {
//     for (a=0;a<arrLength;a++) {
//         if (a < arrLengthDecrement) {
//             output += voidSpace;
//         } else {
//             output += hashtag;
//         }
//     }
//     output += '\n';
//     arrLengthDecrement--;

//     i++
// }

// =======================================================================

// var str = "",
//   newstart = "",
//   spacefill = "";
// for (i = 0; i < arrLength; i++) {
//   for (j = i; j < arrLength - 1; j++) {
//     spacefill += " ";
//   }
//   newstart += "#";
//   str = spacefill + newstart;
//   spacefill = "";
//   console.log(str);
// }

for (i=0;i<arrLength;i++) {
    for (a=0;a<arrLength;a++) {
        if (a < arrLengthDecrement) {
            output += voidSpace;
        } else {
            output += hashtag;
        }
    }
    arrLengthDecrement--;
    console.log(`Console: ${i} ==>` + output)
    output = '';
}
