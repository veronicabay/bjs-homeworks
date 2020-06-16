"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
    let percentNumber = parseFloat(percent);
    let contributionNumber = parseFloat(contribution);
    let amountNumber = parseFloat(amount);
    if (isNaN(percentNumber)) {
        return `Параметр 'Процентная ставка' содержит неправильное значение "${percent}"`;
    } else if (isNaN(contributionNumber)) {
        return `Параметр 'Сумма первоначального взноса' содержит неправильное значение "${contribution}"`; 
    } else if (isNaN(amountNumber)) {
        return `Параметр 'Сумма кредита' содержит неправильное значение "${amount}"`;
    } else {
        let creditBody = amount - contribution;
        let P = percentNumber / 12 / 100;
        let currentDate = new Date();
        let n = (date.getFullYear() - currentDate.getFullYear()) * 12 + date.getMonth() - currentDate.getMonth();
        let monthPay = creditBody * (P + P / (((1 + P)**n) - 1));
        let totalAmount = monthPay * n;
        console.log(totalAmount);
        return parseFloat(totalAmount.toFixed(2));
    }
}

function getGreeting(name) {
    if (typeof name !== "string" || name == '') name = "Аноним";
    return `Привет, мир! Меня зовут ${name}`;
}