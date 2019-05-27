const mongoose = require('mongoose')

const stationSchema = mongoose.Schema({
	name: { type: String, unique: true, min: 3, required: true },
	car: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Car'}]
})

module.exports = mongoose.model('Station', stationSchema)