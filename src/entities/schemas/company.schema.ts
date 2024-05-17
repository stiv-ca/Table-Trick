import * as mongoose from "mongoose";

export const companySchema = new mongoose.Schema({

    emailCompany: {
        type : String,
        required: true
    },
    passwordCompany:  {
        type : String,
        required: true
    },
    role: {
        type : String,
        required: true
    }
    
});