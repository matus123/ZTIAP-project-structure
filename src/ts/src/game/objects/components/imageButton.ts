import { BaseObject } from "../baseObject";

export class ImageButton extends BaseObject {
    constructor(
        x: number,
        y: number,
        width: number,
        height: number,
        protected image: HTMLImageElement,
    ) {
        super(x, y, width, height);
    }

    public render(ctx: CanvasRenderingContext2D) {
        const {image, x, y, width, height} = this;

        ctx.drawImage(image, x, y, width, height);
    }
}