const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
 
   function repOne(st ='', c, sep = "|") {
     let nst = st;
     for (let i = 1; i < c; i++) {
       
       nst = nst + sep + st;
     }
     return nst;
   }
 
   function repTwo(st, c, sep = "+") {
     let nst = st;
     for (let i = 1; i < c; i++) {
       
       nst = nst + sep + st;
     }
     return nst;
   }
   let subStr = '';
   if (options) {
     subStr = repOne(options.addition, options.additionRepeatTimes, options.additionSeparator);
   }
   let newStr = str + subStr;
   return repTwo(newStr, options.repeatTimes, options.separator);
 }

module.exports = {
  repeater
};
