const fs = require('fs');
const jsc = require('jsverify'); //This for some reason throws an error and I have no idea why

eval(fs.readFileSync('code.js')+'');

const testSum =
    jsc.forall("array nat", function(arr) {
        return JSON.stringify(sum(arr)) == JSON.stringify(arr.reduce(function(a, b) { return a + b; }, 0));
    });

jsc.assert(testSum);
