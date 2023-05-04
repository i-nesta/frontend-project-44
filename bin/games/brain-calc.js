#!/usr/bin/env node
import { getRandomNumber, funcWelcom } from '../../src/cli.js';
import baseGame from '../../src/index.js';

const sign = ['+', '-', '*'];
function getRandomSingId() {
  const max = sign.length - 1;
  const min = 0;
  return Math.ceil(Math.random() * (max - min) + min);
}
const randomSign = () => {
  const result = sign.at(getRandomSingId());
  return result;
};
let a = 0;
let c = 0;
let b = '';

const mathExaUser = () => {
  a = getRandomNumber(10, 1);
  c = getRandomNumber(10, 1);
  b = randomSign();
  const result = `${a} ${b} ${c}`;
  return result;
};

const mathExamleResult = () => {
  let result = 0;
  if (b === '+') {
    result = a + c;
  } else if (b === '-') {
    result = a - c;
  } else {
    result = a * c;
  }
  return result;
};

const name = funcWelcom();

const condition = 'What is the result of the expression?';
function funcCheck(userAnswer) {
  const trueAnswer = mathExamleResult();
  let result;
  if (Number(userAnswer) === trueAnswer) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

baseGame(condition, mathExaUser, funcCheck, mathExamleResult, name);
