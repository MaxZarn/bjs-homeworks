"use strict"

//Задание №1:
class Weapon {
    constructor(name, attack, durability, range) {
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.range = range;
    }

    takeDamage(damage) {
        this.durability = this.durability - damage;
        if (this.durability < 0) {
            this.durability = 0;
            return this.durability;
        } else {
            return this.durability;
        }
    }

    getDamage() { 
        if (this.durability === 0) {
            return 0;
        }
        else if ((this.durability / this.durability) * 100 >= 30) {
            return this.attack;
        } else {
            return this.attack / 2;
        }
    }

    isBroken() {
      if (this.durability === 0) {
        return true;
      } else {
        return false;
      }
    }
}

const arm = new Weapon('Рука', 1, Infinity, 1,);
const bow = new Weapon('Лук', 10, 200, 3);
const sword = new Weapon('Меч', 25, 500, 1);
const knife = new Weapon('Нож', 5, 300, 1);
const staff = new Weapon('Посох', 8, 300, 2);


class SuperWeapon extends Weapon {
    constructor(name, attack, durability, range) {
        super(name, attack, durability, range);
    }
}

const longBow = new SuperWeapon('Длинный лук', 15, bow.durability, 4);
const axe = new SuperWeapon('Секира', 27, 800, sword.durability);
const stormStaff = new SuperWeapon('Посох бури', 10, staff.durability, 3);


axe.takeDamage(5);
console.log(axe.durability);
console.log(axe.getDamage());
console.log(axe.isBroken());

// Задание №2:

class Arm {
    constructor() {
        this.name = 'Рука',
        this.attack = 1,
        this.durability = Infinity,
        this.range = 1
        }
}

class Bow extends Weapon {
    constructor() {
        this.name = 'Лук',
        this.attack = 10,
        this.durability = 200,
        this.range = 3
        }
}

class Sword extends Weapon {
    constructor() {
        this.name = 'Меч',
        this.attack = 25,
        this.durability = 500,
        this.range = 1
        }
}

class Knife extends Weapon {
    constructor() {
        this.name = 'Нож',
        this.attack = 5,
        this.durability = 300,
        this.range = 1
        }
}

class Staff extends Weapon {
constructor() {
    this.name = 'Посох',
    this.attack = 8,
    this.durability = 300,
    this.range = 2
    }
}

const arm = new Arm();
const bow = new Bow();
const sword = new Sword();
const knife = new Knife();
const staff = new Staff();










