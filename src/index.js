import readline from 'readline-sync';

const askName = () => {
  const name = readline.question('\nMay I have your name? ');
  return `Hello, ${name}!`;
};

export default askName;
