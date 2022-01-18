const User=require('../models/userSchema')
const bcrypt=require('bcryptjs');


const signup=async(req,res)=>{
const data=req.body
const student=new User(data)
await student.save();
res.status(200).json({message:"successfully signup"})
}




const login=async(req,res)=>{

try{
    let token;
const {email,password} =req.body;
   const check= await User.findOne({email:email});
   if(check){
    const isMatch=await bcrypt.compare(password,check.password);
     //generate token
   token= await check.generateAuthToken();
  console.log(token);
  //store in cookies
  res.cookie("jwtoken",token,{
    expiresIn:new Date(Date.now()+2589200000),
    httpOnly:true
});

    if(!isMatch){
        res.status(400).json({message:"error"})
    }
    else{
        res.status(200).json({message:"login"})
    }
   }
   else{
   
    res.status(400).json({message:"invalid credentials"})
 }

}
catch(err){
console.log(err);
}



}
module.exports={signup,login}