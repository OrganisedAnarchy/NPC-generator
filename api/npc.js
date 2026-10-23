const express = require('express')
const router = express.Router()

router.post('/npc', (req, res) => {
    res.send('NPC created successfully')
}) 

router.get('/npc', (req, res) => {
    res.send('List of NPCs')
})

router.get('/npc/:id', (req, res) => {
    const npcId = req.params.id;
    res.send(`NPC with ID: ${npcId}`);
});

/*router.get('/npc/:id', (req, res) => {
  const npcId = req.params.id;
  res.send(`NPC with ID: ${npcId}`);
})*/

module.exports = router