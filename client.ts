import Peer from 'peerjs'
import 'regenerator-runtime/runtime'
import {io} from 'socket.io-client'

const socket = io(location.origin, {
    // transports: ['websocket'],
})

socket.on('connect', () => {
    console.log('connect socket')
})

const peer = new Peer()

let ready_stream: any

const body = document.querySelector('body')

const width = 200
const height = 150

let remoteUserPeerId = ''

//add new video item stream (self or remote)
const setUpVideoStream = (stream: MediaStream) => {
    const video = document.createElement('video')
    video.width = width
    video.height = height
    body.appendChild(video)
    video.srcObject = stream
    video.play()
}

//new user handler
const setUpNewUserHandler = () => {
    socket.on('new_user', (peerId: string) => {
        remoteUserPeerId = peerId
        console.log(peerId, 'new_user', 'my stream=', ready_stream)
        const call = peer.call(peerId, ready_stream)
        call.on('stream', function (remoteStream: MediaStream) {
            // Show stream in some video/canvas element.
            console.log(remoteStream, 'remoteStream 1')
            setUpVideoStream(remoteStream)
        })
    })
}
setUpNewUserHandler()

//call if need connect to other
const emitLoginMe = () => {
    socket.emit('login', peer.id)
    console.log('peer.id login emitted', peer.id)
}

const setUpLoginButton = () => {
    const btn = document.createElement('button')
    btn.innerText = 'Login'
    btn.onclick = () => {
        emitLoginMe()
    }
    body.appendChild(btn)
}

setUpLoginButton()

const startApp = async () => {

    const getMediaStream = async (): Promise<MediaStream> => {
        return new Promise((ok) => {
            //@ts-ignore
            const getUserMedia = navigator?.getUserMedia || navigator?.mediaDevices?.getUserMedia || navigator?.getUserMedia || navigator?.webkitGetUserMedia || navigator?.mozGetUserMedia || navigator?.msGetUserMedia
            getUserMedia({video: true, audio: false}, function (stream: MediaStream) {
                ok(stream)
            })
        })
    }


    getMediaStream().then((stream) => {
        ready_stream = stream
        setUpVideoStream(stream)
    })

    peer.on('call', function (call) {
        call.answer(ready_stream) // Answer the call with an A/V stream.
        call.on('stream', function (remoteStream) {
            console.log(remoteStream, 'remoteStream 2')
            setUpVideoStream(remoteStream)
        })
    })
}

startApp()
