import type { NextFunction, Request, Response } from "express";
import { json } from "zod";
import  jwt from "jsonwebtoken"

export const authCheck = (req: Request,res: Response, next: NextFunction) =>{
    const accessToken = req.cookies?.accessToken

    if (!accessToken){
        res.status(400).json({
            status:"error",
            message:"cookie not found"
        })
    }

    const checkToken = jwt.verify(accessToken, "secrets")
    console.log(checkToken);
    
    next()
}

