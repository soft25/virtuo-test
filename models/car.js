const mongoose = require('mongoose')

const carSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	name: { type: String, unique: true, min: 3, required: true },
	available: {type: Boolean, default: true}
})

module.exports = mongoose.model('Station', carSchema)