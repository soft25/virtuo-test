const Station = require('../../../models/station')
const mongoose = require('mongoose')

const create = (req, res, next) => {
	const _name = req.body.name
    
	if(!_name)
		throw new Error('Wrong arguments!!')
    
	let station = new Station({
		name: _name,
	})

	station.save().then((result) => {
		res.status(201).json({
			message: 'station created successfully'
		})
	}).catch((err) => {
		res.status(500).json({
			error: err
		})
	})
}

module.exports = create