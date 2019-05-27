const request = require('supertest')
const mongoose = require('mongoose')

const initApp = require('../app.js')
const app = initApp()

const stationId = "5cec30c592e7c465052df313"

describe('Station /station', function(){
	
	describe('GET /get/:stationId', function() {
		it('should return station details', function(done) {
			request(app)
			.get('/station/get/' + stationId)
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200, done)
		})
	})

})
