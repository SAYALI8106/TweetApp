import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";

export const createTweetManualValidator = (req, res, next) => {
    if(!req.body.tweet){
        return res.status(400).json({error: "Tweet is required"});
    }
    console.log("createTweetManualValidator" + req.body.tweet);

    if(req.body.tweet.length > 200){
        return res.status(StatusCodes.BAD_REQUEST).json({
            success: false,
            message: "Tweet is too long must be 200 characters or less"});
    }

    next();
}

export const getTweetByIdManualValidator = (req, res, next) => {
   const isValidId = mongoose.Types.ObjectId.isValid(req.params.id);
   if(!isValidId){
       return res.status(StatusCodes.BAD_REQUEST).json({
           success: false,
        message: "Invalid tweet id"
       });
   }

   next();
}