const os = require('os');
// info about current user

const user = os.userInfo();
console.log(user);


// mthed retiurns systens uptime in seconds

console.log(`system uptime is ${os.uptime}`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totakMEm: os.totalmem(),
    freeMem: os.freemem()
};

console.log(currentOS);