import { User } from "../user/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const login = async (payload, res) => {
    const { email, password } = payload;
    const isUserExist = await User.findOne({ email });
    if (!isUserExist) {
        return res.status(400).json({
            status: "error",
            message: "User doesn't exist",
        });
    }
    const isPasswordMatch = await bcrypt.compare(password, isUserExist.password);
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
    const accessToken = jwt.sign(tokenPayload, "secret", {
        expiresIn: "1d"
    });
    res.cookie("accessToken", accessToken);
    return {
        accessToken
    };
};
export const AuthServices = {
    login,
};
//# sourceMappingURL=auth.services.js.map