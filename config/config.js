const mongoose=require("mongoose");
//exports.config=async()=>{ named export
const config=async()=>{ // configurations for the database connection
    try {
       await mongoose.connect("mongodb://127.0.0.1:27017/travailler_en_allemagne");
       console.log( "MongoDB Connected Successfully!");
    } catch (error) {
        console.log(error);
    }
}
module.exports=config; // on exporte la fonction de connection à MongoDB   