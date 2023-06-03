// https://www.hackerrank.com/challenges/day-of-the-programmer/problem?h_r=next-challenge&h_v=zen&isFullScreen=false&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

let year = 1918

let programmer_day_in_september = null

if ((year < 1918 && year % 4 === 0) || (year > 1918 && year % 400 === 0 || year % 4 === 0 && year % 100 !== 0)) {
    programmer_day_in_september = 12
} else if (year !== 1918) {
    programmer_day_in_september = 13
} else {
    programmer_day_in_september = 26
}

let full_date_of_programmer_day = `${programmer_day_in_september}.09.${year}`

console.log(full_date_of_programmer_day)