import axios from 'axios'

class MessageService {
    constructor() {
        let service = axios.create({
            baseURL: 'https://prueba-mark-back.herokuapp.com/',
            // baseURL: 'http://localhost:3000/message'
        })
        this.service = service
    }

    sendMessage = (message, toUserId, fromUserId) => {
        console.log(message + ' toUser: ' + toUserId)
        return this.service.post(`/${toUserId}/create`, {message, fromUserId})
        .then(response => response.data)
    }
    getAllMessages = (toUserId, fromUserId) => {
        return this.service.post(`/${toUserId}`, {fromUserId})
        .then(response => response.data)
    }
}

export default MessageService