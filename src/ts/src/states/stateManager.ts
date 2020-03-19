import { SplashScreenState } from "./splashScreenState";
import { GameState } from "./gameState";
import { resourceManager } from "../resources/resourceManager";

export class StateManager {
    private states: any = {};
    private currentState: any;

    public async init() {
        await resourceManager.loadAssets();
        this.states = {
            splashScreenState: new SplashScreenState(),
            gameState: new GameState(),
        };
        this.currentState = this.states.splashScreenState;
    }

    public changeState(state: string) {
        const newState = this.states[state];
        if (!newState) {
            throw new Error(`State '${state}' not found`)
        }
        this.currentState = newState;
    }

    public render(ctx: CanvasRenderingContext2D) {
        this.currentState.render(ctx);
    }
}