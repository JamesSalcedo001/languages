// test/calculatorRoutes.test.js

import request from "supertest";
import { expect } from "chai";
import app from "../server.js";
import sequelize from "../config/database.js";
import Calculation from "../models/Calculation.js";


describe("Calculator API Endpoints", () => {
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

    describe("GET /api/calculations/:id", () => {
        it("should retrive a calculation by ID", async () => {
            const response = await request(app).get("/api/calculations/1");

            expect(response.status).to.equal(200);
            expect(response.body).to.include({
                id: 1,
                firstOperand: "5.00",
                operator: "+",
                secondOperand: "3.00",
                result: "8.00",
            });
        });

        it("should return a 404 for non-existent ID", async () => {
            const response = await request(app).get("/api/calculations/999");

            expect(response.status).to.equal(404);
            expect(response.body).to.have.property("error", "Calculation not found");
        });
    });

    describe("PUT /api/calculations/:id", () => {
        it("should update a calculation", async () => {
            const response = await request(app)
            .put("/api/calculations/1")
            .send({ firstOperand: 10, operator: "-", secondOperand: 2 });

            expect(response.status).to.equal(200);
            expect(response.body).to.include({
                id: 1,
                firstOperand: "10.00",
                operator: "-",
                secondOperand: "2.00",
                result: "8.00",
            });
        });

        it("should return 404 for non-existent ID", async () => {
            const response = await request(app)
            .put("/api/calculations/999")
            .send({ firstOperand: 10, operator: "-", secondOperand: 2 });

            expect(response.status).to.equal(404);
            expect(response.body).to.have.property("error", "Calculation not found");
        });
    });

    describe("DELETE /api/calculations/:id", () => {
        it("should delete a calculation", async () => {
            const response = await request(app).delete("/api/calculations/1");

            expect(response.status).to.equal(204);
        });

        it("should return a 404 when deleting a non-existent calculation", async () => {
            const response = await request(app).delete("/api/calculations/999");

            expect(response.status).to.equal(404);
            expect(response.body).to.have.property("error", "Calculation not found");
        });
    });
});