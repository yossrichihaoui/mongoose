const agences=require("../model/agencemodel");
exports.addAgence=async(req,res)=>{
    try {
        const newAgence=new agences(req.body)
        await newAgence.save();
        res.status(200).send({msg:"ajout avec succes",newAgence})
    } catch (error) {
        res.status(500).send({msg:"ajout avec failed",error})
    }
}
exports.getAgences=async(req,res)=>{
    try {
        const allAgences= await agences.find();

        res.status(200).send({msg:"get successufly",allAgences})
    } catch (error) {
        res.status(500).send({msg:"Agences not found",error})
    }
}

exports.deleteAgence=async(req,res)=>{
    try {
        const suppAgence= await agences.findByIdAndDelete(req.params.id);
      //  const suppAgence= await agences.deleteOne({_id: req.params.id});
       
        res.status(200).send({msg:"delete successufly",suppAgence})
    } catch (error) {
        res.status(500).send({msg:"Agences not found",error})
    }
}

exports.updateAgence=async(req,res)=>{
    try {
        const updatedAgence= await agences.findByIdAndUpdate(req.params.id,{$set:req.body});
      //  const suppAgence= await agences.deleteOne({_id: req.params.id});
       
        res.status(200).send({msg:" updated successufly",updatedAgence})
    } catch (error) {
        res.status(500).send({msg:"Agences not found",error})
    }
}
