import { generateThaiLicensePlate } from './src/utils/generateThaiLicensePlate';
import {connectToRabbitMQ} from "./src/connection/mqtt"; // Import the function

function loopWithDelay() {
    const delay: number = 30000; // Delay in milliseconds (adjust as needed)

    async function iteration() {
        const licensePlate: string = generateThaiLicensePlate();
        await connectToRabbitMQ(licensePlate)

        setTimeout(iteration, delay);
    }

    // Start the loop
    iteration().then(r =>
        console.log("Started")
    )
}

// Call the loopWithDelay function to start the loop
loopWithDelay();
