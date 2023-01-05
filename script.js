let displayValue = []
let operations = []

let point = ""

const input = document.querySelector("input")
let buttons = document.querySelectorAll("#number")
const operationBtns = document.querySelectorAll(".operation")
const equalBtn = document.querySelector(".equal")
const deleteBtn = document.querySelector(".delete")
const clearBtn = document.querySelector(".clear")

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

function deletee() {
    input.value = ""
}

function clear() {
    input.value = ""
    total = 0
    displayValue = []
    operations = []
}

function startCalculator() {
    
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
    
    operationBtns.forEach((button) => {
        button.addEventListener("click", () => {
            displayValue.push(Number(input.value))
            operations.push(button.textContent)
            input.value = ""

        })
    })
    
    equalBtn.addEventListener("click", () => {
        displayValue.push(Number(input.value))
        console.log(displayValue, operations)
        result = operate(displayValue, operations)
        clear()
        input.value = result
        
    })
    
    deleteBtn.addEventListener("click", deletee)
    clearBtn.addEventListener("click", clear)
}

startCalculator()