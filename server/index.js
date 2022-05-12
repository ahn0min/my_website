const express = require('express');
const app = express();
const PORT_NUMBER = 4040;


// Routers
const { postRouter } = require("./api/index.js")

// router로 위임
app.use('/posts', postRouter)


// root 경로
app.get('/', (req, res) => {
  res.send('hello server')
})

app.listen(PORT_NUMBER, () => console.log(4040))

