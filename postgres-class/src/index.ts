import {Client} from "pg";
import express, { response } from "express"
const app = express();
app.use(express.json());

const pgClient = new Client("postgresql://postgres:mysecretpassword@localhost:5432/postgres?sslmode=disable"); 


async function create(){
    pgClient.connect();
    await pgClient.query("CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, username VARCHAR(50) UNIQUE NOT NULL, email VARCHAR(255) UNIQUE NOT NULL,password VARCHAR(255) NOT NULL, created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP);")

    await pgClient.query("CREATE TABLE IF NOT EXISTS addresses (id SERIAL PRIMARY KEY,    user_id INTEGER NOT NULL,    city VARCHAR(100) NOT NULL,   country VARCHAR(100) NOT NULL,  street VARCHAR(255) NOT NULL,    pincode VARCHAR(20),    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE);")
}
create()

app.post("/signup",async(req,res)=>{
    const {username,password,email,city,country,street,pinCode} = req.body;

    try{
        await pgClient.query("BEGIN")
        const response = await pgClient.query("Insert into users(username,email,password) values($1,$2,$3) RETURNING id ",[username,email,password]); 

        const userId = response.rows[0].id;

        const addressRes = await pgClient.query("Insert into addresses (user_id,city,country,street,pincode) values($1,$2,$3,$4,$5) ",[userId,city,country,street,pinCode]); 
        
        await pgClient.query("COMMIT")

        return res.json({message:"Sign up sucessfull "})
        
    }catch(e){
        await pgClient.query("ROLLBACK")
        console.log(e);
        return res.status(401).json({message:"Error while signup "})
    }
})

app.get("/metadata", async(req,res)=>{
    const id = req.query.id;


    //do not expose your password
    const query = "SELECT users.id,username,email,user_id,city,country,street,pincode from users JOIN addresses on users.id=addresses.user_id where users.id = $1";

    try{
        const response = await pgClient.query(query,[id]);
        return res.json({response:response.rows[0]})
    }catch(e){
        console.log(e);
        return res.status(401).json({message:"Error getting data "})
    }
})

app.listen(2064); 