import { json } from "zod";
import jwt from "jsonwebtoken";
export const authCheck = (req, res, next) => {
    const accessToken = req.cookies?.accessToken;
    if (!accessToken) {
        res.status(400).json({
            status: "error",
            message: "cookie not found"
        });
    }
    const checkToken = jwt.verify(accessToken, "secrets");
    console.log(checkToken);
    next();
};
//# sourceMappingURL=authCheck.js.map