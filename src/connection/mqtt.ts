import * as amqp from 'amqplib';

require('dotenv').config();
const brokerUrl: string = `amqp://${process.env.MQTT_USERNAME}:${process.env.MQTT_PASSWORD}@${process.env.MQTT_HOSTNAME}`;
const queue: string = process.env.MQTT_QUEUE || ''; // Provide a default empty string


if (!queue) {
    throw new Error('MQTT_QUEUE environment variable is not defined.');
}

export async function connectToRabbitMQ(message: string) {
    try {
        const connection: amqp.Connection = await amqp.connect(brokerUrl);
        const channel: amqp.Channel = await connection.createChannel();
        await channel.assertQueue(queue);
        console.log('\n\nConnected to RabbitMQ');

        channel.sendToQueue(queue, Buffer.from(message));

        const currentDate: Date = new Date();
        console.log(`Sent Message to RabbitMQ: ${message} ${currentDate.toLocaleTimeString()}`);

        await channel.close();
        await connection.close();
    } catch (error) {
        throw new Error('Error connecting to RabbitMQ: ' + error);
    }
}
