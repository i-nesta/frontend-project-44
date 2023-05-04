#!/usr/bin/env node
import { funcWelcom, getRandomNumber } from '../../src/cli.js';
import baseGame from '../../src/index.js';

const name = funcWelcom();

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
let question;
const questionFunc = () => {
  question = getRandomNumber(100, 1);
  return question;
};
const correctAnswer = () => {
  let result;
  if (question % 2 === 0) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return result;
};

function funcCheck(userAnswer) {
  const trueAns = correctAnswer();
  let result;

  if (userAnswer === trueAns) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

baseGame(condition, questionFunc, funcCheck, correctAnswer, name);
