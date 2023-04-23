export class RandomNumber {
    static getRandomSpeed() {
        return Math.round(Math.random() * 100 + 10);
    }
    static getRandomSize() {
        return Math.round(Math.random() * 70 + 30);
    }
    static getRandomDirection(s: number) {
        return Math.round(Math.random() * s);
    }
}

export class ArrowPosition {
    private x: number;
    private y: number;

    constructor() {
        this.x = 0;
        this.y = 0;
    }

    public getArrowPosition() {
        return { x: this.x, y: this.y };
    }

    public setArrowPosition(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

export class WindowSize {
    private width: number = window.innerWidth;
    private length: number = window.innerHeight;
    getWindowSize() {
        return { width: this.width - 200, height: this.length - 100 };
    }
}

export class Direction {
    public x: number = 0;
    public y: number = 0;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}
