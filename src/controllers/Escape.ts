import { ElementType } from "../models/ElementType";
import { RandomNumber, WindowSize } from "../utils/Utils";
import { Shape } from "../models/Shape";
import { Circle } from "../models/Shape";
import { Game } from "../views/Game";

export class Escape extends ElementType {
    speed: number;
    size: number;
    shape: Shape;
    constructor() {
        super();
        this.speed = RandomNumber.getRandomSpeed();
        this.size = RandomNumber.getRandomSize();
        this.shape = new Circle(this.size);
    }
    public move(x: number, y: number): void {
        const position = this.getElementPosition();

        x = Math.round(x);
        y = Math.round(y);

        let x_Adder = 1;
        let y_Adder = 1;

        const { width, height } = new WindowSize().getWindowSize();
        if ((position.x >= width && x <= width) || (position.x <= 0 && x > 0)) {
            x_Adder = 0;
        }
        if (
            (position.y >= height && y <= height) ||
            (position.y <= 0 && y > 0)
        ) {
            y_Adder = 0;
        }

        if (
            x >= position.x &&
            x <= position.x + this.shape.getWidth() &&
            y >= position.y &&
            y <= position.y + this.shape.getHeight()
        ) {
            this.onHitTarget();
            return;
        }
        if (x > position.x && y > position.y) {
            this.setElementPosition(position.x - x_Adder, position.y - y_Adder);
        } else if (x < position.x && y > position.y) {
            this.setElementPosition(position.x + x_Adder, position.y - y_Adder);
        } else if (x > position.x && y < position.y) {
            this.setElementPosition(position.x - x_Adder, position.y + y_Adder);
        } else if (x < position.x && y < position.y) {
            this.setElementPosition(position.x + x_Adder, position.y + y_Adder);
        } else if (x > position.x) {
            this.setElementPosition(position.x - x_Adder, position.y);
        } else if (x < position.x) {
            this.setElementPosition(position.x + x_Adder, position.y);
        } else if (y > position.y) {
            this.setElementPosition(position.x, position.y - y_Adder);
        } else if (y < position.y) {
            this.setElementPosition(position.x, position.y + y_Adder);
        }
    }
    protected onHitTarget() {
        const { width, height } = new WindowSize().getWindowSize();

        this.setElementPosition(
            RandomNumber.getRandomDirection(width),
            RandomNumber.getRandomDirection(height)
        );
        let game = Game.gameInstance();
        game.score = game.score + 5;
    }
}
