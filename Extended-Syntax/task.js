"use strict"

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    // код для задачи №1 писать здесь
    let x = [];
    let d = b**2 - 4 * a * c;
    if (d < 0) {
        x = `Корней нет`;
    } else if (d === 0) {
        x[0] = -1 * b / 2 * a;
    } else if (d > 0) {
        x[0] = (-1 * b + d**(1/2)) / 2 * a;
        x[1] = (-1 * b - d**(1/2)) / 2 * a;
    }

    console.log(x);
    return x;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №2 писать здесь
    let now = new Date();
     let age = now.getFullYear() - dateOfBirthday.getFullYear();
     let result = null;
     if (age >= 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
     } else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
     }
    console.log(result);
    return result;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks) {
    // код для задачи №3 писать здесь
    let sumMarks = 0; // сумма оценок
    let averageMark; // средняя оценка
    // цикл для суммирования оценок:
    for (let i = 0; i < marks.length; i++) {
       sumMarks = sumMarks + marks[i];
    if (marks.length > 5) {
        console.log(`Количество оценок больше пяти`);
        marks.splice(5);
        }
    }

    averageMark = sumMarks / marks.length;

    return averageMark;
}