import express from "express";
import { createTweet, getTweetById, getTweets } from "../../controllers/tweetController.js";
import  {validate}  from "../../validators/zodValidator.js";
import { tweetZodSchema } from "../../validators/tweetZodSchema.js";

const router = express.Router(); // Create router object

router.get('/',getTweets)

router.get('/:id',getTweetById)

router.post('/',validate(tweetZodSchema),createTweet);

export default router;