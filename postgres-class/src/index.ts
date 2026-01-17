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
        pgClient.query("BEGIN")
        const response = await pgClient.query("Insert into users(username,email,password) values($1,$2,$3) RETURNING id ",[username,password,email]); 

        const userId = response.rows[0].id;

        const addressRes = await pgClient.query("Insert into addresses (user_id,city,country,street,pincode) values($1,$2,$3,$4,$5) ",[userId,city,country,street,pinCode]); 
        
        pgClient.query("COMMIT")

        return res.json({message:"Sign up sucessfull "})
        
    }catch(e){
        console.log(e);
        return res.status(401).json({message:"Error while signup "})
    }
})

app.listen(2064); 