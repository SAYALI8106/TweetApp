import { StatusCodes } from "http-status-codes";
import { createTweet  as createTweetService, 
    getTweets as   getTweetsService,
    getTweetById as getTweetByIdService
    ,deleteTweet as deleteTweetService
    ,updateTweet as updateTweetService
} from "../services/tweetService.js";
import { errorResponse, successResponse } from "../utils/responses.js";


export const createTweet = async (req, res)=>{
    try{
        console.log("createTweet req.body", req.body);
        const response = await createTweetService({
            body: req.body.body
        });
        return successResponse(res, "Tweet created successfully", response);
    }catch(error){

        errorResponse(error,res);       
    }
}

export const getTweets = async (req, res)=>{
    try{
        const response = await getTweetsService();
        return successResponse(res, "Tweets fetched successfully", response);    
    }catch(error){
        errorResponse(error,res);          
    }
}

export const getTweetById= async (req, res)=>{
    try{
        const response = await getTweetByIdService(req.params.id);
        return successResponse(res, "Tweet fetched successfully", response);  
    }catch(error){
        errorResponse(error,res);       
    }
}

export const deleteTweet = async (req, res)=>{
    try{
        const response = await deleteTweetService(req.params.id);
        return successResponse(res, "Tweet deleted successfully", response);    
    }catch(error){
        errorResponse(error,res);    
    }
}

export const updateTweet = async (req, res)=>{
    try{
        const response = await updateTweetService(req.params.id, req.body.body);     
           
        return successResponse(res, "Tweet updated successfully", response);  
    }catch(error){
        errorResponse(error,res);    
    }
}