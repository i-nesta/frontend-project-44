#!/usr/bin/env node
import baseGame from '../../src/index.js';
import { funcWelcom } from '../../src/cli.js';

const name = funcWelcom();

function getRandomNumber100() {
  const max = 100;
  const min = 1;
  return Math.ceil(Math.random() * (max - min) + min);
}
let a = 0;
let b = 0;

const condition = 'Find the greatest common divisor of given numbers.';

const question = () => {
  a = getRandomNumber100();
  b = getRandomNumber100();
  return `${a} ${b}`;
};

const findGcd = () => {
  let i = Math.max(a, b);
  let result = 1;
  for (; i > 1;) {
    if (a % i === 0 && b % i === 0) {
      result = i;
      break;
    } else {
      i -= 1;
    }
  }
  return result;
};
function funckCheck(userAnswer) {
  const trueAnswer = findGcd();
  let result;
  if (Number(userAnswer) === trueAnswer) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

baseGame(condition, question, funckCheck, findGcd, name);
