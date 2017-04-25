 let userArray = process.argv.slice(2);

 var person = {};

 [ ,person.username, person.email] = userArray;

 console.log(person);