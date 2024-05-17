import mongoose, { Document } from "mongoose";
import { companySchema } from "../schemas/company.schema";

export interface Company extends Document {
    emailCompany: string;
    passwordCompany: string;
    role: string;
};

export const CompanyModel = mongoose.model<Company>('Company', companySchema);  