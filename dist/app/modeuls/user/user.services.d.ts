import type { Request } from "express";
export declare const UserServices: {
    createUser: (req: Request) => Promise<import("mongoose").Document<unknown, {}, {
        name: string;
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