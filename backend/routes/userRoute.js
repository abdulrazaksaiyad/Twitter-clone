import express from "express";
import {getOtherUsers, bookmarks, getMyProfile, Login , logout, Register, follow , unfollow } from "../controllers.js/userController.js";
import isAuthenticated from "../config/auth.js";

const router = express.Router();

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(logout);
router.route("/bookmark/:id").put(isAuthenticated, bookmarks);
router.route("/profile/:id").get(isAuthenticated, getMyProfile);
router.route("/otheruser/:id").get(isAuthenticated, getOtherUsers);
router.route("/follow/:id").post(isAuthenticated, follow);
router.route("/unfollow/:id").post(isAuthenticated, unfollow);



export default router;