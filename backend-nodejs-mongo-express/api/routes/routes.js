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
                    response: {
                        type: "GET",
                        url: 'http://localhost:3000/api/ninjas/' + result._id
                    }
                }
            })
        }).catch(err=>{
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
})
router.put('/ninjas/:id', (req,res, next)=>{
    res.status(201).json({
        type:'PUT'
    })
})
router.delete('/ninjas:id', (req,res, next)=>{
    res.status(201).json({
        type:'DELETE'
    })
})

module.exports = router