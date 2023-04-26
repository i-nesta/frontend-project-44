import { funcWelcom, getRandomNumber } from '../../src/cli.js';
import baseGame from '../../src/index.js';

const name = funcWelcom();

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
let question;
const questionFunc = () => {
  question = getRandomNumber();
  return question;
};
function funcCheck(userAnswer) {
  let result;
  if (question % 2 === 0) {
    if (userAnswer === 'yes') {
      result = true;
    } else {
      result = false;
    }
  } else if (userAnswer % 2 !== 0) {
    if (userAnswer === 'no') {
      result = true;
    } else {
      result = false;
    }
  }
  return result;
}

baseGame(condition, questionFunc, funcCheck, name);
