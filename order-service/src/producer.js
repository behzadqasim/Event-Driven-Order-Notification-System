const kafka = require('./kafka');

const producer = kafka.producer();

async function connectProducer() {
    await producer.connect();
    console.log('Kafka Producer connected');
}

async function publishOrderEvent(order) {
    await producer.send({
        topic: 'order-events',
        messages: [
            {
                key: String(order.id),
                value: JSON.stringify(order)
            }
        ]
    });
}

module.exports = { connectProducer, publishOrderEvent };