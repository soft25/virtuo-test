const express   = require('express'),
	router = express.Router(),
	{ check } = require('express-validator/check'),

	create = require('../routes/stations/actions/create'),
	addCar = require('../routes/stations/actions/addCar'),
	get = require('../routes/stations/getters/get'),

	treatValidationResult = require('../middleware/treatValidationResult')

router.post('/create', create)
router.post('/addCar', [check('carId').exists(), check('stationId').exists()], treatValidationResult, addCar)

router.get('/get/:stationId', get)

module.exports = router