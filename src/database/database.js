import { Sequelize } from "sequelize";
import dotenv  from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize(
    process.env.DB_DATABASE || "postgres",
    process.env.DB_USERNAME || "postgres",
    process.env.DB_PASSWORD || "",
    {
        host: process.env.DB_HOST || "127.0.0.1",
        dialect: process.env.DB_DIALECT || "postgres",
    }
);