const mongoose = require('mongoose')

const carSchema = mongoose.Schema({
	name: { type: String, unique: true, minlength: 3, required: true },
	available: {type: Boolean, default: true}
})

module.exports = mongoose.model('Car', carSchema)