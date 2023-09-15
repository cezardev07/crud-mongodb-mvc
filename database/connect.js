import { connect } from "mongoose";

const connectMongoDB = async () => {
    try {
        await connect(process.env.CONNECTION_MONGODB)
    } catch (error) {
        console.log("[ ERROR ] -> " + error)
    }
}

export { connectMongoDB }