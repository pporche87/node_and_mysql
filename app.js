const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const faker = require('faker')
const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'join_us'
})

app.post('/register', (req, res) => {
	let person = {
		email: req.body.email
	}
	connection.query('INSERT INTO users SET ?', person, function(error, results) {
		if(error) throw error
		res.redirect('/')
	})
})

app.get('/', (req, res) => {
	let q = 'SELECT COUNT(*) AS count FROM users'
	connection.query(q, function(error, results) {
		if(error) throw error
		let count = results[0].count
		res.render('home', {count})
	})
})

const port = 3000

app.listen(port, () => {
	console.log('Server running on PORT:', port)
})
