export class ScoreBoard {
    private element: HTMLElement;
    constructor() {
        this.element = document.createElement("h1");
    }
    public setScore(score: string) {
        this.element.innerHTML = score;
    }
    getScoreBoard() {
        return this.element;
    }
}
