const mongoose = require('mongoose'),
	Schema = mongoose.Schema

const stationSchema = mongoose.Schema({
	name: { type: String, unique: true, min: 3, required: true },	
	car: [{ type: Schema.Types.ObjectId, ref: 'Car'}]

})

module.exports = mongoose.model('Station', stationSchema)