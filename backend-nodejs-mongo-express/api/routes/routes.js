const express = require('express')
const router = express.Router()

//get route

router.get('/ninjas', (req,res, next)=>{
    res.status(200).json({
        type:'GET'
    })
})
router.post('/ninjas', (req,res, next)=>{
    res.status(201).json({
        type:'POST'
    })
})
router.put('/ninjas/:id', (req,res, next)=>{
    res.status(201).json({
        type:'PUT'
    })
})
router.delete('/ninjas:id', (req,res, next)=>{
    res.status(200).json({
        type:'DELETE'
    })
})

module.exports = router