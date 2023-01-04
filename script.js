function add(...args) {
    let total = 0
    args.forEach((number) => {
        total += number
    })
    return total
}

function subtract(firstNumber, ...args) {
    let total = firstNumber
    args.forEach((number) => {
        total -= number
    })
    return total
}

function multiply(...args) {
    let total = 1
    args.forEach((number) => {
        total *= number
    })
    return total
}

function divide(firstNumber, ...args) {
    let total = firstNumber
    args.forEach((number) => {
        total /= number
    })
    return total
}

console.log(divide(10, 2, 3))