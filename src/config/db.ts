import mongoose from "mongoose";

export const connectDB = async () => {
    console.log(process.env.MONGOOSE_URL);
    return mongoose.connect(process.env.MONGOOSE_URI as string);
}

