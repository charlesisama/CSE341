
const { MongoClient } = require('mongodb');


//main function to connect to the MongoDB Atlas cluster
async function main() {

    const uri = "mongodb+srv://charlesisama:charlesisama@cluster0.6buuruz.mongodb.net/?appName=Cluster0";

    const client = new MongoClient(uri);

    try {
        await client.connect();

        console.log("✅ Connected successfully to MongoDB Atlas!");

        await listDatabases(client);

    } catch (e) {
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
