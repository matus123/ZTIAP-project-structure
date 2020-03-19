export class BaseObject {
    protected x: number;
    protected y: number;
    protected width: number;
    protected height: number;

    constructor(
        x: number, 
        y: number,
        width: number,
        height: number,
    ) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    public render(ctx: CanvasRenderingContext2D) {
        const {x, y, width, height} = this;
        ctx.fillRect(x, y, width, height);
        ctx.strokeRect(x, y, width, height);
    }
}