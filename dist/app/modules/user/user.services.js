import { User } from "./user.model.js";
import { encryptPassword } from "../../utils/password.js";
const createUser = async (req, res) => {
    console.log(req.body);
    const createdUser = await User.insertOne({
        ...req.body,
        password: await encryptPassword(req.body.password)
    });
    return createdUser;
};
export const UserServices = {
    createUser
};
//# sourceMappingURL=user.services.js.map