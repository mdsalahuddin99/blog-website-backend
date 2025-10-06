import dotenv from 'dotenv';


dotenv.config();

type envType={
    PORT: string;
    DB_URI: string;

}

const envVarsFn =  (): envType=> {
    const requiredEnvVariables = [
        'PORT',
        'DB_URI'
    ];

    requiredEnvVariables.forEach((key: string) => {
        if (!process.env[key]) {
            throw new Error(`Missing required environment variable ${key}`);
        }
    });

    return{
        PORT: process.env.PORT as string,
        DB_URI: process.env.DB_URI as string,
    }
};


export const envVars = envVarsFn()

