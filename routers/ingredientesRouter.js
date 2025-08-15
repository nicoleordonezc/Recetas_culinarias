import { Router } from "express";
import { getDB } from "../db/config.js";

const router = Router();

//consultar todas las recetas que contengan un ingrediente especifico
//http://localhost:5500/recetasCulinarias/getIngrediente

router.get("/getIngrediente/:ingredienteNombre", async function(req, res) {
   try {
      const ingrediente = req.params.ingredienteNombre;
      const receta = await getDB().collection("recetas").find({ingredientes: ingrediente}).toArray();
      if (!receta){
         res.status(404).json({error: "La receta no existe"})
      }
      res.status(200).json(receta)
      } catch (error) {
      res.status(500).json({error:"Error interno del servidor"})
      } 
});

//registrar ingrediente nuevo
//http://localhost:5500/recetasCulinarias/patchIngrediente


router.patch("/patchIngrediente/:nombre", async function(req, res) {
      const nombreReceta = req.params.nombre;
      const receta = await getDB().collection("recetas").findOne({nombre: nombreReceta});
      if (!receta){
         res.status(404).json({error: "La receta no existe"})
      }
      const {ingrediente} = req.body;
      await getDB().collection("recetas").updateOne({ nombre: nombreReceta }, { $push: {ingredientes:ingrediente} } 
  );
  res.status(200).json({ message: "Ingrediente agregado correctamente" });
});


//Eliminar un ingrediente
//http://localhost:5500/recetasCulinarias/patchDeleteIngrediente/"nombreReceta"

router.patch("/patchDeleteIngrediente/:nombre", async function(req, res) {
      const nombreReceta = req.params.nombre;
      const receta = await getDB().collection("recetas").findOne({nombre: nombreReceta});
      if (!receta){
         res.status(404).json({error: "La receta no existe"})
      }
      const {ingrediente} = req.body;
      await getDB().collection("recetas").updateOne({ nombre: nombreReceta }, { $pull: {ingredientes:ingrediente} } 
  );
  res.status(200).json({ message: "Ingrediente eliminado" });
});


export default router;