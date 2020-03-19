import { ImageButton } from '../game/objects/components/imageButton';
import { resourceManager } from '../resources/resourceManager';
import { BaseState } from './baseState';

export class GameState extends BaseState {
    constructor() {
        super();
        this.objects = [
            new ImageButton(10, 10, 20, 20, resourceManager.getImage('gold')),
            new ImageButton(100, 100, 20, 20, resourceManager.getImage('gold')),
            new ImageButton(100, 50, 20, 20, resourceManager.getImage('gold')),
            new ImageButton(300, 300, 20, 20, resourceManager.getImage('gold')),
            new ImageButton(250, 250, 20, 20, resourceManager.getImage('gold')),
            new ImageButton(150, 150, 50, 50, resourceManager.getImage('player')),
        ];
    }
}