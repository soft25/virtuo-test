const Car = require('../../../models/car')
const Station = require('../../../models/station')

// delete a car with a given carId and remove also this car from a station

const removeCar = (req, res, next) => {
	const _carId = req.params.carId

	Car.findByIdAndRemove(_carId).then((result) => {
		if(!result)
			throw new Error('No car found!!')

		return Station.update({}, {$pull: {car: _carId}})
	}).then((resultUpdate) => {
		res.status(200).json({
			message: 'car deleted'
		})
	}).catch((err) => {
		res.status(500).json({
			error: err
		})
	})
}

module.exports = removeCar