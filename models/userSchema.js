const mongoose=require('mongoose')

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    role:{
        type:String,enum:['user','admin'],default:"user"
    }
})

module.exports = mongoose.model("user",userSchema)