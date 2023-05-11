#!/usr/bin/env node
import { getRandomNumber, funcWelcom } from '../../src/cli.js';
import baseGame from '../../src/index.js';

const name = funcWelcom();

let number = 0;

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const question = () => {
  number = getRandomNumber(100, 2);
  return number;
};

const primeNumber = () => {
  let trueAnswer = '';
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      trueAnswer = 'no';
      break;
    } else {
      trueAnswer = 'yes';
    }
  }
  return trueAnswer;
};

function funckCheck(userAnswer) {
  let result;
  if (userAnswer === primeNumber()) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

baseGame(condition, question, funckCheck, primeNumber, name);
