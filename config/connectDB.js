const mongoose=require('mongoose')
// require('dotenv').config();

const connectDB= async()=>{
    
    try {
       await mongoose.connect("mongodb://127.0.0.1:27017/listContact")
        console.log('db is connected')
        
    } catch (error) {
        console.log('db is not connected')
         
    }
        
    
   
}
module.exports = connectDB;