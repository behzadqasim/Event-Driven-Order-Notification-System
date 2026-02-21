const express = require("express");
const { connectProducer, publishOrderEvent } = require('./producer');

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "Order Service API Running" });
});

app.post('/orders', async (req, res) => {
  const order = req.body;

  console.log('Received new order:', order);

  // save order in DB (your logic)

  await publishOrderEvent(order);

  res.json({ message: 'Order created & event published' });
});


app.listen(3001, () => {
  console.log("Order Service API running on port 3001");
});
