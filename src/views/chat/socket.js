import io from 'socket.io-client'
const socket = io('http://localhost:1337')
let id = localStorage.getItem('userId')

import store from '../../store/index'
export const  now = () => {
    socket.emit('now',{msg:'正在输入..',id})
}

export const line = () => {
    socket.emit('line',{msg:'在线',id})
}

export const emitContent = (value) => {
    socket.emit('UseremitContent',{value,id})
} 

socket.on('hehe',data => {
  store.commit('chat/ADD_CHAT',data)
}) 


// 管理员列表
socket.on('adminlist',data => {
    console.log(data);
    
    store.commit('chat/ADMIN_LISt',data)
})


