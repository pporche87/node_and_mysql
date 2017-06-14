const faker = require('faker')
const mysql = require('mysql')

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'join_us'
})

connection.connect()

const earliestDate = 'SELECT DATE_FORMAT(created_at, "%M %D %Y") AS earliest_date FROM users ORDER BY created_at LIMIT 1'

connection.query(earliestDate, function (error, results, fields) {
	if (error) throw error
	console.log(results)
})

const earliestDate = '(SELECT email AS earliest_date FROM users) = (SELECT created_at FROM users ORDER BY created_at LIMIT 1)'

connection.query(earliestDate, function (error, results, fields) {
	if (error) throw error
	console.log(results)
})

connection.end()
