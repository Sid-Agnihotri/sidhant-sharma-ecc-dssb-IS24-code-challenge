const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

const PORT = 3000;

app.get("/api", (req, res) => {
  res.json({ message: "Backend API" });
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
