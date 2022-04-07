let currentNumberWraper = document.getElementById('currentNumber');
let currentNumber = 0;

function increment() {
    if (currentNumber <= 100) {
        currentNumber = currentNumber + 1;
        currentNumberWraper.innerHTML = currentNumber;
    }
    
}

function decrement() {
    if (currentNumber > 0) {
        currentNumber = currentNumber - 1;
        currentNumberWraper.innerHTML = currentNumber;
    }
}