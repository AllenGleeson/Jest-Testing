function capitalize(word){
    if(typeof word ===  'string'){
        if(word.trim().length === 0){
            return "Sorry you need to enter a string";
        }
        else{
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
    }
    else{
        return "Sorry you need to enter a string";
    }
}

class calculator{
    add(a, b){
        return a + b;
    }
    subtract(a, b){
        return a - b;
    }
    divide(a, b){
        return a / b;
    }
    multiply(a, b){
        return a * b;
    }
}

function reverseString(string){
    return string.split("").reverse().join("");
}

const generateCaesarCipher = (shift, plaintextAlphabet) => {
    const cipherAlphabet = plaintextAlphabet.map((_symbol, index) => {
        const newIndex = (index + shift) % plaintextAlphabet.length;
        return plaintextAlphabet[newIndex];
    });
  
    const makeTranslator = (sourceAlphabet, targetAlphabet) => (message) => {
      return message
        .toLowerCase()
        .split('')
        .map((symbol) => {
          const index = sourceAlphabet.indexOf(symbol);
          return targetAlphabet[index];
        })
        .join('');
    };
  
    return {
      cipherAlphabet,
      encipher: makeTranslator(plaintextAlphabet, cipherAlphabet),
      decipher: makeTranslator(cipherAlphabet, plaintextAlphabet),
    };
};

function analyseArray(array){
    return {
        average: array.reduce((a,b) => (a+b)) / array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    }
}

module.exports = {
    capitalize,
    calculator,
    reverseString,
    analyseArray,
    generateCaesarCipher
};