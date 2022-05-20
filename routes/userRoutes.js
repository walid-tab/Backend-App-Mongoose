const express = require('express');
const { addUser, getAllUsers, deleteUser, updateUser, getOne } = require('../controllers/userControllers');
const userRouter=express.Router();

//method POST
userRouter.post('/addUser',addUser)
//mothod GET
userRouter.get('/users',getAllUsers)
//method delete
userRouter.delete('/delete/:id',deleteUser)
//method update
userRouter.put('/update/:id',updateUser)
//mothod GET One
userRouter.get('/users/:id',getOne)

module.exports=userRouter;
