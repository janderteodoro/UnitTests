const { 
    sum, subtration, multiplication, division 
} = require('../../src');

describe('test sum operator', () => {
    
    test('test with integer number', () => {
        expect(sum(3, 4)).toBe(7)
    });

    test('test with negative number', () => {
        expect(sum(-23, 3)).toBe(-20);
    });
});

describe('test subtration operator', () => {

    test('test with integer number', () => {
        expect(subtration(5, 4)).toBe(1);
    });

    test('test with negative number', () => {
        expect(subtration(-56, 3)).toBe(-59);
    });
});

describe('test mutiplication operator', () => {

    test('test with integer number', () => {
        expect(multiplication())
    })
})