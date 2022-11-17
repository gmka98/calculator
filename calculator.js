const main = document.querySelector('main')

const div_1 = document.createElement('div')
div_1.classList.add('calculator')
main.appendChild(div_1);


//Create a input and then put in the main tag
const input = document.createElement('input')
// Add a class and a type text attribute
input.classList.add('calculator-screen')
input.setAttribute("type","text")
main.appendChild(input);

const calculator = {
    displayValue : '0',
    firstOperand : null,
    waitingForSecondOperand: false,
    operator: null,
};

function updateDisplay(){
const display = document.querySelector('.calculator-screen')
display.value = calculator.displayValue;  
}

updateDisplay();


const keys = document.querySelector('.calculator-keys')
keys.addEventListener('click', (event) => {
    const { target } = event;

    if(!target.matches('button')){
        return;
    }

    if(target.classList.contains('operator')){
        console.log('operator, target.value');
        return;
    }

    if(target.classList.contains('decimal')) {
        console.log('decimal', target.value);
        return
    }

    if(target.classList.contains('all-clear')){
        console.log('clear', target.value);
        return;
    }

    console.log('digit', target.value);

});
