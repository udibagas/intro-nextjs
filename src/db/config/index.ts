import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI as string;
const client = new MongoClient(uri);

export const database = client.db(process.env.DB_NAME);
