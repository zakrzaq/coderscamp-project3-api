import { MongoClient } from "mongodb";
import dotenvFlow from "dotenv-flow";

dotenvFlow.config();

async function main() {
    const client = new MongoClient(
        "mongodb+srv://coderscamp:PLsf9STRabDa3zTm@cluster0.p1mqc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );

    try {
        await client.connect();

        await monitorTableReservations(client, 15000);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

// close change stream

const closeChangeStream = (timeInMs = 6000, changeStream) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Closing the change stream");
            changeStream.close();
            resolve();
        }, timeInMs);
    });
};

async function monitorTableReservations(
    client,
    timeInMs = 60000,
    pipeline = []
) {
    const collection = client.db("myFirstDatabase").collection("reservations");

    const changeStream = collection.watch(pipeline);

    changeStream.on("change", async (next) => {
        console.log(next);

        await closeChangeStream(timeInMs, changeStream);
    });
}
