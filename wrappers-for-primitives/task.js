"use strict"

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    date = new Object();
    let arr = {
        percent: percent / 100,
        contribution: contribution,
        amount: amount,
    };
    // проверка на корректность введенных данных
        for (let prop in arr) {
           let value = arr[prop];
           if (typeof value == Number) {
          return value;
        } else if (typeof value  == NaN) {
            return parseInt(value);
        } else {
            return `Пераметр ${prop} содержит неправильное значение ${value}.`;
        }
    }
    //let P = arr.percent / 12; // 1/12 процентной ставки
    let start = new Date();
    let years = date.getFullYear() - start.getFullYear();
    let months = date.getMonth() - start.getMonth();
    let n = years * 12 + months;
    let sumPerMonth = arr.amount * (arr.percent / 12 + (arr.percent / 12) / (((1+arr.percent / 12)**n) - 1));
    let totalAmount = arr.amount - arr.contribution + sumPerMonth;// Общая Сумма которую придется заплатить клиенту
    return arr.amount - arr.contribution + sumPerMonth;
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    
    if (name === null || name === undefined || name === '') {
        name = 'Аноним';
        console.log(`Привет, мир! Меня зовут ${name}.`);
        return `Привет, мир! Меня зовут ${name}.`;
    } else {
        console.log(`Привет, мир! Меня зовут ${name}.`);
        return `Привет, мир! Меня зовут ${name}.`;
    } 
}