import { EnvironmentalAdaptation } from './environmentalAdaptation.mjs';
import { DynamicCanvas } from './canvas.mjs';
import { AI } from './ai.mjs';
import { PatternRecognition } from './patternRecognition.mjs';
import { UserInterface } from './userInterface.mjs';
import { Main } from './main.mjs';

// Create new instances
const environmentalAdaptation = new EnvironmentalAdaptation();
const canvas = new DynamicCanvas();
const ai = new AI();
const patternrecog = new PatternRecognition();
const UI = new UserInterface();
const main = new Main();

// Use the instances and log the results
console.log('Running adaptSuggestions from EnvironmentalAdaptation');
const result1 = environmentalAdaptation.adaptSuggestions();
console.log('Result from adaptSuggestions:', result1);

console.log('Running draw from DynamicCanvas');
canvas.draw();

console.log('Running start from AI');
ai.start();

console.log('Running recognize from PatternRecognition');
patternrecog.recognize();

console.log('Running update from UserInterface');
UI.update();

console.log('Running execute from Main');
main.execute();


// If your methods return values, you can log those
const result2 = environmentalAdaptation.adaptSuggestions();
console.log('Result from adaptSuggestions in EnvironmentalAdaptation:', result2);
