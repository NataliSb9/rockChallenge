const mongoose= require("mongoose")

const BandSchema = new mongoose.Schema({
    name: String,
    yearBeginning: Number,
    description: String,
    video: String,
    foto: String
})

module.exports = mongoose.model('Band', BandSchema,'band')
