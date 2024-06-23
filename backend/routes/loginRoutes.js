const express=require('express')
const {getLoginDetails}=require('../controllers/loginController');

//router object
const router=express.Router()

//routes

//POST REGISTER DETAILS
router.post('/register',getRegisterDetails);

//GET login details
router.post('/login',getLoginDetails);



module.exports=router