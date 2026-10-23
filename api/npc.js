const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    res.send('NPC created successfully')
}) 

router.get('/', (req, res) => {
    res.send('List of NPCs')
})

router.get('/:id', (req, res) => {
    const npcId = req.params.id;
    res.send(`NPC with ID: ${npcId}`);
});

/*router.get('/:id', (req, res) => {
  const npcId = req.params.id;
  res.send(`NPC with ID: ${npcId}`);
})*/

module.exports = router;