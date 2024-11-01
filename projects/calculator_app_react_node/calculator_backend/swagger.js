// swagger.js

import swaggerAutogen from "swagger-autogen";

const swaggerAutogenInstance = swaggerAutogen();

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./server.js"];

const doc = {
    info: {
        title: "Calculator API",
        description: "API documentation for the Calculator application",
        version: "1.0.0",
    },
    host: "localhost:3000",
    basePath: "/",
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
};

swaggerAutogenInstance(outputFile, endpointsFiles, doc);
