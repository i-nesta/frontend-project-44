import { getRandomNumber, funcWelcom } from '../../src/cli.js';
import baseGame from '../../src/index.js';

const sign = ['+', '-', '*', '/'];
function getRandomSingId() {
  const max = sign.length - 1;
  const min = 0;
  return Math.ceil(Math.random() * (max - min) + min);
}
const randomSign = () => {
  const result = sign.at(getRandomSingId());
  return result;
};
const a = getRandomNumber();
const c = getRandomNumber();
const b = randomSign();

const mathExaUser = () => {
  const result = `${a} ${b} ${c}`;
  return result;
};

const mathExamleResult = () => {
  let result = 0;
  if (b === '+') {
    result = a + c;
  } else if (b === '-') {
    result = a - c;
  } else if (b === '*') {
    result = a * c;
  } else {
    result = a / c;
  }
  return result;
};

const name = funcWelcom();

const condition = 'What is the result of the expression?';
let trueAnswer = mathExamleResult();
function funcCheck(userAnswer) {
  let result;
  if (Number(userAnswer) === trueAnswer) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

baseGame(condition, mathExaUser, funcCheck, name);