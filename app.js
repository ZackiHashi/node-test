
const _ = require('lodash');


const arr = [1,[2,[3,[4]]]];

const fltarr = _.flattenDeep(arr); 

console.log(fltarr);