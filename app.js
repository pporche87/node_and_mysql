const faker = require('faker')
const mysql = require('mysql')

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'join_us'
})

connection.connect()

// SELECTING DATA
// let q = 'SELECT COUNT(*) AS total FROM users'
//
// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results[0].total)
// })

// INSERTING DATA
// let q = 'INSERT INTO users (email) VALUES ("rusty_the_dog@gmail.com")'
//
// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results)
// })

// INSERTING DATA TAKE 2
// let person = {
// 	email: faker.internet.email(),
// 	created_at: faker.date.past()
// }

// INSERTING LOTS OF DATA
const data = []
for (let i = 0; i < 500; i++) {
	data.push([
		faker.internet.email(),
		faker.date.past()
	])
}

let q = 'INSERT INTO users (email, created_at) VALUES ?'

connection.query(q, [data], function (error, results, fields) {
  if (error) throw error;
  console.log(results)
})

connection.end()

// console.log(faker.internet.email())
// console.log(faker.date.past())
