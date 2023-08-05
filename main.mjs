// Importing necessary modules
import { DynamicCanvas } from './canvas.mjs';
import { AI } from './ai.mjs';
import { PatternRecognition } from './patternRecognition.mjs';
import { EnvironmentalAdaptation } from './environmentalAdaptation.mjs';
import { UserInterface } from './userInterface.mjs';
import { JSDOM } from 'jsdom';

const dom = new JSDOM(`<!DOCTYPE html><body><canvas id="canvas"></canvas></body>`);
const document = dom.window.document;

const canvasElement = document.getElementById('canvas');
const dynamicCanvas = new DynamicCanvas(canvasElement);

// Initializing the AI
const ai = new AI();

// Initializing the pattern recognition
const patternRecognition = new PatternRecognition();

// Initializing the environmental adaptation
const environmentalAdaptation = new EnvironmentalAdaptation();

// Initializing the user interface
const controlsElement = document.getElementById('controls');
const userInterface = new UserInterface(controlsElement);

// Function to start the application
export function start() {
    // Start the dynamic canvas
    dynamicCanvas.start();

    // Start the AI
    ai.start();

    // Start the pattern recognition
    patternRecognition.start();

    // Start the environmental adaptation
    environmentalAdaptation.start();

    // Start the user interface
    userInterface.start();
}

// Start the application
start();
