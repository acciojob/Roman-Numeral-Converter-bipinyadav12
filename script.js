function convertToRoman(num) {
    // Mapping of Roman numerals to their corresponding values
    const romanNumerals = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I'
    };

    let result = '';

    // Loop through the mapping and build the Roman numeral string
    for (let value in romanNumerals) {
        while (num >= value) {
            result += romanNumerals[value];
            num -= value;
        }
    }

    return result;

}
const number=prompt("enter the number");
 alert(convertToRoman(number));

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
