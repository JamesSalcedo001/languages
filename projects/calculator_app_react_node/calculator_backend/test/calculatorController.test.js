// test

const { expect } = require("chai");
const { computeResult } = require("../controllers/calculatorController");

describe("computeResult Function", () => {
    it("should add two numbers correctly", () => {
        const result = computeResult(2, "+", 3);
        expect(result).to.equal(5);
    })
})