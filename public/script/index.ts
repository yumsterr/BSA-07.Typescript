import { Fight } from './classes/fight';
import { Fighter, ImprovedFighter } from './classes/fighter';
import { getRandomInt } from './randomInt';
import './../style/style.css';

let getPointNums = ():number[] => {
    let points = pointInput.value;
    points = points.replace(' ', '');
    const pointsArr = points.split(',');
    let pointsNum: number[] = [];
    pointsArr.forEach(function (point) {
        if (point.length && parseInt(point)) {
            pointsNum.push(parseInt(point));
        }
    });
    return pointsNum;
}

// let battleLog = document.querySelector('.battle-log');

let marvelTeam = ['Captain America', 'Irpn Man', 'Thor', 'Hulk', 'Spider-Man'];
let dcTeam = ['Superman', 'Batman', 'Wonder Woman', 'Green Lantern', 'Nightwing', 'Flash'];

let heroID = getRandomInt(0, marvelTeam.length);
let marvelHero = marvelTeam[heroID];

heroID = getRandomInt(0, dcTeam.length);
let dcHero = dcTeam[heroID];

let dcFighter = new Fighter(dcHero, 20, 500);
let marvelFighter = new ImprovedFighter(marvelHero, 15, 750);

const marvelVSdc = new Fight(dcFighter, marvelFighter);

const pointInput = document.querySelector('input#points') as HTMLInputElement;
const startFighting = document.querySelector('button#start') as HTMLInputElement;
startFighting.addEventListener('click', function () {

    dcFighter.restoreHealth();
    marvelFighter.restoreHealth();

    const pointsNum = getPointNums();
    if (pointsNum.length > 0) {
        marvelVSdc.fighting(pointsNum);
    } else {
        pointInput.classList.add('error');
    }
});
pointInput.addEventListener('change', function(){
    if(this.classList.contains('error')){
        this.classList.remove('error');
    }
});
