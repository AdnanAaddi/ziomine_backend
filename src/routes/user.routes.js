import { Router } from "express";
import { dashboardUser, registerUser } from "../controllers/user.controllers.js";
import { loginUser } from "../controllers/user.controllers.js";
import passport from "passport";

const router = Router()
router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/dashboard").get(passport.authenticate("jwt", {session : false}) ,dashboardUser)


export default router
    