"use strict"

//Задание №1:
class Weapon {
    constructor(name, attack, initDurability, range, currentDurability) {
    this.name = name;
    this.attack = attack; // урон оружия
    this.currentDurability = currentDurability; // текущая прочность оружия
    this.range = range;
    this.initDurability = initDurability;  // начальная прочность оружия
    }

    takeDamage(damage) {
        this.currentDurability = this.initDurability - damage; // прочность после нанесения урона
        
        if (this.currentDurability < 0) {
            this.currentDurability = 0;
            return this.currentDurability;
        } else {
            return this.currentDurability;
        }
    }

    getDamage() { 
        if (this.currentDurability === 0) {
            return 0;
        }
        else if ((this.currentDurability / this.initDurability) * 100 >= 30) {
            return this.attack;
        } else {
            return this.attack / 2;
        }
    }

    isBroken() {
        return this.currentDurability === 0;
      }
    
}

/*
const arm = new Weapon('Рука', 1, Infinity, 1);
const bow = new Weapon('Лук', 10, 200, 3);
const sword = new Weapon('Меч', 25, 500, 1);
const knife = new Weapon('Нож', 5, 300, 1);
const staff = new Weapon('Посох', 8, 300, 2);
const longBow = new Weapon('Длинный лук', 15, bow.initDurability, 4);
const axe = new Weapon('Секира', 27, 800, sword.range);
const stormStaff = new Weapon('Посох бури', 10, staff.initDurability, 3);
longBow.takeDamage(195);
console.log(longBow.currentDurability);
console.log(longBow.getDamage());
console.log(longBow.isBroken());  
*/

// Задание №2:

class Arm extends Weapon {
     name = 'Рука';
     attack = 1;
     initDurability = Infinity;
     range = 1;
    
}

class Bow extends Weapon {
     name = 'Лук';
     attack = 10;
     initDurability = 200;
     range = 3;
}

class Sword extends Weapon {
    name = 'Меч';
    attack = 25;
    initDurability = 500;
    range = 1;
}

class Knife extends Weapon {
     name = 'Нож';
     attack = 5;
     initDurability = 300;
     range = 1;
}

class Staff extends Weapon {
     name = 'Посох';
     attack = 8;
     initDurability = 300;
     range = 2;
}

class LongBow extends Bow {
     name = 'Длинный Лук';
     attack = 15;
     range = 4;
}

class Axe extends Sword {
     name = 'Секира';
     attack = 27;
     currentDurability = 800;
}

class StormStaff extends Staff {
     name = 'Секира';
     attack = 10;
     range = 3;
}

const arm = new Arm();
const bow = new Bow();
const sword = new Sword();
const knife = new Knife();
const staff = new Staff();

const longBow = new LongBow();
const axe = new Axe();
const stormStaff = new StormStaff();

longBow.takeDamage(190);
console.log(longBow.currentDurability);
console.log(longBow.getDamage());
console.log(longBow.isBroken()); 
console.log(longBow.name);