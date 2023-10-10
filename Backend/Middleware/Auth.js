const jwt = require("jsonwebtoken");



const  Auth = (async (req,res,next)=>{
    try {
        
        const token = req.headers.authorization.split(" ")[1];
        console.log(token);
        const decodedToken = await jwt.verify(token , process.env.JWT_SECRET)

        req.user = decodedToken;

        res.status(200).json({decodedToken});


        next();
    } catch (error) {
        res.status(401).json({error:"Invalid authorization"})
    }
})



const localVariables = (req,res,next)=>{
     req.app.locals =  {
        OTP : null,
        resetSession :false,
     }
     next();
}

module.exports = {Auth , localVariables};