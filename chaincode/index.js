'use strict';

const EHR = require('./lib/hoscert_contract');

console.log(EHR)
//NOTE: Estore was changed to Educert.
//Todo: During chaincode invocation, each chaincode is given a name. Find out where that name originates from. 
module.exports.EHR = EHR;
module.exports.contracts = [ EHR ];
