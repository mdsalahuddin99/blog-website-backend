import type { Response } from "express";
import { User } from "../user/user.model.js";
import type { IAuth } from "./auth.interface.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const login = async (payload: IAuth, res: Response) => {
    const { email, password } = payload;

    const isUserExist = await User.findOne({ email });

    if (!isUserExist) {
        return res.status(400).json({
            status: "error",
            message: "User doesn't exist",
        });
    }

    const isPasswordMatch = await bcrypt.compare(password, isUserExist.password as string);
    if (!isPasswordMatch) {
        return res.status(400).json({
            status: "error",
            message: "Invalid password",
        });
    }

    const tokenPayload = {
        name: isUserExist.name,
        email: isUserExist.email,
        avatar: isUserExist.avatar,
        isVerified: isUserExist.isVerified,
        isPremium: isUserExist.isVerified,
    };

    const accessToken = jwt.sign(tokenPayload, "secret"); // You should replace "secret" with env variable

    res.cookie("accessToken", accessToken);

    return accessToken;
};

export const AuthServices = {
    login,
};
