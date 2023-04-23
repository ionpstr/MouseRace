import { ElementType } from "../models/ElementType";
import { Direction, RandomNumber, WindowSize } from "../utils/Utils";
import { Shape } from "../models/Shape";
import { Rectangle } from "../models/Shape";
import { Game } from "../views/Game";

export class Random extends ElementType {
    speed: number;
    size: number;
    shape: Shape;
    direction: Direction = new Direction(
        RandomNumber.getRandomDirection(500),
        RandomNumber.getRandomDirection(500)
    );
    constructor() {
        super();
        this.speed = RandomNumber.getRandomSpeed();
        this.size = RandomNumber.getRandomSize();
        this.shape = new Rectangle(this.size);
    }
    public move(x: number, y: number): void {
        const position = this.getElementPosition();

        const { width, height } = new WindowSize().getWindowSize();
        if (
            position.x >= width ||
            position.y >= height ||
            position.x <= 0 ||
            position.y <= 0
        ) {
            this.direction.x = RandomNumber.getRandomDirection(width);
            this.direction.y = RandomNumber.getRandomDirection(height);
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
        if (this.direction.x > position.x && this.direction.y > position.y) {
            this.setElementPosition(++position.x, ++position.y);
            this.direction.x = ++this.direction.x;
            this.direction.y = ++this.direction.y;
        } else if (
            this.direction.x < position.x &&
            this.direction.y > position.y
        ) {
            this.setElementPosition(--position.x, ++position.y);
            this.direction.x = --this.direction.x;
            this.direction.y = ++this.direction.y;
        } else if (
            this.direction.x > position.x &&
            this.direction.y < position.y
        ) {
            this.setElementPosition(++position.x, --position.y);
            this.direction.x = ++this.direction.x;
            this.direction.y = --this.direction.y;
        } else if (
            this.direction.x < position.x &&
            this.direction.y < position.y
        ) {
            this.setElementPosition(--position.x, --position.y);
            this.direction.x = --this.direction.x;
            this.direction.y = --this.direction.y;
        } else if (this.direction.x > position.x) {
            this.setElementPosition(++position.x, position.y);
            this.direction.x = ++this.direction.x;
        } else if (this.direction.x < position.x) {
            this.setElementPosition(--position.x, position.y);
            this.direction.x = --this.direction.x;
        } else if (this.direction.y > position.y) {
            this.setElementPosition(position.x, ++position.y);
            this.direction.y = ++this.direction.y;
        } else if (this.direction.y < position.y) {
            this.setElementPosition(position.x, --position.y);
            this.direction.y = --this.direction.y;
        }
    }
    protected onHitTarget() {
        let game = Game.gameInstance();
        game.gameOver();
    }
}
