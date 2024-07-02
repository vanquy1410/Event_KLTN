import mongoose from "mongoose";

const MONG0DB_URI =process.env.MONG0DB_URI ;

let cached = (global as any).mongoose || { conn : null, promise: null};

export const connetToDatabase = async () => {
    if (cached.conn) return cached.conn;

    if(!MONG0DB_URI) throw new Error('MONGODB_URI is missing');

    cached.promise = cached.promise || mongoose.connect(MONG0DB_URI, {
        dbName: 'star seminar',
        bufferCommands: false,
    })
    cached.conn = await cached.promise;

    return cached.conn;
}

