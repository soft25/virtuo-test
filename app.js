require('dotenv').config()

const express   = require('express'),
	bodyParser  = require('body-parser'),
	mongoose    = require('mongoose'),
	car     = require('./routers/car'),
	station     = require('./routers/station'),
	helmet      = require('helmet'),
	morgan = require('morgan')

const init = () => {
	var app = express()
	app.set('view engine', 'ejs')

	const uri = process.env.DB_TYPE +'://'+ process.env.DB_HOST+'/'+ process.env.DB_TABLE
	mongoose.Promise = global.Promise
	mongoose.connect(uri, (err, infos) => {
		if (!!err)
			console.log(err)
	})

	app.use(morgan('combined'))
	app.use(bodyParser.urlencoded({ extended: false }))
	app.use(bodyParser.json())
	app.use(helmet()) // for security

	app.use('/car', car)
	app.use('/station', station)
	
	return app
}
module.exports = init