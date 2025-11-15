import express from 'express';
import cors from 'cors';
const app=express();
app.use(cors());
app.get('/api/hello',(req,res)=>res.json({msg:'API ok'}));
app.listen(3000,()=>console.log("API rodando"));