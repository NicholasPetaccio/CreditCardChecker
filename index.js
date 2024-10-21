let userInput = document.getElementById("userInput").value;
let cc = [];

document.getElementById('userInput').addEventListener('keydown', (e) => {
    // Allow only numbers (0-9) and the Backspace key
    if (!isNaN(e.key) && e.key !== ' ' || e.key === 'Backspace') {
        if (e.key !== 'Backspace') {
            cc.push(Number(e.key));
        } else {
            cc.pop();
        }
        validation(cc);
    } else {
        e.preventDefault();
    }
});

let response = document.getElementById("responseMessage");
let input = document.getElementById("userInput");

const validation = 
    //Immediately invoke a higher order function that returns a function that checks the credit card and validates it with the luhn algorithm.
    function luhn(array) {
        return function (num) {
        let len = num ? num.length : 0,
        double = 1,
        checkSum = 0;
    //Loop through each digit of card from right to left and multiply every other number (XOR operator) subtract 9 when necesarry and then add the numbers together.
        while (len--) {
            checkSum += !(double ^= 1) ? parseInt(num[len], 10) : array[num[len]];
        }
    //Return the sum of all of the numbers in the array and check if it is a modulo of 10 and greater than 0.
        if(checkSum % 10 === 0 && checkSum > 0 && cc.length > 15){
            response.innerText = "This is a valid Credit Card number";
            input.style.border = '2px solid green';
            input.classList.add("valid");
            response.style.color = "green";
            response.classList.remove('hidden');
            input.classList.remove('invalid');
            response.classList.add('valid');
            return true;
        }else{
            response.innerText = "Invalid Credit Card";
            input.style.border = '2px solid red';
            response.style.color = 'red';
            response.classList.remove('hidden');
            input.classList.add('invalid');
            return false;
        }
    };
}([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]);

let activePage = document.getElementById("insideApp");
let activeConf = document.getElementById("confirmation");

document.getElementById("submitBtn").addEventListener("click", submitForm = () => {
    if(!validation(cc)){
        response.innerText = "Please enter a valid Credit Card number (Check the README)"
    }else if(validation(cc)){
        activePage.classList.add("active");
        activeConf.classList.add("active");
    }
});

document.getElementById("back").addEventListener("click", back = () => {
    activePage.classList.remove("active");
    activeConf.classList.remove("active");
});




