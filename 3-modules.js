const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative');

console.log(data);
console.log(names);

sayHi(names.john);
sayHi(names.hassan);

require(`./7-mind`);