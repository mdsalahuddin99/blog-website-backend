// user.services.ts
import type { Request } from "express";
import { User } from "./user.model.js";
import bcrypt from 'bcryptjs';


const createUser = async (req: Request) => {
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
        throw new Error("User already exists");
    }


const hashPassword = await bcrypt.hash(req.body.password, 10);


    const createdUser = await User.insertOne({
        ...req.body,
        password:hashPassword
    });
    return createdUser;
};

export const UserServices = {
    createUser
};
