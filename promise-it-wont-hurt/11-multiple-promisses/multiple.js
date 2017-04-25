'use strict';

require('es6-promise');

function all(first, second){
    return new Promise((fulfill, reject) => {
        var counter = 0;
        var results = [];

        first
            .then(res => {
                results[0] = res;
                counter++;

                if(counter >= 2){
                    fulfill(results);
                }
            }).catch(console.log);

        
        second
            .then(res => {
                results[1] = res;
                counter++;

                if(counter >= 2){
                    fulfill(results);
                }
            })
            .catch(console.log);
    });
}

all(getPromise1(), getPromise2()).then(console.log).catch(new Error("Erro"));