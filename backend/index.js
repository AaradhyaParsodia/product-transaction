import express from "express";
import 'dotenv/config';
import cors from 'cors';
import { rootRouter } from "./src/routes/index.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/v1', rootRouter);

app.get('/check', (req, res)=>{
    res.status(200).send("<h1>All Good<h1/>");
})

app.listen(port, (err)=>{
    if(!err){
        console.log(`shhhhhhhhhhhhhhhh it is listening over ${port}`);
    }
    else{
        console.error(err);
    }
})