// import mongoose from "mongoose";

// const connection: {isConnected?: number} ={};

// async function dbConnect() {
//     if(connection.isConnected){
//         console.log("Databse coonection successful")
//     }else{
//         console.log("Connect failed")
//     }

//     const db = await mongoose.connect(process.env.MONGODB_URI!);
//     connection.isConnected = db.connections[0].readyState;
// }
// export default dbConnect;

import mongoose from 'mongoose';

const connection: { isConnected?: number } = {};

async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI!, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        connection.isConnected = mongoose.connection.readyState;
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        throw new Error('Failed to connect to MongoDB');
    }
}

export default dbConnect;
