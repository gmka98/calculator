const main = document.querySelector('main')

const div_1 = document.createElement('div')
div_1.classList.add('calculator')
main.appendChild(div_1);


//Create a input and then put in the main tag
const input = document.createElement('input')
// Add a class and a type text attribute
input.classList.add('calculator-screen')
input.setAttribute("type","text")
input.setAttribute("value","0")
div_1.appendChild(input);
 
const calcul_keys = document.createElement('div')
calcul_keys.classList.add('calculator-keys')
div_1.appendChild(calcul_keys);



const plus = document.createElement('button') 
plus.setAttribute("type","button")
plus.classList.add('operator')
plus.setAttribute('value','+')
const more = document.createTextNode('+')
plus.appendChild(more)
calcul_keys.appendChild(plus)

const minus = document.createElement('button') 
minus.setAttribute("type","button")
minus.classList.add('operator')
minus.setAttribute('value','-')
const moins = document.createTextNode('-')
minus.appendChild(moins)
calcul_keys.appendChild(minus)

const multiple = document.createElement('button') 
multiple.setAttribute("type","button")
multiple.classList.add('operator')
multiple.setAttribute('value','*')
const fois = document.createTextNode('*')
multiple.appendChild(fois)
calcul_keys.appendChild(multiple)

const divide = document.createElement('button') 
divide.setAttribute("type","button")
divide.classList.add('operator')
divide.setAttribute('value','/')
const divise = document.createTextNode('/')
divide.appendChild(divise)
calcul_keys.appendChild(divide)

const seven = document.createElement('button') 
seven.setAttribute("type","button")
seven.setAttribute('value','7')
const sept = document.createTextNode('7')
seven.appendChild(sept)
calcul_keys.appendChild(seven)

const eight = document.createElement('button') 
eight.setAttribute("type","button")
eight.setAttribute('value','8')
const huit = document.createTextNode('8')
eight.appendChild(huit)
calcul_keys.appendChild(eight)

const nine = document.createElement('button') 
nine.setAttribute("type","button")
nine.setAttribute('value','9')
const neuf = document.createTextNode('9')
nine.appendChild(neuf)
calcul_keys.appendChild(nine)

const four = document.createElement('button') 
four.setAttribute("type","button")
four.setAttribute('value','4')
const quatre = document.createTextNode('4')
four.appendChild(quatre)
calcul_keys.appendChild(four)

const five = document.createElement('button') 
five.setAttribute("type","button")
five.setAttribute('value','5')
const cinq = document.createTextNode('5')
five.appendChild(cinq)
calcul_keys.appendChild(five)

const six = document.createElement('button') 
six.setAttribute("type","button")
six.setAttribute('value','6')
const sic = document.createTextNode('6')
six.appendChild(sic)
calcul_keys.appendChild(six)


const one = document.createElement('button') 
one.setAttribute("type","button")
one.setAttribute('value','1')
const un = document.createTextNode('1')
one.appendChild(un)
calcul_keys.appendChild(one)

const two = document.createElement('button') 
two.setAttribute("type","button")
two.setAttribute('value','2')
const deux = document.createTextNode('2')
two.appendChild(deux)
calcul_keys.appendChild(two)

const three = document.createElement('button') 
three.setAttribute("type","button")
three.setAttribute('value','3')
const trois = document.createTextNode('3')
three.appendChild(trois)
calcul_keys.appendChild(three)

const nul = document.createElement('button') 
nul.setAttribute("type","button")
nul.setAttribute('value','0')
const zero = document.createTextNode('0')
nul.appendChild(zero)
calcul_keys.appendChild(nul)




const decimal = document.createElement('button') 
decimal.setAttribute("type","button")
decimal.classList.add("decimal")
decimal.setAttribute('value','.')
const virgule = document.createTextNode('.')
decimal.appendChild(virgule)
calcul_keys.appendChild(decimal)

const clear = document.createElement('button') 
clear.setAttribute("type","button")
clear.classList.add("all-clear")
clear.setAttribute('value','all-clear')
const clean = document.createTextNode('AC')
clear.appendChild(clean)
calcul_keys.appendChild(clear)

const equal = document.createElement('button') 
equal.setAttribute("type","button")
equal.classList.add("equal-sign")
equal.setAttribute('value','=')
const egal = document.createTextNode('=')
equal.appendChild(egal)
calcul_keys.appendChild(equal)



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
