function Player(name) {
    this.name = name;
    this.level = 1;
    this.points = 0;
}

Player.prototype.gainXp = function (points) {
    this.points = this.points + points;
    if (this.points >= 10) {
        this.level += 1;
        this.points -= 10;
    }
};

Player.prototype.describe = function () {
    console.log(`${this.name} is level ${this.level} with ${this.points} experience points`);
}

const ajay = new Player('Ajay');
console.log(ajay);

// Adding xp points >> Ajay
ajay.gainXp(5);
ajay.describe();
ajay.gainXp(5);
ajay.describe();

// Adding xp points >> Binoy
const binoy = new Player('Binoy');
console.log(binoy);
binoy.gainXp(5);
binoy.describe();