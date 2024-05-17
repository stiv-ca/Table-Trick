import * as mongoose from "mongoose";

export const userSchema = new mongoose.Schema({

    emailUser: {
        type: String,
        required: true
    },
    passwordUser: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    
});