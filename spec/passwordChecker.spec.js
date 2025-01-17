import { passwordChecker } from '../passwordChecker.js';

describe('Password Checker', () => {
    it('should reject passwords shorter than 8 characters', () => {
        expect(passwordChecker('123')).toBe(false);
    });

    it('should fail if the password does not contain a special character', () => {
        expect(passwordChecker('Password1')).toBe(false);
    });
});