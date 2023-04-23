export class Shape {
    private imageURL: string = "";
    private width: number;
    private height: number;
    private borderRadius: number = 0;
    private color: string = "";
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    public getUrl() {
        return this.imageURL;
    }
    public getWidth() {
        return this.width;
    }
    public getHeight() {
        return this.height;
    }
    public getBorderRadius() {
        return this.borderRadius;
    }
    public getColor() {
        return this.color;
    }
    protected setShape(imageURL: string) {
        this.imageURL = imageURL;
    }
    protected setBorderRadius(s: number) {
        this.borderRadius = s;
    }
    protected setColor(s: string) {
        this.color = s;
    }
}

export class Square extends Shape {
    constructor(size: number) {
        super(size, size);
        this.setShape("/square.db3ff434.png");
        this.setColor("aquamarine");
    }
}

export class Rectangle extends Shape {
    constructor(size: number) {
        super(2 * size, size);
        this.setShape("/rectangle.065c7623.png");
        this.setColor("blue");
    }
}

export class Circle extends Shape {
    constructor(size: number) {
        super(size, size);
        this.setBorderRadius(50);
        this.setShape("/circle.c74be8b8.png");
        this.setColor("rose");
    }
}
