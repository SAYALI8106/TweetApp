
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

export const createTweet = (req, res)=>{
    console.log(req.body);
    return res.json({
         message: "tweet created",
         body: req.body
         });
}