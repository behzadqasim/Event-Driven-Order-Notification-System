const express = require("express");

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "Notification Service API Running" });
});

app.listen(3002, () => {
  console.log("Notification Service API running on port 3002");
});
