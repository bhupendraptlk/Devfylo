const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
  username:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  regno: {
    type: Number,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  linkedin:{
    type:String,
    required:true,
  },
  github: {
    type: String,
    required: true
  },
  leetcode: {
    type: String,
    required: false
  },
  codechef: {
    type: String,
    required: false
  },
  hackerrank: {
    type: String,
    required: false
  },
  instagram:{
    type:String,
    required:false
  },
  tokens:[
    {
      token:{
        type: String,
        required: true
      }
    }
  ]
});

userSchema.pre('save',async function(next){
  if(this.isModified('password')){
    this.password = await bcrypt.hash(this.password,12);  //salt rounds
  }
  next();
})

//Since userSchema is an instance, we can call generateAuthToken as a method
userSchema.methods.generateAuthToken = async function(){
  const token = jwt.sign({_id:this._id},process.env.SECRET_KEY);
  this.tokens = this.tokens.concat({ token : token });
  await this.save();
  return token;
}

const User = mongoose.model("PROFILE", userSchema);

module.exports = User;