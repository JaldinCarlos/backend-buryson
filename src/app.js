import express from "express";
import morgan from 'morgan';
import cors from 'cors';
import { 
    userRouter, 
    groupRouter, 
    memberRouter, 
    eventRouter, 
    guestRouter, 
    itemRouter 
} from "./routes";
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
app.use("/api/v1/groups/", groupRouter);
app.use("/api/v1/members/", memberRouter);
app.use("/api/v1/events/", eventRouter);
app.use("/api/v1/guests/", guestRouter);
app.use("/api/v1/items/", itemRouter);



export default app;