export interface IFighter {
    name: string;
    power: number;
    health: number;
    hit: (enemy: IFighter, point: number) => number;
    restoreHealth: () => void;
}
export interface IImprovedFighter extends IFighter {
    doubleHit: (enemy: IFighter, point: number) => number;
}

export class Fighter implements IFighter {
    name: string;
    power: number;
    health: number;
    fullHealth: number;

    constructor(name, power = 20, health = 200) {
        this.name = name;
        this.power = power;
        this.health = health;
        this.fullHealth = health;
    }

    hit(enemy: Fighter | ImprovedFighter, point): number {
        let damage = point * this.power;
        enemy.setDamage(damage, this);
        return enemy.health;
    }

    restoreHealth() {
        this.health = this.fullHealth;
    }

    setDamage(damage, enemy: Fighter | ImprovedFighter) {
        this.health -= damage;
        console.log(`${enemy.name} hits ${this.name} with ${damage} points of damage. His health after hit = ${this.health}`);
    }
}
;

export class ImprovedFighter extends Fighter implements IImprovedFighter {
    doubleHit(enemy, point) {
        let newPoint = point * 2;
        super.hit(enemy, newPoint);
        return enemy.health;
    }
}
;