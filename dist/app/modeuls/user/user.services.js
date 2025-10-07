// // user.services.ts
// import type { Request } from "express";
// import { User } from "./user.model.js";
// import { encryptPassword } from "./password.js";
export {};
// const createUser = async (req: Request) => {
//     const existingUser = await User.findOne({ email: req.body.email });
//     if (existingUser) {
//         throw new Error("User already exists");
//     }
//     const createdUser = await User.insertOne({
//         ...req.body,
//         password: encryptPassword(req.body.password)
//     });
//     return createdUser;
// };
// export const UserServices = {
//     createUser
// };
//# sourceMappingURL=user.services.js.map