const express = require("express");

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "Order Service API Running" });
});

app.listen(3001, () => {
  console.log("Order Service API running on port 3001");
});
