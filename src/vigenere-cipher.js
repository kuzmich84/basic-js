const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect; 
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let cipherText = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message[i];

      if (char.match(/[A-Z]/)) {
        const shift = key[keyIndex % key.length].charCodeAt(0) - 65;
        const cipherChar = String.fromCharCode(((char.charCodeAt(0) - 65 + shift) % 26) + 65);
        cipherText += cipherChar;

        keyIndex++;
      } else {
        cipherText += char; 
      }
    }

    return this.isDirect ? cipherText : cipherText.split('').reverse().join('');
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let plainText = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message[i];

      if (char.match(/[A-Z]/)) {
        const shift = key[keyIndex % key.length].charCodeAt(0) - 65;
        const plainChar = String.fromCharCode(((char.charCodeAt(0) - 65 - shift + 26) % 26) + 65);
        plainText += plainChar;

        keyIndex++;
      } else {
        plainText += char; 
      }
    }

    return this.isDirect ? plainText : plainText.split('').reverse().join('');
  }
}


module.exports = {
  VigenereCipheringMachine
};
