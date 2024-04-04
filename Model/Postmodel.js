const mongoose=require("mongoose");

const Postschema=mongoose.Schema({
    title : String,
    body : String,
    device : String,
    user_id:String
});

const PostMosel=mongoose.model("post",Postschema);

module.exports={PostMosel};