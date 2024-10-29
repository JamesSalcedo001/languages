// test

import { expect } from "chai";
import { computeResult } from "../controllers/calculatorController";

describe("computeResult Function", () => {
    it("should add two numbers correctly", () => {
        const result = computeResult(2, "+", 3);
        expect(result).to.equal(5);
    });

    it("should subtract two numbers correctly", () => {
        const result = computeResult(5, "-", 2);
        expect(result).to.equal(3);
    })

    it("should multiply two numbers correctly", () => {
        const result = computeResult(4, "*", 3);
        expect(result).to.equal(12);
    });

    it("should divide two numbers correctly", () => {
        const result = computeResult(10, "/", 2);
        expect(result).to.equal(5);
    });

    it("should throw an error when dividing by zero", () => {
        expect(() => computeResult(5, "/", 0)).to.throw("Cannot divide by zero");
    });

    it("should throw an error for an invalid operator", () => {
        expect(() => computeResult(5, "%", 2)).to.throw("Invalid operator");
    });
});