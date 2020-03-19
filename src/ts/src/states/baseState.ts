import { BaseObject } from "../game/objects/baseObject";

export class BaseState {
    protected objects: BaseObject[] = [];

    public render(ctx: CanvasRenderingContext2D) {
        this.objects.forEach(object => object.render(ctx));
    }

    public handleMouseEvent() {

    }

    public handleKeyEvent() {

    }
}