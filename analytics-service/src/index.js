const express = require("express");

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "Analytics Service API Running" });
});

app.listen(3003, () => {
  console.log("Analytics Service API running on port 3003");
});
