import { ElementType } from "../models/ElementType";

export class InitElementView {
    private htmlElement: HTMLElement;

    constructor(type: ElementType) {
        this.htmlElement = document.createElement("div");
        this.htmlElement.style.backgroundImage = `url(${type.shape.getUrl()})`;
        this.htmlElement.style.backgroundSize = "cover";
        this.htmlElement.style.width = `${type.shape.getWidth()}px`;
        this.htmlElement.style.height = `${type.shape.getHeight()}px`;
        this.htmlElement.style.position = "absolute";
        this.htmlElement.style.borderRadius = `${type.shape.getBorderRadius()}%`;
        this.htmlElement.style.backgroundColor = `${type.shape.getColor()}`;
    }

    public getElement(): HTMLElement {
        return this.htmlElement;
    }
}
