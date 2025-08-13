import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const port = process.env.PORT || 5500;
const app = express();

app.use(express.json());

// app.use("/");

app.get("/api", function (req,res) {
    res.send("Api OK!")
});

connect().then(()=>{
    app.listen(port, ()=>{
        console.log("http://localhost:"+port+"/api");
    })
})