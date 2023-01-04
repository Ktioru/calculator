let displayValue = []
let operations = []
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


function startCalculator() {
    const input = document.querySelector("input")
    let buttons = document.querySelectorAll("#number")
    console.log(buttons)
    buttons.forEach((number) => {
        number.addEventListener("click", () => {
            input.value += number.textContent
    })
})
    const operationBtns = document.querySelectorAll(".operation")
    operationBtns.forEach((button) => {
        button.addEventListener("click", () => {
            displayValue.push(input.value)
            operations.push(button.textContent)
            input.value = ""

        })
    })
}

startCalculator()