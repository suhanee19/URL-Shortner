import express from "express";
import "dotenv/config";
import connectToDB from "./config/db.js";
// import apiRouter from "./controllers/routes/apiRoutes.js";
import UrlRouter from "./routes/Url.js";
import { redirectToUrl } from "./controllers/Url.js";
import cors from "cors";

const app = express();
const port = process.env.PORT;
// const names=[
//     {id: 1, name:"Suhani"},
//     {id: 2, name:"mudit"},
//     {id: 3, name:"xeena"},
    
// ];
app.use(cors());
app.use(express.json());
connectToDB();



//Routes

app.use("/api/url",UrlRouter);
app.get("/:shortId", redirectToUrl)



// app.use("/a")

app.listen(port,()=> console.log("Server started at port " +port));
