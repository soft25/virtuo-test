const express   = require('express'),
	router = express.Router(),
	create = require('../routes/cars/actions/create'),
	get = require('../routes/cars/getters/get')

router.post('/create', create)
router.get('/get/:carId', get)


module.exports = router