import { Filter } from 'bad-words';
import { createTweet as createTweetRepository,
     getTweets as getTweetsRepository ,
    getTweetById as getTweetByIdRepository,
    deleteTweet as deleteTweetRepository
    ,updateTweet as updateTweetRepository
    } from '../repositories/tweetRepository.js';
import { StatusCodes } from 'http-status-codes';

export const createTweet = async ({body}) => {
  const filter = new Filter();

    if (filter.isProfane(body)) {

        console.log(body);
        console.log(filter.clean(body));
        throw {
            message: "Tweet contains profanity",
            status: 400
        };
    }

    const tweet = await createTweetRepository({body})
    return tweet;
}

export const getTweets = async () =>{
    const tweets = await getTweetsRepository();
    return tweets
}

export const getTweetById = async (id) => {
    const tweet = await getTweetByIdRepository(id);
    if(!tweet){
        throw { 
            message: "Tweet not found",
            status: StatusCodes.NOT_FOUND
        };
        }
    return tweet;
}

export const deleteTweet = async (id) => {
    const tweet = await deleteTweetRepository(id);
    if(!tweet){
        throw {
            message: "Tweet not found",
            status: StatusCodes.NOT_FOUND
        };
    }
    return tweet;
}

export const updateTweet = async (id, body) => {
    const tweet = await updateTweetRepository(id, body);
    if(!tweet){
        throw {
            message: "Tweet not found",
            status: StatusCodes.NOT_FOUND
        };
    }
    return tweet;
}