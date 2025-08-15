import dotenv from 'dotenv';
import express from 'express';
import usuarioRouter from "./routers/usuariosRouter.js"
import recetasRouter from "./routers/recetasRouter.js"
import ingredienteRouter from "./routers/ingredientesRouter.js"
import connect from "./db/config.js"

dotenv.config();

const port = process.env.PORT || 5500;
const app = express();

app.use(express.json());

app.use("/recetasCulinarias", usuarioRouter, recetasRouter, ingredienteRouter );


connect().then(()=>{
    app.listen(port, ()=>{
        console.log("http://localhost:"+port);
    })
})