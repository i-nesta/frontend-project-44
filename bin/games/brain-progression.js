#!/usr/bin/env node
import { getRandomNumber, funcWelcom } from '../../src/cli.js';
import baseGame from '../../src/index.js';

let arrBase = [getRandomNumber(10, 1)];

const progressions = () => {
  arrBase = [getRandomNumber(10, 1)];
  const randomStep = getRandomNumber(5, 2);
  for (let i = 0; i < 9; i += 1) {
    const y = arrBase[i] + randomStep;
    arrBase.push(y);
  }
  return arrBase;
};

let arrUser = [];

let trueAnswer = [];

const arrayQue = () => {
  arrUser = [];
  const shadow = getRandomNumber(9, 0);
  const r = '..';
  for (let i = 0; i < arrBase.length; i += 1) {
    if (i === shadow) {
      arrUser.push(r);
      trueAnswer = arrBase[i];
    } else {
      arrUser.push(arrBase[i]);
    }
  }
  return [arrUser, trueAnswer];
};

const questions = () => {
  progressions();
  arrayQue();
  const arrayQuestions = arrUser.join(', ');
  return arrayQuestions;
};

function trueaNs() {
  return Number(trueAnswer);
}

const name = funcWelcom();
const condition = 'What number is missing in the progression?';
function funcCheck(userAnswer) {
  let result;
  if (trueaNs() === Number(userAnswer)) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

baseGame(condition, questions, funcCheck, trueaNs, name);
