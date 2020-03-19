import { StateManager } from "../states/stateManager";

// const COLORS = ['black', 'yellow', 'blue', 'red'];

// function getRandomColor(currentColor: string): string {
//     const num = Math.floor(Math.random() * (COLORS.length - 1 - 0 + 1) + 0);

//     const color = COLORS[num];

//     if (color !== currentColor) {
//         return color;
//     }
//     return getRandomColor(currentColor);
// }

export class Game {
    protected canvas: HTMLCanvasElement;
    protected ctx: CanvasRenderingContext2D;
    protected stateManager = new StateManager();

    constructor(protected canvasId: string) {
        this.canvas = document.getElementById(this.canvasId) as HTMLCanvasElement;
        const ctx = this.canvas.getContext('2d');

        if (!ctx) {
            throw new Error('Could not get canvas context');
        }
        
        this.ctx = ctx;
    }

    public async start() {
        try {
            await this.stateManager.init();
        } catch (err) {
            throw err;
        }

        this.initialize();
        this.renderLoop();
    };

    private initialize() {
        
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.canvas.addEventListener('keydown', (ev) => {
            if (ev.key === 'g') {
                this.stateManager.changeState('gameState');
            }
            if (ev.key === 's') {
                this.stateManager.changeState('splashScreenState');
            }
        }, true);

        this.canvas.addEventListener('mousemove', (ev) => {
            // // this.box.x = ev.offsetX;
            // // this.box.y = ev.offsetY;

            // this.box.x = ev.offsetX - this.box.size / 2;
            // this.box.y = ev.offsetY - this.box.size / 2;
        });
    };

    private clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    private render() {
        this.clear();
        this.stateManager.render(this.ctx);
    }

    private update() {

    }

    private renderLoop() {
        requestAnimationFrame(() => {
            this.update();
            this.render();
            this.renderLoop();
        })
    }
}