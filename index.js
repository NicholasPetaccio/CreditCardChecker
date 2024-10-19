const userInput = document.getElementById("userInput").value;
let cc = [];
let displayCc = [];

document.getElementById('userInput').addEventListener('keydown', (e) => {
    // Allow only numbers (0-9) and the Backspace key
    if (!isNaN(e.key) && e.key !== ' ' || e.key === 'Backspace') {
        if (e.key !== 'Backspace') {
            cc.push(Number(e.key));
        } else {
            cc.pop();
        }
    } else {
        e.preventDefault();
    }
});

const validation = function luhn(array) {
    return function (num) {
      let len = num ? num.length : 0,
        double = 1,
        checkSum = 0;

      while (len--) {
        checkSum += !(double ^= 1) ? parseInt(num[len], 10) : array[num[len]];
      }

      return checkSum % 10 === 0 && checkSum > 0;
    };
  }([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]);




