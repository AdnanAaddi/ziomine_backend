import express from "express";
import './config/passport.js'; // This sets up the passport strategy

const app = express();


//routes import
import userRouter from './routes/user.routes.js'
import passport from "passport";

//routes declaration
app.use(express.json());
app.use(passport.initialize())


app.use("/api/v1/users", userRouter)

export default app;