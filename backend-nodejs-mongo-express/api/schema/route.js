const mongoose = require('mongoose')

const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates = {
        type: [Number],
        index: '2dsphere'
    }
})

const ninjaSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    }, 
    rank: {
        type: String
    },
    available: {
        type:Boolean,
        default: false
    },
    geometry: GeoSchema 
    
});
module.exports = mongoose.model('Ninja', ninjaSchema)