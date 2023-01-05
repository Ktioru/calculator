let displayValue = []
let operations = []

let point = ""
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

function operate(numbers, operations) {
    let total = 0
    for (c = 0; c < numbers.length; c++) {
        if (c == 0 && total == 0) {
            total = numbers[c]
        } else {
            switch (operations[c - 1]) {
                case "+":
                    total = add(total, numbers[c])
                    break;
                case "-":
                    total = subtract(total, numbers[c])
                    break;
                
                case "x":
                    total = multiply(total, numbers[c])
                    break;
                
                case "÷":
                    total = divide(total, numbers[c])
                    break;
            }
            
            
        }
        
    }
    return total
}

function startCalculator() {
    const input = document.querySelector("input")
    let buttons = document.querySelectorAll("#number")
    console.log(buttons)
    buttons.forEach((number) => {
        number.addEventListener("click", () => {
            if (number.textContent == "." && point == "" && input.value.includes(".") == false) {
                point = "."
            } else {
                input.value += point + number.textContent
                point = ""
            }
            
    })
})
    const operationBtns = document.querySelectorAll(".operation")
    operationBtns.forEach((button) => {
        button.addEventListener("click", () => {
            displayValue.push(Number(input.value))
            operations.push(button.textContent)
            input.value = ""

        })
    })
    const equalBtn = document.querySelector(".equal")
    equalBtn.addEventListener("click", () => {
        displayValue.push(Number(input.value))
        console.log(displayValue)
        result = operate(displayValue, operations)
        input.value = result
        total = 0
        displayValue = []
        operations = []
    })
}

startCalculator()