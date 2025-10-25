import type { Request, Response } from "express";
export declare const UserServices: {
    createUser: (req: Request, res: Response) => Promise<import("mongoose").Document<unknown, {}, {
        name: string;
        role: "USER" | "ADMIN";
        otp: string;
        email: string;
        password: string;
        avatar: string;
        isVerified: boolean;
        isPremium: boolean;
    } & import("mongoose").DefaultTimestampProps, {}, {
        timestamps: true;
        versionKey: "";
    }> & {
        name: string;
        role: "USER" | "ADMIN";
        otp: string;
        email: string;
        password: string;
        avatar: string;
        isVerified: boolean;
        isPremium: boolean;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        "": number;
    }>;
};
//# sourceMappingURL=user.services.d.ts.map