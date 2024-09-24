const someNumbers = [1, 20, 9, 14, -5];

let maxNumber = someNumbers[0]; 
let minNumber = someNumbers[0];


for (let i = 1; i < someNumbers.length; i++) {
    if (someNumbers[i] > maxNumber) {
        maxNumber = someNumbers[i]; 
    }
    if (someNumbers[i] < minNumber) {
        minNumber = someNumbers[i]; 
    }
}

console.log("Найбільше значення цього масиву:", maxNumber);
console.log("Найменше значення цього масиву:", minNumber);
