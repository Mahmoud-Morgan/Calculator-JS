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
        this.currentOperand = this.currentOperand.toString().slice(0,-1)
    }

    appendNumber(number){
        if(number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()

    }

    chooseOperation(operation){
        if(operation === '') return
        if(this.previosOperand !== ''){ this.compute()}
        this.operation = operation
        this.previosOperand = this.currentOperand 
        this.currentOperand = ''

    }

    compute(){
        let computation
        const prev = parseFloat(this.previosOperand)
        const current =parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(current)) return
        switch(this.operation){
            case '+':
                computation = prev + current
            break

            case '-':
                computation = prev - current
            break
      
            case '*':
                computation = prev * current
            break

            case '÷':
                computation = prev / current
            break
            default:
                return
        }
          
        this.currentOperand = computation
        this.operation = undefined
        this.previosOperand = ''
        
    }
    getDisplayNumber(number){
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0]) //frist part befor '.'
        const decimalDigits = stringNumber.split('.')[1] //second part after '.'
        let integerDisplay
        if(isNaN(integerDigits)){
            integerDisplay = ''
        }else{
            integerDisplay = integerDigits.toLocaleString('en',{
                maximumFractionDigits:0
            })
        }
        if(decimalDigits != null){
            return `${integerDisplay}.${decimalDigits}`
        }else{
            return integerDisplay
        }
    }


    updateDisplay(){
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
        if(this.operation != null){
            this.previosOperandTextElement.innerText = `${this.getDisplayNumber(this.previosOperand)}  ${this.operation}`
        }else{
            this.previosOperandTextElement.innerText = ''
        }


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


 operationButtons.forEach(button =>{button.addEventListener('click',()=>{ 
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
   }
)})


equalButton.addEventListener('click',button =>{
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click',button =>{
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click',button =>{
    calculator.delete()
    calculator.updateDisplay()
})