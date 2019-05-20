require('dotenv').config()
const express = require('express')
const app = express()
const msg_ctrl = require('./messagesCtrl')
const {SERVER_PORT} = process.env

app.use(express.json())

app.get('/api/messages', msg_ctrl.getAllMessages)
app.post('/api/messages', msg_ctrl.createMessage)

app.listen(SERVER_PORT, () => {
    console.log(`working on port ${SERVER_PORT}`)
})