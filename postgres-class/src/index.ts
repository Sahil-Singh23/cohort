import {Client} from "pg";
import express from "express"
const app = express();
app.use(express.json);

const pgClient = new Client("postgresql://postgres:mysecretpassword@localhost:5432/postgres?sslmode=disable"); 


async function create(){
    pgClient.connect();
    await pgClient.query("CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, username VARCHAR(50) UNIQUE NOT NULL, email VARCHAR(255) UNIQUE NOT NULL,password VARCHAR(255) NOT NULL, created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP);")

    await pgClient.query("CREATE TABLE IF NOT EXISTS addresses (id SERIAL PRIMARY KEY,    user_id INTEGER NOT NULL,    city VARCHAR(100) NOT NULL,   country VARCHAR(100) NOT NULL,  street VARCHAR(255) NOT NULL,    pincode VARCHAR(20),    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE);")
}
create()

app.post("/signup",async(req,res)=>{
    const [username,password,email,city,country,street,pinCode] = req.body;

    try{
        const response = await pgClient.query("Insert into users(username,email,password) values($1,$2,$3) RETURNING id ",[username,password,email]); 
        const addressRes = await       
    }catch(e){
        console.log(e);
    }
})

app.listen(2064); 