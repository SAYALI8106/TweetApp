import express from "express";
import { createTweet, getTweetById, getTweets ,deleteTweet ,updateTweet} from "../../controllers/tweetController.js";
import  {validate}  from "../../validators/zodValidator.js";
import { tweetZodSchema } from "../../validators/tweetZodSchema.js";
import { getTweetByIdManualValidator } from "../../validators/tweetsManualValidator.js";



const router = express.Router(); // Create router object

router.get('/',getTweets)

router.get('/:id', getTweetByIdManualValidator,getTweetById)

router.delete('/:id', getTweetByIdManualValidator,deleteTweet)

router.post('/',validate(tweetZodSchema),createTweet);

router.put('/:id' ,getTweetByIdManualValidator,updateTweet);

export default router;