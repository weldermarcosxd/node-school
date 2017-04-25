var args = process.argv.slice(2);

var result = args.map(s => s[0]).reduce((sofar, s) => sofar + s);

console.log(`[${args}] becomes "${result}"`);