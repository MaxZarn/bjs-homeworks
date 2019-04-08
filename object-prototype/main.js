

function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    // код для задачи №1 писать здесь
    let now = Date.now(); // текущая дата в миллисекундах
    let date = new Date(birthday);
    let diff = (now) - (+date); // разница
    let age = diff / 31536000000; //возраст в годах 
    if (age >= 18) {
        return true;
    } else if (age < 18) {
        return false;
    }
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr', 
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    // код для задачи №2 писать здесь
    this.sound = animal.sound;
    if (animal === undefined) {
        return null;
    } else if (animal !== undefined) {
        return sound;
    }
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    // код для задачи №3 писать здесь
    let roundedAverage;
    for (let prop in marks) {
        average = marks[prop];
        average = averageScore(average);
        //roundedAverage = Math.round(average);
    }
    roundedAverage = Math.round(average);
    return roundedAverage;
}

function averageScore(x) {
    let total = 0; // сумма оценок по предмету
    for (let i = 0; x.length > i; i++) { //цикл для заполнения переменной c суммой оценок по предмету 
      total += x[i];
    }
    return total / x.length; // возвращает среднее значение массива
  }