export class Game {
    id: string = "game";
    score: number = 0;
    static instance: Game;
    private constructor() {}
    public static gameInstance(): Game {
        if (!Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance;
    }
    startScore(elem: HTMLElement) {
        setInterval(() => {
            ++this.score;
            elem.innerHTML = `Score: ${this.score}`;
        }, 1000);
    }
    gameOver() {
        let el = <HTMLElement>document.getElementById(this.id);
        el.innerHTML =
            "<h1 style='font-size:50px;width:300px; margin:auto'>Game Over!</h1>";
    }
}
