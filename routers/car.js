const express   = require('express'),
	router = express.Router(),
	create = require('../routes/cars/actions/create'),
	get = require('../routes/cars/getters/get'),
	removeCar = require('../routes/cars/actions/removeCar')

router.post('/create', create)
router.get('/get/:carId', get)

router.delete('/remove/:carId', removeCar)

module.exports = router