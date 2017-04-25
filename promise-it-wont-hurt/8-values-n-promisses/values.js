'use strict';

require('es6-promise');

function attachTitle(name) {
    return "DR. " + name;
}

Promise.resolve("MANHATTAN")
    .then(attachTitle)
    .then(console.log);