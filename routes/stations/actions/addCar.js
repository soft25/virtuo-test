const Station = require('../../../models/station')
const Car = require('../../../models/car')
const mongoose = require('mongoose')

const addCar = (req, res, next) => {
	const _carId = req.body.carId
	const _stationId = req.body.stationId

	Car.findById(_carId).then((car) => {
		if(!car)
			return res.status(404).json({
				message: 'Car not found!!'
			})
        
		return Station.update({_id: _stationId}, {$push: {car: _carId}})
	}).then((result) => {
		res.status(200).json({success: true})
	}).catch((err) => {
		res.status(500).json({
			error: err
		})
	})
}

module.exports = addCar