const express = require('express')
const router = express.Router()

//importing schema model
const Ninja = require('../schema/route')

//get route

router.get('/ninjas', (req,res, next)=>{
    res.status(200).json({
        type:'GET'
    })
})
router.post('/ninjas', (req,res, next)=>{

    const ninja = new Ninja({
        name: req.body.name,
        rank: req.body.name,
        available: req.body.available
    })

    ninja
        .save()
        .then(result => {
            res.status(201).json({
                message: 'Ninja created successfully',
                createdNinja : {
                    name: result.name,
                    rank: result.rank,
                    available: result.available,
                    id: result._id,
                    request: {
                        type: "GET",
                        url: 'http://localhost:3000/api/ninjas/' + result._id
                    }
                }
            })
        })
        // .catch(next)
        //OR
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
})

router.put('/ninjas/:ninjaId', (req,res, next)=>{
    const id = req.params.ninjaId
    Ninja.findByIdAndUpdate({_id:id}, req.body, {new:true})//always remain like this
        .exec()
        .then(result => {
            res.status(200).json({
                name: result.name,
                rank: result.rank,
                available: result.available,
                request: {
                    type: 'GET',
                    url: 'http://localhost:3000/api/ninjas' + result._id
                }
            })
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                error: err
            })
        }) 
})

router.delete('/ninjas/:ninjaId', (req,res, next)=>{
    const id = req.params.ninjaId
    Ninja.remove({_id:id})
        .exec()
        .then(result=>{
            res.status(200).json({
                message: "Ninja deleted",
                request:{
                    type: 'POST',
                    url: 'http://localhost:3000/api/ninjas',
                    body: { name: "String", rank: 'String', available: "Boolean"}
                }
            })
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                error:err
            })
        })
})

module.exports = router