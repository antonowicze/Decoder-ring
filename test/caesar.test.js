const { expect } = require("chai");
const {caesar} = require("../src/caesar");

describe('caesar', () => {
    it("`(thinkful, 3) should be: wklqnixo`", () => {    
        const actual = caesar("thinkful", 3)
        const expected = 'wklqnixo'
        expect(actual).to.equal(expected)
    });

    it("should return false if the shift amount is not present", () => {   //error handling, shift must be present
        const actual = caesar("thinkful")
        expect(actual).to.be.false
    });

    it("should return false if the shift amount is 0", () => {
        const actual = caesar("thinkful", 0);

        expect(actual).to.be.false
    });

    it("should return false if the shift amount is above 25", () => {
        const actual = caesar("thinkful", 99);

        expect(actual).to.be.false;
    });

    it("should return false if the shift amount is less than -25", () => {
        const actual = caesar("thinkful", -26);

        expect(actual).to.be.false;
    });

    it("should encode by shifting the letters. Ignore maintain spaces, capitals, non alphabetic symbols.", () => {
        const actual = caesar("This is a secret message!", 8);
        const expected = "bpqa qa i amkzmb umaaiom!";

        expect(actual).to.equal(expected);
    });

    it("should appropriately handle letters at the end of the alphabet", () => {
        const actual = caesar("z", 4);
        const expected = "d";

        expect(actual).to.equal(expected);
    });

    it("should allow for a negative shift that will shift to the left", () => {
        const actual = caesar("thinkful", -3);
        const expected = "qefkhcri";

        expect(actual).to.equal(expected);
    });

    it("should decode by shifting the letters. Ignore maintain spaces, capitals, non alphabetic symbols.", () => {
        const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
        const expected = "this is a secret message!";

        expect(actual).to.equal(expected);
    });
});