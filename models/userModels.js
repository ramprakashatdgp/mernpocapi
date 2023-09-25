const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
name:{
    type:String,
    required:[true,'name is reqiored']
},
email:{
    type:String,
    unique:true
},
Password:{
    type:String,
    required:[true,'name is reqiored']
}

},{timestamps:true})
const user_added=mongoose.model('User',userSchema);
module.exports=user_added;
