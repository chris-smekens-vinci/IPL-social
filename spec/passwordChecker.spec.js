const passwordChecker = require('../passwordChecker');

describe('Password Checker', () => {
    it('should reject passwords shorter than 8 characters', () => {
        expect(passwordChecker('123')).toBe(false);
    });
});