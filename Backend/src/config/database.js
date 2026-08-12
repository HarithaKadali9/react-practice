const mongoose=require("mongoose")
const connectDb=async()=>{
   try{
     await mongoose.connect(process.env.MongoDB_URI);
     console.log("mongodb connection established")
   }catch(error){
     console.log("mongodb connection failed", error.message)
   }
}

module.exports=connectDb;