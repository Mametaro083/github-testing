const { token } = require('./config');
require('./study.js')

function randomMsg() {
  const random = Math.floor(Math.random() * (3 + 1 - 1)) + 1
  const messages = [
    {
      content: 'こんにちは',
      number: 1
    },
    {
      content: 'こんちゃ',
      number: 2
    },
    {
      content: 'Hello',
      number: 3
    }
  ];
  const msg = messages.find(element => element.number === random);
  return msg.content;
};   
console.log(randomMsg());