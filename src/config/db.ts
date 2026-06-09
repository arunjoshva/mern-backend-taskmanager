import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log("MongoDB Database Connected");
    } catch (error) {
        console.error(`Database Connection failedL ${error}`);
        process.exit(1);
    }
};

export default connectDB;