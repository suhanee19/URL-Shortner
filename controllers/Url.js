import { nanoid } from "nanoid";
import UrlModel from "../Model/Url.js";
export async function generateShortUrl(req, res) {
    try{
    const{originalUrl}=req.body;
    if(!originalUrl)
        return res.status(400).send({message: "Long Url is required "})
        
    const shortId= nanoid(10);

    //saving to db
    const data = new UrlModel({originalUrl,shortId})
    await data.save();

    res.status(201).send({shortId:   `${req.protocol}://${req.get("host")}/${shortId}`});

}

    catch(error){
        res
        .status(500)
        .send({message:"There is some error", 
        errString:error.message,
    });
    }
    
    //can use uuid, math. random, nano id
}
export async function redirectToUrl(req, res) {
    const {shortId} = req.params;
     if(!shortId)
        return res.status(400).send({message: "Generate short ID "});
    //FINDING ORGINAL
    const url =await UrlModel.findOne({shortId: shortId});
    if(url){
        return res.redirect(url.originalUrl)
    }
    else{
        return res.status(404).send({message:"NO url found."})
    }

}

