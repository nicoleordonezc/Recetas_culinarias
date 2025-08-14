import { Router } from "express";
import { getDB } from "../db/config.js";

const router = Router();

//consultar todos los usuarios
//http://localhost:5500/recetasCulinarias/findall

router.get("/findall", async function(req, res) {
   try {
    const usuarios = await getDB().collection("usuarios").find().toArray();
    res.status(200).json(usuarios)
   } catch (error) {
    res.status(500).json({error:"Error interno de servidor"})
   } 
})

//consultar un usuario especifico
//http://localhost:5500/recetasCulinarias/get/"cedula"

router.get("/get/:cedula", async function(req, res) {
   try {
      const idUsuario = parseInt(req.params.cedula);
      const usuario = await getDB().collection("usuarios").findOne({cedula: idUsuario});
      console.log(idUsuario, usuario);
      
      if (!usuario){
         res.status(404).json({error: "El usuario no existe"})
      }
      res.status(200).json(usuario)
      } catch (error) {
      res.status(500).json({error:"Error interno del servidor"})
      } 
});

//registrar usuario nuevo
//http://localhost:5500/recetasCulinarias/registarUsuario

router.post("/registarUsuario", async function (req, res) {
   try {
      const {nombre, cedula, telefono, correo} = req.body;
      if(!nombre || !cedula || !telefono || !correo){
         res.status(400).json({ error: "Datos invalidos"})
      }
      const nuevoUsuario = {
         nombre,
         cedula,
         telefono,
         correo
      };
      await getDB().collection("usuarios").insertOne(nuevoUsuario);
      res.status(201).json({message: "Usuario ha sido creado"})
   } catch (error) {
      res.status(500).json({error: "Error interno del servidor"})
   }
})


export default router;