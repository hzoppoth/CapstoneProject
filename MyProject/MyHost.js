const express = require('express');
const mysql = require('mysql2');

const app = express();

// Create MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'LiquidDeath95!!',
  database: 'appdatabase'
});

// Connect to MySQL
connection.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL database: ', error);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Define API endpoint
app.get('/trails', (req, res) => {
  const query = 'SELECT * FROM trails';
  connection.query(query, (error, results) => {

    if (error) {
      console.error('Error executing query: ', error);
      res.status(500).send('Error executing query');
    } else {
      console.log('Query results: ', results);
      res.json(results);
    }
  });
});

// Start server
const port = 3000;
app.listen(port, () => {
  console.log('API server listening on port ' + port);
});

