const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    user_name:{
        type: String,
        require:[true , "User namer is required"],
        unique:(true, "User name exists")
    },
    phone_number:{
        type: Number,
        require:[true , "Phone number is required"]
    },
    email:{
        type: String,
        require:[true , "Email required"]
    },
    gender:{
        type: String,
        require:[true , "Gender required"]
    },
    password:{
        type: String,
        require:[true , "Password required"]
    },
    confirm_password:{
        type: String,
        require:[true , "Confirm Password id required"]
    },
},{
    timestamps:true,
})

module.exports = mongoose.model("fascouser" , userSchema);