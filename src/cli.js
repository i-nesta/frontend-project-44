import readlineSync from 'readline-sync';

const funcWelcom = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have yore name? ');
  console.log(`Hello, ${name}`);
  return name;
};
export default funcWelcom;
