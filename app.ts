import { generateThaiLicensePlate } from './src/utils/generateThaiLicensePlate';
import {connectToRabbitMQ} from "./src/connection/mqtt"; // Import the function

async function main() {
    const minValue: number = 2000;
    const maxValue: number = 60000;

    const randomDelay: number = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

    async function iteration() {
        const licensePlate: string = generateThaiLicensePlate();
        console.log(licensePlate);
        await connectToRabbitMQ(licensePlate)

        console.log("next data in "+randomDelay / 1000 + "s")
        setTimeout(iteration, randomDelay);
    }


    await iteration()
}

main()
