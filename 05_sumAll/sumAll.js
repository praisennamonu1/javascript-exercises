const sumAll = function(firstNum, lastNum) {
    
    let finalSum = 0;

    if (lastNum < firstNum) {
        for (let i = lastNum; i <= firstNum; i++) {
            finalSum += i;
        }
        return finalSum;

    } else if (firstNum !== NaN || lastNum !== NaN) {
        return "ERROR";

    } else if (firstNum < 0 || lastNum < 0) {
        return "ERROR";

    } else {
        for (let i = firstNum; i <= lastNum; i++) {
            finalSum += i;
        }
        return finalSum;
    }

};

console.log(sumAll(-12, 4000));

// Do not edit below this line
module.exports = sumAll;
