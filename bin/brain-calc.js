function getRandomNumber() {
  const max = 100;
  const min = 1;
  return Math.ceil(Math.random() * (max - min) + min);
}

let sign = ['+', '-', '*', '/'];
function getRandomSingId() {
  const max = sign.length - 1;
  const min = 0;
  return Math.ceil(Math.random() * (max - min) + min);
}
const randomSign = () => {
  let result = sign.at(getRandomSingId());
  return result;
}
const a = getRandomNumber();
const c = getRandomNumber();
const b = randomSign();

const mathExaUser = () => {
  let result = `${getRandomNumber()}${randomSign()}${getRandomNumber()}`;
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

