"use strict";
function getResult(a,b,c){
    let D = b ** 2 - 4 * a * c;
    let result = [];
    if (D == 0) {
        result = [- b / (2 * a)];
    } else if (D > 0) {
        result [0] = (- b + Math.sqrt(D)) / (2 * a);
        result [1] = (- b - Math.sqrt(D)) / (2 * a);
    } return result;
}

function getAverageMark(marks){
    let sum = 0;
    let averageMark;
    if (marks.length == 0) {
      return 0;
    } else if (marks.length > 5) {
        marks.splice(5);
        console.log("Количество введённых оценок превышает допустимое значение");
    } for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
        averageMark = sum / marks.length;
    } return averageMark;
}

function askDrink(name,dateOfBirthday){
    let age = new Date().getFullYear() - dateOfBirthday.getFullYear();
    if (age >= 18) {
        return "Не желаете ли олд-фэшн, " + name + " ?";
    } else {
        return "Сожалею, " + name + ", но я не могу вам продать алкоголь. Зато могу предложить Вам замечательный клюквенный компот!";
    }
}