import mongoose from 'mongoose';
const Connection = async (username="rohit-raj124",password="16101108021")=>{
    const URL=`mongodb+srv://${username}:${password}@cluster0.icu7xdh.mongodb.net/test`;
    try{
      await  mongoose.connect(URl,{useUnifiedTopology:true,useNewUrlParser:true});
        console.log("Database connected successfully")
    }
    catch(e){
        console.log("Error:",e.message);
    }
}

export default Connection;