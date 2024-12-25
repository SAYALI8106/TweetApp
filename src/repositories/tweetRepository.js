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

export const deleteTweet = async (id)=>{
    try{
        console.log("deleteTweet");
        const tweet = await Tweet.findByIdAndDelete(id);
        console.log("deleted Tweet",tweet);
        return tweet;                                
    }catch(error){
        console.log("deleteTweet error");
        throw new Error(error);    
    }
}           

export const updateTweet = async (id, body)=>{
    try{
        const tweet = await Tweet.findByIdAndUpdate(id, {body} ,{new: true } );
        return tweet;
    }catch(error){
        throw new Error(error);    
    }
}   