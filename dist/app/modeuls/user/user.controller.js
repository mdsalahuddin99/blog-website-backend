// // user.controller.ts
// import type { NextFunction, Request, Response } from "express";
// import httpStatus from "http-status-codes";
// import { User } from "./user.model.js";
// import catchAsync from "../../utilis/catchAsync.js";
// import { UserServices } from "./user.services.js";
export {};
// const getUsers = catchAsync(
//     async (req: Request, res: Response, next: NextFunction) => {
//         const users = await User.find({});
//         res.status(httpStatus.OK).json({
//             status: "success",
//             message: "Users retrieved successfully",
//             users
//         });
//     }
// );
// const createUser = catchAsync(
//     async (req: Request, res: Response, next: NextFunction) => {
//         try {
//             const user = await UserServices.createUser(req);
//             res.status(httpStatus.CREATED).json({
//                 status: "success",
//                 message: "User created successfully",
//                 user
//             });
//         } catch (error) {
//             const err = error as Error;
//             res.status(httpStatus.BAD_REQUEST).json({
//                 status: "error",
//                 message: err.message || "Failed to create user"
//             });
//         }
//     }
// );
// export const userController = {
//     getUsers,
//     createUser
// };
//# sourceMappingURL=user.controller.js.map