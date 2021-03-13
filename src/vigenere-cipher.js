const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

class VigenereCipheringMachine {
    constructor(isDirectMode) {
        this.isReversedMode = isDirectMode === false;
    }
    
    /**
     * @param {string} message
     * @param {string} key
     */
    encrypt(message, key) {
        if (!message || !key) {
            throw new Error('Both arguments required!');
        }
        message = message.toLowerCase();
        key = key.toLowerCase();
        
        let result = '';
        for (let i = 0, j = 0; i < message.length; i++) {
            if (abc.includes(message[i])) {
                result += abc[(abc.indexOf(message[i]) + abc.indexOf(key[j % key.length])) % abc.length];
                j++;
            } else {
                result += message[i];
            }
        }
        if (this.isReversedMode) {
            result = result.split('').reverse().join('');
        }
        return result.toUpperCase();
    }
    
    /**
     * @param {string} encryptedMessage
     * @param {string} key
     */
    decrypt(encryptedMessage, key) {
        if (!encryptedMessage || !key) {
            throw new Error('Both arguments required!');
        }
        encryptedMessage = encryptedMessage.toLowerCase();
        key = key.toLowerCase();
        
        let result = '';
        for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
            if (abc.includes(encryptedMessage[i])) {
                result += abc[(abc.indexOf(encryptedMessage[i]) - abc.indexOf(key[j % key.length]) + abc.length) % abc.length];
                j++;
            } else {
                result += encryptedMessage[i];
            }
        }
        if (this.isReversedMode) {
            result = result.split('').reverse().join('');
        }
        return result.toUpperCase();
    }
}

module.exports = VigenereCipheringMachine;
