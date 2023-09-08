const express = require('express')

const app = express()
const router = require('./routes')
const log = require('./middlewares/logger')

app.use(router)
app.use(log)


app.listen(3000, () => console.log('server: http://localhost:3000'))