import pkg1 from './environmentalAdaptation.js';
const { EnvironmentalAdaptation } = pkg1; 

import pkg2 from './canvas.js';
const { DynamicCanvas } = pkg2;

import pkg3 from './ai.js';
const { AI } = pkg3; 

import pkg4 from './patternRecognition.js';
const { PatternRecognition } = pkg4;

import pkg5 from './userInterface.js';
const { UserInterface } = pkg5;

import pkg6 from './main.js';
const { Main } = pkg6;

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
