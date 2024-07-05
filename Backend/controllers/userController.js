const User = require('../models/user');

exports.getAllUsers = async (req,res)=>{
    try{
        const users = await User.find({});
        res.send(users)
    } 
    catch (error){
        res.status(500).send(error)
    }
}

exports.createUser = async (req,res)=>{
    try{
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user) ;   
    }
    catch (error){
        res.status(500).send(error)
    }
}

exports.deleteUser = async (req, res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user){
            return res.status(404).send("user does not exist")//if user not found
        }
        res.send(user)// if found user 
    }
    catch (error){
        res.status(500).send(error)
    }
}

exports.updateUser = async(req,res) =>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id,req.body)
        if(!user){
            return res.status(404).send("user does not exist")//if user not found
        }
        res.send(user)// if found user 
    }
    catch (error){
        res.status(500).send(error)
    }
}

// fetch the data of user with particular id
exports.getUserByID = async(req,res) =>{
    try{
        const user = await User.findById(req.params.id)
        if(!user){
            return res.status(404).send("user does not exist")//if user not found
        }
        res.send(user)// if found user 
    }
    catch (error){
        res.status(500).send(error)
    }
}

