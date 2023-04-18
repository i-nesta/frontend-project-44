#!/usr/bin/env node
import welcome from '../src/cli.js';
import mainGame from './brain-even.js';

console.log('Welcome to the Brain Games!');
const name = welcome();
console.log(`Hello, ${name}`);
mainGame(name);
