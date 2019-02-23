const express = require('express')
const app = express()
const path = require('path')
//port
const port = process.env.PORT || 4000

//static folder
app.use(express.static('build'))

app.get('*', (req, res) =>
	res.sendFile(path.join(__dirname, '/build/index.html'))
)

//listen
app.listen(port, () => {
	console.log('Server is running on port ' + port)
})
