'use strict';

require('es6-promise');

var promisse = new Promise(function(fulfill, reject) {
    setTimeout(() => {
        fulfill("FULFILLED!");
    }, 300)
});

promisse.then(console.log);