class Calculator{
    constructor(previosOperandTextElement,currentOperandTextElement){
        this.previosOperandTextElement = previosOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }



    clear(){
        this.currentOperand = ''
        this.previosOperand = ''
        this.operation = undefined

    }

    delete(){

    }

    appendNumber(number){
        if(number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()

    }

    chooseOperation(operation){

    }

    compute(){

    }
    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand

    }
}



const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons =document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equal]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previosOperandTextElement = document.querySelector('[data-previos-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')


const calculator = new Calculator(previosOperandTextElement,currentOperandTextElement) 

numberButtons.forEach(button =>{button.addEventListener('click',()=>{ 
     calculator.appendNumber(button.innerText)
     calculator.updateDisplay()
    }
 )})



