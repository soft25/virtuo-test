const express   = require('express'),
	router = express.Router(),
	getAll = require('../routes/get'),
	add = require('../routes/add')

router.get('/get', getAll)
router.post('/add', add)

module.exports = router