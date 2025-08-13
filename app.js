import dotenv from 'dotenv';
import express from 'express';
import usuarioRouter from "./routers/usuariosRouter.js"
import connect from "./db/config.js"

dotenv.config();

const port = process.env.PORT || 5500;
const app = express();

app.use(express.json());

app.use("/recetasCulinarias", usuarioRouter );

app.get("/api", function (req,res) {
    res.send("Api OK!")
});

connect().then(()=>{
    app.listen(port, ()=>{
        console.log("http://localhost:"+port+"/api");
    })
})