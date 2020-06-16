import io from 'socket.io-client'
const socket = io('http://localhost:1337')
let token = localStorage.getItem('token')
import store from '../../store/index'
export const  now = () => {
    socket.emit('now',{msg:'正在输入..',token})
}

export const line = () => {
    socket.emit('line',{msg:'在线',token})
}

export const emitContent = (value) => {
    socket.emit('UseremitContent',{value,token})
} 



socket.on('hehe',data => {
  store.commit('chat/ADD_CHAT',data)
}) 



