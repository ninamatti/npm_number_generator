const { expect } = require("chai");
const { randomNoGenerator } = require("../index.js");

describe("randomNoGenerator", function () {
    it("should return an integer that is between the given min and max values", () => {
      const rando = randomNoGenerator(5, 10);
      expect(rando).to.be.above(4);
      expect(rando).to.be.below(11);
    });
});
