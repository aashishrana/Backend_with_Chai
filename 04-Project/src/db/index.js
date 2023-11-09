// require("dotenv").config({path: "./env"});

// 

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDb = async () => {
    try {
       const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(` MongoDB connected !! DB HOST : ${connectDb}`)

    } catch (error) {
        console.log("MONGODB connection errors", error);
        process.exit(1)
    }
}

export default connectDb

// Making a seprate file for the database connection