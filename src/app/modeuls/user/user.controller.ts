import type { NextFunction, Request, Response } from "express";

import httpStatus from "http-status-codes"
import { User } from "./user.model.js";
import catchAsync from "../../utilis/catchAsync.js";



const getUsers =catchAsync(
   async (req: Request, res: Response, next: NextFunction) => {

   const user  = await User.find({})
    res.status(httpStatus.CREATED).json({
        status:"success",
        massages:" user Created successfully",
        user: user
    })

} 
)





const createUser = catchAsync(
   async (req: Request, res: Response, next: NextFunction) => {

   const users  = await User.insertOne(req.body)
    res.status(httpStatus.OK).json({
        status:"success",
        massages:"all user retrad successfully",
        data: users
    })

} 
)


export const userController ={
    getUsers,
    createUser
}
    
