const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: process.env.DB_Port
});

async function connectToDatabase() {
    return new Promise((resolve, reject) => {
        connection.connect((err) => {
            if (err) {
                console.error('Error connecting to the database:', err);
                reject(err);
            } else {
                console.log('Connected to the database');
                resolve(connection);
            }
        });
    });
}

module.exports = {
    connectToDatabase: connectToDatabase,
    connection: connection
};