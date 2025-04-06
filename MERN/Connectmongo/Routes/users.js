const express = require('express');
const router = express.Router();

const user = require('../Models/usermodel');

router.get('/users', async (req, res) => {
    try {
        const users = await user.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({success:false,message:err.message});
    }
});


router.post('/users', async (req, res) => {
    console.log("send req");
    try {
        const {name,age,email,password}=req.body;
        const newUser = new user({
            name,
            age,
            email,
            password
        });
    
        await newUser.save();
        res.status(200).json({
            success: true,
            user: newUser,
            message: 'User created successfully',
        });
    }
    catch (err) {
        res.status(500).json({success:false,message:err.message});
    }
});


router.put('/users/:id', async (req, res) => {
    const {id} = req.params;
    const {name,age,email,password}=req.body;

    try {
        const result = await user.findByIdAndUpdate(id, {name,age,email,password});
            if(!result){
                res.status(404).json({success:false,message:'User not found'});
            }

            res.status(200).json({
                success: true,
                user: result
            });

        
        } catch (err) {   
            res.status(500).json({success:false,message:err.message});
        }
    });



    router.delete('/users/:id', async (req, res) => {
        const {id} = req.params;
    
        try {
            const result = await user.findByIdAndDelete(id);
            if(!result){
                res.status(404).json({success:false,message:'User not found'});
            }
    
            res.status(200).json({
                success: true,
                user: result,
                message: 'User deleted successfully'
            });
        } catch (err) {
            res.status(500).json({success:false,message:err.message});
        }
    }); 
module.exports = router;