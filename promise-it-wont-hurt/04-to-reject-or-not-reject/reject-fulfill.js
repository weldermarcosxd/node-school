'use strict';

require('es6-promise');

var promisse = new Promise(function(fulfill, reject){

    fulfill("I FIRED");
    reject(new Error("I DID NOT FIRED"));

});

function onReject(err) {
    console.log(err.message);
}

promisse.then(console.log, onReject);