const swaggerJsDoc = require("swagger-jsdoc");

const SERVER_PORT = process.env.PORT || 5000;
const SERVER_HOST = process.env.HOST || "localhost";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Backend API",
      version: "1.0.0",
      description: "API for ECC Web Application",
    },
    servers: [
      {
        url: `http://${SERVER_HOST}:${SERVER_PORT}/api`,
      },
    ],
    components: {
      schemas: {
        Product: {
          type: "object",
          properties: {
            productId: { type: "number" },
            productName: { type: "string" },
            scrumMaster: { type: "string" },
            productOwner: { type: "string" },
            developerNames: { type: "array", items: { type: "string" } },
            startDate: { type: "string", format: "date" },
            methodology: { type: "string" },
            location: { type: "string" },
          },
          required: ["productNumber", "productName"],
        },
      },
    },
  },
  apis: ["./routes/productRoutes.js"],
};

const swaggerDocs = swaggerJsDoc(options);

module.exports = swaggerDocs;
