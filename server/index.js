const express= require('express')
const app=express()
const ctrl=require('./controller')
app.use(express.json())




const port=3333;
app.listen(port, ()=>{
    console.log(`Slayyy server, S L A Y`)
})