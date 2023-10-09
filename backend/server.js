const express = require("express");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/productRoutes");
const swaggerDocs = require("./utils/swagger");
const swaggerUi = require("swagger-ui-express");

const app = express();

const PORT = process.env.PORT || 3000;

// Middlewares
app.use(bodyParser.json());

// Routes

app.use("/api/products", productRoutes);

app.use("/api/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Initialize server

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
