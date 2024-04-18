 import mangoose from 'mongoose'
 const userSchema= new mangoose.Schema({
fullName:{type:String,
required:true
},
userName:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    required:true,
    minlength:6
},
gender:{
    type:String,
    required:true,
    enum:["male","female"]
},
ProfilePic:{
    type:String,
    default:""
}
},{timestamps:true})
const User =mangoose.model("User",userSchema);
export default User;