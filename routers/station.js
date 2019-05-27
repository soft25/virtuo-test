const express   = require('express'),
	router = express.Router(),
	create = require('../routes/stations/actions/create'),
	get = require('../routes/stations/getters/get')

router.post('/create', create)
router.get('/get/:stationId', get)

module.exports = router