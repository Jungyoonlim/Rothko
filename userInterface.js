// Importing necessary modules
import { AI } from './ai.js';
import { DynamicCanvas } from './canvas.js';

export class UserInterface {
    constructor(controlsElement) {
        this.controlsElement = controlsElement;
        this.ai = new AI();
        this.dynamicCanvas = new DynamicCanvas(document.getElementById('canvas'));
    }

    start() {
        this.createControls();
    }

    createControls() {
        // Create color picker control
        let colorPicker = document.createElement('input');
        colorPicker.type = 'color';
        colorPicker.addEventListener('change', this.handleColorChange.bind(this));
        this.controlsElement.appendChild(colorPicker);

        // Create brush size control
        let brushSize = document.createElement('input');
        brushSize.type = 'range';
        brushSize.min = '1';
        brushSize.max = '100';
        brushSize.addEventListener('change', this.handleBrushSizeChange.bind(this));
        this.controlsElement.appendChild(brushSize);

        // Create AI suggestion button
        let aiSuggestionButton = document.createElement('button');
        aiSuggestionButton.textContent = 'Get AI Suggestion';
        aiSuggestionButton.addEventListener('click', this.handleAISuggestion.bind(this));
        this.controlsElement.appendChild(aiSuggestionButton);
    }

    handleColorChange(event) {
        this.dynamicCanvas.context.strokeStyle = event.target.value;
    }

    handleBrushSizeChange(event) {
        this.dynamicCanvas.context.lineWidth = event.target.value;
    }

    handleAISuggestion() {
        let suggestion = this.ai.getSuggestion();
        alert(`AI Suggestion: ${suggestion}`);
    }
}
