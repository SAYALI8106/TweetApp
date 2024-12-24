import { createTweet  as createTweetService } from "../services/tweetService.js";
export const getTweets = (req, res) =>{
    return res.json({
        message: "Welcome to the tweet route  getTweets"
    })
}

export const getTweetById = (req, res)=>{
    res.json({message: "Tweet router details getTweetById ",
    id: req.params.id
    });    
}

export const createTweet = async (req, res)=>{
    try{
        console.log("createTweet req.body", req.body);
        const response = await createTweetService({
            body: req.body.body
        });
        return res.status(201).json({
            success: true,
            message: "Tweet created successfully",
            data: response
        });
    }catch(error){

        if(error.status){
            return res.status(error.status).json({message: error.message,
                success: false
            });
        }

        return res.status(400).json({message: "Internal Server Error",
        success: false,
        error: error.message
        });    
    }
}