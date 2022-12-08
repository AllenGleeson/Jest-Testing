const { capitalize, reverseString, calculator, analyseArray, generateCaesarCipher } = require('./script');

test('returns word with first letter capitalized', () => {
    expect(capitalize('john')).toBe('John');
});

test('returns error from recieving a number when expecting a string', () => {
    expect(capitalize(1)).toBe('Sorry you need to enter a string');
});

test('returns error from recieving nothing when expecting a string', () => {
    expect(capitalize()).toBe('Sorry you need to enter a string');
});

test('returns error from recieving a blank string when expecting a string', () => {
    expect(capitalize(' ')).toBe('Sorry you need to enter a string');
});

test('returns error from recieving a blank string when expecting a string', () => {
    expect(capitalize(true)).toBe('Sorry you need to enter a string');
});

test('Reverses String', () => {
    var reversedString = reverseString('Hello')
    expect(reversedString).toBe('olleH');
});

test('Calc Add', () => {
    var result = new calculator().add(1, 2);
    expect(result).toBe(3);
});
test('Calc Subtract', () => {
    var result = new calculator().subtract(5, 2);
    expect(result).toBe(3);
});
test('Calc Divide', () => {
    var result = new calculator().divide(9, 3);
    expect(result).toBe(3);
});
test('Calc Multiply', () => {
    var result = new calculator().multiply(1, 3);
    expect(result).toBe(3);
});

test('Caesar Cipher', () => {
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    var result = generateCaesarCipher(-1, alphabet).decipher("test");
    expect(result).toBe("uftu");
});

test('Analyse Array', () => {
    var result = analyseArray([1,7,3,25,8,2]);
    expect(result.average).toBe(7.666666666666667);
    expect(result.min).toBe(1);
    expect(result.max).toBe(25);
    expect(result.length).toBe(6);
});