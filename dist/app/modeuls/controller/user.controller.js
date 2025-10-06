import httpStatus from "http-status-codes";
const getUsers = (req, res, next) => {
    res.status(httpStatus.OK).json({
        status: "success",
        massages: "all user retrad successfully"
    });
};
const createUser = (req, res, next) => {
    res.status(httpStatus.CREATED).json({
        status: "success",
        massages: " user Created successfully"
    });
};
export const userController = {
    getUsers,
    createUser
};
//# sourceMappingURL=user.controller.js.map