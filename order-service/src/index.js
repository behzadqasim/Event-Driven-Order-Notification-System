const express = require("express");

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "API Service Running" });
});

app.listen(3001, () => {
  console.log("API running on port 3001");
});
