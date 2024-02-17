import exp from "constants";
import mongoose from "mongoose";

const connectDb = async (DATABASE_URL)=>{
    try{
        const DB_options ={
            dbName : "school"
        }
        await mongoose.connect(DATABASE_URL, DB_options);
        console.log("Connected successfully...")

    }catch(error){
       console.log(error)
    }
}

export default connectDb;