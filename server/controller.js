module.exports ={
    getInventory: (req, res)=>{
        const dbInstance= req.app.get('db')

        dbInstance.get_inventory()
        .then(inventory =>{
            res.status(200).send(inventory)
        })
        .catch(error =>{
            if (error) throw error
        })
    },

    createItem: (req, res)=>{
        const dbInstance =req.app.get('db')
        const {name, price, img} =req.body
        
        dbInstance.create_product({name, price, img})
        .then(() =>{
            res.sendStatus(200)
        })
        .catch(error =>{
            if(error) throw error;
        })


    },

    deleteItem: (req, res)=>{
        const dbInstance= req.app.get('db');
        const { id }= req.params

        dbInstance.delete_product({id})
        .then(()=> res.sendStatus(200))
        .catch(err =>{
            if (err) throw err;
        })
    }
}