
const { MongoClient } = require('mongodb');

require('dotenv').config();


//main function to connect to the MongoDB Atlas cluster
async function main() {

    const uri = process.env.MONGODB_URI;

    const client = new MongoClient(uri);

    try {
        await client.connect();

        console.log("✅ Connected successfully to MongoDB Atlas!");

        await listDatabases(client);

    } catch (e) {
        console.error("❌ MongoDB connection failed:");
        console.error(e);
    }

    finally {
        await client.close();
    }

}

main().catch(console.error);


//list the databases in the cluster
async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
