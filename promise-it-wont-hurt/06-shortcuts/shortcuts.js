'use strict';

require('es6-promise');

var promisse2 = Promise.resolve("RESOLVED");

var promisse3 = Promise.reject(new Error("REJECTD"));

promisse3.catch(err => {
    console.log(err.message);
});