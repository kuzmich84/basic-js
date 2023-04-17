const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const newArr = new Array([]);

  for(let i = 0; i < matrix.length; i++){
          newArr.push([]);
      };
  
  for (let i=0; i< matrix.length; i++) {
    for (let j=0; j< matrix[i].length; j++) {
     newArr[j].push(matrix[i][j])
    }
  }
  
  let count=0;

  for (let i=0; i< newArr.length; i++) {
    for (let j=0; j< newArr[i].length; j++) {
     if(newArr[i][j-1] === 0) {
      continue;
    }
    
    count += newArr[i][j];
    }
  } 

  return count;
}

module.exports = {
  getMatrixElementsSum
};
