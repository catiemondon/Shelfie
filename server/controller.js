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
    }
}