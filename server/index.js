require('dotenv').config();
const express= require('express')
const dotenv= require('dotenv')
const app=express()
const massive= require('massive')
const ctrl=require('./controller')

const{SERVER_PORT, CONNECTION_STRING}= process.env



app.use(express.json())


massive(CONNECTION_STRING)
    .then(dbInstance =>{
        app.set('db', dbInstance)
        console.log('Database, you go girl')
    })
    .catch(err =>{
        if(err) throw err;
    })


app.get('/api/inventory', ctrl.getInventory)

app.post('/api/product', ctrl.createItem)

app.put('/api/inventory/:id', ctrl.updateItem)

app.delete('/api/inventory/:id', ctrl.deleteItem)

app.listen(SERVER_PORT, ()=>{
    console.log(`Slayyy server, S L A Y`)
})