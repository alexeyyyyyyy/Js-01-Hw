const sumDigits = function (x) {
    let sum = 0;

    let digits = x.toString();

    for (let i = 0; i < digits.length; i++) {

        sum += parseInt(digits[i]);
    }
    return sum;
}

const luckyNumber = function (x) {
    let digits = x.toString();
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < digits.length; i++) {
        let digit = parseInt(digits[i]);
        if (i % 2 === 0) {

            evenSum += digit;
        } else {

            oddSum += digit;
        }
    }


    return evenSum === oddSum;
}

let res = sumDigits(1234);
console.log(`res = ${res}`);
res = luckyNumber(123871);
console.log(res ? "Lucky" : "Unlucky");