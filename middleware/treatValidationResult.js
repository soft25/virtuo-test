const { validationResult } = require('express-validator/check')

const treatValidationResult = (req, res, next) => {
	const errors = validationResult(req)
    
	if(!errors.isEmpty()) {
		return res.status(400).json({errors: errors.array()[0]})
	} else {
		next()
	}
}

module.exports = treatValidationResult