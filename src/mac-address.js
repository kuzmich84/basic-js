const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
 function isMAC48Address(n) {
  
  if(n.length>17) {
    return false;
  }
  
  const nArr = n.split('-');
  
  const newArr=[]
  
  for(let i=0; i<nArr.length; i++) {
    newArr.push(nArr[i].split(''))
  }

  
  let isHex = true;
  
  for(let i=0; i<newArr.length; i++){
    for(let j=0; j<2; j++){
      if(isNaN(parseInt(newArr[i][j], 16))) {
          isHex = false;
          break;
      }
    }
  }
  
  return isHex;
  
 }
module.exports = {
  isMAC48Address
};
