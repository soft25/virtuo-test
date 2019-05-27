const Car = require('../../../models/car')
const mongoose = require('mongoose')

const create = (req, res, next) => {
	const _name = req.body.name
    
	if(!_name)
		throw new Error('Wrong arguments!!')
    
	let car = new Car({
		name: _name
	})

	car.save().then((result) => {
		res.status(201).json({
			message: 'car created successfully'
		})
	}).catch((err) => {
		res.status(500).json({
			error: err
		})
	})
}

module.exports = create