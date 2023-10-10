const express = require('express');
const {getUsers,registerUser,loginUser,updateUser, genarateOTP,
    verifyOTP,
    createResetSession,resetPassword} = require('../userController/userController')
const {Auth,localVariables}  = require('../Middleware/Auth');
const registerMail  = require('../userController/mailer');


const router = express.Router();

// GET METHODS
router.get("/genarateOTP",localVariables,genarateOTP);
router.get("/verifyOTP",verifyOTP);
router.get("/createResetSession",createResetSession);
router.get("/:id",getUsers);


//POST METHODS
router.post("/register",registerUser);

router.post("/authenticate",(req,res) => {
    res.end();
});
router.post("/registermail",registerMail)
router.post("/login",loginUser);




//PUT METHODS
router.put("/update" ,Auth,updateUser);
router.put("/forgetpassword",resetPassword);

module.exports = router;