const express   = require('express'),
	router = express.Router(),
	create = require('../routes/stations/actions/create'),
	get = require('../routes/stations/getters/get')

router.get('/get', get)
router.post('/create', create)

module.exports = router