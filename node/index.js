const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const mysql = require('mysql')
const connection = mysql.createConnection(config)
connection.query(`create table people(id int not null auto_increment, name varchar(255), primary key(id))`)
connection.query(`INSERT INTO people(name) values ('John Doe')`)
connection.end()

app.get('/', async (req, res) => {
    const connection = mysql.createConnection(config)
    const sql = `SELECT * FROM people`;

    const records = [];

    await new Promise((resolve, reject) => {
        connection.query(sql, (error, results, fields) => {
            if (error) {
                reject(error)
            }

            resolve(
                records.push(...results)
            )
        });
        connection.end()
    })

    htmlResponse = `<h1>Full Cycle Rocks!</h1><br><h3>Listagem de pessoas:</h3>`

    if (records) {
        htmlResponse += `<ul>`

        records.forEach(record => {
            htmlResponse += `<li>${record.name}</li>`
        });

        htmlResponse += `</ul>`
    }

    res.send(htmlResponse)
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})