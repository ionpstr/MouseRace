import { Shape } from "./Shape";
import { RandomNumber, WindowSize } from "../utils/Utils";

export abstract class ElementType {
    private x: number;
    private y: number;
    public shape: Shape;
    abstract speed: number;
    abstract size: number;
    constructor() {
        let { width, height } = new WindowSize().getWindowSize();
        this.x = RandomNumber.getRandomDirection(width);
        this.y = RandomNumber.getRandomDirection(height);
        this.shape = new Shape();
    }

    public getElementPosition(): { x: number; y: number } {
        return { x: this.x, y: this.y };
    }

    protected setElementPosition(x: number, y: number): void {
        this.x = x;
        this.y = y;
    }

    public abstract move(x: number, y: number): void;
    protected abstract onHitTarget(): void;
}
