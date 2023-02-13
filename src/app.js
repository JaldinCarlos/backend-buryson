import express from "express";
import morgan from 'morgan';
import cors from 'cors';
import { userRouter } from "./routes";
const app = express();

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({
    origin: true,
    credentials: true
}));
app.use(express.urlencoded({extended: false}))

//Routes
app.use("/api/v1/users/", userRouter);

export default app;