"use strict"

//Задание №1:
class Weapon {
    constructor(name, attack, durability, range, durability2 = 0) {
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.range = range;
    this.durability2 = durability2; // прочность после нанесения урона
    }

    takeDamage(damage) {
        this.durability2 = this.durability - damage;
        if (this.durability2 < 0) {
            this.durability2 = 0;
            return this.durability2;
        } else {
            return this.durability2;
        }
    }

    getDamage() { 
        if (this.durability2 === 0) {
            return 0;
        }
        else if ((this.durability2 / this.durability) * 100 >= 30) {
            return this.attack;
        } else {
            return this.attack / 2;
        }
    }

    isBroken() {
        let x;
     this.durability2 === 0 ? x = true : x = false;
     return x;
      }
    
}

/*
const arm = new Weapon('Рука', 1, Infinity, 1,);
const bow = new Weapon('Лук', 10, 200, 3);
const sword = new Weapon('Меч', 25, 500, 1);
const knife = new Weapon('Нож', 5, 300, 1);
const staff = new Weapon('Посох', 8, 300, 2);


const longBow = new Weapon('Длинный лук', 15, bow.durability, 4);
const axe = new Weapon('Секира', 27, 800, sword.range);
const stormStaff = new Weapon('Посох бури', 10, staff.durability, 3);


longBow.takeDamage(5);
console.log(longBow.durability2);
console.log(longBow.getDamage());
console.log(longBow.isBroken());  */

// Задание №2:

class Arm extends Weapon {
    constructor(name, attack, durability, range, durability2 = 0) {
        super (name, attack, durability, range, durability2 = 0)
     this.name = 'Рука';
     this.attack = 1;
     this.durability = Infinity;
     this.range = 1;
     this.durability2 = durability2;
    }
}

class Bow extends Weapon {
    constructor(name, attack, durability, range, durability2 = 0) {
        super (name, attack, durability, range, durability2 = 0);
     this.name = 'Лук';
     this.attack = 10;
     this.durability = 200;
     this.range = 3;
     this.durability2 = durability2;
    }
}

class Sword extends Weapon {
    constructor(name, attack, durability, range, durability2 = 0) {
        super (name, attack, durability, range, durability2 = 0);
     this.name = 'Меч';
     this.attack = 25;
     this.durability = 500;
     this.range = 1;
     this.durability2 = durability2;
    }
}

class Knife extends Weapon {
    constructor(name, attack, durability, range, durability2 = 0) {
        super (name, attack, durability, range, durability2 = 0);
     this.name = 'Нож';
     this.attack = 5;
     this.durability = 300;
     this.range = 1;
     this.durability2 = durability2;
    }
}

class Staff extends Weapon {
    constructor(name, attack, durability, range, durability2 = 0) {
        super (name, attack, durability, range, durability2 = 0);
     this.name = 'Посох';
     this.attack = 8;
     this.durability = 300;
     this.range = 2;
     this.durability2 = durability2;
    }
}

class LongBow extends Weapon {
    constructor(name, attack, durability, range, durability2 = 0) {
        super (name, attack, durability, range, durability2 = 0);
     this.name = 'Длинный Лук';
     this.attack = 15;
     this.durability = bow.durability;
     this.range = 4;
     this.durability2 = durability2;
    }
}

class Axe extends Weapon {
    constructor(name, attack, durability, range, durability2 = 0) {
        super (name, attack, durability, range, durability2 = 0);
     this.name = 'Секира';
     this.attack = 27;
     this.durability = 800;
     this.range = sword.range;
     this.durability2 = durability2;
    }
}

class StormStaff extends Weapon {
    constructor(name, attack, durability, range, durability2 = 0) {
        super (name, attack, durability, range, durability2 = 0);
     this.name = 'Секира';
     this.attack = 10;
     this.durability = staff.durability;
     this.range = 3;
     this.durability2 = durability2;
    }
}

const arm = new Arm();
const bow = new Bow();
const sword = new Sword();
const knife = new Knife();
const staff = new Staff();

const longBow = new LongBow();
const axe = new Axe();
const stormStaff = new StormStaff();

longBow.takeDamage(5);
console.log(longBow.durability2);
console.log(longBow.getDamage());
console.log(longBow.isBroken()); 
console.log(longBow.name);


// Задание №3:










