export interface IFighter {
    name: string;
    power: number;
    health: number;
    hit: (enemy: Fighter, point: number) => void;
}

export class Fighter implements IFighter{
    name:string;
    power:number;
    health:number;

    constructor(name, power = 20, health = 200) {
        this.name = name;
        this.power = power;
        this.health = health;
    }

    hit(enemy, point) {
        let damage = point * this.power;
        enemy._setDamage(damage, this);
        return enemy.health;
    }

    private _setDamage(damage, enemy) {
        this.health -= damage;
        console.log(`${enemy.name} hits ${this.name} with ${damage} points of damage. His health after hit = ${this.health}`);

    }
}
;

export class ImprovedFighter extends Fighter {
    doubleHit(enemy, point) {
        let newPoint = point * 2;
        super.hit(enemy, newPoint);
        return enemy.health;
    }
}
;