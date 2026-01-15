import {Client} from "pg";

const pgClient = new Client("postgresql://postgres:mysecretpassword@localhost:5432/postgres?sslmode=disable"); 

async function connect() {
    await pgClient.connect();
}

connect();
 