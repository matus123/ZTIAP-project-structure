import { BaseState } from "./baseState";
import { ImageButton } from "../game/objects/components/imageButton";
import { resourceManager } from "../resources/resourceManager";

export class SplashScreenState extends BaseState {
    constructor() {
        super();
        this.objects = [
            new ImageButton(10, 10, 20, 20, resourceManager.getImage('gold')),
            new ImageButton(100, 50, 50, 50, resourceManager.getImage('player')),
        ];
    }
}