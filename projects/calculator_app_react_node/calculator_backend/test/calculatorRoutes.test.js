// test/calculatorRoutes.test.js

import request from "supertest";
import { expect } from "chai";
import app from "../server";
import sequelize from "../config/database";
import Calculation from "../models/Calculation";

describe("Calculator API Ednpoints", () => {
    // before running tests sync the database
    before(async () => {
        await sequelize.sync({ force: true });
    });

    after(async () => {
        await sequelize.close();
    });

    describe("POST /api/calculations", () => {
        it("should create a new calculation", async () => {
            const response = await request(app)
            .post("/api/calculations")
            .send({ firstOperand: 5, operator: "+", secondOperand: 3 });
            
            expect(response.status).to.equal(201);
            expect(response.body).to.include({
                firstOperand: "5.00",
                operator: "+",
                secondOperand: "3.00",
                result: "8.00",
            });
        })

        it("should return an error for invalid input", async () => {
            const response = await request(app)
            .post("/api/calculations")
            .send({ firstOperand: "a", operator: "+", secondOperand: 3 });

            expect(response.status).to.equal(400);
            expect(response.body).to.have.property("error", "Invalid number input");
        });
    });

    describe("GET /api/calculations", () => {
        it("should retrieve all calculations", async () => {
            const response = await request(app).get("/api/calculations");

            expect(response.status).to.equal(200);
            expect(response.body).to.be.an("array");
            expect(response.body.length).to.be.greaterThan(0);
        });
    });


})