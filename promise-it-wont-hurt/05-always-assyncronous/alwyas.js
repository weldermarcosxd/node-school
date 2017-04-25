'use strict';

require('es6-promise');

var promisse = new Promise((fulfill, reject) => {
    fulfill("PROMISE VALUE");
});

promisse.then(console.log);

console.log("MAIN PROGRAM");
