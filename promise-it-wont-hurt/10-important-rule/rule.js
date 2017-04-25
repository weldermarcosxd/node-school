function iterate(int){
    console.log(int);
    return ++int;
}

function alwaysThrows(){
    throw new Error("OH NOES");
}

Promise.resolve(iterate(1))
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(null, console.log);