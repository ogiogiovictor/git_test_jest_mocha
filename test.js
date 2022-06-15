const stringLength = require('./modules/stringify');
const stringwithCondition = require('./modules/stringwithcondition');
const reverseString = require('./modules/reverse')
const { add, subtract, divide, multiply } = require('./modules/calculator');
const capitalizeString = require('./modules/capitalize');


describe('String Count', () => {
    test('Count String Characters', () => {
        expect(stringLength('My Bae')).toBe(6);
    })
});


describe('String Count with at least 1 character long and not longer than 10 characters', () => {
    test('Test String with 11 characters', () => {
      expect(stringwithCondition('Cross River')).toBe('Invalid');
    })
});


describe('Reverse String', () => {
    test('Test Reverse String', () => {
      expect(reverseString('Cross River')).toBe('reviR ssorC');
    });
  
    test('Test Empty String', () => {
      expect(reverseString('')).toBe('No Data');
    });
  });



  describe('Test Calculator Add Method', () => {
    test('Add 1 and 1', () => {
      expect(add(1, 1)).toBe(2);
    });
  
    test('Add 3 and 1', () => {
      expect(add(3, 1)).toBe(4);
    });
  
    test('Add 1000 and 50', () => {
      expect(add(1000, 50)).toBe(1050);
    });
  });
  
  describe('Test Calculator Subtract Method', () => {
    test('Subtract 2 and 1', () => {
      expect(subtract(2, 1)).toBe(1);
    });
  
    test('Subtract 3 and 1', () => {
      expect(subtract(3, 1)).toBe(2);
    });
  
    test('Subtract 1100 and 100', () => {
      expect(subtract(1100, 100)).toBe(1000);
    });
  });
  
  describe('Test Calculator Divide Method', () => {
    test('Divide 10 and 2', () => {
      expect(divide(10, 2)).toBe(5);
    });
  
    test('Divide 100 and 20', () => {
      expect(divide(100, 20)).toBe(5);
    });
  
    test('Divide 14000 and 70', () => {
      expect(divide(14000, 70)).toBe(200);
    });
  });
  
  describe('Test Calculator Mutiply Method', () => {
    test('Multiply 4 and 3', () => {
      expect(multiply(4, 3)).toBe(12);
    });
  
    test('Mutiply 4 and 3', () => {
      expect(multiply(4, 3)).toBe(12);
    });
  
    test('multiply 1000 and 1000', () => {
      expect(multiply(1000, 1000)).toBe(1000000);
    });
  });
  

  describe('Capitalize String', () => {
    test('Check is string is Capitalized', () => {
      expect(capitalizeString('moncha')).toBe('Moncha');
    });
  });