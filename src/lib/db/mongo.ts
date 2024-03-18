import { MongoClient } from "mongodb";


const MONGO_URL = "mongodb://54.246.252.57:27017/AODB" 

const client = new MongoClient(MONGO_URL)

export function startMongo() : Promise<MongoClient>{
    console.log('Attempting to connect to MongoDB');
    return client.connect();
}

export default client.db();