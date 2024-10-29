// test/calculatorRoutes.test.js

import request from "supertest";
import { expect } from "chai";
import app from "../server";
import sequelize from "../config/database";
import Calculation from "../models/Calculation";

