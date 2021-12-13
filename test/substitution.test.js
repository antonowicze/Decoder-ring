const {expect} = require("chai");
const {substitution} = require("../src/substitution");

describe("substitution() testing", () => {
    it(`("thinkful, xoyqmcgrukswaflnthdjpzibev") should be: jrufscpw`, () => {
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        const expected = "jrufscpw"

        expect(actual).to.equal(expected);
    });

   it("should return false if the substitution alphabet is not exactly 26 characters", () => {
        const actual = substitution("thinkful", "short");
        
        expect(actual).to.be.false;
   });

   it("should return false if there are any duplicate characters in the alphabet", () => {
       const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");

       expect(actual).to.be.false;
   });

   it("should ignore capital letters and leaves spaces", () => {
       const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
       const expected = "elp xhm xf mbymwwmfj dne"

       expect(actual).to.eql(expected);
  });

  it("should handles special characters when encoding", () => {
      const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
      const expected = "y&ii$r&"

      expect(actual).to.eql(expected);
  });

  it("should handle special characters while decoding", () => {
      const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
      const expected = "elp xhm xf mbymwwmfj dne"

      expect(actual).to.eql(expected);
  });
});