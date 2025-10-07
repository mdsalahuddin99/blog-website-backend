import httpStatus from "http-status-codes";
import { User } from "./user.model.js";
import catchAsync from "../../utilis/catchAsync.js";
import { UserServices } from "./user.services.js";
const getUsers = catchAsync(async (req, res, next) => {
    const users = await User.find({});
    res.status(httpStatus.OK).json({
        status: "success",
        message: "Users retrieved successfully",
        users
    });
});
const createUser = catchAsync(async (req, res, next) => {
    try {
        const user = await UserServices.createUser(req);
        res.status(httpStatus.CREATED).json({
            status: "success",
            message: "User created successfully",
            user
        });
    }
    catch (error) {
        const err = error;
        res.status(httpStatus.BAD_REQUEST).json({
            status: "error",
            message: err.message || "Failed to create user"
        });
    }
});
export const userController = {
    getUsers,
    createUser
};
//# sourceMappingURL=user.controller.js.map