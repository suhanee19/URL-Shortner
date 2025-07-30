import express from "express";
import "dotenv/config";
import connectToDB from "./config/db.js";
import apiRouter from "./controllers/routes/apiRoutes.js";

const app = express();
const port = process.env.PORT;
app.use(express.json());
const names=[
    {id: 1, name:"Suhani"},
    {id: 2, name:"mudit"},
    {id: 3, name:"xeena"},
    
];

connectToDB();

//Routes
app.use("/data",apiRouter);

app.listen(port,()=> console.log("Server started at port " +port));
