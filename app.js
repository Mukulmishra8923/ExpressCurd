import express from 'express';
import connectDb from './db/connectdb.js';
import stu from "./routes/web.js"
import { join } from 'path';

const app = express();
const port = process.env.PORT || '3000';
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";


// DATABASE CONNECTION
connectDb(DATABASE_URL);

//POST REQ MIDDLEWARE
app.use(express.urlencoded({extended:false}))

// LOAD ROUTERS
app.use('/',stu)

//SET TEMPLATE ENGINE
app.set("view engine", "ejs")


// STATIC FILES
app.use(express.static(join(process.cwd(), "public")))




app.listen(port, ()=>{
    console.log(` server url is http://localhost:${port}`)
})