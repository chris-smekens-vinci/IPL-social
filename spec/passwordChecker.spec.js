import { passwordChecker } from '../passwordChecker.js';

describe('Password Checker', () => {
    it('should reject passwords shorter than 8 characters', () => {
        expect(passwordChecker('123')).toBe(false);
    });

    it('should fail if the password does not contain a special character', () => {
        expect(passwordChecker('Password1')).toBe(false);
    });

    it('should fail if the password does not contain a digit', () => {
        expect(passwordChecker('Password!')).toBe(false);
    });

    it('should pass if the password contains a special character and a digit', () => {
        expect(passwordChecker('Password1!')).toBe(true);
    });

    it('should fail if the password contains the string "IPL" (case insensitive)', () => {
        expect(passwordChecker('Password1!IPL')).toBe(false);
        expect(passwordChecker('Password1!ipl')).toBe(false);
        expect(passwordChecker('Password1!IpL')).toBe(false);
    });

    it('should pass if the password contains a special character and a digit, and does not contain "IPL"', () => {
        expect(passwordChecker('Password1!')).toBe(true);
    });
});