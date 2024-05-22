
const mongoose = require('mongoose')
const connectDB = async () =>{
   try {
    mongoose.set('strictQuery', false);
    const conn = await mongoose.connect(process.env.MONGODB_URI,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })   
    console.log( `datbaase is connected ${conn.connection.host}`)

   } catch (error) {
    console.log("error : ",error)
   }



}
module.exports= connectDB;