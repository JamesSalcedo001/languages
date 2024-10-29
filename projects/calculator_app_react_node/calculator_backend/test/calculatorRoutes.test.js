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
})