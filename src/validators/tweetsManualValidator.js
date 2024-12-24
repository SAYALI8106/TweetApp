export const createTweetManualValidator = (req, res, next) => {
    if(!req.body.tweet){
        return res.status(400).json({error: "Tweet is required"});
    }
    console.log("createTweetManualValidator" + req.body.tweet);

    if(req.body.tweet.length > 200){
        return res.status(400).json({error: "Tweet is too long must be 200 characters or less"});
    }

    next();
}