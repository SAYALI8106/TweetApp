import Tweet from "../schema/tweet.js";

export const createTweet = async ({body})=>{
 try{
        const tweet = await Tweet.create({body});
        return tweet;
 }catch(error){
     throw new Error(error);    
 }
}

export const getTweets = async ()=>{
    try{
        const tweets = await Tweet.find();
        return tweets;    
    }catch(error){
        throw new Error(error);    
    }
}

export const getTweetById = async (id)=>{
    try{
        const tweet = await Tweet.findById(id);
        return tweet;    
    }catch(error){
        throw new Error(error);    
    }
}