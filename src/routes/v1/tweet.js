import express from "express";
import { createTweet, getTweetById, getTweets } from "../../controllers/tweetController.js";

const router = express.Router(); // Create router object

router.get('/',getTweets)

router.get('/:id',getTweetById)

router.post('/',createTweet);

export default router;