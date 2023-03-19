const openTrigger = document.getElementById('bottomTrigger');
const closeTrigger = document.getElementById('closeContent');
const triggerPart = document.getElementById('betslipBottom');
const contentPart = document.getElementById('betslipTop');


openTrigger.addEventListener('click', () => {
    contentPart.classList.remove('d-none');
    triggerPart.classList.add('d-none');
})

closeTrigger.addEventListener('click', () => {
    contentPart.classList.add('d-none');
    triggerPart.classList.remove('d-none');
})

// calculators
// calculator 1
const amountInput1 = document.getElementById('amountInput1');
const calculator1 = document.getElementById('calculator1');
amountInput1.addEventListener('click', () => {
    calculator1.classList.toggle('d-none')
    calculator2.classList.add('d-none')
    calculator3.classList.add('d-none')
    calculator4.classList.add('d-none')
    calculator5.classList.add('d-none')
    calculator6.classList.add('d-none')
    calculator7.classList.add('d-none')
    calculator8.classList.add('d-none')
    calculator111.classList.add('d-none')
})

// calculator 2
const amountInput2 = document.getElementById('amountInput2');
const calculator2 = document.getElementById('calculator2');
amountInput2.addEventListener('click', () => {
    calculator1.classList.add('d-none')
    calculator2.classList.toggle('d-none')
    calculator3.classList.add('d-none')
    calculator4.classList.add('d-none')
    calculator5.classList.add('d-none')
    calculator6.classList.add('d-none')
    calculator7.classList.add('d-none')
    calculator8.classList.add('d-none')
    calculator111.classList.add('d-none')
})

// calculator 3
const amountInput3 = document.getElementById('amountInput3');
const calculator3 = document.getElementById('calculator3');
amountInput3.addEventListener('click', () => {
    calculator1.classList.add('d-none')
    calculator2.classList.add('d-none')
    calculator3.classList.toggle('d-none')
    calculator4.classList.add('d-none')
    calculator5.classList.add('d-none')
    calculator6.classList.add('d-none')
    calculator7.classList.add('d-none')
    calculator8.classList.add('d-none')
    calculator111.classList.add('d-none')
})

// calculator 4
const amountInput4 = document.getElementById('amountInput4');
const calculator4 = document.getElementById('calculator4');
amountInput4.addEventListener('click', () => {
    calculator1.classList.add('d-none')
    calculator2.classList.add('d-none')
    calculator3.classList.add('d-none')
    calculator4.classList.toggle('d-none')
    calculator5.classList.add('d-none')
    calculator6.classList.add('d-none')
    calculator7.classList.add('d-none')
    calculator8.classList.add('d-none')
    calculator111.classList.add('d-none')
})
// calculator 5
const amountInput5 = document.getElementById('amountInput5');
const calculator5 = document.getElementById('calculator5');
amountInput5.addEventListener('click', () => {
    calculator1.classList.add('d-none')
    calculator2.classList.add('d-none')
    calculator3.classList.add('d-none')
    calculator4.classList.add('d-none')
    calculator5.classList.toggle('d-none')
    calculator6.classList.add('d-none')
    calculator7.classList.add('d-none')
    calculator8.classList.add('d-none')
    calculator111.classList.add('d-none')
})
// calculator 6
const amountInput6 = document.getElementById('amountInput6');
const calculator6 = document.getElementById('calculator6');
amountInput6.addEventListener('click', () => {
    calculator1.classList.add('d-none')
    calculator2.classList.add('d-none')
    calculator3.classList.add('d-none')
    calculator4.classList.add('d-none')
    calculator5.classList.add('d-none')
    calculator6.classList.toggle('d-none')
    calculator7.classList.add('d-none')
    calculator8.classList.add('d-none')
    calculator111.classList.add('d-none')
})
// calculator 7
const amountInput7 = document.getElementById('amountInput7');
const calculator7 = document.getElementById('calculator7');
amountInput7.addEventListener('click', () => {
    calculator1.classList.add('d-none')
    calculator2.classList.add('d-none')
    calculator3.classList.add('d-none')
    calculator4.classList.add('d-none')
    calculator5.classList.add('d-none')
    calculator6.classList.add('d-none')
    calculator7.classList.toggle('d-none')
    calculator8.classList.add('d-none')
    calculator111.classList.add('d-none')
})
// calculator 8
const amountInput8 = document.getElementById('amountInput8');
const calculator8 = document.getElementById('calculator8');
amountInput8.addEventListener('click', () => {
    calculator1.classList.add('d-none')
    calculator2.classList.add('d-none')
    calculator3.classList.add('d-none')
    calculator4.classList.add('d-none')
    calculator5.classList.add('d-none')
    calculator6.classList.add('d-none')
    calculator7.classList.add('d-none')
    calculator8.classList.toggle('d-none')
    calculator111.classList.add('d-none')
})


// calculator 111
const amountInput111 = document.getElementById('amountInput111');
const calculator111 = document.getElementById('calculator111');
amountInput111.addEventListener('click', () => {
    calculator1.classList.add('d-none')
    calculator2.classList.add('d-none')
    calculator3.classList.add('d-none')
    calculator4.classList.add('d-none')
    calculator5.classList.add('d-none')
    calculator6.classList.add('d-none')
    calculator7.classList.add('d-none')
    calculator8.classList.add('d-none')
    calculator111.classList.toggle('d-none')
})