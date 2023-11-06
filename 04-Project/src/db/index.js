import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectDb = async () => {
    try {
       const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n MongoDB connected !! DB HOST : ${connectDb}`);

    } catch (error) {
        console.log("MONGODB connection error", error);
        process.exit(1)
    }
}

// Making a seprate file for the database connection