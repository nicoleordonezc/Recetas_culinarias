import { Router } from "express";
import { getDB } from "../db/config.js";

const router = Router();

//consultar todos las recetas
//http://localhost:5500/recetasCulinarias/recetas

router.get("/recetas", async function(req, res) {
   try {
    const recetas = await getDB().collection("recetas").find().toArray();
    res.status(200).json(recetas)
   } catch (error) {
    res.status(500).json({error:"Error interno de servidor"})
   } 
})


//consultar una receta especifica
//http://localhost:5500/recetasCulinarias/getRecipe/"nombre"

router.get("/getRecipe/:nombre", async function(req, res) {
   try {
      const nombreReceta = req.params.nombre;
      const receta = await getDB().collection("recetas").findOne({nombre: nombreReceta});
      if (!receta){
         res.status(404).json({error: "La receta no existe"})
      }
      res.status(200).json(receta)
      } catch (error) {
      res.status(500).json({error:"Error interno del servidor"})
      } 
});

//consultar una receta especifica por usuario
//http://localhost:5500/recetasCulinarias/getRecipeByUser/"nombreUsuario"

router.get("/getRecipeByUser/:nombreUsuario", async function(req, res) {
   try {
      const usuario = req.params.nombreUsuario;
      const receta = await getDB().collection("recetas").findOne({nombreUsuario: usuario});
      if (!receta){
         res.status(404).json({error: "La receta no existe"})
      }
      res.status(200).json(receta)
      } catch (error) {
      res.status(500).json({error:"Error interno del servidor"})
      } 
});

//registrar receta nueva
//http://localhost:5500/recetasCulinarias/registarReceta

router.post("/registarReceta", async function (req, res) {
   try {
      const {nombre, descripcion, nombreUsuario} = req.body;
      if(!nombre || !descripcion || !nombreUsuario){
         res.status(400).json({ error: "Datos invalidos"})
      }
      const nuevaReceta = {
         nombre, descripcion, nombreUsuario, ingredientes:[]
      };
      await getDB().collection("recetas").insertOne(nuevaReceta);
      res.status(201).json({message: "La receta ha sido agregada"})
   } catch (error) {
      res.status(500).json({error: "Error interno del servidor"})
   }
});

//Actualizar receta
//http://localhost:5500/recetasCulinarias/patchReceta/"nombre"

router.patch("/patchReceta/:nombre", async function(req, res) {
      const nombreReceta = req.params.nombre;
      const receta = await getDB().collection("recetas").findOne({nombre: nombreReceta});
      if (!receta){
         res.status(404).json({error: "La receta no existe"})
      }
      const { nombre, descripcion} = req.body;
      await getDB().collection("recetas").updateOne({ nombre: nombreReceta }, { $set: { nombre, descripcion } } 
  );

  res.status(200).json({ message: "Receta actualizada correctamente" });
});


//Eliminar una receta
//http://localhost:5500/recetasCulinarias/deleteReceta/"nombre"

router.delete("/deleteReceta/:nombre", async function(req, res) {
      const nombreReceta = req.params.nombre;
      const receta = await getDB().collection("recetas").findOne({nombre: nombreReceta});
      if (!receta){
         res.status(404).json({error: "La receta no existe"})
      }
      await getDB().collection("recetas").deleteOne({nombre: nombreReceta})
      res.status(200).json({response:"La receta ha sido eliminada"})
});


export default router;