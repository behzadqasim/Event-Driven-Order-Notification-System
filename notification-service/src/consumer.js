const kafka = require('./kafka');

const consumer = kafka.consumer({ groupId: 'notification-group' });

async function startConsumer() {
  await consumer.connect();
  await consumer.subscribe({ topic: 'order-events', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const order = JSON.parse(message.value.toString());
      console.log('New order event:', order);

      // send notification logic here
    }
  });
}

startConsumer();