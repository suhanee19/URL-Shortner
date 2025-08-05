import { Router } from "express";
const UrlRouter = Router();
import { generateShortUrl } from "../controllers/Url.js";

UrlRouter.post("/shortener", generateShortUrl)

export default UrlRouter