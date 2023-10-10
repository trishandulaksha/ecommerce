const asyncHandler = require("express-async-handler");
const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const optGenarator = require("otp-generator");




//get user details

const getUsers = asyncHandler(async (req, res) => {
  const userId = req.params.id
  const users = await userModel.findOne({_id:userId});
  console.log('Found user:', users);
  res.status(200).json({users: users});
});

//Register User
const registerUser = asyncHandler(async (req, res) => {
  const { user_name, phone_number, email, gender, password, confirm_password } = req.body;

  if (!user_name || !phone_number || !email || !gender || !password || !confirm_password) {
    res.status(400).json({ error: "All fields are required" });
  } else if (password !== confirm_password) {
    res.status(400).json({ error: "Password and confirm_password do not match" });
  } else {
    try {
      const existUsername = await userModel.findOne({ user_name });
      const existEmail = await userModel.findOne({ email });

      if (existUsername) {
        res.status(400).json({ error: "Username already exists" });
      } else if (existEmail) {
        res.status(400).json({ error: "Email already exists" });
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await userModel.create({
          user_name,
          phone_number,
          email,
          gender,
          password: hashedPassword,
        });
        res.status(201).send({ message: "Registration successful", user_details: user });
      }
    } catch (error) {
      res.status(500).send({ error: "Internal Server Error" });
    }
  }
});


//Login User

const loginUser = asyncHandler(async (req, res) => {
  const { user_name, password } = req.body;
  if (!user_name || !password) {
    res.status(404);
    throw new Error("All Fields are required");
  }

  const user = await userModel.findOne({ user_name });

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  if (user && (await bcrypt.compare(password,user.password))) {

   // create jwt token

   const token = jwt.sign({
    userId: user.id,
    user_name:user.user_name
   },process.env.JWT_SECRET,{expiresIn:"30m"})

    
    res.status(200).json({ message: "login Success", user_details:user.user_name , token });
    
  }else{
    res.status(401);
    throw new Error("Password is incorrect");
  }

  
});

//update user

const updateUser = asyncHandler(async (req, res) => {
  

  const {userId} = req.user;

  try {
    const user = await userModel.findById({_id:userId});
    if (!user) {
      res.status(404);
      throw new Error("User not found");
    }
    
    if (req.body.user_name) {
      user.user_name = req.body.user_name;
    }
    if (req.body.phone_number) {
      user.phone_number = req.body.phone_number;
    }
    if (req.body.email) {
      user.email = req.body.email;
    }
    if (req.body.password) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      user.password = hashedPassword;
    }

    

    await user.save();
    res
      .status(200)
      .json({ message: "User details updated", user_details: user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Genarate OTP
const genarateOTP = asyncHandler(async (req, res) => {
  const { email } = req.query;


  if (!email) {
    res.status(400).json({ error: "Email not fount or Invalid email address" });
    return;

  } 
  const existUsername = await userModel.findOne({ email });

 if (existUsername) {
  req.app.locals.OTP = await optGenarator.generate(6 , {lowerCaseAlphabets: false , upperCaseAlphabets:false , specialChars:false });
    res.status(201).send({ code: req.app.locals.OTP});
 
    }
  
    
});

//Verify OTP
const verifyOTP = asyncHandler(async (req, res) => {
   const {code,email} = req.query;



  if (!email) {
    res.status(400).send({ error: "Email is required" });
    return;

  } 
  const existUseremail = await userModel.findOne({ email });

 if (existUseremail) {

   if (parseInt(req.app.locals.OTP) === parseInt(code)) {
    req.app.locals.OTP = null;
    req.app.locals.resetSession = true;
    return res.status(200).send({msg:'Verify OTP Success'});
   }else{
    res.status(400).send({ message: "Invalid OTP" });
   }
 }else{
  res.status(400).send({ message: "User Name not found" });
 }
  

});

//Succefullt redirect user when OTP is valid
const createResetSession = asyncHandler(async (req, res) => {
  if(req.app.locals.resetSession){
    req.app.locals.resetSession = false;
    return res.status(200).send({msg:"access granted"});  
  }
  
  res.status(401).send({ error: "Session Expired" });
});

//Reset Password
const resetPassword = asyncHandler(async (req, res) => {
  try {
    if(!req.app.locals.resetSession ) return res.status(401).send({ error: "Session Expired" }) 
   
    const { email, password } = req.body;

    // Check if the username exists
    const user = await userModel.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update the user's password using the `updateOne` method
    await userModel.updateOne({ email: email }, { password: hashedPassword });
    req.app.locals.resetSession = false;
    return res.status(201).send({ msg: "User updated successfully" });
  } catch (error) {
    console.error("Error resetting password:", error);
    return res.status(500).send({ error: "Internal Server Error" });
  }
});


module.exports = {
  getUsers,
  registerUser,
  loginUser,
  updateUser,
  genarateOTP,
  verifyOTP,
  createResetSession,
  resetPassword,
};
