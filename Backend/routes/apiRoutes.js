import { Router } from "express";
//import { addData, deleteData, fetchData, fetchSingleData, updateData } from "../Api.js";

const apiRouter = Router();

apiRouter.get("/", fetchData);

apiRouter.get("/:id", fetchSingleData);

apiRouter.post("/", addData);

apiRouter.put("/:id",updateData);

apiRouter.delete("//:id",deleteData);

export default apiRouter;