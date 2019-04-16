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
        this.durabilityAfterHit = this.durability - damage; // прочность после нанесения урона
        if (this.durabilityAfterHit < 0) {
            this.durabilityAfterHit = 0;
            return this.durabilityAfterHit;
        } else {
            return this.durabilityAfterHit;
        }
    }

    getDamage() { 
        if (this.durabilityAfterHit === 0) {
            return 0;
        }
        else if ((this.durabilityAfterHit / this.durability) * 100 >= 30) {
            return this.attack;
        } else {
            return this.attack / 2;
        }
    }

    isBroken() {
        return this.durabilityAfterHit > 0 ? false : true;
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


longBow.takeDamage(195);
console.log(longBow.durabilityAfterHit);
console.log(longBow.getDamage());
console.log(longBow.isBroken());  
*/

// Задание №2:

class Arm extends Weapon {
     name = 'Рука';
     attack = 1;
     durability = Infinity;
     range = 1;
    
}

class Bow extends Weapon {
     name = 'Лук';
     attack = 10;
     durability = 200;
     range = 3;
}

class Sword extends Weapon {
    name = 'Меч';
    attack = 25;
    durability = 500;
    range = 1;
}

class Knife extends Weapon {
     name = 'Нож';
     attack = 5;
     durability = 300;
     range = 1;
}

class Staff extends Weapon {
     name = 'Посох';
     attack = 8;
     durability = 300;
     range = 2;
}

class LongBow extends Bow {
     name = 'Длинный Лук';
     attack = 15;
     //durability = bow.durability;
     range = 4;
}

class Axe extends Sword {
     name = 'Секира';
     attack = 27;
     durability = 800;
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
console.log(longBow.durabilityAfterHit);
console.log(longBow.getDamage());
console.log(longBow.isBroken()); 
console.log(longBow.name);