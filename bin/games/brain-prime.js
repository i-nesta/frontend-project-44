import { getRandomNumber, funcWelcom } from "../../src/cli.js";
import baseGame from "../../src/index.js";

const name = funcWelcom();

let number = 0;

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const question = () => {
  number = getRandomNumber(100, 2);
  return number;
};

const primeNumber = () => {
  let result = '';
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      result = 'no';
      break;
    } else {
      result = 'yes';
    }
  }
  return result;
}
console.log (question())
console.log (primeNumber())