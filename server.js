var initApp = require('./app.js')
var app = initApp(app)

const port = 5002

app.listen(port, () => console.log('Server running!!'))