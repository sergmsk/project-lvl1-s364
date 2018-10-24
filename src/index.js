import readline from 'readline-sync';

export default () => {
  const name = readline.question('\nMay I have your name? ');
  return `Hello, ${name}!`;
};
