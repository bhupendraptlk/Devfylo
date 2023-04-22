const express = require('express');
const authRouter = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('../config/db');
const User = require('../models/userSchema')

authRouter.get('/test',(req,res)=>{
    console.log("......");
    res.send("Good work..");
})

//Using Promises
// authRouter.post('/register',(req,res)=>{
//     const {firstname,lastname,specialization,regno,year,branch,course,email,linkedin,github,leetcode,codechef,hackerrank,instagram} = req.body;
//     if((!firstname) || (!lastname) || (!specialization) || (!regno) || (!year) || (!branch) || (!course) || (!email) || (!linkedin) || (!github) || (!leetcode) || (!codechef) || (!hackerrank) || (!instagram)){
//         return res.status(422).json({error:"Fill all the fields"});
//     }
//     User.findOne({email:email}) //database:user_input
//         .then((userExists)=>{
//             if(userExists){
//                 return res.status(422).json({error:"User already exists"});
//             }
//         })
//         const user = new User({firstname,lastname,specialization,regno,year,branch,course,email,linkedin,github,leetcode,codechef,hackerrank,instagram});
//         user.save()
//             .then(()=>{
//                 res.status(200).json({message:"User added"});
//             })
//             .catch((err)=>{
//                 res.status(500).json({error:err});
//             })
// })

//Using async-await
authRouter.post('/register',async(req,res)=>{
    const {username,password,firstname,lastname,specialization,regno,year,branch,course,email,linkedin,github,leetcode,codechef,hackerrank,instagram} = req.body;
    if((!username) || (!password)|| (!firstname) || (!lastname) || (!specialization) || (!regno) || (!year) || (!branch) || (!course) || (!email) || (!linkedin) || (!github) || (!leetcode) || (!codechef) || (!hackerrank) || (!instagram)){
        return res.status(422).json({status:"422",error:"Fill all the fields"});
    }
    const userExists= await User.findOne({regno:regno}) //database:user_input
    try{
        if(userExists){
            return res.status(422).json({status:"422",error:"User already exists"});
        }
        const user = new User({username,password,firstname,lastname,specialization,regno,year,branch,course,email,linkedin,github,leetcode,codechef,hackerrank,instagram});
        await user.save();
        res.status(200).json({status:"200",message:"User added"});
    }
    catch(err){
        res.status(500).json({status:"500",error:"Registration failed"});
    }
})

authRouter.post('/login',async(req,res)=>{
    try{
        const {username,password} = req.body;
        if(!username || !password){
            return res.status(400).json({error:"Please fill all the details"});
        }
        const userLogin = await User.findOne({username:username})
        if(userLogin){
            const isMatch = await bcrypt.compare(password,userLogin.password);
            if(!isMatch){
                res.status(400).json({error:"Invalid User"});
            }
            else{
                const token = await userLogin.generateAuthToken();
                res.cookie('jwtoken',token,{
                    expires: new Date(Date.now()+300000),
                    httpOnly:true
                })
                res.json({message:"Login Successful!"});
            }
        }
        else{
            res.status(400).json({error: "Invalid User"})
        }
    }
    catch(err){
        console.log(err);
    }
})

module.exports = authRouter;