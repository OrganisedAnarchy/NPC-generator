let mysql = require('mysql');
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: process.env.DB_Port
});

async function setupDatabase() {
  await new Promise((resolve, reject) => {
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
  
  await connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`, function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });

  await connection.query(`USE ${process.env.DB_NAME}`, function (err, result) {
    if (err) throw err;
    console.log(`Using database ${process.env.DB_NAME}`);
  });

  await connection.query(`CREATE TABLE IF NOT EXISTS npcs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    job VARCHAR(255),
    species VARCHAR(255),
    race VARCHAR(255),
    class VARCHAR(255),
    is_friendly BOOLEAN DEFAULT true,
    merchant BOOLEAN DEFAULT false,
    sells_unique_items BOOLEAN DEFAULT false,
    backstory TEXT,
    family_members TEXT,
    age INT,
    gender VARCHAR(50),
    secret_knowledge TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });

  await connection.end(function(err) {
    if (err) throw err;
    console.log("Connection closed");
  });
}

setupDatabase();