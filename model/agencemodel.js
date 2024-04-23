
const mongoose=require("mongoose");
const agenceSchema=new mongoose.Schema({
  name:String,
  adresse:String,
  phoneNumber:[Number],
  email:{type:String,required:true,unique:true},
  /*link_facebook:String,
  link_instagram:String,
  link_linkedin:String,
*/
links:[{facebook:String},{instagram:String},{linkedin:String}]
},{timestamps:true} 
)
module.exports=mongoose.model("agences",agenceSchema);// on exporte le modèle "agences" qui est lié à la base de données
