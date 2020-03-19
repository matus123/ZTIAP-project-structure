import { Game } from './game/game';

const game = new Game('myCanvas');

game.start()
.catch(err => console.error(err));

