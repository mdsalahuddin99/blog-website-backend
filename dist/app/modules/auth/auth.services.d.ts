import type { Response } from "express";
import type { IAuth } from "./auth.interface.js";
export declare const AuthServices: {
    login: (payload: IAuth, res: Response) => Promise<Response<any, Record<string, any>> | {
        accessToken: string;
    }>;
};
//# sourceMappingURL=auth.services.d.ts.map