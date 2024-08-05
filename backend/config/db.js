import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://didindinesh5:DIDIN55555@cluster0.slzithr.mongodb.net/cherry_on_top").then(() => console.log("DB connected"));
}

