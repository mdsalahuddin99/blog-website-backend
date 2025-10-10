import { email, string } from "zod";

 export  interface IAuth {
    email:string;
    password:string;
}