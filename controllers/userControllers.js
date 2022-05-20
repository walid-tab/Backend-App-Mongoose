const userSchema = require("../models/userSchema")

// method POST
// API : /addUser
exports.addUser= async (req,res)=>{
    try {
        const newUser = new userSchema(req.body);
        await newUser.save();
        res.status(200).send({msg:"user added successfully",newUser})
    } catch (error) {
        res.status(400).send('could not added')
    }
}

// method GET
// API : /users
exports.getAllUsers = async(req,res)=>{
    try {
        const users = await userSchema.find()
        res.status(200).send({msg:"list of Users",users})
    } catch (error) {
        res.status(400).send('could not get users')        
    }
}

// method Delete
// API : /delete/:id
exports.deleteUser=async(req,res)=>{
    try {
        const deleted= await userSchema.findByIdAndDelete(req.params.id)
        res.status(400).res({msg:"user deleted",deleted})
    } catch (error) {
        res.status(200).send({msg:"could not delete"})
    }
}

// method Update
// API : /update/:id
exports.updateUser=async(req,res)=>{
    try {
        const updated= await userSchema.findByIdAndUpdate(req.params.id,{$set:req.body})
    res.status(200).res({msg:"user updated successfully",updated})        
    } catch (error) {
        res.status(400).send({msg:"could not update"})
        
    }
}

// method GET
// API : /users/:id
exports.getOne=async(req,res)=>{
    try {
        const user = await userSchema.findById(req.params.id)
        res.status(200).send({msg:"User : ",user})
    } catch (error) {
        res.status(400).send('could not get user')        
    }
}