import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.DB_URI;
const dbName = process.env.DB_NAME;

const cliente = new MongoClient(uri);

let db;

export async function connect() {
    try {
        await cliente.connect();
        console.log('MongoDB conectado exitosamente');
        db= cliente.db(dbName)
        
    } catch (error) {
        console.log('Error al conectarse');
        
    }
}

export function getDB() {
    if(!db){
        throw new Error("La base de datos no existe");
    }
    return db;
}