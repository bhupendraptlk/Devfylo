const express = require('express');
const profileRouter = express.Router();
const User = require('../models/userSchema')

profileRouter.get('/all',async(req,res)=>{
    const profiles = await User.find();
    if(profiles){
        res.status(200).json({status:"200",data:profiles})
    }
    else{
        res.status(400).json({status:"400",error:"No profiles found"})
    }
})

profileRouter.get('/:username',async(req,res)=>{
    const profile = await User.findOne({username:req.params.username});
    profile ? res.status(200).json({status:"200",data:profile}) 
    : res.status(400).json({status:"400",error:`No profile found with the username : ${req.body.username}`})
})

profileRouter.get('/search/:username',async(req,res)=>{
    // var regexp = new RegExp("^"+ req.params.username);
    // const profile = await User.find({ username: regexp});
    const profile = await User.find({ username: {$regex : "^" + req.params.username}});
    profile ? res.status(200).json({status:"200",data:profile}) 
    : res.status(400).json({status:"400",error:`No profile found with the username : ${req.body.username}`})
})

module.exports = profileRouter;