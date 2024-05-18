import mongoose, { Document } from "mongoose";
import { userSchema } from "../schemas/user.schema";

export interface User extends Document {
    emailUser: string;
    passwordUser: string;
    role: string;
};

export const UserModel = mongoose.model<User>('User', userSchema); 