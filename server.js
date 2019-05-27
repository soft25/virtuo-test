require('dotenv').config()

const express   = require('express'),
	bodyParser  = require('body-parser'),
	mongoose    = require('mongoose'),
	car     = require('./routers/car'),
	station     = require('./routers/station'),
	app = express()

app.set('view engine', 'ejs')

const uri = process.env.DB_TYPE +'://'+ process.env.DB_HOST+'/'+ process.env.DB_TABLE
mongoose.Promise = global.Promise
mongoose.connect(uri, (err, infos) => {
	if (!!err)
		console.log(err)
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/car', car)
app.use('/station', station)

const port = 3000

app.listen(port, () => console.log('Server running!!'))