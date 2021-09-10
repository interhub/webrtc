// server.js
const {ExpressPeerServer} = require('peer')
const express = require('express')
const cors = require('cors')
// const {v4: uuidv4} = require('uuid')
const app = express()
const httpServer = require('http').createServer(app)
const io = require('socket.io')(httpServer, {})

const peerServer = ExpressPeerServer(httpServer)
app.use('/peerjs', peerServer)
app.use(cors())
app.use(express.static('public'))

io.on('connection', (socket) => {
    console.log('user connected', socket.id)
    socket.on('login', (peerId) => {
        console.log('logged peerId', peerId)
        socket.broadcast.emit('new_user', peerId)
    })
})

const PORT = process.env.PORT || 3001

httpServer.listen(PORT, () => {
    console.log('server start on PORT', PORT)
})
