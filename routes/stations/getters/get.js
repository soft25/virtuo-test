const Station = require('../../../models/station')

const get = (req, res, next) => {
	const _id = req.params.stationId

	Station.findById(_id).populate('car').then((station) => {
		if(!station)
			return res.status(404).json({
				message: 'Station not found!!'
			})
        
		res.status(200).json(station)
	}).catch((err) => {
		res.status(500).json({
			error: err
		})
	})
}

module.exports = get