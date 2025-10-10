import { User } from "../user/user.model.js";
import { email, jwt } from 'zod';
import bcrypt from "bcryptjs";
const login = async (paylode, res) => {
    const { email, password } = paylode;
    const isUserExsit = await User.findOne({ email });
    if (!isUserExsit) {
        res.status(400).json({
            status: "error",
            massages: "user doesn't exist"
        });
    }
    const isPasswordMatch = await bcrypt.compareSync(password, isUserExsit?.password);
    if (!isPasswordMatch) {
        res.status(400).json({
            status: "error",
            massages: "password doesn't exist"
        });
    }
    const tokenPaylode = {
        name: isUserExsit?.name,
        email: isUserExsit?.email,
        avatar: isUserExsit?.avatar,
        isVerified: isUserExsit?.isVerified,
        isPremium: isUserExsit?.isVerified,
    };
    const accessToken = jwt.sign(tokenPaylode, "secret");
    res.cookie("accessToken", accessToken);
    return accessToken;
};
export const AuthServices = {
    login
};
//# sourceMappingURL=auth.services.js.map