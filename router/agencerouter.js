const express =require("express");
const { getAgences, addAgence, deleteAgence, updateAgence } = require("../controler/agencecontroler");
const agenceRout=express.Router();
agenceRout.get('/agence/get',getAgences);
agenceRout.post('/agence/post',addAgence);
agenceRout.delete('/agence/delete/:id',deleteAgence);
agenceRout.put('/agence/update/:id',updateAgence);
module.exports=agenceRout;
