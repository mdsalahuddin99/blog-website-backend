import httpStatus from "http-status-codes";
import { User } from "./user.model.js";
import catchAsync from "../../utilis/catchAsync.js";
const getUsers = catchAsync(async (req, res, next) => {
    const user = await User.find({});
    res.status(httpStatus.CREATED).json({
        status: "success",
        massages: " user Created successfully",
        user: user
    });
});
const createUser = catchAsync(async (req, res, next) => {
    const users = await User.insertOne(req.body);
    res.status(httpStatus.OK).json({
        status: "success",
        massages: "all user retrad successfully",
        data: users
    });
});
export const userController = {
    getUsers,
    createUser
};
//# sourceMappingURL=user.controller.js.map