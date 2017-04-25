'use strict';

require('es6-promise');

var promisse = new Promise(function(fulfill, reject){
    setTimeout(() => {
        reject(new Error("REJECTED!"));
    }, 300);
});

function onReject(error){
    console.log(error.message);
}

promisse
    .then(console.log, onReject);