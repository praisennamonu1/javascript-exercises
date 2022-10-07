const repeatString = function(string, num) {
    let finalstring = " ";
    let i = 0;
    for (i = 0; i < num; i++) {
        finalstring += string;
    }
    return finalstring;
};
console.log(repeatString('hey', 3));

// Do not edit below this line
module.exports = repeatString;
