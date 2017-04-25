'use strict';

var http = require('q-io/http');

http.read("http://localhost:1337")
    .then(data => {
        console.log(JSON.parse(data))
    })
    .catch("Error reading data");