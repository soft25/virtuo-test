const Car = require('../../../models/car')

const get = (req, res, next) => {
	const _id = req.params.carId

	Car.findById(_id).lean().then((car) => {
		if(!car)
			return res.status(404).json({
				message: 'Car not found!!'
			})
        
		res.status(200).json(car)
	}).catch((err) => {
		res.status(500).json({
			error: err
		})
	})
}

module.exports = get