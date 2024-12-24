import express from "express";

const router = express.Router(); // Create router object

router.get('/',(req, res)=>{
    res.json({message: "Welcome to the tweet route"});
})

router.get('/:id',(req, res)=>{
    res.json({message: "Tweet router details",
    id: req.params.id
    });    
})

export default router;