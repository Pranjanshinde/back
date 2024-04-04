const express=require("express");
const { PostMosel } = require("../Model/Postmodel");

const PostRouter=express.Router();

PostRouter.post("/",async(req,res)=>{
    try {
        const post=new PostMosel(req.body);
        await post.save();
        
        res.send({"msg":"new post added"});
    } catch (error) {
      res.send({"msg":error.message});  
    }
});

PostRouter.get("/",async(req,res)=>{
    try {
        console.log(req.query);
        console.log(req.body.user_id);
        console.log(req.headers.authorization);
        const posts=await PostMosel.find({$and: [{user_id:req.body.user_id}, {...req.query}]});
        res.send(posts);
    } catch (error) {
      res.send({"msg":error.message});  
    }
});

PostRouter.patch("/:id",async(req,res)=>{
    try {
        const {id}=req.params;
        console.log(id);
        await PostMosel.findByIdAndUpdate({_id:id},req.body);
        res.send({"msg":"post edited successfully"});
    } catch (error) {
      res.send({"msg":error.message});  
    }
});

PostRouter.delete("/:id",async(req,res)=>{
    try {
        const {id}=req.params;
        console.log(id);
        await PostMosel.findByIdAndDelete({_id:id});
        res.send({"msg":"post deleted successfully"});
    } catch (error) {
      res.send({"msg":error.message});  
    }
});

module.exports={PostRouter};