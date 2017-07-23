import { Fight } from './fight';
import { Fighter, ImprovedFighter } from './fighter';
import { getRandomInt } from './randomInt';

let marvelTeam = ['Captain America', 'Irpn Man', 'Thor', 'Hulk', 'Spider-Man'];
let dcTeam = ['Superman', 'Batman', 'Wonder Woman', 'Green Lantern', 'Nightwing', 'Flash'];

let heroID = getRandomInt(0, marvelTeam.length);
let marvelHero = marvelTeam[heroID];

heroID = getRandomInt(0, dcTeam.length);
let dcHero = dcTeam[heroID];

let dcFighter = new Fighter(dcHero, 20, 500);
let marvelFighter = new ImprovedFighter(marvelHero, 15, 750);

const marvelVSdc = new Fight(dcFighter, marvelFighter);
console.log(dcFighter);
console.log(marvelFighter);
let winner = marvelVSdc.fighting([2, 1, 4, 2, 2, 1]);