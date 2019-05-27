const express   = require('express'),
	router = express.Router(),
	create = require('../routes/stations/actions/create'),
	addCar = require('../routes/stations/actions/addCar'),
	get = require('../routes/stations/getters/get')

router.post('/create', create)
router.post('/addCar', addCar)

router.get('/get/:stationId', get)

module.exports = router