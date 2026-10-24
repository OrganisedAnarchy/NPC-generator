const mysql = require('mysql');
const connection = require('../database_connection').connection;

const createNPC = async (npcData) => {
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO npcs (name, description, job, species, race, class, is_friendly, merchant, sells_unique_items, backstory, family_members, age, gender, secret_knowledge) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [
      npcData.name,
      npcData.description,
      npcData.job,
      npcData.species,
      npcData.race,
      npcData.class,
      npcData.is_friendly,
      npcData.merchant,
      npcData.sells_unique_items,
      npcData.backstory,
      npcData.family_members,
      npcData.age,
      npcData.gender,
      npcData.secret_knowledge
    ];
    connection.query(query, values, (err, result) => {
      if (err) {
        console.error('Error creating NPC:', err);
        reject(err);
      } else {
        console.log('NPC created successfully');
        resolve(result);
      }
    });
  });
};

const getAllNPCs = async () => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM npcs';
    connection.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching NPCs:', err);
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const getNPCById = async (id) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM npcs WHERE id = ?';
        connection.query(query, [id], (err, results) => {
            if (err) {
                console.error('Error fetching NPC by ID:', err);
                reject(err);
            } else {
                resolve(results[0]);
            } 
         });
    });
};