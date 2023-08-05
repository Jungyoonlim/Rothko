// Importing necessary modules
import { AI } from './ai.js';

export class DynamicCanvas {
    constructor(canvasElement) {
        this.canvasElement = canvasElement;
        this.context = this.canvasElement.getContext('2d');
        this.ai = new AI();
    }

    start() {
        this.canvasElement.addEventListener('mousedown', this.handleMouseDown.bind(this));
        this.canvasElement.addEventListener('mousemove', this.handleMouseMove.bind(this));
        this.canvasElement.addEventListener('mouseup', this.handleMouseUp.bind(this));
    }

    handleMouseDown(event) {
        this.drawing = true;
        this.lastPoint = this.getMousePosition(event);
    }

    handleMouseMove(event) {
        if (!this.drawing) return;
        let currentPoint = this.getMousePosition(event);
        this.draw(this.lastPoint, currentPoint);
        this.lastPoint = currentPoint;
    }

    handleMouseUp() {
        this.drawing = false;
        this.ai.analyze(this.context);
    }

    getMousePosition(event) {
        let rect = this.canvasElement.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    }

    draw(start, end) {
        this.context.beginPath();
        this.context.moveTo(start.x, start.y);
        this.context.lineTo(end.x, end.y);
        this.context.stroke();
    }
}
