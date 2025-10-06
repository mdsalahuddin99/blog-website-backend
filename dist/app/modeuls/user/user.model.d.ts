import mongoose from "mongoose";
export declare const User: mongoose.Model<{
    name: string;
    email: string;
    password: string;
    avatar: string;
    isVerified: boolean;
    isPremium: boolean;
} & mongoose.DefaultTimestampProps, {}, {}, {}, mongoose.Document<unknown, {}, {
    name: string;
    email: string;
    password: string;
    avatar: string;
    isVerified: boolean;
    isPremium: boolean;
} & mongoose.DefaultTimestampProps, {}, {
    timestamps: true;
    versionKey: "";
}> & {
    name: string;
    email: string;
    password: string;
    avatar: string;
    isVerified: boolean;
    isPremium: boolean;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    "": number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    versionKey: "";
}, {
    name: string;
    email: string;
    password: string;
    avatar: string;
    isVerified: boolean;
    isPremium: boolean;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    email: string;
    password: string;
    avatar: string;
    isVerified: boolean;
    isPremium: boolean;
} & mongoose.DefaultTimestampProps>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
    versionKey: "";
}>> & mongoose.FlatRecord<{
    name: string;
    email: string;
    password: string;
    avatar: string;
    isVerified: boolean;
    isPremium: boolean;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    "": number;
}>>;
//# sourceMappingURL=user.model.d.ts.map