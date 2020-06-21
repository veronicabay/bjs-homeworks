"use strict";
console.log('Задача №1. Корни квадратного уравнения');
function getSolutions(a, b, c) {
    let D = Math.pow(b, 2) - 4 * a * c;
    let roots = [];
    if (D < 0) {
        return {D, roots: []};
    } else if (D === 0) {
        roots.push(- b / (2 * a));
        return {D, roots};
    } else if (D > 0) {
        roots.push((- b + Math.sqrt(D)) / (2 * a));
        roots.push((- b - Math.sqrt(D)) / (2 * a));
        return {D, roots};
    }
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
        console.log(`Уравнение не имеет вещественных корней`);
    } else if (result.D === 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
    } else if (result.D > 0) {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}.`);
    }
}
showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);

console.log('Задача №2. Журнал успеваемости');
function getAverageScore(data) {
    let result = {};
    let subject = [];
    for (let obj in data) {
        result[obj] = getAverageMark(data[obj]);
        subject.push(result[obj]);
    }
    result.average = getAverageMark(subject);
    return result;
}

function getAverageMark(marks) {
    if (marks.length === 0) {
        return 0;
    } 
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return sum / marks.length;
}

console.log(getAverageScore({
    algebra: [2, 4, 5, 2, 3, 4],
    geometry: [2, 4, 5],
    russian: [3, 3, 4, 5],
    physics: [5, 5],
    music: [2, 2, 6],
    english: [4, 4, 3],
    poetry: [5, 3, 4],
    chemistry: [2],
    french: [4, 4],
  }));



console.log('Задача №3. Расшифровка данных');
function getPersonData(secretData) {
    return {
        firstName: getDecodedValue(secretData.aaa),
        lastName: getDecodedValue(secretData.bbb),
    }
}

function getDecodedValue(secret) {
    return secret ? "Эмильо" : "Родриго";
}
console.log(getPersonData({aaa:0, bbb:0}));
console.log(getPersonData({aaa:1, bbb:0}));
console.log(getPersonData({aaa:0, bbb:1}));
console.log(getPersonData({aaa:1, bbb:1}));