import { Fighter, ImprovedFighter, IFighter } from './fighter';
import { getRandomInt } from './randomInt';

export class Fight {
    fighter: Fighter;
    improvedFighter: ImprovedFighter;
    continue: boolean;
    round: number = 0;

    constructor(fighter, improvedFighter) {
        this.fighter = fighter;
        this.improvedFighter = improvedFighter;
    }

    fighting(point: number[]) {
        let currentFighter: Fighter | ImprovedFighter;
        let pointID = getRandomInt(0, point.length);
        let currentPoint = point[pointID];
        let enemyHealth: number;

        if (this.round % 2 === 0) {
            currentFighter = this.fighter;
            enemyHealth = this.fighter.hit(this.improvedFighter, currentPoint);
        } else {
            currentFighter = this.improvedFighter;
            enemyHealth = this.improvedFighter.doubleHit(this.fighter, currentPoint);
        }
        if (enemyHealth <= 0) {
            let winner = currentFighter;
            console.log(`${currentFighter.name} won at ${this.round} round`);
            this.continue = false;
            return true;
        } else {
            this.round++;
            this.fighting(point);
        }
    }
}