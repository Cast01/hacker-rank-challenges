function f(n) {
    if (n === 0) return count += 1

    let i;
    for (i = 0; i < n; i++) {
        f(n - 1)
    }
}

let count = 0
f(12)
console.log(count)