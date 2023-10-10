const mongoose  = require('mongoose');

const connectDB = async () =>{
    try{
        const connect = await mongoose.connect(process.env.DATABASE_URL)
        console.log("Database connection established :" , connect.connection.port)
    }catch(e){
        console.log(e)
        process.exit(1);
    }
}
 
module.exports = connectDB