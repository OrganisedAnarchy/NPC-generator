const express = require('express');
const app = express()
const npc = require('./api/npc.js')
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index')
})

const npcRoutes = require('./api/npc.js');
app.use('/api/npc', npcRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})