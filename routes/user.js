import express from "express";
const router = express.Router();
import {postMessage} from "../controllers/user.controller.js"

router.post("/message", postMessage);

export default router;