import express from "express";
import morgan from "morgan";
import { PORT } from "./config/serverConfig.js";
import tweetRouter from "./routes/v1/tweet.js";
import apiRouter from "./routes/apiRoutes.js";

const app = express();
 

app.use(morgan("combined"));
app.use(commonMiddleware);

app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', "src" + '/views');
console.log(import.meta.dirname + '/views')

app.use('/tweets', tweetRouter);
function mid1(req, res, next) {
    console.log("mid1");
    next();
}
app.use('/api', apiRouter)
app.get("/", (req, res) => {
  res.render('home');  
});
function commonMiddleware(req, res, next) {
    console.log("commonMiddleware");
    next();
}



app.get("/ping", mid1, (req, res) => { 
   res.json({ message: "pong" });  
});
// app.post("/hello", (req, res) => {
//     console.log("query param", req.query); //query params
//     console.log("req body", req.body); //req body
//    return res.json({ message: "hello world" });  
// });

app.get("/tweets/:tweet_id", (req, res) => {
    console.log(req.params); //url params
   return res.json({ message: "tweet details" });  
});

app.all("*", (req, res) => {    
   return res.status(404).json({ message: "not found" }); 
});

app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
