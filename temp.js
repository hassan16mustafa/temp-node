const {readFileSync, writeFileSync, write} = require('fs');
// const fs = require('fs');

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

console.log(first);
console.log(second);

writeFileSync('./content/result-sync.txt', `here i sthe resukt : ${first} , ${second}`);