import { ArrowPosition } from "./utils/Utils";
import { Chase } from "./controllers/Chase";
import { Random } from "./controllers/Random";
import { Escape } from "./controllers/Escape";
import { Game } from "./views/Game";
import { ScoreBoard } from "./views/ScoreBoard";
import { ElementType } from "./models/ElementType";
import { InitElementView } from "./views/InitElementView";

class Main {
    number = 10;
    mouse = new ArrowPosition();
    game = Game.gameInstance();
    scoreboard = new ScoreBoard();

    start() {
        let scoreElement = this.scoreboard.getScoreBoard();
        this.game.startScore(scoreElement);

        document.getElementById("game")?.appendChild(scoreElement);

        for (let i = 0; i < this.number; ++i) {
            const chase = new Chase();
            const escape = new Escape();
            const random = new Random();

            const elementChase = new InitElementView(chase).getElement();
            const elementEscape = new InitElementView(escape).getElement();
            const elementRandom = new InitElementView(random).getElement();

            document.getElementById("game")?.appendChild(elementChase);
            document.getElementById("game")?.appendChild(elementEscape);
            document.getElementById("game")?.appendChild(elementRandom);

            this.startElement(chase, elementChase);
            this.startElement(escape, elementEscape);
            this.startElement(random, elementRandom);
        }
    }

    changeMousePosition(event: any) {
        this.mouse.setArrowPosition(event.clientX, event.clientY);
    }

    startElement(type: ElementType, element: HTMLElement) {
        setInterval(() => {
            type.move(
                this.mouse.getArrowPosition().x,
                this.mouse.getArrowPosition().y
            );
            element.style.left = `${type.getElementPosition().x}px`;
            element.style.top = `${type.getElementPosition().y}px`;
        }, type.speed);
    }
}

const game = new Main();

window.addEventListener("mousemove", (event) => changePosition(event));
document
    .getElementById("button")
    ?.addEventListener("click", () => handleButton("game", "button"));

function handleButton(nameOfGame: string, button: string) {
    let gameElement: HTMLElement = <HTMLElement>(
        document.getElementById(nameOfGame)
    );
    let buttonElement: HTMLElement = <HTMLElement>(
        document.getElementById(button)
    );

    gameElement.style.display = "block";
    buttonElement.style.display = "none";

    game.start();
}

function changePosition(event: any) {
    game.changeMousePosition(event);
}
