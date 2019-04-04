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
    return {
      firstName: secret(secretData.aaa),
      lastName: secret(secretData.bbb)
    };
 }
 
 function secret(x) {
   return x === 0 ? 'Родриго' : 'Эмильо';
 }
 
 console.log(getPersonData({aaa: 0, bbb: 0}));
 console.log(getPersonData({aaa: 1, bbb: 1}));
 console.log(getPersonData({aaa: 0, bbb: 1}));
 console.log(getPersonData({aaa: 1, bbb: 0}));


//Задание 3:

function averageScore(x) {
    let total = 0; // сумма оценок по предмету
    for (let i = 0; x.length > i; i++) { //цикл для заполнения переменной c суммой оценок по предмету 
      total += x[i];
    }
    return total / x.length; // возвращает среднее значение массива
  }
  
  
  function getAverageScore(data) {
      let allAverage = 0; //сумма средних оценок по всем предметам
      let objectLength = 0; //длина объекта data
  
      let arrAverage = data;
      for (let prop in arrAverage) {  // Обход свойств
          arrAverage[prop] = averageScore(arrAverage[prop]); 
          allAverage += arrAverage[prop];
          objectLength++;
      arrAverage.average = allAverage / objectLength;
      }
      return arrAverage;
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
