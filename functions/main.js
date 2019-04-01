"use strict"

//Задание 1:

function getSolutions(a,b,c) {
    let x1 = '';
    let x2 = '';
    let D = b**2 - 4 * a * c;
    if (D < 0) {
        return {
            D: D
        };
    } else if (D === 0) {
        x1 = -b / (2 * a);
        return {
            roots: [x1],
            D: D
        };
    } else if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        return {
            roots: [x1, x2],
            D: D
        };
    }
}

function showSolutionsMessage(a,b,c) {
 let result = getSolutions(a,b,c);
 console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
 console.log(`Значение дискриминанта: ${result.D}`);

 if (result.D < 0) {
     console.log(`Уравнение не имеет вещественных корней`);
 } else if (result.D === 0) {
    console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
 } else if (result.D > 0) {
     console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
 }
}

showSolutionsMessage(2,4,2);
showSolutionsMessage(7,20,-3)
showSolutionsMessage(1,2,3)

//Задание 2:

function getPersonData(secretData) {
  if (secretData.aaa === 0 && secretData.bbb === 0) {
    return secretData = {firstName: "Родриго", lastName: "Родриго"};
  } else if (secretData.aaa === 1 && secretData.bbb === 1) {
    return secretData = {firstName: "Эмильо", lastName: "Эмильо"};
  } else if (secretData.aaa === 0 && secretData.bbb === 1) {
    return secretData = {firstName: "Родриго", lastName: "Эмильо"};
  } else if (secretData.aaa === 1 && secretData.bbb === 0) {
    return secretData = {firstName: "Эмильо", lastName: "Родриго"};
  } 
}


console.log(getPersonData({aaa: 0, bbb: 0}));
console.log(getPersonData({aaa: 1, bbb: 1}));
console.log(getPersonData({aaa: 0, bbb: 1}));
console.log(getPersonData({aaa: 1, bbb: 0}));


//Задание 3:

function getAverageScore(data) {
    let allAverage = 0; //сумма средних оценок по всем предметам
    let objectLenght = 0; //длина объекта data

    for (let prop in data) {  // Обход свойств
        let value = data[prop];
        let sumResult = 0; // сумма оценок по предмету
        for (let i = 0; value.length > i; i++) { //цикл для заполнения переменной c суммой оценок по предмету 
            sumResult += value[i];
        }
        data[prop] = sumResult / value.length; //средняя оценка по предмету
        allAverage += data[prop];
        objectLenght++;
        data.average = allAverage / objectLenght; // добавление в объект средней оценки за все предметы
    }
    return data;
}

console.log(getAverageScore({
    algebra: [2,4,5,2,3,4],
    geometry: [2,4,5],
    russian: [3,3,4,5],
    physics: [5,5],
    music: [2,2,6],
    english: [4,4,3],
    poetry: [5,3,4],
    chemistry: [2],
    french: [4,4],
    
  }));