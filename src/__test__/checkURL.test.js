const {validateURL} = require("../client/js/checkURL");
describe('urlValidity', ()=>{
    test('should return true for valid URLs', ()=>{
        expect(validateURL('https://www.google.com')).toBeTruthy();
    });
    test('should return false for invalid URLs', ()=>{
        expect(validateURL('invalidURL')).toBeFalsy();
    });
    test('should return false for empty string', ()=>{
        expect(validateURL("")).toBeFalsy();
    });
    test('should return false for URLs with no protocol', ()=>{
        expect(validateURL('www.example.com')).toBeFalsy();
    });
    // should be return false for email not valid url
    test('should return false for email', ()=>{
        expect(validateURL('example@example.com')).toBeFalsy();
    });
})