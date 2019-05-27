const express   = require('express'),
	router = express.Router(),
	get= require('../routes/get'),
	create = require('../routes/create')

router.post('/create', create)
router.get('/get/:carId', get)


module.exports = router