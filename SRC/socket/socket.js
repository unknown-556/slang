import {Server} from 'socket.io'
import express from 'express'
import http from 'http'
import Message from '../models/messageModel.js'
import Conversation from '../models/conversationModel.js'

const app = express()
const server = http.createServer(app)
const io = new Server(server,{
    cors: {
        origin: 'http://localhost:2332',
        methods: ['GET', 'POST']
    }
})

const recipientId = ({

})

io.on =('connection',(socket) => {
    console.log('connected successfully');
    const userId = socket.handShake.query.user._id
}) 